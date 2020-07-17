import React from 'react';

const Project = (props) => (
  <div>
    <h2>Project {props.match.params.id}</h2>
    <p>This is the portfolio page highlighting project #{props.match.params.id}</p>
  </div>
)

export default Project;