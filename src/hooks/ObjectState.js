import React, { useState } from 'react'

const ObjectState = () => {

    const [car,setCar] = useState({
        brand :"BMW",
        color:"black",
        model:"Series 5"
    });

    const updateDetails = () =>{
        setCar((prev)=> {
            return {...prev,color:"red",model:"series 4"}
        })
    }
    
  return (
    <div>
         <h1>Car brand:{car.brand}</h1>
         <h1>Car Color:{car.color}</h1>
         <h1>Car Model:{car.model}</h1>
         <button onClick={updateDetails}>Change color</button>
    </div>
  )
}

export default ObjectState
