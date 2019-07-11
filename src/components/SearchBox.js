import React from "react";


const SearchBox =(props)=>{

    return(
       <form onSubmit={props.getWeather} >
         <input type="text" name="city" placeholder="City" />
         <input type="text" name="country" placeholder="Country"/>
         <button id="submit">Search</button>
         <button id="submit" >Around me</button>
       </form>

       )
  }











export default SearchBox;
