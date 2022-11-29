import React from 'react';
import './App.css';

export default function Weather() {
    return(
    <div>
        <form>
            <div className='row'>
                <div className='col-9'>
                    <input type="search" placeholder='Enter a city...' className='form-control'/>
                </div>
                <div className='col-3'>
                    <input type="submit" value="Search" className='btn btn-secondary'/>
                    <button type='button' className='btn btn-secondary'>Home</button>
                </div>
                    
            </div>
        </form>

        <div className='main-section'>
            <div className='row'>
            <div className='col-8'>
            <h1>Dnipro</h1>
            <h4>Overcast clouds</h4>
            <p>29 Nov 2022, Tuesday 19:45</p>
            </div>
            <div className='col-2'>
                <img src='https://ssl.gstatic.com/onebox/weather/64/cloudy.png' alt='Overcast clouds'></img>
            </div>
            <div className='col-2'>
                <ul>
                    <li>1°C</li>
                    <li>RealFeel: -5°C</li>
                </ul>
            </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>24 km/h</div>
                </div>
                <div className='col-3'>
                    <div>Humidity</div>
                    <div>42%</div>
                </div>
                <div className='col-3'>
                    <div>Sunrise</div>
                    <div>06:07</div>
                </div>
                <div className='col-3'>
                    <div>Sunset</div>
                    <div>14:49</div>
                </div>
            </div>

        </div>
         <div className='forecast-section'>
             <div className='row'>
                 <div className='col-2'>
                    <div>Tuesday</div>
                    <div>29/11</div>
                </div>
                <div className='col-3'>
                    <div>img</div>
                </div>
                <div className='col-2'>
                    <div>Temp</div>
                    <div>2/0°C</div>
                </div>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>27 km/h</div>
                </div>
                <div className='col-2'>
                    <div>Hum</div>
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
                    <div>Temp</div>
                    <div>2/0°C</div>
                </div>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>27 km/h</div>
                </div>
                <div className='col-2'>
                    <div>Hum</div>
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
                    <div>Temp</div>
                    <div>2/0°C</div>
                </div>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>27 km/h</div>
                </div>
                <div className='col-2'>
                    <div>Hum</div>
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
                    <div>Temp</div>
                    <div>2/0°C</div>
                </div>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>27 km/h</div>
                </div>
                <div className='col-2'>
                    <div>Hum</div>
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
                    <div>Temp</div>
                    <div>2/0°C</div>
                </div>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>27 km/h</div>
                </div>
                <div className='col-2'>
                    <div>Hum</div>
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
                    <div>Temp</div>
                    <div>2/0°C</div>
                </div>
                <div className='col-3'>
                    <div>Wind</div>
                    <div>27 km/h</div>
                </div>
                <div className='col-2'>
                    <div>Hum</div>
                    <div>43%</div>
                </div>
                
            </div>
         </div>

    </div>

    )
}