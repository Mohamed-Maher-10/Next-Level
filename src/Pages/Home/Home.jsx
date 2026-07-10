import React from 'react'
import Header from '../../Components/Header/Header'
import CourseCard from '../../Components/CourseCard/CourseCard'

import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'

export default function Home() {
  return (
    <div>
        
        <Header />

        <CourseCard logo={logo1} title="Basic Of Front End" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quaerat ratione voluptate rem incidunt omnis amet, aliquid dicta sit veniam, minus eius architecto fuga delectus possimus maxime, labore itaque tempora ab. Nulla repudiandae eius eveniet corporis, amet culpa fuga dolor tenetur placeat ipsum facilis fugit recusandae accusantium ut quibusdam corrupti." />
        <CourseCard logo={logo2} title="Advanced Front End" desc="Welcome In Front End Course" />
      

    </div>
  )
}
