import React from "react";

export default function ForecastInfo(props) {
    function maxTemp() {
        let temp = Math.round(props.data.temperature.maximum);
        return `${temp}`;
    }
    function minTemp() {
        let temp = Math.round(props.data.temperature.minimum);
        return `${temp}`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let day = days[date.getDay()];

        return day;
    }

    function date() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDate();
        let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        let month = months[date.getMonth()];

        return (
            <div>
                <div>{day}/{month}</div>
            </div>
            );
    }
    
    return (
        <div className='forecast-section'>
            <div className='row'>
                    <div className='col-2'>
                        <div className="fw-semibold text-decoration-underline">
                            {day()}</div>
                        <div className="forecast-date">{date()}</div>
                        <div className="forecast-icon">
                            <img src={props.data.condition.icon_url} 
                            alt='forecast icon'></img></div>
                        <div className="forecast-temp">
                            <span className="fw-semibold">
                                {maxTemp()}</span>
                            /{minTemp()}°C</div>
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