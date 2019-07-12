import React from 'react';
import SearchBox from"./components/SearchBox";
import Error from"./components/Error";
import Title from"./components/Title";
import ResultTable from"./components/ResultTable";
import AroundMe from "./components/AroundMe";
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";


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
  isLoading:false,
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
           }).catch(error=>{
             this.setState({error: error.message})
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
           }).catch(error=>{
             this.setState({error: error.message})
           });
}else{
  this.setState({error: "Please enter a city"})
 }
}

updateStateFromWeather(){
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
      event.preventDefault();
      console.log(event)

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(location);

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



 render(){

   return(
     <div>
     <Title/>
     <div className="searchBoxDiv">
     <SearchBox getWeather={this.getWeather} updateCity={this.updateCity}/>
     {this.state.city ? null : <AroundMe findLocation={this.getGeoLoc}/>}
     </div>

     <div className="Result&ErrorDiv">
     { this.state.forecast ? <ResultTable forecast={this.state.forecast} description={this.state.description} temperature={this.state.temperature} humidity={this.state.humidity}/> : null }
     <Error error={this.state.error}/>
     </div>



     </div>


   );

 }





}

export default App;
