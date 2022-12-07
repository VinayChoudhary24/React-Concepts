//it is a Correct way to define variables in react
//it also allows us to have some memory the the components

import React, { useState } from 'react';

function App() {

  //IMPORTANT:- here we set the variable with useState so it behaves the way we want
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1)
  };
  

  return (
    <div>
      <h1>Counter App</h1>
      <p>the cpunt is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App;