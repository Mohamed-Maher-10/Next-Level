import React, {useState , useEffect} from 'react'

export default function DarkModeBtn() {

    const [ dark , setDark ] = useState(
        JSON.parse(localStorage.getItem("dark")) || false
    )

    const darkMode = () => {
    setDark(prevDark => !prevDark);
    console.log(dark)
    };
    

    useEffect(() => {
        if(dark)
        {
            document.body.classList.remove("dark")
        }else{
            document.body.classList.add("dark")
        }
        localStorage.setItem("dark" , JSON.stringify(dark))
    } , [dark])

  return (
    <div>
      <button className="theme-toggle-btn" onClick={darkMode} aria-label="Toggle Theme">
        {dark ? <span className="theme-icon sun">🌙</span> : <span className="theme-icon moon">☀️</span>}
      </button>
    </div>
  )
}
