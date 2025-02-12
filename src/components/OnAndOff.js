import React from 'react'

class OnAndOff extends React.Component{
    constructor(){
        super();
        this.state ={ status:true };
    }

    toggleStatus = ()=>{
        this.setState({
            status : !this.state.status
        })
    }

    render(){
        return(
            <>
            {this.state.status ? 
             <button onClick={this.toggleStatus}>ON</button>
             :
             <button onClick={this.toggleStatus}>OFF</button>
            }
           
            </>
        )
    }

}
export default OnAndOff