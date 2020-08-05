import React, { useState } from 'react';
import weatherAppPng from '../img/weather-app.png';

function Weather () { 
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setFormSubmitted(true);
    e.target.location.value = '';
  }
  
  return (
  <div>
    <h1>Weather App</h1>
    <div className="blog-post">
      <a href="https://robobunny-weather-app.herokuapp.com">
        <p style={{ textAlign: "center", margin: "0" }}>Check out the app!</p>
        <img src={weatherAppPng} alt="A weather report for Timbuktu" className="screenshot"/>
      </a>
      <p>This is a weather app that I built using an Express.js backend which fetches data from the Open Weather Map API and renders it using a small React.</p>
      <p>The hardest part in my first full-stack app was getting the back end to play nice with the front end. By using realtive links and taking advantage of Heroku's <code>process.env.PORT</code> variable, pointing the client to the correct route for the API was a piece of cake. Then the hardest part was googling how to tell the client where to look for the API while using the development environment on my machine. A simple addition of a <code>"proxy"</code> option in the client's package.json was all it took.</p>
      <p>This project taught me a lot about building an API and how clients and servers communicate. I can't wait to get into something a bit more advanced!</p>
      <a href="https://robobunny-weather-app.herokuapp.com">Check out the app!</a>
    </div>
  </div>
  );
}

export default Weather;