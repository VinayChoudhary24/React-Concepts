import { useState } from "react";
import "./App.css";
import useRandomQuote from "./useRandomQuote";
import FlipMove from "react-flip-move";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const quote = useRandomQuote([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="app">
      <div className="app__quote">
        <center>
            <h1>Quote</h1>
            <p>{quote}</p>
        </center>
      </div>

      <h1 className="app__todo">TODO</h1>

      <form>
        <input
          placeholder="type todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="app__button" type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

      <h4>list of TODO's:-</h4>

      <FlipMove>
        {todos.map((todo, idx, todos) => (
          <p>
            <button className="app__delete" >Delete todo</button>
            {idx} : {todo}
            <button className="app__update" >Completed</button>
          </p>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
