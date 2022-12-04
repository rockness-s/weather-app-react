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
                <p><FormattedDate date={props.data.date} /></p>
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
             <div className='forecast-section'>
                <div className='row icons'>
                <div className='col-2'></div>
                <div className='col-3'></div>
                <div className='col-2'>🌡️</div>
                <div className='col-3'>💨</div>
                <div className='col-2'>💧</div>
                </div>
                 <div className='row'>
                     <div className='col-2'>
                        <div>Tuesday</div>
                        <div>29/11</div>
                    </div>
                    <div className='col-3'>
                        <div>img</div>
                    </div>
                    <div className='col-2'>
                        <div>2/0°C</div>
                    </div>
                    <div className='col-3'>
                        <div>27 km/h</div>
                    </div>
                    <div className='col-2'>
                         <div>43%</div>
                    </div>
                    
                </div>
                <div className='row'>
                     <div className='col-2'>
                        <div>Tuesday</div>
                        <div>29/11</div>
                    </div>
                    <div className='col-3'>
                        <div>img</div>
                    </div>
                    <div className='col-2'>
                        <div>2/0°C</div>
                    </div>
                    <div className='col-3'>
                        <div>27 km/h</div>
                    </div>
                    <div className='col-2'>
                        <div>43%</div>
                    </div>
                    
                </div>
                <div className='row'>
                     <div className='col-2'>
                        <div>Tuesday</div>
                        <div>29/11</div>
                    </div>
                    <div className='col-3'>
                        <div>img</div>
                    </div>
                    <div className='col-2'>
                        <div>2/0°C</div>
                    </div>
                    <div className='col-3'>
                        <div>27 km/h</div>
                    </div>
                    <div className='col-2'>
                        <div>43%</div>
                    </div>
                    
                </div>
                <div className='row'>
                     <div className='col-2'>
                        <div>Tuesday</div>
                        <div>29/11</div>
                    </div>
                    <div className='col-3'>
                        <div>img</div>
                    </div>
                    <div className='col-2'>
                        <div>2/0°C</div>
                    </div>
                    <div className='col-3'>
                        <div>27 km/h</div>
                    </div>
                    <div className='col-2'>
                        <div>43%</div>
                    </div>
                    
                </div>
                <div className='row'>
                     <div className='col-2'>
                        <div>Tuesday</div>
                        <div>29/11</div>
                    </div>
                    <div className='col-3'>
                        <div>img</div>
                    </div>
                    <div className='col-2'>
                        <div>2/0°C</div>
                    </div>
                    <div className='col-3'>
                        <div>27 km/h</div>
                    </div>
                    <div className='col-2'>
                        <div>43%</div>
                    </div>
                    
                </div>
                <div className='row'>
                     <div className='col-2'>
                        <div>Tuesday</div>
                        <div>29/11</div>
                    </div>
                    <div className='col-3'>
                        <div>img</div>
                    </div>
                    <div className='col-2'>
                        <div>2/0°C</div>
                    </div>
                    <div className='col-3'>
                        <div>27 km/h</div>
                    </div>
                    <div className='col-2'>
                        <div>43%</div>
                    </div>
                    
                </div>
             </div>
        </div>
    )
}

// 
