import React, { useState } from 'react'
import '../navbar/Navbar.css'
import { TbPerfume } from 'react-icons/tb'

function Navbar() {
  const [showMenu , setShowMenu] =useState(true);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="container navbar">
    <div className="logo">
   
    <p className='logo-text'>
      Scents <TbPerfume color='#fff' size={33}/>Stories
    </p>
    </div>
    <menu>
        <ul
          className="nav-links"
           id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>
          <li>
            <a href="#Account" className='btn btn-orange'>Account</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          {/* <li className="nav-btn">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
          </li> */}
        </ul>
      </menu>
    
    
    </nav>
  )
}

export default Navbar