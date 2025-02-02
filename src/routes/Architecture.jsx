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
    SEAGRAM,
    SIDEWALK_STUFF,
    SOULARD_MARKETPLACE,
    THESIS_PREP_BOOK,
    MOVING_STONE,
    IRREGULAR_STONE_JIG,
    CUSTOM_SANDSTONE_MORTAR,
    PRINTING_SPACES_IN_STONE,
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
  'SEAGRAM': SEAGRAM,
  'THESIS_PREP_BOOK': THESIS_PREP_BOOK,
  'MOVING_STONE': MOVING_STONE,
  'IRREGULAR_STONE_JIG': IRREGULAR_STONE_JIG,
  'CUSTOM_SANDSTONE_MORTAR': CUSTOM_SANDSTONE_MORTAR,
  'PRINTING_SPACES_IN_STONE': PRINTING_SPACES_IN_STONE,
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
      <div className="container-fluid project-container">  
        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={MOVING_STONE}
              altText="Moving Stone" 
              isOpen={modalOpen && projectData === MOVING_STONE} 
              onOpen={() => openModal('MOVING_STONE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={CUSTOM_SANDSTONE_MORTAR}
              altText="Custom Sandstone Mortar" 
              isOpen={modalOpen && projectData === CUSTOM_SANDSTONE_MORTAR} 
              onOpen={() => openModal('CUSTOM_SANDSTONE_MORTAR')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={GIFT_ECONOMY}
              altText="Gift Economy" 
              isOpen={modalOpen && projectData === GIFT_ECONOMY} 
              onOpen={() => openModal('GIFT_ECONOMY')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={PUBLIC_PALACE}
              altText="Public Palace" 
              isOpen={modalOpen && projectData === PUBLIC_PALACE} 
              onOpen={() => openModal('PUBLIC_PALACE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={PRINTING_SPACES_IN_STONE}
              altText="Printing Spaces in Stone" 
              isOpen={modalOpen && projectData === PRINTING_SPACES_IN_STONE} 
              onOpen={() => openModal('PRINTING_SPACES_IN_STONE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={SEAGRAM}
              altText="Seagram" 
              isOpen={modalOpen && projectData === SEAGRAM} 
              onOpen={() => openModal('SEAGRAM')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={HOUSE_OF_INVERSIONS}
              altText="House of Inversions" 
              isOpen={modalOpen && projectData === HOUSE_OF_INVERSIONS} 
              onOpen={() => openModal('HOUSE_OF_INVERSIONS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={MDEAS}
              altText="MDEAS" 
              isOpen={modalOpen && projectData === MDEAS} 
              onOpen={() => openModal('MDEAS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={SIDEWALK_STUFF}
              altText="Sidewalk Stuff" 
              isOpen={modalOpen && projectData === SIDEWALK_STUFF} 
              onOpen={() => openModal('SIDEWALK_STUFF')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={URBAN_CHAPEL}
              altText="Urban Chapel" 
              isOpen={modalOpen && projectData === URBAN_CHAPEL} 
              onOpen={() => openModal('URBAN_CHAPEL')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={POWER_ENERGY}
              altText="Power Energy" 
              isOpen={modalOpen && projectData === POWER_ENERGY} 
              onOpen={() => openModal('POWER_ENERGY')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={CHAIN_OF_ROCKS}
              altText="Chain of Rocks" 
              isOpen={modalOpen && projectData === CHAIN_OF_ROCKS} 
              onOpen={() => openModal('CHAIN_OF_ROCKS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={HEWITT}
              altText="Hewitt" 
              isOpen={modalOpen && projectData === HEWITT} 
              onOpen={() => openModal('HEWITT')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={SOULARD_MARKETPLACE}
              altText="Soulard Marketplace" 
              isOpen={modalOpen && projectData === SOULARD_MARKETPLACE} 
              onOpen={() => openModal('SOULARD_MARKETPLACE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={THESIS_PREP_BOOK}
              altText="Thesis Prep Book" 
              isOpen={modalOpen && projectData === THESIS_PREP_BOOK} 
              onOpen={() => openModal('THESIS_PREP_BOOK')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={RESHAPING_REMNANTS}
              altText="Reshaping Remnants" 
              isOpen={modalOpen && projectData === RESHAPING_REMNANTS} 
              onOpen={() => openModal('RESHAPING_REMNANTS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={IRREGULAR_STONE_JIG}
              altText="Irregular Stone Jig" 
              isOpen={modalOpen && projectData === IRREGULAR_STONE_JIG} 
              onOpen={() => openModal('IRREGULAR_STONE_JIG')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={PATTERNS_IN_NATURE}
              altText="Patterns in Nature" 
              isOpen={modalOpen && projectData === PATTERNS_IN_NATURE} 
              onOpen={() => openModal('PATTERNS_IN_NATURE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={LIVING_INTERSECTION}
              altText="Living Intersection" 
              isOpen={modalOpen && projectData === LIVING_INTERSECTION} 
              onOpen={() => openModal('LIVING_INTERSECTION')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={CONTAINER_AND_CONTAINED}
              altText="Container and Contained" 
              isOpen={modalOpen && projectData === CONTAINER_AND_CONTAINED} 
              onOpen={() => openModal('CONTAINER_AND_CONTAINED')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={SENSING_TEXTURE}
              altText="Sensing Texture" 
              isOpen={modalOpen && projectData === SENSING_TEXTURE} 
              onOpen={() => openModal('SENSING_TEXTURE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={JUMP_CUT}
              altText="Jump Cut" 
              isOpen={modalOpen && projectData === JUMP_CUT} 
              onOpen={() => openModal('JUMP_CUT')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={CRATER}
              altText="Crater" 
              isOpen={modalOpen && projectData === CRATER} 
              onOpen={() => openModal('CRATER')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
              projectData={REST_STOP_REVISITED}
              altText="Rest Stop Revisited" 
              isOpen={modalOpen && projectData === REST_STOP_REVISITED} 
              onOpen={() => openModal('REST_STOP_REVISITED')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Architecture;