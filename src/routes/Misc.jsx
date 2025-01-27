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
  CONCRETE_STOOL,
  TRAVEL_PHOTOGRAPHY,
  GRADUATION_PHOTOGRAPHY,
  WEDDING_02,
  COLLECTING_CLEANING_CUTTING,
  KENTUCKY_PHOTOGRAPHY,
  VOLCANIC_BENCH,
  RURAL_GSD,
  CONCRETE_BALLET,
  GEOLOGIC_JOINERY,
  GEOLOGIC_JOINERY_II,
  PARAMETRIC_QUARRY,
  CUSTOM_3D_PRINT_TOOLPATH,
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
  'CONCRETE_STOOL': CONCRETE_STOOL,
  'TRAVEL_PHOTOGRAPHY': TRAVEL_PHOTOGRAPHY,
  'GRADUATION_PHOTOGRAPHY': GRADUATION_PHOTOGRAPHY,
  'WEDDING_02': WEDDING_02,
  'CONCRETE_BALLET': CONCRETE_BALLET,
  'GEOLOGIC_JOINERY': GEOLOGIC_JOINERY,
  'GEOLOGIC_JOINERY_II': GEOLOGIC_JOINERY_II,
  'PARAMETRIC_QUARRY': PARAMETRIC_QUARRY,
  'CUSTOM_3D_PRINT_TOOLPATH': CUSTOM_3D_PRINT_TOOLPATH,
  'COLLECTING_CLEANING_CUTTING': COLLECTING_CLEANING_CUTTING,
  'RURAL_GSD': RURAL_GSD,
  'KENTUCKY_PHOTOGRAPHY': KENTUCKY_PHOTOGRAPHY,
  'VOLCANIC_BENCH': VOLCANIC_BENCH,
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
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={GLYNWOOD_FARMS}
                altText="Image 1" 
                isOpen={modalOpen && projectData === GLYNWOOD_FARMS}
                onOpen={() => openModal('GLYNWOOD_FARMS')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={MULTIFLORA}
                altText="Image 1" 
                isOpen={modalOpen && projectData === MULTIFLORA}
                onOpen={() => openModal('MULTIFLORA')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={VOLCANIC_BENCH}
                altText="Image 1" 
                isOpen={modalOpen && projectData === VOLCANIC_BENCH}
                onOpen={() => openModal('VOLCANIC_BENCH')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={PHOTOGRAPHY}
                altText="Image 1" 
                isOpen={modalOpen && projectData === PHOTOGRAPHY}
                onOpen={() => openModal('PHOTOGRAPHY')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={PASTURE_GRASSES}
                altText="Image 1" 
                isOpen={modalOpen && projectData === PASTURE_GRASSES}
                onOpen={() => openModal('PASTURE_GRASSES')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={GRADUATION_PHOTOGRAPHY}
                altText="Image 1" 
                isOpen={modalOpen && projectData === GRADUATION_PHOTOGRAPHY}
                onOpen={() => openModal('GRADUATION_PHOTOGRAPHY')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={COLLECTING_CLEANING_CUTTING}
                altText="Image 1" 
                isOpen={modalOpen && projectData === COLLECTING_CLEANING_CUTTING}
                onOpen={() => openModal('COLLECTING_CLEANING_CUTTING')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={PARAMETRIC_QUARRY}
                altText="Image 1" 
                isOpen={modalOpen && projectData === PARAMETRIC_QUARRY}
                onOpen={() => openModal('PARAMETRIC_QUARRY')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={GEOLOGIC_JOINERY}
                altText="Image 1" 
                isOpen={modalOpen && projectData === GEOLOGIC_JOINERY}
                onOpen={() => openModal('GEOLOGIC_JOINERY')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={RURAL_GSD}
                altText="Image 1" 
                isOpen={modalOpen && projectData === RURAL_GSD}
                onOpen={() => openModal('RURAL_GSD')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={NATIVE_PLANT_PRINTS}
                altText="Image 1" 
                isOpen={modalOpen && projectData === NATIVE_PLANT_PRINTS}
                onOpen={() => openModal('NATIVE_PLANT_PRINTS')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={KENTUCKY_PHOTOGRAPHY}
                altText="Image 1" 
                isOpen={modalOpen && projectData === KENTUCKY_PHOTOGRAPHY}
                onOpen={() => openModal('KENTUCKY_PHOTOGRAPHY')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={CUSTOM_3D_PRINT_TOOLPATH}
                altText="Image 1" 
                isOpen={modalOpen && projectData === CUSTOM_3D_PRINT_TOOLPATH}
                onOpen={() => openModal('CUSTOM_3D_PRINT_TOOLPATH')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={GEOLOGIC_JOINERY_II}
                altText="Image 1" 
                isOpen={modalOpen && projectData === GEOLOGIC_JOINERY_II}
                onOpen={() => openModal('GEOLOGIC_JOINERY_II')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={WEDDING}
                altText="Image 1" 
                isOpen={modalOpen && projectData === WEDDING}
                onOpen={() => openModal('WEDDING')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={SACRAMENTO}
                altText="Image 1" 
                isOpen={modalOpen && projectData === SACRAMENTO}
                onOpen={() => openModal('SACRAMENTO')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={ROCK_PEOPLE}
                altText="Image 1" 
                isOpen={modalOpen && projectData === ROCK_PEOPLE}
                onOpen={() => openModal('ROCK_PEOPLE')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={WEDDING_02}
                altText="Image 1" 
                isOpen={modalOpen && projectData === WEDDING_02}
                onOpen={() => openModal('WEDDING_02')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={COUNCIL_DATA_PROJECT}
                altText="Image 1" 
                isOpen={modalOpen && projectData === COUNCIL_DATA_PROJECT}
                onOpen={() => openModal('COUNCIL_DATA_PROJECT')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={OIL_PAINTINGS}
                altText="Image 1" 
                isOpen={modalOpen && projectData === OIL_PAINTINGS}
                onOpen={() => openModal('OIL_PAINTINGS')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={BOOTAY_PLANTER}
                altText="Image 1" 
                isOpen={modalOpen && projectData === BOOTAY_PLANTER}
                onOpen={() => openModal('BOOTAY_PLANTER')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
        </div>

        <div className="row row-container">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={TRAVEL_PHOTOGRAPHY}
                altText="Image 1" 
                isOpen={modalOpen && projectData === TRAVEL_PHOTOGRAPHY}
                onOpen={() => openModal('TRAVEL_PHOTOGRAPHY')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={TATTOOS}
                altText="Image 1" 
                isOpen={modalOpen && projectData === TATTOOS}
                onOpen={() => openModal('TATTOOS')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
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
          <div className="col-12 col-sm-6 col-md-4 mb-4"></div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <ImageWithModal 
                projectData={CONCRETE_BALLET}
                altText="Image 1" 
                isOpen={modalOpen && projectData === CONCRETE_BALLET}
                onOpen={() => openModal('CONCRETE_BALLET')}
                onClose={() => closeModal()} 
                loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Misc;