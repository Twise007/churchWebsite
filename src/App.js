import React from 'react';
import './index.css';
import Herobox from './components/Herobox';
import About from './components/About';
import Service from './components/Service';
import Testimonies from './components/Testimonies';
import Ministers from './components/Ministers';


function App() {
  return (
   <div>
    <Herobox />
    <About />
    <Service />
    <Testimonies />
    <Ministers />
   </div>
  );
}

export default App;
