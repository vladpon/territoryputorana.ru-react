
import './styles.scss'

import { Route } from 'react-router-dom';

import Main from './pages/MainPage/Main';
import Lama3d from './pages/Lama3d/Lama3d';
import ToursPage from './pages/ToursPage/ToursPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import PartnersPage from './pages/PartnersPage/PartnersPage';
import Tours3d from './pages/Tours3d/Tours3d';
import NotFound from './pages/NotFound/NotFound';
import TourPage from './pages/TourPage/TourPage';
import Lostput from './pages/Lostput/Lostput'
import Weekend from './pages/Weekend/Weekend'
import Camping from './pages/Camping/Camping'
import SkiTour from './pages/SkiTour/SkiTour'
import AboutPage from './pages/AboutPage/AboutPage';

import { BrowserRouter, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>  
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>          
          <Route path = '/' Component={Main} />
          <Route path = '/Lama3d' Component={Lama3d} />
          <Route path = '/tours' Component={ToursPage} />
          <Route path = '/projects' Component={ProjectsPage} />
          <Route path = '/partners' Component={PartnersPage} />
          <Route path = '/tours3d' Component={Tours3d} />
          <Route path = '/tourpage' Component={TourPage} />
          <Route path = '/lostput' Component={Lostput} />
          <Route path = '/weekend' Component={Weekend} />
          <Route path = '/camping' Component={Camping} />
          <Route path = '/skitour' Component={SkiTour} />
          <Route path = '/about' Component={AboutPage} />
          <Route path = '*' Component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
       
    </>
  );
}

export default App;
