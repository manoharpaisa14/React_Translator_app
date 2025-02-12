import React from 'react'

const And = (props) => {

    const mails = props.mails
  return (
    // <div>
    //   {(props.age >=18) 
    //   && <h3>user is eligible to vote</h3>}
    // </div>
    <div>
        {mails.length > 0 && <h2>you have {mails.length} unread notifications</h2>}
    </div>
  )
}

export default And
