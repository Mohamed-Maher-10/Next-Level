import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // الحركة تكون ناعمة وانسيابية مش مفاجئة
  });
};

  return (
    
      
      <nav className='nav'>
        <h2><Link onClick={scrollToTop} to="/"><img className='logo' src={logo} alt="logo" /></Link></h2>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#sign">Sign Now</a></li>
        </ul>
      </nav>

    
  )
}
