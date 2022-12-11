import React from 'react';
import './index.css';
import Herobox from './components/Herobox';
import About from './components/About';
import Service from './components/Service';
import Testimonies from './components/Testimonies';


function App() {
  return (
   <div>
    <Herobox />
    <About />
    <Service />
    <Testimonies />
   </div>
  );
}

export default App;
