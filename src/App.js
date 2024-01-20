import './styles/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'popper.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Architecture from './routes/Architecture';
import Misc from './routes/Misc';
import Portfolio from './routes/Portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Architecture />,
  },
  {
    path: "misc/",
    element: <Misc />,
  },
  {
    path: "portfolio/",
    element: <Portfolio />,
  }
]);

function App() {
  return (
    <div id="main">
      {/* Header */}
      <div className="header-bar">
        <div className="row">
        <div className="col-sm-3 header-cell">
          <a href={`/`} className="custom-padding-left" style={{color: 'white'}}>ARCHITECTURE</a>
        </div>
        <div className="col-sm-3 header-cell">
          <a href={`/misc`} style={{color: 'white'}}>MISC</a>
        </div>
        <div className="col-sm-3 header-cell">
          <a href={`/portfolio`} style={{color: 'white'}}>PORTFOLIO</a> 
        </div>
        <div className="col-sm-3 header-cell">
          <a href="about.html" style={{color: 'white'}}>WHO IS SHE</a>
        </div>
        </div>
      </div>

    <RouterProvider router={router} />

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
