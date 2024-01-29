import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import ImageWithModal from '../components/ImageWithModal';
import { 
  BOOTAY_PLANTER,
  OIL_PAINTINGS,
  MIXED_MEDIA,
  GLYNWOOD_FARMS,
  PASTURE_GRASSES,
  MULTIFLORA,
  WEDDING,
  COLOR_PENCIL,
  PSY,
  PIZZA_PILLOW,
  TATTOOS,
  ROCK_PEOPLE,
  EARRINGS,
  COUNCIL_DATA_PROJECT,
  SACRAMENTO,
  PHOTOGRAPHY,
  NATIVE_PLANT_PRINTS,
  CONCRETE_STOOL
} from '../components/MiscData';

function Misc() {
  return (
    <div>
    <div className="container-fluid">  
      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={BOOTAY_PLANTER} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={OIL_PAINTINGS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={MIXED_MEDIA} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={GLYNWOOD_FARMS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={PASTURE_GRASSES} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={MULTIFLORA} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={WEDDING} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={COLOR_PENCIL} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={PSY} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={PIZZA_PILLOW} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={TATTOOS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={ROCK_PEOPLE} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={EARRINGS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={COUNCIL_DATA_PROJECT} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={SACRAMENTO} altText="Image 1" />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={PHOTOGRAPHY} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={NATIVE_PLANT_PRINTS} altText="Image 1" />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal projectData={CONCRETE_STOOL} altText="Image 1" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Misc;