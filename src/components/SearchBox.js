import React from "react";


class SearchBox extends React.Component{
  // constructor(props) {
  //
  //   super(props);
  //   this.state = {
  //     city:undefined,
  //     country:undefined,
  //     geoLoc:null
  //   }
  //   this.handleCityInput = this.handleCityInput.bind(this);
  //   this.handleCountryInput = this.handleCountryInput.bind(this);
  // }
  //
  // handleCityInput(e){
  //
  //   console.log(e.target.value);
  //   this.setState({city: e.target.value});
  //   console.log(this.state.city);
  // }
  // handleCountryInput(e){
  //   this.setState({country: e.target.elements.country.value});
  //   console.log(this.state.country)
  // }

  render(){
    return(<div>
      <h1>4Cast</h1>
       <form onSubmit={this.props.getWeather} >
         <input type="text" name="city" placeholder="City" />
         <input type="text" name="country" placeholder="Country"/>
         <button id="submit">Search</button>
         <button id="submit" >Around me</button>
       </form>
       </div>
       )





  }





}






export default SearchBox;
