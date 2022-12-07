import React, { useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {
    
  //8- Create a useref(it Points to the Value, so there are no unneccessary re-renders) Hook for the firstName and lastName
  const firstNameRef = useRef(null); //most of the time null
  const lastNameRef = useRef(null);

  //7-Create a Variable to store firstName and lastName and Setters to  take the value from input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //Usage of the Custom Hook(Using a useEffect Hook and refactoring it) , store it in a variable
  const joke = useRandomJoke(firstName, lastName);

  //10- Create function onClick event
  const generateJoke = (e) => {
    e.preventDefault(); //Stop the Refresh
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>

        {/*6- Create a <form> for two input fields fName and lName, also put the button inside the Form */}
        <form> 
          {/*9- use useRef here and onClick event to the button */}
          {/*//How to use a useRef and incorporating it into the custom hook */}
          <input placeholder="type firstname" ref={firstNameRef} />
          <input placeholder="type secondname" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>

        {/*3- Render the Joke With JSX */}
        <h2>{joke}</h2>
      </center>
    </div>
  );
}

export default App;
