import React from 'react';
import '../styles/about.css'

function About() {
  return (
    <div className="about-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 text-column">
              <p className="about-text">Hi. I'm Maddie (she/her). I hail from the Bluegrass fields of Kentucky and am currently pursuing my Master of Architecture at the Harvard University Graduate School of Design.</p>
              <p className="about-text">I have an urge to create novel connection, belonging, and health across boundaries and scales. I believe that the future of our built systems can be written in the same language as our natural systems: resilience cultivated by local gratitude, radical positive imagination, and community wealth.</p>
              <p className="about-text">Art is how I express care for place and all forms of life. By making highly particular gifts for those I love, I give time and attention to presence and context.</p>
              <p className="about-text">Email me at mfarrer@gsd.harvard.edu.</p>
              <p className="about-text">Check out my <a href="https://drive.google.com/file/d/1T99pyykalquLwdKH6S0UZY12CQFt2p8W/view" className="about-link" target="_blank">resume</a>.</p>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4 image-column">
              <img className="about-img img-fluid rightfix" src="https://maddie-portfolio.s3.amazonaws.com/about/MF_Headshot_Color_CROPPED.jpg" alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;