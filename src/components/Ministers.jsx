import React from 'react'
import { Box } from '../styles/Box';

const cardData = {
    data:
    [
      {id: '1', imageName: 'pic4.jpg',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?', 
      name:'Ibitayo Sadiku'},
      {id: '2', imageName: 'pic5.jpg',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?', 
      name:'John Doe'},
      {id: '3', imageName: 'pic6.jpg',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?',
      name:'Jane Doe'},
      {id: '5', imageName: 'pic4.jpg',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?'
      ,name:'John Emma'},
      {id: '5', imageName: 'pic6.jpg',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit rerum, id architecto unde sequi suscipit?'
      ,name:'John Doe'},
    ]
};

const Ministers = () => {
  return (
    <div className="min-h-screen py-12" style={{background:"#F2F2F2"}} id="ministers">
        <div className="hero text-center">
            <div className="max-w-md">
                <h1 className="text-3xl font-bold">Some of our Ministers</h1>
                <p className="py-3" >Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
        <Box className='space-x-4'>
        {cardData.data.map((item, index) => (
        <div className="card w-96 bg-base-100 shadow-xl" style={{background:"#fff", borderRadius:"0", margin:"10px"}}>
        <figure>
            <img src={`/images/${item.imageName}`} alt="ministers" style={{borderRadius:"50%", width:"20rem", height:"20rem", paddingTop:"10px"}} />
        </figure>
        <div className="card-body items-center text-center" style={{borderTop:"1px solid", margin:"10px", paddingTop:"10px"}}>
            <h2 className="card-title">{item.name}</h2>
            <p>{item.desc}</p>
            </div>
        </div>
        ))}
        </Box>
    </div>
  )
}

export default Ministers