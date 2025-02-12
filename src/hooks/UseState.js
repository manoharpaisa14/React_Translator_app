import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState('black')
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
      <br/>
      <h1>color:{color}</h1>
      <button onClick={()=> setColor('blue')}>Color change</button>
    </div>
  )
}

export default UseState
