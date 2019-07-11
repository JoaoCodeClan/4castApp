import React from "react";


const SearchBox =(props)=>(
       <form onSubmit={props.getWeather} >
         <input type="text" name="city" placeholder="City" />
         <input type="text" name="country" placeholder="Country"/>
         <button id="submit">Search</button>
       </form>

       )












export default SearchBox;
