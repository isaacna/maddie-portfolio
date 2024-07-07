// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

// TODO: Make this cleaner
const projectDataMap = {
  'HOUSE_OF_INVERSIONS': HOUSE_OF_INVERSIONS,
  'PUBLIC_PALACE': PUBLIC_PALACE,
  'SIDEWALK_STUFF': SIDEWALK_STUFF,
  'URBAN_CHAPEL': URBAN_CHAPEL,
  'POWER_ENERGY': POWER_ENERGY,
  'CHAIN_OF_ROCKS': CHAIN_OF_ROCKS,
  'LIVING_INTERSECTION': LIVING_INTERSECTION,
  'CONTAINER_AND_CONTAINED': CONTAINER_AND_CONTAINED,
  'SENSING_TEXTURE': SENSING_TEXTURE,
  'JUMP_CUT': JUMP_CUT,
  'CRATER': CRATER,
  'REST_STOP_REVISITED': REST_STOP_REVISITED,
  'GIFT_ECONOMY': GIFT_ECONOMY,
  'SOULARD_MARKETPLACE': SOULARD_MARKETPLACE,
  'PATTERNS_IN_NATURE': PATTERNS_IN_NATURE,
  'MDEAS': MDEAS,
  'HEWITT': HEWITT,
  'RESHAPING_REMNANTS': RESHAPING_REMNANTS,
};

function Architecture() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [projectData, setProjectData] = useState(null);

  // TODO: Move this into a shared util file w/ Projects
  // Check the location for a project ID and open the modal if one exists
  useEffect(() => {
    const projectId = new URLSearchParams(location.search).get('project');
    if (projectId) {
      setProjectData(projectDataMap[projectId]);
      setModalOpen(true);
    }
  }, [location]);

  // Func that handles opening a modal and modifying URL
  const openModal = (projectId) => {
    setProjectData(projectDataMap[projectId]);
    setModalOpen(true);
    navigate(`${location.pathname}?project=${projectId}`);
  };

  // Func that handles closing modal and navigating back to base URL
  const closeModal = () => {
    setModalOpen(false);
    navigate(location.pathname);
  }

  return (
    <div>
    <div className="container-fluid">  
      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={HOUSE_OF_INVERSIONS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === HOUSE_OF_INVERSIONS} 
              onOpen={() => openModal('HOUSE_OF_INVERSIONS')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={PUBLIC_PALACE} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === PUBLIC_PALACE} 
              onOpen={() => openModal('PUBLIC_PALACE')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={SIDEWALK_STUFF} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === SIDEWALK_STUFF} 
              onOpen={() => openModal('SIDEWALK_STUFF')}
              onClose={() => closeModal()} 
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={URBAN_CHAPEL} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === URBAN_CHAPEL} 
              onOpen={() => openModal('URBAN_CHAPEL')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={POWER_ENERGY} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === POWER_ENERGY} 
              onOpen={() => openModal('POWER_ENERGY')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={CHAIN_OF_ROCKS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === CHAIN_OF_ROCKS} 
              onOpen={() => openModal('CHAIN_OF_ROCKS')}
              onClose={() => closeModal()} 
            />
        </div>
      </div>
      <div id="test"></div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={LIVING_INTERSECTION} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === LIVING_INTERSECTION} 
              onOpen={() => openModal('LIVING_INTERSECTION')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={CONTAINER_AND_CONTAINED} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === CONTAINER_AND_CONTAINED} 
              onOpen={() => openModal('CONTAINER_AND_CONTAINED')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={SENSING_TEXTURE} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === SENSING_TEXTURE} 
              onOpen={() => openModal('SENSING_TEXTURE')}
              onClose={() => closeModal()} 
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={JUMP_CUT} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === JUMP_CUT} 
              onOpen={() => openModal('JUMP_CUT')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={CRATER} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === CRATER} 
              onOpen={() => openModal('CRATER')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={REST_STOP_REVISITED} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === REST_STOP_REVISITED} 
              onOpen={() => openModal('REST_STOP_REVISITED')}
              onClose={() => closeModal()} 
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={GIFT_ECONOMY} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === GIFT_ECONOMY} 
              onOpen={() => openModal('GIFT_ECONOMY')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={SOULARD_MARKETPLACE} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === SOULARD_MARKETPLACE} 
              onOpen={() => openModal('SOULARD_MARKETPLACE')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={PATTERNS_IN_NATURE} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === PATTERNS_IN_NATURE} 
              onOpen={() => openModal('PATTERNS_IN_NATURE')}
              onClose={() => closeModal()} 
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={MDEAS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === MDEAS} 
              onOpen={() => openModal('MDEAS')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={HEWITT} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === HEWITT} 
              onOpen={() => openModal('HEWITT')}
              onClose={() => closeModal()} 
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={RESHAPING_REMNANTS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === RESHAPING_REMNANTS} 
              onOpen={() => openModal('RESHAPING_REMNANTS')}
              onClose={() => closeModal()} 
            />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Architecture;