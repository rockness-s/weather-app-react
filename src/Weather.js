import React, { useState } from 'react';
import './App.css';
import './Weather.css';
import axios from 'axios';

export default function Weather(props) {
   let [weather, setWeather] = useState({ ready: false });
   function showResponse(response) {
    console.log(response);
    setWeather({
        ready: true,
        city: response.data.city,
        descr: response.data.condition.description,
        data: "29 Nov 2022, Tuesday 19:45",
        icon: response.data.condition.icon_url,
        temp: response.data.temperature.current,
        realtemp: response.data.temperature.feels_like,
        wind: response.data.wind.speed,
        hum: response.data.temperature.humidity,
    }); 
   }

   if (weather.ready) {
    return(
        <div className='weather-app'>
            <form>
                <div className='row'>
                    <div className='col-10'>
                        <input type="search" placeholder='Enter a city...' className='form-control'/>
                    </div>
                    <div className='col-2'>
                        <input type="submit" value="Search" className='btn btn-secondary'/>
                    </div>
                        
                </div>
            </form>
    
            <div className='main-section'>
                <div className='row'>
                <div className='col-7 city-info'>
                <h1>{weather.city}</h1>
                <h4 className='text-capitalize'>{weather.descr}</h4>
                <p>{weather.data}</p>
                </div>
                <div className='col-2 img-weather'>
                    <img src={weather.icon} alt='weather icon'></img>
                </div>
                <div className='col-3 temp-section'>
                    <ul>
                        <li className='temp'>{Math.round(weather.temp)}°C</li>
                        <li className='real-temp'>RealFeel: {Math.round(weather.realtemp)}°C</li>
                    </ul>
                </div>
                </div>
                <ul className='detail-item'>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
                <li>Humidity: {weather.hum}%</li>
                </ul>
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
   } else { 

    let apiKey = "01ce64btfcc913aa7034e9737a34of12";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showResponse);

    return "Loading..."
   }

    
}