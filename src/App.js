import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import ContactUs from './routes/ContactUs';
import './index.css'

function App() {
  return (
   <>
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact-us" element={<ContactUs />} />
    
  </Routes>
   </>
  );
}

export default App;

