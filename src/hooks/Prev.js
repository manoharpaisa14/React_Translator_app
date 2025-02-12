import React, { useEffect, useRef, useState } from 'react'

const Prev = () => {

    const [count,setCount] =  useState(0);
    const prevCount = useRef();

    // const [name,setName] = useState("manohar");
    // const prevName = useRef();
    
    useEffect(() => {
        prevCount.current = count;
        // prevName.current = name;
    }, [count]);
   
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>PrevState:{prevCount.current}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      
      {/* <h1>PrevName:{name}</h1>
      <h1>PrevName:{prevName.current}</h1>
      <button onClick={() => setName("manu")}>Change</button> */}
    </div>
  )
}

export default Prev
