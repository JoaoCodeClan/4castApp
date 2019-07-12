import React from "react";

class SearchBox extends React.Component {
constructor(props){
  super(props)
  this.state={
    cityValue: "" ,
    countryValue: ""
  }
}
changeCityValue=(event)=>{
  this.setState({cityValue: event.target.value })
  console.log("city from box"+event.target.value)
}

changeCountryValue=(event)=>{
  this.setState({countryValue: event.target.value })
  console.log("country from box"+event.target.value)
}

handleSubmit =(event)=>{
  event.preventDefault();
  const data= this.state;
  console.log(data)
  console.log(this.state)
  this.props.getWeather(data);


}

render(props){
    return(
      <form onSubmit={this.handleSubmit} >
      <input type="text" name="city" value={this.state.cityValue} onChange={this.changeCityValue} />
      <input type="text" name="country" value= {this.state.countryValue} onChange={this.changeCountryValue}/>
      <button id="submit">Search</button>
    </form>
    )
  }
}

export default SearchBox;
