import React from "react";
import FormattedDate from "./FormattedDate";
import Ftemp from "./Ftemp";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
             <div className='main-section'>
                <div className='row'>
                <div className='col-2 img-weather'>
                    <img src={props.data.icon} alt='weather icon'></img>
                </div>
                <div className='col-3 temp-section'>
                    <Ftemp celsius={props.data.temp} realcelsius={props.data.realtemp} />
                </div>
                <div className='col-7 city-info'>
                <h1>{props.data.city}</h1>
                <div className="date-weather"><FormattedDate date={props.data.date} /></div>
                </div>
                </div>
                <div className="details">
                <h4 className='text-capitalize'>{props.data.descr}</h4>
                <ul className='detail-item'>
                <li>Wind: {Math.round(props.data.wind)} km/h</li>
                <li>Humidity: {props.data.hum}%</li>
                </ul>
                </div>
             </div>

        </div>
    )
}

// 
