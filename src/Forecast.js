import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function showForecast(response) {
        console.log(response.data)
        setLoaded(true);
        setForecast(response.data.daily)
    }

    

    if(loaded) {
        return (
            <div className="forecast"> 
                <ForecastInfo data={forecast[0]} />
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