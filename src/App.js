
import React from 'react';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Tvshows from './components/TvShows/Tvshows';
import Movies from './components/Movies/Movies';
import Originals from './components/Originals/Originals';
import './style.css';

function App() {

  return (
    <>
      <div className={`App`}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<Tvshows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/original" element={<Originals />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
