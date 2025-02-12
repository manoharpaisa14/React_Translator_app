import React, { useRef } from 'react'

const Dom = () => {
    const inputRef = useRef();
    
    const update = () =>{
        inputRef.current.style.padding = "10px";
        inputRef.current.style.color = "Red";
        inputRef.current.value = "Manohar";

        inputRef.current.focus();
    }
    
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter text'/>
       <button onClick={update}>Update</button>
    </div>
  )
}

export default Dom
