import './styles/style.css'
// import './js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'popper.js';
import shellyImage from './assets/container/shelly.png';

const HelloWorld = () => {
  return (
    <div>Hello Bro</div>
  );
};


function App() {
  return (
    <div id="main">
      {/* Header */}
      <div className="header-bar">
        <div className="row">
        <div className="col-sm-3 header-cell">
          <a href="about.html" className="custom-padding-left" style={{color: 'white'}}>ARCHITECTURE</a>
        </div>
        <div className="col-sm-3 header-cell">
          <a href="about.html" style={{color: 'white'}}>MISC</a>
        </div>
        <div className="col-sm-3 header-cell">
          <a href="files/Farrer_Portfolio Sept 2023.pdf" target="_blank" style={{color: 'white'}}>PORTFOLIO</a> 
        </div>
        <div className="col-sm-3 header-cell">
          <a href="about.html" style={{color: 'white'}}>WHO IS SHE</a>
        </div>
        </div>
      </div>

      {/* Grid */}
      <div className="modal-body">
        <div className="container-fluid">  
          <div className="row">
            <div className="col-md-4 ml-auto">
              <img id="modal1" src={shellyImage} alt="wha" className="mx-auto d-block image-grid"/>
            </div>
            <div className="col-md-4 ml-auto">
              <img id="modal2" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
            <div className="col-md-4 ml-auto">
              <img id="modal3" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 ml-auto">
              <img id="modal4" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
            <div className="col-md-4 ml-auto">
              <img id="modal5" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
            <div className="col-md-4 ml-auto">
              <img id="modal6" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
          </div>
          <div id="test"></div>

          <div className="row">
            <div className="col-md-4 ml-auto">
              <img id="modal7" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
            <div className="col-md-4 ml-auto">
              <img id="modal8" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
            <div className="col-md-4 ml-auto">
              <img id="modal9" src={shellyImage} alt="" className="mx-auto d-block image-grid"/>
            </div>
          </div>
        </div>
      </div>


    {/* Footer  */}
    <div className="footer-bar">
      <div className="row">
        <div className="col-sm-6 footer-cell"><span className="custom-padding-left">MADELEINE FARRER</span></div>
        <div className="col-sm-6 footer-cell">TELLING STORIES OF NICE FUTURES AND NICE PEOPLE</div>
      </div>
    </div>
    </div>
  );
}

export default App;
