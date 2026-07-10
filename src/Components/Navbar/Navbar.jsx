import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      
      <nav className='nav'>
        <h2><Link to="/"><img className='logo' src={logo} alt="logo" /></Link></h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
      </nav>

    </div>
  )
}
