import React from 'react';
import './App.css';
import './Weather.css';

export default function Weather() {
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
            <div className='col-7'>
            <h1>Dnipro</h1>
            <h4>Overcast clouds</h4>
            <p>29 Nov 2022, Tuesday 19:45</p>
            </div>
            <div className='col-2 img-weather'>
                <img src='https://ssl.gstatic.com/onebox/weather/64/cloudy.png' alt='Overcast clouds'></img>
            </div>
            <div className='col-3 temp-section'>
                <ul>
                    <li className='temp'>1°C</li>
                    <li className='real-temp'>RealFeel: -5°C</li>
                </ul>
            </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <div className='detail-item'>Wind</div>
                    <div className='info-item'>24 km/h</div>
                </div>
                <div className='col-3'>
                    <div className='detail-item'>Humidity</div>
                    <div className='info-item'>42%</div>
                </div>
                <div className='col-3'>
                    <div className='detail-item'>Sunrise</div>
                    <div className='info-item'>06:07</div>
                </div>
                <div className='col-3'>
                    <div className='detail-item'>Sunset</div>
                    <div className='info-item'>14:49</div>
                </div>
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