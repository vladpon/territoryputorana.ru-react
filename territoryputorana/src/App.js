
import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/Main';
import Lama3d from './pages/Lama3d/Lama3d';
import ToursPage from './pages/ToursPage/ToursPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />  
        <Routes>          
          <Route path = '/' Component={Main} />
          <Route path = '/Lama3d' Component={Lama3d} />
          <Route path = '/tours' Component={ToursPage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
