import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="row">
        <div className="col-sm-4 header-cell">
          <span className="thin-font">
            <Link to='/' className="custom-padding-left link" style={{color: 'white'}}>ARCHITECTURE</Link>
          </span>
        </div>
        <div className="col-sm-4 header-cell">
          <span className="thin-font">
            <Link to='/misc' className="link" style={{color: 'white'}}>MISCELLANEOUS</Link>
          </span>
        </div>
        <div className="col-sm-4 header-cell">
          <span className="thin-font">
            <Link to='https://drive.google.com/file/d/1pg4JK9asNml85M6cPAqh4KZr1PaaBM1C/view' target="_blank" className="link" style={{color: 'white'}}>PORTFOLIO</Link>
          </span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;