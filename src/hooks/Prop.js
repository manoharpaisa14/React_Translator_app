import React, { useEffect, useState } from 'react'

const Prop = ({ name }) => {

    const [greet,setGreet] = useState('');
      
    useEffect(() =>{
        if(name){
            setGreet(`Hello ${name}`)
        }else{
            setGreet("Hello guest");
        }

    },[greet])

    

  return (
    <div>
      {greet}
    </div>
  )
}

export default Prop
 