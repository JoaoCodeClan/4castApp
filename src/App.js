import React from 'react';
import './App.css';


const weatherApi_key="d1169d1918f632fcc4c5ca02b739acf9";
const googleKey= "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBUU2lMUxhERixvV19bfd-yJyefPQckUJQ";


class App extends React.Component {
const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApi_key}&units=Metric`;

const geolocation=;
state={
  city: null,
  country: null,
  weather: null,
  geolocation:null,
  isLoading:false,
  error:null
}

getWeather(){



}
getGeoLoc(){}
createResultTable(){}

 render(){
   return(
     <div>
     <h1> HI this is a test</h1>

     </div>


   );

 }





}

export default App;
