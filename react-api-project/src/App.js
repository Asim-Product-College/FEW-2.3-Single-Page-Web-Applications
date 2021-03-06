
import React, { Component } from 'react';

import './App.css';
// importing weather component - loads and displays weather data.
import Weather from './weather/weather';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '', // Used to hold value entered in the input field
      weatherData: null, // Used to hold data loaded from the weather API
    };
  }

  handleSubmit(e) {
    // Grabs the API key when this function is called on submission.
    // Gets the zip value.
    // Makes an API request with the key and zipcode.

    e.preventDefault();
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // ! Get your own API key ! 
    const zip = this.state.inputValue; // Get the zip from the input
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ weatherData: json })
      // ! This needs better error checking here or at renderWeather() 
      // It's possible to get a valid JSON response that is not weather 
      // data, for example when a bad zip code entered.
    }).catch((err) => {
      // If there is no data 
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      // Print an error to the console. 
      // this.setState({inputValue: ''});      
      console.log('-- Error fetching --')
      console.log(err.message)
      console.log("Nooooo wrong zipcode");
      
      // You may want to display an error to the screen here. 
    })
  }

  renderWeather() {
    // This method returns undefined or a JSX component
    if (this.state.weatherData === null) {
      console.log("Has not been called yet...");
      return undefined; // If there is no data return undefined
    };
    if (this.state.weatherData.cod !== 200) {
      // if the ZIP code is invalid or other error, pass err message
      const errMessage = `${this.state.weatherData.message} - try another ZIP code`;
      return errMessage;
    }
    /* 
    This next step needs another level of error checking. It's 
    possible to get a JSON response for an invalid zip in which 
    case the step below fails. 
    */ 
    //  console.log("here now");
    console.log(this.state.weatherData);

    // if (this.state.weatherData.message === "city not found") {
    //   return (
    //     <h1>Uh oh, something went wrong. Please try again.</h1>
    //   )
    // }
    // conditionally render a component using ternary operator
    return <Weather weatherData={this.state.weatherData} />
  
  }

  render() {
    return (
      <div className="App">

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/** 
          This pattern is used for input and other form elements 
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input 
          */}
          <input 
            // this is cool some like circular recursion happening lol.
            value={this.state.inputValue} 
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />

          <button type="submit">Submit</button>

        </form>

        {/** Conditionally render this component */}
        {this.renderWeather()}

      </div>
    );
  }
}

export default App;
