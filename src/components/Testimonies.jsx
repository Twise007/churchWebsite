import React from 'react';
import '../styles/testimonies.css'

const cardData = {
    data:
    [
      {id: '1', 
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?', 
      name:'Emmanuel Shola', location:'Lagos, Nigeria'},
      {id: '2', 
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipitLorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit??Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?', 
      name:'Anonymous', location:'Anonymous'},
      {id: '3', 
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?',
      name:'John Doe', location:'Lagos, Nigeria'},
      {id: '4', 
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipitLorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit??Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?', 
      name:'Anonymous', location:'Anonymous'},
    ]
};

const Testimonies = () => {
  return (
    <div id='testimonies' className="min-h-screen py-12 testimoniesBox" >
        <div className="hero text-center" style={{position:"relative"}}>
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">Testimonies</h1>
              <p className="py-3" style={{color:"#fff"}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
         </div>
        <div className="carousel carousel-center space-x-5 glass " style={{marginLeft:"5%"}}>
        {cardData.data.map((item, index) => (
            <div className="carousel-item glass" style={{width:"300px", height:"400px"}}>
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <h1 className="py-1 text-3xl font-bold" style={{color:"#fff"}}>{item.name}</h1>
                    <p className="py-1">{item.desc}</p>
                    <h1 className="py-1 text-1xl" style={{color:"#fff"}}><span style={{color:"#6419E6", textDecoration:"underline", paddingRight:"10px"}}>Location:</span>{item.location}</h1>
                  </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Testimonies