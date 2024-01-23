import React from 'react';
import '../styles/portfolio.css'

function Portfolio() {
  return (
    <div class="portfolio-container">
      <object data="https://maddie-portfolio.s3.amazonaws.com/portfolio/Jan+2024_Full+Portfolio.pdf" type="application/pdf" width="800px" height="2000px">
        <p>Your web browser doesn't have a PDF plugin.
        Instead you can <a href="filename.pdf">click here to
        download the PDF file.</a></p>
      </object>

    </div>
  );
}

export default Portfolio;