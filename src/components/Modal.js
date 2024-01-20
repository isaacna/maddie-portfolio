// Modal.js
import React from 'react';
import '../styles/style.css'
import 'bootstrap'

const Modal = ({ isOpen, onClose, children }) => {
    console.log("FFFFF")
    if (!isOpen) return null;
    console.log("TRYING TO OPEN");

  return (    
    // <div classNameNameName="modal-overlay">
    //   <div classNameNameName="modal">
    //     <button classNameName="close-button" onClick={onClose}>
    //       Close
    //     </button>
    //     {children}
    //   </div>
    // </div>
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {/* <!-- Bootstrap Carousel --> */}
            <div id="myCarousel" className="carousel" data-ride="carousel">
              {/* <!-- Slides --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="slide-image" src="assets/container/shelly.png" alt="Image 1"/>
                </div>
                <div className="carousel-item">
                  <img className="slide-image" src="assets/container/1.jpg" alt="Image 1"/>
                </div>
                <div className="carousel-item">
                  <img className="slide-image" src="assets/container/2.jpg" alt="Image 2"/>
                </div>
                <div className="carousel-item">
                  <img className="slide-image" src="assets/container/3.jpg" alt="Image 2"/>
                </div>
              </div>
              {/* <!-- Carousel controls on image --> */}
              <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div>
              {/* <!-- Collapse description --> */}
              <a id="collapser" type="button" data-toggle="collapse" data-target="#collapseDescription" aria-expanded="false" aria-controls="collapseDescription">
                <span id="plus"> + </span>
                <span id="minus" style={{display: "none"}}> - </span>
              </a>
              
              {/* <!-- Control Arrows --> */}
              <a className="control-arrow-left" href="#myCarousel" role="button" data-slide="prev">
                <span aria-hidden="true"> &lt; </span>
              </a>
              <a className="control-arrow-right" href="#myCarousel" role="button" data-slide="next">
                <span aria-hidden="true"> &gt; </span>
              </a>
            </div>
            <br/>

            {/* <!-- Description --> */}
            <div className="collapse child" id="collapseDescription">
              <div className="card border-0 custom-card">
                <div className="card-body">
                  {/* <!-- Title --> */}
                  <div>Container and Contained</div>
                  {/* <!-- Bullet 1 --> */}
                  <div>Los Angeles, CA / Critic Lawrence Blough</div>
                  {/* <!-- Bullet 2 --> */}
                  <div>Washington University in St. Louis / 2018</div>
                  <br/>
                  {/* <!-- Description --> */}
                  <div>    Clusters of private units extend above shared community space below, permitting groups of similar minded digital nomads to live together in collaborative vertical neighborhoods. A web of interstitial space connects patios, balconies, and stairways that extend over the open atrium to support networking and a variety of entry and exit points to the building. Shades of privacy flow from the publicly accessible lobby on the lower level to all-embracing sheltered privacy in one’s 10’x10’ unit. This flexibility accommodates changing live and work situations, allowing residents to occupy the building longer and therefore in a more sustainable manner. </div>
                </div>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </div>
  );
};

export default Modal;