import React, { useState } from "react";
import "./App.css";

function App() {
  //2.Now we need to add whatever we enter in the input form i.e in a list, for this purpose we create a state
  const [todos, setTodos] = useState([]); //Passnempty array as a default value for lists.

  //4.create a state for what user type in the  input form, we will use this input and setInput with the input form
  const [input, setInput] = useState("");

  //6. function for event in the field
  const addTodo = (e) => {

    //7. still the page will Re-fresh when we enter, so add Preventdefault to the event
    e.preventDefault(); //this prevents RE-FRESH

    //use spread operator to take all the values before the latest one
    setTodos([...todos, input]);
    //add setInput("") empty so that whenever the button is pressed the field is cleared
    setInput("");
  }

  return (
    <div className="app">
      <h1>Welcome to my TODO List</h1>

      {/*7.now we want to register the value by clicking ENTER on the keyboard, for this add <form> i.e put the <input> and <button> inside the <FORM> and add type ="submit" to button */}
      <form>
        {/*1.Create input form */}
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
      {/*5.Assign value={input} to input form, this will CONNECT the input form with the input useState above && Add onChange Event to the form so that it changes/sets the value to the Particular event(e), target is the Field, value is the typed text */}

      {/*add a button to input */}
      <button type="submit" onClick={addTodo}>Add todo</button>
      {/*6. add onClick event for the button to register the input value, create a function for this */}
      </form>

      {/*3.Render the Lists for todo Here, with the help of MAP function, it can take upto three parameters but we pass just 1 i.e whats inside the todos array i.e todo and we will not use curly braces{} beacuse we don't have to return instead we use parenthesis() */}
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}

    </div>
  );
}

export default App;

//-----------------------------------------------------------------

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
