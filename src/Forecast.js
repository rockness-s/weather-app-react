import React, { useState } from "react";
import axios from "axios";
// import './Weather.css';

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function showForecast(response) {
        console.log(response.data.daily)
        setLoaded(true);
        setForecast(response.data.daily)
    }

    

    if(loaded) {
        return (
            <div className='forecast-section'>
            <div className='row'>
                    <div className='col-2'>
                        <div className="fw-semibold text-decoration-underline">Tuesday</div>
                        <div className="forecast-date">29/11</div>
                        <div className="forecast-icon">
                            <img src={forecast[0].condition.icon_url} 
                            alt='forecast icon'></img></div>
                        <div className="forecast-temp">
                            <span className="fw-semibold">{Math.round(forecast[0].temperature.maximum)}</span>
                            /{Math.round(forecast[0].temperature.minimum)}°C</div>
                    </div>
                    <div className='col-2'>
    
                    </div>
                    <div className='col-2'>
    
                    </div>
                    <div className='col-2'>
    
                    </div>
                    <div className='col-2'>
    
                    </div>
                    <div className='col-2'>
    
                    </div>
                    </div>
                    </div>
        )

    } else {
        let apiKey = "01ce64btfcc913aa7034e9737a34of12";
        let units = "metric";
        let lat = props.coordinates.latitude;
        let lon = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
        
        axios.get(apiUrl).then(showForecast);

        return null;
    }
    
}