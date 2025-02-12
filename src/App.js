//import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/navbar"
// import Header from "./components/Header"
// import Arrow from "./components/Arrow"
// import Head from "./components/head";
//  import Dashboard from './components/Dashboard';
// import Clsprop from './components/Clsprop';
// import Status from './components/Status';
// import Conditional from './components/Conditional';
// import Switch from './components/Switch';
// import And from './components/And';
// import ForEach from './components/ForEach';
// import Filter from './components/Filter';
// import State from './components/State';
// import Counter from './components/Counter'; 
//  import Lifecycle from './components/Lifecycle';
   import React from 'react';
// import Timer from './components/Timer';
// import Form from './components/Form';
// import States from './hooks/States';
// import Form from './hooks/Form';
// import Toggle from './hooks/Toggle';
// import Effect from './hooks/Effect';
// import Prop from './hooks/Prop';
// import Timer from './hooks/Timer';
// import Ref from './hooks/Ref';
// import Dom from './hooks/Dom';
// import Prev from './hooks/Prev';
// import React,{ createContext } from 'react';
//     import Parent from './hooks/Parent';
import Translator from './hooks/Translator';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>It is react</h1>
        <h2>by manu</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
 
/*
function App(){
   return (
    <div>
       <h1>hello</h1>
       <input type="text" id="fname" name="fname"/>

       <p>The sum is {7+7}</p>
    </div>
   )

}
*/

// function App(){
  //  with object
  // const car = {
  // brand : "Mercedes Benz",
  // color:"black",
  // model : "2025"
  // }
  // let arr = [1,2,3,4];
  // const mails = ['Mail', 'Manohar', 'Meeting at 10am']

  // const person = {
  //   name : "manu",
  //   age : 23,
  //   location: "india"

  // }

  // let users = [
  //   {id:1, name:"Alex",age: 20, isActive:true},
  //   {id:2, name:"Alice",age: 24, isActive:false},
  //   {id:3, name:"Sam",age: 23,isActive:true}
  // ]

  // return(
    // <>
    {/* <Navbar/>
    <Header/>
    <Arrow/>
    <Head/>
    <Status status="true"/>
    false
    <Dashboard username="manu" age={23}/>
    <Clsprop username="manohar" location="siddipet"/>
    <Status Color="black"/>
    <Status car = {car}/> */}

    {/* <Conditional isLogged = {true}
      Login={()=> alert('Logging in')}
      Logout={()=> alert('Logging out')}
        />

       < Switch isLogged={false} isAdmin={true}/> */}

       {/* <Ternary isLogged = {true}/> */}

       {/* < And age = {23}/> */}

       {/* < And mails = {mails}/> */}

       {/* <Map mails={mails} person={person}/>  */}
       
       {/* <ForEach arr={arr}/> */}

       {/* <Filter arr={users}/>       */}

        {/* <State/> */}
        {/* <Counter/> */}
        {/* <OnAndOff/> */}
        {/* <Lifecycle/> */}
    // </>
  // )
// }
// export default App;

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { dispalyComp : true}
//   }

//   render(){
//     return(
//       <>
//       {this.state.dispalyComp && <Lifecycle/>}
//       <button onClick={()=> this.setState({dispalyComp : false})}>UnMountComp</button>
//       </>
//     )
//   }
// }
   
  //  class App extends React.Component{
  //   render(){
  //     return(
  //       <>
  //        <Timer/>
  //       </>
  //     )
  //   }
  //  }
   
    //  export const Context = React.createContext();

     class App extends React.Component{
     render(){
       return(
         <>
          {/* <Form/> */}
          {/* <UseState/> */}
          {/* <States/> */}
          {/* <ObjectState/> */}
          {/* <Form/> */}
          {/* <Toggle/> */}
          {/* <Effect/> */}
          {/* <Prop name = "manu"/> */}
          {/* <Timer/> */}
          {/* <Ref/> */}
          {/* <Dom/> */}
          {/* <Prev/> */}
          {/* <Context.Provider value = {1410}>
            <Parent/>
          </Context.Provider> */}
          <Translator/>
         </>
       )
     }
    }
     
  export default App;