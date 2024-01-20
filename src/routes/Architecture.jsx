import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import ImageWithModal from '../components/ImageWithModal'; // Adjust the path based on your project structure
import { 
    CONTAINER_AND_CONTAINED, 
    // LIVING_INTERSECTION,
    // HOUSE_OF_INVERSIONS,
    // REST_STOP_REVISITED 
} from '../components/ProjectData';

function Architecture() {
  return (
    <div>
    <div className="container-fluid">  
      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={CONTAINER_AND_CONTAINED} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
        </div>
        <div className="col-md-4 ml-auto">
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
        </div>
        <div className="col-md-4 ml-auto">
        </div>
        <div className="col-md-4 ml-auto">
        </div>
      </div>
      <div id="test"></div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
        </div>
        <div className="col-md-4 ml-auto">
        </div>
        <div className="col-md-4 ml-auto">
        </div>
      </div>
    </div>
  </div>
  );
}

export default Architecture;