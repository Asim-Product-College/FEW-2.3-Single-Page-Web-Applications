import React from 'React';


const WeatherDescription = ({ title, description }) => (
    <div class="weather-description">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default WeatherDescription;