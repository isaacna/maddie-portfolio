import './styles/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'popper.js';
import Architecture from './routes/Architecture';
import Misc from './routes/Misc';
import Portfolio from './routes/Portfolio';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // Need to use hash router: https://github.com/gitname/react-gh-pages/issues/104#issuecomment-1203373499
    <HashRouter>
      <div id="main">
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Architecture/>} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='misc' element={<Misc />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
