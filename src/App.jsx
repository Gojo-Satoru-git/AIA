import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/symposium" element={<div>Symposium Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/people" element={<div>People Page</div>} />
        <Route path="/placements" element={<div>Placements Page</div>} />
        <Route path="/events" element={<div>Events Page</div>} />
        <Route path="/achievements" element={<div>Achievements Page</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}