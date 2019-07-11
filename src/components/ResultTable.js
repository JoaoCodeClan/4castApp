import React from "react";


const ResultTable= (props)=>(
  
  <table>
    <tbody>
        <tr>
            <td>Forecast</td>
            <td>{props.forecast}</td>
        </tr>
        <tr>
            <td>Description </td>
            <td>{props.description}</td>
        </tr>
        <tr>
            <td>Temperature</td>
            <td>{props.temperature}</td>
        </tr>
        <tr>
            <td>Humidity</td>
            <td>{props.humidity}</td>
        </tr>
    </tbody>
  </table>

);

export default ResultTable;
