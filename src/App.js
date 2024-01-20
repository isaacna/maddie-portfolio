import './styles/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'popper.js';
import Architecture from './routes/Architecture';
import Misc from './routes/Misc';
import Portfolio from './routes/Portfolio';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div id="main">
      {/* Header */}
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
          <a href="about.html" style={{color: 'white'}}>WHO IS SHE</a>
        </div>
        </div>
      </div>

      <main>
        <Routes>
          <Route path='/' element={<Architecture/>} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='misc' element={<Misc />} />
        </Routes> 
      </main>

    {/* Footer  */}
     <div className="footer-bar">
       <div className="row">
         <div className="col-sm-6 footer-cell"><span className="custom-padding-left">MADELEINE FARRER</span></div>
         <div className="col-sm-6 footer-cell">TELLING STORIES OF NICE FUTURES AND NICE PEOPLE</div>
       </div>
     </div>
     </div>
    </HashRouter>
  );
}

export default App;
