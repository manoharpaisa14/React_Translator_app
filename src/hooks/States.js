import React, { useState } from 'react'

const States = () => {

    const [count,setNum] = useState(0);

   const updateCount = () => {
    setNum(count => count+1);
    setNum(count => count+1);
    setNum(count => count+1);
    
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={updateCount}>+</button>
    </div>
  )
}

export default States
