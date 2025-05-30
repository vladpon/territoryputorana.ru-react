
import './styles.scss'
import './_const.scss'

import { Link, Navigate, Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';

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
// import Weekend from './pages/Weekend/Weekend'
import Camping from './pages/Camping/Camping'
import SkiTour from './pages/SkiTour/SkiTour'
import Trailrunning from './pages/Trailrunning/Trailrunning'
import AboutPage from './pages/AboutPage/AboutPage';
import Helicopter from './pages/Helicopter/Helicopter'
import Jar from './pages/Jar/Jar'
import Heliski from './pages/Heliski/Heliski'
import Gallery from './pages/Gallery/Gallery'
import Island from './pages/Island/Island';
import Locations from './pages/Locations/Locations';
import FeedBackPage from './pages/FeedBackPage/FeedBackPage';
import LostWaterfalls from './pages/LostWaterfalls/LostWaterfalls';
import Privacy from './pages/Privacy/Privacy';



import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SnowRide from './pages/SnowRide/SnowRide';
import LamaProj from './pages/LamaProj/LamaProj'
import Arctic from './pages/Arctic/Arctic';
import AdminPage from './pages/AdminPage/AdminPage';
import { Helmet } from 'react-helmet';
import Test3d from './pages/test3d/Test3d';
import HeliTour from './pages/HeliTour/HeliTour';
import ArcticExpeditions from './pages/ArcticExpeditions/ArcticExpeditions';
import Tolstorog from './pages/Tolstorog/Tolstorog';
import Zaton from './pages/Zaton/Zaton';
import Expedition from './pages/Expedition/Expedition';
import ThankYou from './pages/ThankYou/ThankYou';
import PutoranaTrails from './pages/PutoranaTrails/PutoranaTrails';
import Skilama from './pages/Skilama/Skilama';




function App() {
  
  return (
    <>  
      <BrowserRouter>
        <Helmet>
          
          <title>Территория Путорана</title>
          <meta name="description" content="Побывать на плато Путорана и воплотить свою мечту о покорении Севера! Своими глазами увидеть уникальные горы без вершин, грандиозные каньоны и величественные водопады. Активные летние туры, вертолетные экскурсии, скитур, фрирайд, хелиски."/>
        </Helmet>
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
          {/* <Route path = '/weekend' Component={Weekend} /> */}
          <Route path = '/camping' Component={Camping} />
          <Route path = '/skitour' Component={SkiTour} />
          <Route path = '/about' Component={AboutPage} />
          <Route path = '/trailrunning' Component={Trailrunning} />
          {/* <Route path = '/helicopter' Component={Helicopter} /> */}
          <Route path = '/lostwaterfalls' Component={LostWaterfalls} />
          <Route path = '/jar' Component={Jar} />
          <Route path = '/heliski' Component={Heliski} />
          <Route path = '/photo' Component={Gallery} />
          <Route path = '/sr' Component={SnowRide} />
          <Route path = '/lamaproj' Component={LamaProj} />
          <Route path = '/arctic' Component={Arctic} />
          <Route path = '/fb' Component={FeedBackPage} />
          <Route path = '/NotFound' Component={NotFound} />
          <Route path = '*' Component= {NotFound} status={404}/>
          <Route path = '/admin' Component= {AdminPage} />
          <Route path = '/helitour' Component={HeliTour} />
          <Route path = '/arcticexpeditions' Component={ArcticExpeditions} />
          <Route path = '/tolstorog' Component={Tolstorog} />
          <Route path = '/zaton' Component={Zaton} />
          <Route path = '/expedition' Component={Expedition} />
          <Route path = '/putoranatrails' Component={PutoranaTrails} />
          <Route path = '/skilama' Component={Skilama} />
          <Route path = '/thankyou' Component={ThankYou} />
          <Route path = '/privacy' Component={Privacy} />

          <Route path = '/test' Component= {Test3d} />

        </Routes>
        <Footer />
      </BrowserRouter>
       
    </>
  );
}

export default App;
