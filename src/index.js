import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Footer from './components/Footer';
import Herobox from './components/Herobox';
import Ministers from './components/Ministers';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Testimonies from './components/Testimonies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Herobox />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Service />} />
      <Route path="testimonies" element={<Testimonies />} />
      <Route path="ministers" element={<Ministers />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
