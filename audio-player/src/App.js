import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      {/* header and footer are common for all page so just place in the root directly */}
      <Header />

      {/* path koduknda component :- we must wrap all contents inside:-Routes */}
      <Routes>
        {/* for setup path:- must place components inside:-Route:- (a self closing tag) */}
        {/* /:- localhost */}
        <Route path='/' element={<LandingPage />} />
        {/* /home:-next path */}
        <Route path='/home' element={<Home />} />
        <Route path='/watch-history' element={<WatchHistory />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
