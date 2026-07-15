import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import DarkModeBtn from './Components/DarkModeBtn/DarkModeBtn'

function App() {

  return (
    <>

      <Navbar />

      <DarkModeBtn />

      <Home />
    
      <Footer />

    </>
  )

 
}

export default App
