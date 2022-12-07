// import React, { useEffect, useState } from "react";
// import "./App.css";

// //Two Most Important Rules for HOOKS:--(CALL ORDER is ESSENTIAL for hooks to WORK Correctly, CALL ORDER must Remain CONSISTENT and PREDICTABLE)
// function App() {
//   const [todos, setTodos] = useState([]); //calling useState HOOK at the TOP level
//   const [input, setInput] = useState("");
//   const [randomNo, setRandomNo] = useState(Math.floor(Math.random() * 100));

//   //#1)Only call hooks (useState and useEffect) at the TOP level:-
//   //   -This means dont call hooks inside loops, conditions or nested functions--If we call them inside the LOOP, CONDITIONS or Nested Functions it will BREAK the CALL ORDER for hooks
//   //   -Always use hooks at the TOP level of the React Function
//   //   -By following this Rule, we Ensure hooks are called in the same order each time a component renders
//   //   -This allows react to correctly Preserve the state of hooks between useState / useEffect calls
  
//   //BAD-- This will Break the Call Order
//   if (randomNo > 50) {
//     const [test, setTest] = useState("Whoops!")
//   };
//   //GOOD- this will Not break Call Order
//   const [test,  setTest] = useState("Whoops!");

//   //BAD-- Condition must go inside the useEffect
//   if (randomNo < 50) {
//     useEffect(() => {
//       console.log("render");
//     });
//   }
//   //GOOD-- conditions inside theuseEffect
//   useEffect(() => {
//     if (randomNo < 50) {
//       console.log("render");
//     }
//   })

//   //BAD-- no Nested Function
//   const testing = () => {
//     useEffect(() => {
//       console.log("render");
//     });
//   }
//   //GOOD-- Function inside the useEffect
//   useEffect(() => {
//     const testing = () => {
//       console.log("render");
//     };
//     testing();
//   });

// //#2)Don't Call Hooks from regular JS Functions:-   
// //   -Call Hooks from React Functional-Components.
// //   -Call hooks from Custom Hooks



// //   const addTodo = (e) => {

// //     e.preventDefault(); //this prevents RE-FRESH

// //     setTodos([...todos, input]);
// //     setInput("");
// //   }

// //   return (
// //     <div className="app">
// //       <h1>Welcome to my TODO List</h1>

// //       <form>
// //       <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
// //       <button type="submit" onClick={addTodo}>Add todo</button>
// //       </form>
// //       {todos.map((todo) => (
// //         <p>{todo}</p>
// //       ))}

// //     </div>
// //   );
// // }

// // export default App;


//--------------Practice with INDEX--------------------------------------
//-------------------------------------------------------------------------
// import React, { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const addTodo = (e) => {
//     e.preventDefault();
//     setTodos([...todos, input]);
//     setInput("");
//   }
//   return (
//     <div>
//       <h1>Welcome to my TODO list</h1>

//       <form>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         type="text"
//       />
//       <button type="submit" onClick={addTodo}>add todo</button>
//       </form>
      
//       <h2>List of todo:-</h2>
//       {todos.map((todo, idx) => (
//         <p>{idx}: {todo}</p>
//       ))}
//     </div>
//   );
// }

// export default App;
