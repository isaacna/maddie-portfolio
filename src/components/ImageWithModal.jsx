// ImageWithModal.js
import React from 'react';
import '../styles/style.css'
import { Modal } from 'react-bootstrap';
import Parser from "html-react-parser";

const ImageWithModal = ({ projectData, isOpen, onOpen, onClose }) => {
    const [fullscreen, setFullscreen] = React.useState(true);
  
    React.useEffect(() => {
      setFullscreen(true);
    }, [isOpen]);

  return (
    <>
      <img id="modal1"  onClick={onOpen} src={projectData.thumbnail} alt="" className="mx-auto d-block image-grid"/>
      <Modal show={isOpen} fullscreen={fullscreen} onHide={onClose}>        
        <Modal.Body className="modal-body">
          <div>
            <span className="project-header"><strong>{projectData.name}</strong></span>
            <span className="project-header"><strong>{projectData.header1}</strong></span>
            <span className="project-header"><strong>{projectData.header2}</strong></span>
            <br />
            {projectData.text.map((text) => (
              <React.Fragment>
                <span className="project-header">{Parser(text)}</span>
                <br />
              </React.Fragment>
            ))}
          </div>
          {projectData.images.map((image, index) => (
            <React.Fragment key={index}>
              {image.endsWith('.MOV') ? (
                <video controls>
                  <source src={image} type="video/quicktime" className="modal-image"/>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="modal-image"
                />
              )}
            </React.Fragment>
            ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageWithModal;