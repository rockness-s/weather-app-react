import React, { useState } from 'react';

import WeatherInfo from "./WeatherInfo";
import './App.css';
import './Weather.css';
import axios from 'axios';


export default function Weather(props) {
   let [weather, setWeather] = useState({ ready: false });
   function showResponse(response) {
    setWeather({
        ready: true,
        city: response.data.city,
        descr: response.data.condition.description,
        date: new Date(response.data.time * 1000),
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

            <WeatherInfo data={weather} />
        </div>
    
        );
   } else { 

    let apiKey = "01ce64btfcc913aa7034e9737a34of12";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showResponse);

    return "Loading..."
   }

    
}