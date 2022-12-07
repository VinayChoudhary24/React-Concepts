// import "./App.css";

import { Component } from "react";

// //This is a Functional Component
// function App() {
//   return (
    
//     <div className="app">
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;

//---------------------------------------------------

// import React, { Component } from 'react'

// //This is a Class Component 
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     )
//   }
// }

//-------------------------------------------------------

// //##IMPORTANT:- Transform a Class-Based to Functional Based 
// import React from 'react'
// //3.Lastly, Remove the {Component} from IMPORT

// //1.First, We can use Function Keyword OR Arrow Function const App=()=>{}
// function App () {
//   // class App extends Component {

//   //2.Second, Remove the RENDER() {} Block
//   // render() {

//     return (
//       <div>
        
//       </div>
//     )
//   }
// //2. }

// export default App;

//----------------------------------------------------------------

//##Example for the  KEY Difference b/w Functional-Based and Class-Based
//1.*HOW TO USE STATE in F.B and C.B

// //For Functional Based
// import React, { useState } from 'react'

// function App(props) {

//   //here, {name, age, isMale} are VARIABLES.
//   //{setName, setAge, setIsMale} are SETTERS for their Variables
//   const [name, setName] = useState(""); //useState is the HOOK
//   const [age, setAge] = useState(100);
//   const [isMale, setIsMale] = useState(true);

//   return (
//     <div>

//       {/*Here, {name, age, isMale} are Used to Initialized useState HOOK */}
//       <h1>My name is {name}</h1>
//       <h2>I am {age} years old</h2>
//       <h3>I am a {isMale ? "Male" : "Female"}</h3>

//       <h4>I am feeling {props.emotion}</h4>    
//     </div>
//   )
// }

// export default App

//---------------------------------------------------------

//1.*how to USE STATE in C.B
//Class-Based
import react, { component } from "react";
export default class Appclass extends component {
constructor(props) {
  super(props)
  this.state =  {
    name: "",
    age: 100,
    isMale: true,
  };
}

render() {

  //This is DESTRUCTURING
  // const {name, age, isMale} = this.state;
  
  return (
    <div>
      <h1>My name is {this.state.name}</h1>
      <h2>i am {this.state.age}</h2>
      <h3>I am {this.state.isMale ? "Male" : "Female"}</h3>
      <h4>I am felling {this.props.emotion}</h4>
    </div>
  )
}
}