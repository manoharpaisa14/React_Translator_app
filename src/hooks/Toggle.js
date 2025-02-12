import React, { useState } from 'react'

const Toggle = () => {
    const [darkmode, setDarkMode] = useState(false)

  return (
    <div>
        <div className={
            `p-5 ${darkmode ? "bg-black text-white " :
                "bg-white text-black"
            }` 
        }>
            MANOHAR

        </div>
       
       <button onClick={()=> setDarkMode(!darkmode)}>
       {darkmode ? "light " : "dark"}
       </button>
    </div>
  )
}

export default Toggle
