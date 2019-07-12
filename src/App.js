import React from 'react';
import SearchBox from"./components/SearchBox";
import Error from"./components/Error";
import Title from"./components/Title";
import ResultTable from"./components/ResultTable";
import AroundMe from "./components/AroundMe";
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";
const googleKey= "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBUU2lMUxhERixvV19bfd-yJyefPQckUJQ";

// TODO make error handling
class App extends React.Component {

// const geolocation=;
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
    const country= data.countryvalue;

    const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApi_key}&units=Metric`;
    const weatherURL1=`http://apiopenweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi_key}&units=Metric`;

    if(city&&country){
     fetch(weatherURL).then(res=>{
      if(res.ok){
        return res.json();

      }else{
        // throw Error("Error retrieving weather data");
        this.setState({error: "Error retrieving weather data"});
      }
    }).then(weatherRes=>{
      console.log(weatherRes)
      this.setState({weather:weatherRes})
      this.setState({error: ""});
      this.updateStateFromWeather();
    }).catch(error=>{
      this.setState({error: error.message})
    })
  }else if(city && !country){
     fetch(weatherURL1).then(res=>{
      if(res.ok){
        return res.json();
      }else{
        // throw Error("Error retrieving weather data");
        this.setState({error: "Error retrieving weather data"});
      }
    }).then(weatherRes=>{
      console.log(weatherRes)
      this.setState({weather:weatherRes})
      this.setState({error: ""});
      this.updateStateFromWeather();
    }).catch(error=>{
      this.setState({error: error.message})
    })
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

  getGeoLoc(){}





 render(){
   return(
     <div>
     <Title/>
     <div className="searchBoxDiv">
     <SearchBox getWeather={this.getWeather}/>
     {this.state.city ? null : <AroundMe/>}
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
