import {  Routes, Route, useLocation } from "react-router-dom";
import HeroImgCanvas from "./components/hero-section/Herosection";
import { AnimatePresence } from "framer-motion";
import Service from "./components/service/Service";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/nav/Nav";
function App() {
  const location=useLocation()
  return (
    <>
    <Nav/>
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.key}>
          <Route path="/" element={<HeroImgCanvas/>}/>
          <Route path="/service" element={<Service/>}/>
      </Routes>
            
    </AnimatePresence>
    </>
  );
}

export default App;


