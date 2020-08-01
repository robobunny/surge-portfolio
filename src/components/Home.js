import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="body-article">
    <p className="fancy">I help computers help people</p>
    <div hidden={true}><h1>William C. Duraney Portfolio</h1></div>
    <p>I am a self-taught Javascript developer from Columbus, Ohio. I'm currently seeking an entry-level position as a front-end or full stack web developer.</p>
    <p>I've built some projects using JS, ReactJS, React Router, Redux, Node.js, Express.js and several other frameworks and libraries. Head on over to the Projects page to check them out!</p>
    <Link to="/project" className="center">
      <button className="cta-button" >Check out my work!</button>
    </Link>
  </div>
)

export default Home;