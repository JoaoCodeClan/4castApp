import React from 'react';
import Unsplash from 'unsplash-js';
import SearchBox from"./components/SearchBox";
import Error from"./components/Error";
import Title from"./components/Title";
import ResultTable from"./components/ResultTable";
import AroundMe from "./components/AroundMe";
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";
const unsplash = new Unsplash({
  applicationId: "b8310c0bc53aa73155119b6b7a42b43ff912eca5967e16c0568ea14fee4d815c",
  secret: "be121636c19b571fbc749d269dd95dcbc5758272b71a6900d74e029fb80acbab"
});



class App extends React.Component {

state={
  city: undefined,
  country: undefined,
  forecast: undefined,
  description: undefined,
  temperature: undefined,
  humidity: undefined,
  weather: null,
  geolocation:null,
  style: null,
  error:undefined
}

  getWeather=async(data)=>{
    this.setState({error: ""});
    const city= data.cityValue;

    const country= data.countryValue;

    const serverURL= `/weather/${city}/${country}/${weatherApi_key}`;
    const serverURL1= `/weather/${city}/${weatherApi_key}`;


if(city&&country){
  const weatherReq= await fetch(serverURL).then(res=>{
             if(res.ok){
               return res.json();
             }else{
               this.setState({error: "Error retrieving weather data"});
             }
           }).then(weatherRes=>{
             this.setState({weather:weatherRes})
             this.setState({error: ""});
             this.updateStateFromWeather();
             this.getRandomBackground();
           }).catch(error=>{
             this.setState({error: "Error collecting data: "+error.message})

           });
}else if(city && !country){
  const weatherReq= await fetch(serverURL1).then(res=>{
             if(res.ok){
                return res.json();
             }else{
               this.setState({error: "Error retrieving weather data"});
             }
           }).then(weatherRes=>{
             this.setState({weather:weatherRes})
             this.setState({error: ""});
             this.updateStateFromWeather();
             this.getRandomBackground();
           }).catch(error=>{
             this.setState({error: "Error collecting data: "+error.message})

           });
}else{
  this.setState({error: "Please enter a city"})
 }
}

updateStateFromWeather=()=>{
    const weatherjson= this.state.weather;

    const forecastAPI= weatherjson.weather[0].main;
    const descriptionAPI= weatherjson.weather[0].description;
    const tempAPI= weatherjson.main.temp;
    const humidityAPI= weatherjson.main.humidity;

  this.setState({
    forecast: forecastAPI,
    description: descriptionAPI,
    temperature: tempAPI,
    humidity:humidityAPI
    })
  }

getGeoLoc=(event)=>{
      // event.preventDefault();
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( function (position) {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

this.setState({geolocation:location });
this.getGeoWeather();
        }.bind(this), function() {
          alert('Not able to find your location');
        });
      }
      else{
        alert('You do not have geolocation available on your device');
      }

  }

updateCity=(cityName)=>{
  this.setState({city: cityName});
}

getGeoWeather=async()=>{
  const location=this.state.geolocation;

  const lat=location.lat ;

  const long=location.lng ;

 const latLongURL=`/weather/geo/${lat}/${long}/${weatherApi_key}`;

   const weatherReq= await fetch(latLongURL).then(res=>{
            if(res.ok){
               return res.json();

            }else{
              this.setState({error: "Error retrieving weather data"});
            }
          }).then(weatherRes=>{
            this.setState({weather:weatherRes})
            this.setState({error: ""});
            this.updateStateFromWeather();
            this.getRandomBackground();
          }).catch(error=>{
            this.setState({error: "Error collecting data: "+error.message})

          });
}



getRandomBackground=async()=>{
  const keyWord = `${this.state.forecast} weather`;
         unsplash.photos.getRandomPhoto({ query: keyWord })
           .then(res=>{
             if(res.ok){
               return res.json();
             }
           })
           .then(imageRes => {
             const url= imageRes.urls.regular;
             const style ={
               backgroundImage: `url(${url})`

             }
             this.setState({style: style})
           }).catch(error=>{
                  this.setState({error: "Error collecting data: "+error.message})

                });
}




 render(){



   return(
        <div>
        <div id="content-container" style ={this.state.style} >
            <div id="title-container">
               <Title/>
            </div>
            <div id="elements-container"  >
                <div id="searchBoxDiv">
                     <SearchBox getWeather={this.getWeather} updateCity={this.updateCity}/>
                </div>

                <div id="aroundMecontainer">
                     {this.state.city ? null : <AroundMe findLocation={this.getGeoLoc}/>}
                </div>

                <div id="Result-container">
                     { this.state.forecast ? <ResultTable forecast={this.state.forecast} description={this.state.description} temperature={this.state.temperature} humidity={this.state.humidity}/> : null }
                    <div id="error-container">
                      <Error error={this.state.error}/>
                    </div>
                </div>
            </div>

        </div>




        </div>







   );
 }





}

export default App;
