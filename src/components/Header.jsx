import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="row">
        <div className="col-sm-4 header-cell">
          <Link to='/' className="custom-padding-left link" style={{color: 'white'}}>ARCHITECTURE</Link>
        </div>
        <div className="col-sm-4 header-cell">
          <Link to='/misc' className="link" style={{color: 'white'}}>MISCELLANEOUS</Link>
        </div>
        <div className="col-sm-4 header-cell">
          <Link to='https://drive.google.com/file/d/1pg4JK9asNml85M6cPAqh4KZr1PaaBM1C/view' target="_blank" className="link" style={{color: 'white'}}>PORTFOLIO</Link>
        </div>
        </div>
      </div>
        
    </>
  );
};

export default Header;