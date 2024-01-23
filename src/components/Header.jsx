import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="row">
        <div className="col-sm-3 header-cell">
          <a href={'/'} className="custom-padding-left" style={{color: 'white'}}>ARCHITECTURE</a>
        </div>
        <div className="col-sm-3 header-cell">
          <Link to='/misc' style={{color: 'white'}}>MISC</Link>
        </div>
        <div className="col-sm-3 header-cell">
          <Link to='/portfolio' style={{color: 'white'}}>PORTFOLIO</Link>
        </div>
        <div className="col-sm-3 header-cell">
          <Link to='/about' style={{color: 'white'}}>WHO IS SHE</Link>
        </div>
        </div>
      </div>
        
    </>
  );
};

export default Header;