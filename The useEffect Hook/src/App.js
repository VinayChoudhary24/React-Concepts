import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  //On Every render
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  // //On First Render/Mount only!-- componentdidmount ALTERNATIVE
  // useEffect(() => {
  //   // 
  // }, []) //PASS dependancr ARRAY

  // //On First Render + whenever Dependancy changes!-- componentdidupdate ALTERNATIVE
  // useEffect(() => {
  //   console.log(`the name changed: ${name}`)
  // }, [name]) //Here we can PASS a VARIABLE, STATE, PROPS.....

  // //Follows the same rules except this handles unmounting on a component-- conponentwillUnmount ALTERNATIVE
  // useEffect(() => {
  //   window.addEventListener("resize", updateWindowWidth);
  //   return () => {
  //     // when component unmounts, this cleanup code runs
  //     window.removeEventListener("resize", updateWindowWidth);
  //   };
  // }, []);

  const updateWindowWidth =  () => {
    setWindowWidth(window.innerWidth)
  }

  return (
    <div>
      <center>
            <h1>The useEffect hook</h1>
            <h2>The window width is: {windowWidth}</h2>

            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter a name"
            />
        </center>
    </div>
  );
}

export default App;
