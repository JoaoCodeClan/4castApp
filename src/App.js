import React from 'react';
import SearchBox from"./components/SearchBox";
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";
const googleKey= "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBUU2lMUxhERixvV19bfd-yJyefPQckUJQ";


class App extends React.Component {

// const geolocation=;
state={
  weather: null,
  geolocation:null,
  isLoading:false,
  error:null
}

  getWeather=async(e)=>{

    e.preventDefault();

    const city=e.target.elements.city.value;

    const country=e.target.elements.country.value;

    const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApi_key}&units=Metric`;


    fetch(weatherURL).then(res=>{
      if(res.ok){
        return res.json();
      }else{
        throw Error("Error retrieving weather data");
      }
    }).then(weatherRes=>{
      console.log(weatherRes)
      this.setState({weather:weatherRes})
    })
  }

  getGeoLoc(){}
  createResultTable(){}




 render(){
   return(
     <div>
     <SearchBox getWeather={this.getWeather} />


     </div>


   );

 }





}

export default App;
