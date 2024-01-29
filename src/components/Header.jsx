import React, { useState } from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="row">
        <div className="col-sm-3 header-cell">
          <Link to='/' className="custom-padding-left link" style={{color: 'white'}}>ARCHITECTURE</Link>
        </div>
        <div className="col-sm-3 header-cell">
          <Link to='/misc' className="link" style={{color: 'white'}}>MISC</Link>
        </div>
        <div className="col-sm-3 header-cell">
          <Link to='/portfolio' className="link" style={{color: 'white'}}>PORTFOLIO</Link>
        </div>
        <div className="col-sm-3 header-cell">
          <Link to='/about' className="link" style={{color: 'white'}}>WHO IS SHE</Link>
        </div>
        </div>
      </div>
        
    </>
  );
};

export default Header;