import './App.css';
import Login from "./components/Login"

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import NetflixLogo from "./components/NetflixLogo"
import Header from './components/Header';
import Latest from './components/Latest';
import "./index.css";
import SinglePage from './components/SinglePage';

function App() {
  return (
    <div className="App bg-black" >

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={ <>    { /*<NetflixLogo />  */} { <Home /> }  </>} />
          <Route path='/:id' exact element ={<SinglePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

