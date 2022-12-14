import React from "react";
import axios from "axios";

export default function Forecast(props) {
    function showForecast(response) {
        console.log(response.data)
    }

    let apiKey = "01ce64btfcc913aa7034e9737a34of12";
    let units = "metric";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);

    return (
        <div className='forecast-section'>
        <div className='row'>
                <div className='col-2'>
                    <div className="fw-semibold text-decoration-underline">Tuesday</div>
                    <div className="forecast-date">29/11</div>
                    <div>img</div>
                    <div className="forecast-temp"><span className="fw-semibold">2</span>/0°C</div>
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
}