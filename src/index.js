import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import App from './App';
import About from './components/About';
import Herobox from './components/Herobox';
import Navbar from './components/Navbar';
import Service from './components/Service';

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
    </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
