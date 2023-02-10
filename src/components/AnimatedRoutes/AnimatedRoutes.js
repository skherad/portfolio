import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "../../pages/Home/Home";
import Projects from "../Projects/Projects";
import ProjectPage from "../../pages/ProjectPage/ProjectPage";
import ContactPage from "../../pages/ContactPage/ContactPage";

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
    <Routes key={location.pathname} location={location}> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:projectId" element={<ProjectPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes