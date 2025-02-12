import React from 'react'

const Switch = (props) => {
  
    const isLogged = props.isLogged;
    const isAdmin = props.isAdmin;
    
    switch(true){
        case isLogged && isAdmin:
        return <h2>Welcome Admin</h2>

        case !isLogged && !isAdmin:
        return <h2>Welcome user</h2>

        case !isLogged:
        return <h2>Please Login</h2>
    }
}

export default Switch
