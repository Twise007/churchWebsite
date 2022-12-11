import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    < div style={{background:"#000"}}>
    <footer className="footer p-10 text-neutral-content">
        <div>
            <h1 className='text-2xl font-bold'>HOG</h1>
            <p style={{color:'#fff'}}>House of Glory.
                <br/>00 Ibrahimu Alli street, Ladi-Lak Bariga
                <br /> Gbagada, Lagos State, Nigeria 
                <br/><br/><h1>Est Since 2010</h1>
            </p>
        </div> 
        <div>
            <span className="footer-title" style={{color:"#fff"}}>Social</span> 
                <div className="grid grid-flow-col gap-4" style={{fontSize:"20px", color:"#fff"}}>
                  <a href='facebook.com'><FaFacebook /></a>
                  <a href='twitter.com'><FaTwitter /></a>
                  <a href='facebook.com'><FaFacebook /></a>
                </div>
            </div>        
    </footer>
    <footer className="footer footer-center p-4 text-base-content" style={{borderTop:"1px solid"}}>
    <div>
      <p style={{color:'#fff', }}>Copyright © 2022 - All right reserved by House of Glory Ministry</p>
    </div>
    <a href="teetech.netlify.net">TeeTech</a>
  </footer>
  </div>
  )
}

export default Footer