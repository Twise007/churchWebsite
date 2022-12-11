import React, { useState } from 'react';
import '../styles/navbar.css';

const MobileNav = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <div className='mobileBox'>
        <label className="btn btn-circle swap swap-rotate" style={{color:"#fff", background:"#000"}}>
            <input type="checkbox" onClick={()=>setToggle(!toggle)} />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>  
        </label>
        {toggle ? 
            <ul className="menu  w-56" id='nav'>
                <li onClick={()=>setToggle(false)} ><a href="#about"><p>About us</p></a></li>
                <li onClick={()=>setToggle(false)} ><a href="#service"><p>Our Services</p></a></li>
                <li onClick={()=>setToggle(false)} ><a href="#testimonies"><p>Testimonies</p></a></li>
                <li onClick={()=>setToggle(false)} ><a href="#ministers"><p>Our Ministers</p></a></li>
                <li onClick={()=>setToggle(false)} ><a href="#event"><p>Up coming event</p></a></li>
            </ul>
        : null}

        {/*<button onClick={()=>setToggle(!toggle)}>
        <FaBars />
        </button>
        <button onClick={()=>setToggle(true)}>o</button>
        <button onClick={()=>setToggle(false)}>c</button>*/}
    </div>
  )
}

export default MobileNav