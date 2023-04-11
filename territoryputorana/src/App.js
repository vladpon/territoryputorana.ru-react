
import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/MainPage/Main';
import Sec from './components/Sec';


function App() {
  return (
    <>
      <BrowserRouter>   
        <Routes>
          <Route path = '/' Component={Main} />
          <Route path = '/Sec' Component={Sec} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
