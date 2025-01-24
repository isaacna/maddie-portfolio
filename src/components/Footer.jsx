import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="footer-bar">
      <div className="row">
        <div className="col-sm-12 footer-cell">
            <span className="custom-padding-left bold-font">
              <Link to='/about' className="link" style={{color: 'black'}}>
                MADELEINE FARRER
              </Link>
            </span>
          </div>
      </div>
    </div>
    </>
  );
};

export default Footer;