// ImageWithModal.js
import React, { useState } from 'react';
import '../styles/style.css'
import { Modal } from 'react-bootstrap';
import Parser from "html-react-parser";

const ImageWithModal = ({ projectData }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow() {
      setFullscreen(true);
      setShow(true);
    }
  

  return (
    <>
      <img id="modal1"  onClick={handleShow} src={projectData.thumbnail} alt="" className="mx-auto d-block image-grid"/>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>        
        <Modal.Body className="modal-body">
          <div>
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
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="modal-image"
              />
            </React.Fragment>
            ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageWithModal;