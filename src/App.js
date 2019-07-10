import React from 'react';
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";
const googleKey= "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBUU2lMUxhERixvV19bfd-yJyefPQckUJQ";


class App extends React.Component {

// const geolocation=;
state={
  city: null,
  country: null,
  weather: null,
  geolocation:null,
  isLoading:false,
  error:null
}

getWeather(){


const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${weatherApi_key}&units=Metric`;
fetch(weatherURL).then(res=>{
  if(res.ok){
    return res.json();
  }else{
    throw Error("Error retrieving weather data");
  }
}).then(weatherRes=>{
  this.setState({weather:weatherRes})
})

}
getGeoLoc(){}
createResultTable(){}

 render(){
   return(
     <div>
      <form >
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>
        <button id="submit" >Get Events</button>
      </form>

     </div>


   );

 }





}

export default App;
