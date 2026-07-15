import React from 'react'

export default function CourseCard({ logo , title, desc }) {
  return (
    <div>
      <div className="card">
        {/* الصورة لوحدها في البداية */}
        <div className="cardImgDiv">
          <img src={logo} alt="" className="cardImg" />
        </div>
        
        {/* النصوص مجمعة بجانبها */}
        <div className="cardTextContainer">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}
