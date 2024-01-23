import React from 'react';
import '../styles/about.css'

function About() {
  return (
    <div class="about-container">
        <div class="text-column">
            <p>Hi. I'm Maddie (she/her). I hail from the Bluegrass fields of Kentucky and am currently pursuing my Master of Architecture at the Harvard University Graduate School of Design.</p>
            <p>I have an urge to create novel connection, belonging, and health across boundaries and scales. I believe that the future of our built systems can be written in the same language as our natural systems: resilience cultivated by local gratitude, radical positive imagination, and community wealth.</p>
            <p>Art is how I express care for place and all forms of life. By making highly particular gifts for those I love, I give time and attention to presence and context</p>
            <p>Email me at mfarrer@gsd.harvard.edu.</p>
            <p>Check out my resume.</p>
        </div>
        <div class="image-column">
            <img class="about-img" src="https://maddie-portfolio.s3.amazonaws.com/architecture/about/bio_picture.jpg" alt="Your Image" />
        </div>
    </div>
  );
}

export default About;