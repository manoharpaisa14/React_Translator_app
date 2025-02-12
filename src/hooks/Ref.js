import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
     const [count, setCount] = useState(0);
     const countRef = useRef(0);

     const updateRef = () =>{
        countRef.current += 1;
     }

     useEffect(()=>{
        console.log("count updated");
     },[count]);

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>

        <h1>Ref variable count: {countRef.current}</h1>
        <button onClick={updateRef}>updateRef</button>
    </div>
  )
}

export default Ref
