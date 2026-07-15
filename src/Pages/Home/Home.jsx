import React from 'react'
import Header from '../../Components/Header/Header'
import CourseCard from '../../Components/CourseCard/CourseCard'

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'

export default function Home() {
  return (
    <div id='home'>
        
        <Header />

      <div id='courses'>
        <CourseCard logo={logo1} title="Basic of Front End Web Development" desc="Kickstart your tech journey and master the core building blocks of the web. In this comprehensive course, you will dive into HTML5, CSS3, and JavaScript basics. You will learn how to structure, style, and bring websites to life from scratch, building a solid foundation for your future as a professional developer." />
        <CourseCard logo={logo2} title="Advanced Front End" desc="Take your coding skills to the next level and build industry-grade web applications. Master advanced JavaScript concepts, state management, and modern component-based development with React. You will learn clean architecture, performance optimization, and API integration to build ultra-fast, responsive, and dynamic web experiences." />
      </div>
      

    </div>
  )
}
