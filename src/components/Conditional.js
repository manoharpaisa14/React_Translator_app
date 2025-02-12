import React from 'react'

const Conditional = (props) =>{
   
            if(props.isLogged){
              return   <h1>you are logged in<button onClick={props.Login}>Login</button></h1>
            }else{
                return <h1>you are logged out<button onClick={props.Logout}>Logout</button></h1>
            }
    }

export default Conditional
