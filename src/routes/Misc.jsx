import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

const projectDataMap = {
  'BOOTAY_PLANTER': BOOTAY_PLANTER,
  'OIL_PAINTINGS': OIL_PAINTINGS,
  'MIXED_MEDIA': MIXED_MEDIA,
  'GLYNWOOD_FARMS': GLYNWOOD_FARMS,
  'PASTURE_GRASSES': PASTURE_GRASSES,
  'MULTIFLORA': MULTIFLORA,
  'WEDDING': WEDDING,
  'COLOR_PENCIL': COLOR_PENCIL,
  'PSY': PSY,
  'PIZZA_PILLOW': PIZZA_PILLOW,
  'TATTOOS': TATTOOS,
  'ROCK_PEOPLE': ROCK_PEOPLE,
  'EARRINGS': EARRINGS,
  'COUNCIL_DATA_PROJECT': COUNCIL_DATA_PROJECT,
  'SACRAMENTO': SACRAMENTO,
  'PHOTOGRAPHY': PHOTOGRAPHY,
  'NATIVE_PLANT_PRINTS': NATIVE_PLANT_PRINTS,
  'CONCRETE_STOOL': CONCRETE_STOOL
};

function Misc() {
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
              projectData={BOOTAY_PLANTER} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === BOOTAY_PLANTER} 
              onOpen={() => openModal('BOOTAY_PLANTER')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={OIL_PAINTINGS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === OIL_PAINTINGS} 
              onOpen={() => openModal('OIL_PAINTINGS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={MIXED_MEDIA} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === MIXED_MEDIA} 
              onOpen={() => openModal('MIXED_MEDIA')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={GLYNWOOD_FARMS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === GLYNWOOD_FARMS} 
              onOpen={() => openModal('GLYNWOOD_FARMS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={MULTIFLORA} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === MULTIFLORA} 
              onOpen={() => openModal('MULTIFLORA')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={PASTURE_GRASSES} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === PASTURE_GRASSES} 
              onOpen={() => openModal('PASTURE_GRASSES')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={PHOTOGRAPHY} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === PHOTOGRAPHY} 
              onOpen={() => openModal('PHOTOGRAPHY')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={COLOR_PENCIL} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === COLOR_PENCIL} 
              onOpen={() => openModal('COLOR_PENCIL')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={PSY} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === PSY} 
              onOpen={() => openModal('PSY')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={NATIVE_PLANT_PRINTS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === NATIVE_PLANT_PRINTS} 
              onOpen={() => openModal('NATIVE_PLANT_PRINTS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={TATTOOS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === TATTOOS} 
              onOpen={() => openModal('TATTOOS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={ROCK_PEOPLE} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === ROCK_PEOPLE} 
              onOpen={() => openModal('ROCK_PEOPLE')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={EARRINGS} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === EARRINGS} 
              onOpen={() => openModal('EARRINGS')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={COUNCIL_DATA_PROJECT} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === COUNCIL_DATA_PROJECT} 
              onOpen={() => openModal('COUNCIL_DATA_PROJECT')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={SACRAMENTO} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === SACRAMENTO} 
              onOpen={() => openModal('SACRAMENTO')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
      </div>

      <div className="row row-container">
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={WEDDING} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === WEDDING} 
              onOpen={() => openModal('WEDDING')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={PIZZA_PILLOW} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === PIZZA_PILLOW} 
              onOpen={() => openModal('PIZZA_PILLOW')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
        <div className="col-md-4 ml-auto">
          <ImageWithModal 
              projectData={CONCRETE_STOOL} 
              altText="Image 1" 
              isOpen={modalOpen && projectData === CONCRETE_STOOL} 
              onOpen={() => openModal('CONCRETE_STOOL')}
              onClose={() => closeModal()} 
              loading="lazy"
            />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Misc;