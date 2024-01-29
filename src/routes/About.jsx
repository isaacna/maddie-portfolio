import React from 'react';
import '../styles/about.css'

function About() {
  return (
    <div class="about-container">
        <div class="col-md-6 text-column order-md-1">
            <p className="about-text">Hi. I'm Maddie (she/her). I hail from the Bluegrass fields of Kentucky and am currently pursuing my Master of Architecture at the Harvard University Graduate School of Design.</p>
            <p className="about-text">I have an urge to create novel connection, belonging, and health across boundaries and scales. I believe that the future of our built systems can be written in the same language as our natural systems: resilience cultivated by local gratitude, radical positive imagination, and community wealth.</p>
            <p className="about-text">Art is how I express care for place and all forms of life. By making highly particular gifts for those I love, I give time and attention to presence and context</p>
            <p className="about-text">Email me at mfarrer@gsd.harvard.edu.</p>
            <p className="about-text">Check out my <a href="https://drive.google.com/file/d/1T99pyykalquLwdKH6S0UZY12CQFt2p8W/view" className="link" target="_blank">resume</a>.</p>
        </div>
        <div class="col-md-6 order-md-2">
            <img className="about-img img-fluid rightfix" src="https://maddie-portfolio.s3.amazonaws.com/architecture/about/bio_picture.jpg" alt="Your Image" />
        </div>
    </div>
  );
}

export default About;