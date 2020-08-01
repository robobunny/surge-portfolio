import React from 'react';

const Magic8Bunny = () => (
  <div>
    <h1>Magic 8 Bunny</h1>
    <div className="blog-post">
      <div><a href="https://magic-8-bunny.surge.sh">Try it out!</a></div>
      <div>
        <p>This is the first app I made using React. It's a simple "Magic-8-Ball" style app that lets you fill in custom responses, ask a question, and get a randomized answer. It's pretty useless but it shows off a couple skills I've learned!</p>
        <h2>What I learned</h2>
        <p>This app uses the following:</p>
        <ul>
          <li>React.js</li>
          <li>React Modal</li>
        </ul>
        <p>For my first foray into the world of React.js, I followed the tutorial on Udemy by Andrew Mead. It's very basic, but it introduced me to the way React manipulates the DOM and the way React thinks about an app in terms of components and states.</p>
        <p>The app is built using class-based components and state. So the next step for improving it will be to re-write it using functional components and hooks.</p>
      </div>
      <a href="https://magic-8-bunny.surge.sh">Try it out!</a>
      <a href="https://github.com/robobunny/decisions">Check out the source code</a>
    </div>
  </div>
)

export default Magic8Bunny;