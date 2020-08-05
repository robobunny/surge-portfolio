import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>I built this portfolio site using React with React Router. The styles are done using SCSS.</p>
      <p>The site has a "mobile first" design. That means that the styles are written for viewing on a phone and media queries are used to adjust the styles for viewing on larger screens. It's generally easier to design the site to look good on mobile and then adjust for a large screen than vice-versa. Plus your phone won't be tasked with loading all the styles for a big screen.</p>
      <p><a href="https://github.com/robobunny/">Check out the source code</a></p>
    </div>
  )
}

export default Portfolio;