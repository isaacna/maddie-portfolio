import React from 'react';

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import ImageWithModal from '../components/ImageWithModal';
import { 
    CHAIN_OF_ROCKS,
    CONTAINER_AND_CONTAINED,
    CRATER,
    GIFT_ECONOMY,
    HEWITT,
    HOUSE_OF_INVERSIONS,
    JUMP_CUT,
    LIVING_INTERSECTION,
    MDEAS,
    PATTERNS_IN_NATURE,
    POWER_ENERGY,
    PUBLIC_PALACE,
    RESHAPING_REMNANTS,
    REST_STOP_REVISITED,
    SENSING_TEXTURE,
    SIDEWALK_STUFF,
    SOULARD_MARKETPLACE,
    URBAN_CHAPEL
} from '../components/ProjectData';

function Architecture() {
  return (
    <div>
    <div className="container-fluid">  
      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={HOUSE_OF_INVERSIONS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={PUBLIC_PALACE} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={SIDEWALK_STUFF} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={URBAN_CHAPEL} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={POWER_ENERGY} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={CHAIN_OF_ROCKS} altText="Image 1" />
        </div>
      </div>
      <div id="test"></div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={LIVING_INTERSECTION} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={CONTAINER_AND_CONTAINED} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={SENSING_TEXTURE} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={JUMP_CUT} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={CRATER} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={REST_STOP_REVISITED} altText="Image 1" />
        </div>
      </div>


      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={GIFT_ECONOMY} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={SOULARD_MARKETPLACE} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={PATTERNS_IN_NATURE} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={MDEAS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={HEWITT} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={RESHAPING_REMNANTS} altText="Image 1" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Architecture;