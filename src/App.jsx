import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import People from './Pages/People/People';
import Projects from './Pages/Projects/Projects';
import Placements from './Pages/Placements/Placements';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/symposium" element={<div>Symposium Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/people" element={<People />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/events" element={<div>Events Page</div>} />
        <Route path="/achievements" element={<div>Achievements Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
