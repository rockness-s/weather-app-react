import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function showForecast(response) {
        setLoaded(true);
        setForecast(response.data.daily)
    }

    if(loaded) {
        return (
            <div className="forecast-section"> 
                <div className='row'>
                    
                {forecast.map(function (dailyForecast, index) {
                    if(index < 6) {
                        return (
                            <div className='col-2' key={index}>
                            <ForecastInfo data={dailyForecast} />
                            </div>
                        )
                    }
                    return null;
                })}
                    
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