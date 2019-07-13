import React from "react";
import '../App.css';


const ResultTable= (props)=>(

  <table>
    <tbody>
        <tr>
            <td className="table-headings">Forecast</td>
            <td>{props.forecast}</td>
        </tr>
        <tr>
            <td className="table-headings">Description </td>
            <td>{props.description}</td>
        </tr>
        <tr>
            <td className="table-headings">Temperature</td>
            <td>{props.temperature}</td>
        </tr>
        <tr>
            <td className="table-headings">Humidity</td>
            <td>{props.humidity}</td>
        </tr>
    </tbody>
  </table>

);

export default ResultTable;
