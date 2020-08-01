import React, { useState } from 'react';

function Weather () { 
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setFormSubmitted(true);
    e.target.location.value = '';
  }
  
  return (
  <div>
    <h1>Weather App</h1>
    <p>This app is still under construction! The mock-up below is not functional yet</p>
    <p>This is a weather app that I'm building using an Express.js backend which fetches data from the Open Weather API and renders it using React</p>
    <p>More details to come...</p>
    <article className="blog-post">
      <div className="weather">
        <i className="wi wi-owm-800"></i>
        <p className="temp">87° | 65°</p>
        <p className="report">It's sunny!</p>
        <form onSubmit={handleSumbit}>
          <input 
            type="text"
            name="location"
            placeholder="Enter a Location..." />
        </form>
        {formSubmitted && <p className="report">Form submitted!</p>}
      </div>
    </article>
  </div>
  );
}

export default Weather;