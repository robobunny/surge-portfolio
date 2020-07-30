import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="body-article">
    <h1>About Me</h1>
    <div>
      <p>I am a self-taught full-stack JavaScript software developer. I want to help computers help people. In the last year I have leveraged my philosophy background, my interest in computers, and my capacity to self-motivate and learn quickly in order to learn coding. I am excited to continue learning and honing my skills through turning this hobby into a career.</p>
    </div>
    <h2>Coding Interests</h2>
    <div>
      <p>I've picked up some skills in the following languages, frameworks, and technologies:</p>
      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS/SASS</li>
        <li>MongoDB</li>
      </ul>
      <p>In addition to continuing education in those web design fundamentals, I'm beginning the process of learning the following:</p>
      <ul>
        <li>Java</li>
        <li>AWS and Lambda functions</li>
      </ul>
      <p>I'm also interested in the absolute fundamentals of software engineering, which is to say logic and algorithms. An algorithm is an algorithm regardless of how it is syntactically expressed in a certain language.</p>
      <p>I'd like to explore more in the world of machine learning and data visualization, but for now that remains a project for a later date.</p>
      <p className="fancy">My dream is to help build a more efficient, effective and equitable education system and I believe coding is an integral tool for that mission.</p>
    </div>
    <h2>Education</h2>
    <div>
      <p>I taught myself to code using online tutorials, especially Andrew Mead's classes on Udemy. Through these hands-on tutorials, I've put together a few apps to hone the skills that I've learned. Self-teaching while working a full-time job has given me good practice in self-motivating and the discipline needed to achieve success as a developer.</p>
      <p>I have a Master's degree in Philosophy from the Catholic University of America and a Bachelor's degree in philosophy from the Pontifical College Josephinum. My background in philosophy has given me a strong foundation in logic and the conceptualization of abstractions. My studies in Latin and Greek as well as speaking fluent Spanish and German have also given me a groundwork for learning syntax and semantics quickly and understanding them thoroughly and intuitively.</p>
    </div>
    <Link to='/project' className="center">Check out my projects</Link>
  </div>
)

export default About;