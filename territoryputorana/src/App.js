
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
import Trailrunning from './pages/Trailrunning/Trailrunning'
import AboutPage from './pages/AboutPage/AboutPage';
import Helicopter from './pages/Helicopter/Helicopter'
import Jar from './pages/Jar/Jar'
import Gallery from './pages/Gallery/Gallery'
import Island from './pages/Island/Island';
import Locations from './pages/Locations/Locations';

import { BrowserRouter, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SnowRide from './pages/SnowRide/SnowRide';
import LamaProj from './pages/LamaProj/LamaProj'
import Arctic from './pages/Arctic/Arctic';



function App() {
  return (
    <>  
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>          
          <Route path = '/' Component={Main} />
          <Route path = '/Lama3d' Component={Lama3d} />
          <Route path = '/island' Component={Island} />
          <Route path = '/locations' Component={Locations} />
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
          <Route path = '/trailrunning' Component={Trailrunning} />
          <Route path = '/helicopter' Component={Helicopter} />
          <Route path = '/jar' Component={Jar} />
          <Route path = '/photo' Component={Gallery} />
          <Route path = '/sr' Component={SnowRide} />
          <Route path = '/lamaproj' Component={LamaProj} />
          <Route path = '/arctic' Component={Arctic} />
          <Route path = '*' Component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
       
    </>
  );
}

export default App;
