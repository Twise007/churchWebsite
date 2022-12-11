import React from 'react'
import { Box } from '../styles/Box';
import '../styles/service.css';
import Pic4 from '../data/pic4.jpg';
import Pic5 from '../data/pic5.jpg';
import Pic6 from '../data/pic6.jpg';

const Service = () => {
  return (
    <div className="min-h-screen" id='service'>
    <Box >
      <div className="serviceCard">
        <div className="hero min-h-screen py-0" style={{ backgroundImage: `url(${Pic4})`}}>
        <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold">Pray Request</h1>
      <p className="mb-5" style={{color:'#f5f5f5'}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Let intercede for you</button>
    </div>
    </div>
        </div>
      </div>
    
      <div className="serviceCard">
        <div className="hero min-h-screen py-0" style={{ backgroundImage: `url(${Pic5})`}}>
        <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold">Share Testimonies</h1>
      <p className="mb-5" style={{color:'#f5f5f5'}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Let Rejoice with you</button>
    </div>
    </div>
        </div>
      </div>

      <div className="serviceCard">
        <div className="hero min-h-screen py-0" style={{ backgroundImage: `url(${Pic6})`}}>
        <div className="hero-overlay bg-opacity-50"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold">Invest in lord's work</h1>
      <p className="mb-5" style={{color:'#f5f5f5'}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Donate here</button>
    </div>
    </div>
        </div>
      </div>
    </Box>
    </div>
  )
}

export default Service