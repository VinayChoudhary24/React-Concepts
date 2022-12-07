// Perform side-Effects on a functional component
import { useEffect, useState } from "react";


//Function
function App() {
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");

  //CASE 1-- On Every render
  //in the input box if the user types, it will render this whenever the user user types
  //on every render case we dont use the second array of arguments[dependancy]
  useEffect(() => {
    console.log("i re-rendered");
  }); //it returns -i re-rendered

  //CASE 2-- On First Render/Mount Only
  //in the input box it will only render for the first load.
  //on the very first render we use the dependancy[]
  useEffect(() => {
    //the component mounted
  }, []); //it returns -the component mounted & with every key pressed it it returns -i re-rendered

  //CASE 3-- On first Render + whenever dependancy changes/update
  //here whenever the dependancy changes it will render this
  useEffect(() => {
    console.log(`the post changed: ${post}`);
  }, [post]); //it returns -the component mounted & with every press it returns -i re-rendered, -the post changed

  //CASE 4-- follows the same rule, except this handles the unmounting on a component!
  useEffect(() => {
    //we unmounted
  }, []); //it returns -the component mounted and with every press it returns - we unmounted, -i re-rendered, -the post changed

return (
  <div className="app">
    <center>
      <h1>useEffect Hook</h1>
      <input value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter email" />
    </center>
  </div>
);
}