import React from 'react'
import { Box } from '../styles/Box';

const cardData = {
    data:
    [
      {id: '1', imageName: 'pic1.jpg', visit:'on map',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?', 
      title:'Locate Us'},
      {id: '2', imageName: 'pic3.jpg', visit:'more about us', 
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?'
      , title:'More about Us'},
      {id: '3', imageName: 'pic2.jpg', visit:'join us',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?'
      ,title:'Join Us'},
    ]
};

const About = () => {
  return (
    <div id="about">
      <div className="min-h-screen py-12" style={{background:"#F2F2F2"}}>
        <div className="hero text-center">
            <div className="max-w-md">
                <h5 className="text-2xl font-bold" style={{color:"#6419E6"}}>Welcome to</h5>
                <h1 className="text-5xl font-bold">House of Glory</h1>
                <p className="py-3" >Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
    <Box className='space-x-4'>
    {cardData.data.map((item, index) => (
      <div className="card w-96 glass m-2">
        <figure><img src={`/images/${item.imageName}`} alt="car"/></figure>
        <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.desc}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{item.visit}</button>
            </div>
        </div>
      </div>
    ))}
    </Box>
      </div>
    </div>
  )
}

export default About