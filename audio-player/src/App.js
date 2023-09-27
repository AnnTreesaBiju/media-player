import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';


function App() {
  return (
    <div>
      {/* for routnig :- we must wrap all contents inside:-Routes */}
      <Routes>
        {/* for set path:- must place components inside:-Route:- (a self closing tag) */}
        {/* /:- localhost */}
        <Route path='/' element={<LandingPage />} />
        {/* /home:-next path */}
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
