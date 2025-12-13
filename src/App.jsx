import React, { Suspense } from 'react';
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
import { Loading } from './Pages/Home/Homeloading';
import { PlacementLoading } from './Pages/Placements/Placementloading';
import { Projectloading } from './Pages/Projects/Projectloading';
const Homelazy=React.lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(import('./Pages/Home/Home'))

    },500);
  }
  )
})
const Placementlazy=React.lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(import('./Pages/Placements/Placements'))

    },500);
  }
  )
})
const Projectlazy=React.lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(import('./Pages/Projects/Projects'))

    },500);
  }
  )
})
export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Router>
        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loading/>}>
                <Homelazy/>
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<Projectloading/>}>
                <Projectlazy/>
              </Suspense>} />
            <Route path="/symposium" element={<Symposium />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/people" element={<People />} />
            <Route path="/placements"element={
              <Suspense fallback={<PlacementLoading/>}>
                <Placementlazy count="6"/>
              </Suspense>} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/gallery/:folderTitle" element={<GalleryView />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
