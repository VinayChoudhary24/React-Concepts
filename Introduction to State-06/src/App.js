import React, { useState } from "react";
import "./App.css";

// BUILDING A COUNTER APP WITH FUNCTIONAL COMPONENT
function App() {

  //Create a Count Variable and Setter with the Help of useState HOOK
  const [count, setCount] = useState(0); //This the way of Defining Variables in React

  //Create Two Functions for the Increment and Decrement Buttons
  const Increment = () => {
    setCount(count + 1); //this will REFRESH/UPDATE the page when Clicked
  }
  const Decrement = () => {
    setCount(count - 1);
  }
  return (
    <div className="app">
      <h1>Welcome to my Counter App</h1>
      <p>The Count is: {count}</p>

      {/*Add two Buttons for INCREMENT and DECREMENT */}
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
      {/*After creating function add onClick Event to the Buttons */}

    </div>
  );
}

export default App;

//------------------------------------------------------------

// import React, { Component } from "react";
// // import "./App.css";

// //BUILDING COUNTER APP WITH CLASS COMPONENT
// class App extends Component{
//   connstructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
 
//   Increment = () => {
//     this.setState((previousState) => ({

//       //In Class Based Components whenever we update a value, we need to use a Previous state in ARGUMENTS. so it is not triggered Unneccessarily somewhere else i.e Dont use (this.state.count)
//       count: previousState.count + 1,
//     }));
//   };

//   Decrement = () => {
//     this.setState((previousState) => ({
//       count: previousState.count - 1,
//     }));
//   };

//   render() {
//     return(
//       <div>
//         {/*Here Everything remains the same just the ADDITION of THIS KEYWORD */}
//         <h1>Welcome to my Counter App</h1>
//         <p>The count is:  {this.state.count}</p>
//         <button onClick={this.Decrement}>-</button>
//         <button onClick={this.Increment}>+</button>
//       </div>
//     );
//   }
// }

// export default  App;