import React from 'react';
import SearchBox from"./components/SearchBox";
import Error from"./components/Error";
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";
const googleKey= "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBUU2lMUxhERixvV19bfd-yJyefPQckUJQ";

// TODO make error handling
class App extends React.Component {

// const geolocation=;
state={
  weather: null,
  geolocation:null,
  isLoading:false,
  error:undefined
}

  getWeather=async(e)=>{
    this.setState({error: ""});
    e.preventDefault();

    const city=e.target.elements.city.value;

    const country=e.target.elements.country.value;

    const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApi_key}&units=Metric`;
    const weatherURL1=`http://apiopenweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi_key}&units=Metric`;

    if(city&&country){
    fetch(weatherURL).then(res=>{
      if(res.ok){
        return res.json();

      }else{
        throw Error("Error retrieving weather data");
        // this.setState({error: "Error retrieving weather data"});
      }
    }).then(weatherRes=>{
      console.log(weatherRes)
      this.setState({weather:weatherRes})
      this.setState({error: ""});
    }).catch(error=>{
      this.setState({error: error.message})
    })
  }else if(city && !country){
    fetch(weatherURL1).then(res=>{
      if(res.ok){
        return res.json();
      }else{
        throw Error("Error retrieving weather data");
        // this.setState({error: "Error retrieving weather data"});
      }
    }).then(weatherRes=>{
      console.log(weatherRes)
      this.setState({weather:weatherRes})
      this.setState({error: ""});
    }).catch(error=>{
      this.setState({error: error.message})
    })
  }else{
    this.setState({error: "Please enter a city"})


  }




  }

  getGeoLoc(){}
  createResultTable(){}




 render(){
   return(
     <div>
     <SearchBox getWeather={this.getWeather} />
     <Error error={this.state.error}/>


     </div>


   );

 }





}

export default App;
