import React, { useState } from "react";
import './Weather.css';

export default function Ftemp(props) {
    let [unit, setUnit] = useState("celsius");

    function showF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showC(event) {
        event.preventDefault();
        setUnit("celsius");
    }
// <li className='real-temp'>RealFeel: {Math.round(props.data.realtemp)}°C</li>
    if (unit === "celsius") {
        return (
            <div>
                <ul>
                    <li><span className='temp'>{Math.round(props.celsius)}</span>{" "} 
                    <span className="unit">°C | 
                    <a href="/" onClick={showF}>{" "}°F</a></span></li>
                    <li className='real-temp'>RealFeel: {" "}
                    {Math.round(props.realcelsius)}°C</li>
                </ul>
           </div>
            )
    } else {
        let fahrenheit = (props.celsius*9)/5+32;
        let fahrenheitReal = (props.realcelsius*9)/5+32;
        return (
            <div>
                <ul>
                    <li><span className='temp'>{Math.round(fahrenheit)}</span>{" "}
                    <span className="unit">
                    <a href="/" onClick={showC}>°C</a> | °F</span></li>
                    <li className='real-temp'>RealFeel: {" "} 
                    {Math.round(fahrenheitReal)}°C</li>
                </ul>
           </div>
            )
    }
   
}