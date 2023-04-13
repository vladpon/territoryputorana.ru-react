
import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/MainPage/Main';
import Sec from './components/Sec';
import Lama3d from './pages/Lama3d/Lama3d';


function App() {
  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path = '/' Component={Main} />
          <Route path = '/Sec' Component={Sec} />
          <Route path = '/Lama3d' Component={Lama3d} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
