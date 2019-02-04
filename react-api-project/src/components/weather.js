import React, { Component } from 'react';

export class Weather extends Component {
    
    render() {
        <div class="weather-content">
            <div>Title: {main}</div>
            <div>Desc: {description}</div>
            <div>Icon: {icon}</div>
            <div>Temp: {temp}</div>
            <div>Pressure: {pressure}</div>
            <div>Humidity: {humidity}</div>
            <div>Temp Min: {temp_min} Max:{temp_max}</div>
      </div>
    }
}

export default Weather;