import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
     const [color,setColor] = useState('black')

     useEffect(()=>{
        console.log("Component Rendered");
     })

     useEffect(()=>{
        console.log("Component Mounted");
     },[])

     useEffect(()=>{
        console.log("Component Updated Count" , count)

            return() => {
               console.log("cleanup function");
            }
        }
     )
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
        <h1>color:{color}</h1>
        <button onClick={() => setColor('white')}>change color</button>
    </div>
  )
}

export default Effect
