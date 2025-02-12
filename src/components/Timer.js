import React from 'react'

class Timer extends React.Component{
    constructor(){
        super();
        this.state ={ count: 0}
    }
    tick = ()=>{
        this.setState({count : this.state.count +1})

    }

    componentDidMount(){
      this.id =  setInterval(this.tick,1000)
    }
     stopTimer = () =>{
        clearInterval(this.id)
     }
     resetTimer = ()=>{
        this.setState({ count:0 })
     }
     restartTimer = ()=>{
         this.stopTimer();
         this.id = setInterval(this.tick,1000);
     }
    render(){
        return(
           <>
           <h1>Timer:{this.state.count}</h1>
           <button className = 'btn btn-danger ' onClick={this.stopTimer}>Stop Timer</button>
           <button className = 'btn btn-primary ' onClick={this.resetTimer}>Reset Timer</button>
           <button className = 'btn btn-success' onClick={this.restartTimer}>Restart Timer</button>
           </>
        )
    }
}
export default Timer