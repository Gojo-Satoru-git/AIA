import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import People from './Pages/People/People';
import Projects from './Pages/Projects/Projects';
import Placements from './Pages/Placements/Placements';
import Events from './Pages/Events/Events';
import Symposium from './Pages/Symposium/Symposium';
import Gallery from './Pages/Gallery/Gallery';
import Achievements from './Pages/Achievements/Achievements';
import GalleryView from './Pages/Gallery/GalleryView';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/symposium" element={<Symposium />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/people" element={<People />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery/:folderTitle" element={<GalleryView />} />
      </Routes>

      <Footer />
    </Router>
  );
}
