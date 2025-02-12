import React from 'react'

const Status = (props) =>{
    // let clr = props.Color;
    //   if(props.status){
    //    return <h4>Status is true</h4>
    //   }
    //   else{
    //    return <h4>Status is false</h4>
    //   }

    return(
        // <h1>Color: {clr}</h1>
        <>
        <h1>{props.car.brand}</h1>
        <h1>{props.car.color}</h1>
        <h1>{props.car.model}</h1>
        </>
    )

}

export default Status
