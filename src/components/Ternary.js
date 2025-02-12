import React from 'react'

function Ternary(props) {
  return (
    <>
    <h3>TERNARY</h3>
    <div>
      {props.isLogged ? "Logged in" : "Logged out"}
    </div>
    </>
  )
}

export default Ternary
