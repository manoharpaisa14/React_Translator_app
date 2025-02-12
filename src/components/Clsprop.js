import React from 'react'

class Clsprop extends React.Component{
    render(){
        return <h1>Name: {this.props.username} from {this.props.location} </h1>
    }
}

export default Clsprop