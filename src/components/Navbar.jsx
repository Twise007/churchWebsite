import React from 'react'
import MobileNav from './MobileNav';
import '../styles/navbar.css';

const Navbar = () => {
  return (  
  <>
    <div className="navbar  base-100" style={{top: '0px', position: 'sticky', borderBottom: '.5px solid', background:'#fff',zIndex:'10'}} >
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="#home"><p>HOG</p></a>
      </div>
      <MobileNav/>
      <div className="flex-none  navbarBox">
        <ul className="menu menu-horizontal px-1">
        <li><a href="#about"><p>About us</p></a></li>
        <li><a href="#service"><p>Our Services</p></a></li>
        <li><a href="#testimonies"><p>Testimonies</p></a></li>
        <li><a href="#ministers"><p>Our Ministers</p></a></li>
        <li><a href="#event"><p>Up coming event</p></a></li>
        </ul>
      </div>
    </div>
  </>
 )
}

export default Navbar