import React, { Component } from 'react';

export class Weather extends Component {
    render() {
        console.log("weatherData:", this.props.weatherData);
        
        // Take the weather data apart to more easily populate the component
        const { main, description, icon } = this.props.weatherData.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = this.props.weatherData.main;

        return (
            <div className="weather-content">
                <div>Title: {main}</div>
                <div>Desc: {description}</div>
                <div>Icon: {icon}</div>
                <div>Temp: {temp}</div>
                <div>Pressure: {pressure}</div>
                <div>Humidity: {humidity}</div>
                <div>Temp Min: {temp_min} Max:{temp_max}</div>
            </div>
        )
    }
}

export default Weather;