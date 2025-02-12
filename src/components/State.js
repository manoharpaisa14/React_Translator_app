import React from 'react'

class State extends React.Component {
     state = {
        username:'Manu',
        age: 23
     }

     updateName =()=>{
        this.setState({ username:'manohar' })
     }
    render(){
        return(
            <>
            <h1>Name:{this.state.username}</h1>
            <h1>Age:{this.state.age}</h1>
            <button onClick={this.updateName}>Change Name</button>
            </>
        )
    }
}
export default State