import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <div>
        <header>
            <div className="headerGlowBg"></div> {/* طبقة نيون متحركة في الخلفية */}
            
            <img src={logo} alt='logo' className="heroLogo" />
            
            <p className="heroText">
              Empower Your Future With <span className="neonGlowText">Next-Generation</span> Learning
            </p>
            
            <a className="heroBtn" href='https://docs.google.com/forms/d/e/1FAIpQLScWCYu5tbKWFDge73PTSXRePVGngxlqfjWZ69Cf1Om-M5JKEg/viewform?usp=header'>Start Learning Now</a>
        </header>
    </div>
  )
}