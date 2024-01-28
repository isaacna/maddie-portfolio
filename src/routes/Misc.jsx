import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import ImageWithModal from '../components/ImageWithModal';

function Misc() {
  return (
    <div>
    <div className="container-fluid">  
      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          {/* <ImageWithModal projectData={HOUSE_OF_INVERSIONS} altText="Image 1" /> */}
        </div>
        <div className="col-md-4 ml-auto">
          {/* <ImageWithModal projectData={PUBLIC_PALACE} altText="Image 1" /> */}
        </div>
        <div className="col-md-4 ml-auto">
          {/* <ImageWithModal projectData={SIDEWALK_STUFF} altText="Image 1" /> */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Misc;