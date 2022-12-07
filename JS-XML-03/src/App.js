//1.We Keep a Saperate File for CSS
import "./App.css";

//1.In Create-React-App, we don't have to WRITE .JSX, infact it INTERPRETS .JS file as a .JSX FILE, Where we can code HTML and JS Together.
function App() {

  //1.This is JavaScript
  const name = 'Vinay';
  
  //2.Evaluating Conditions with Ternary Operator in JSX
  const isMale = 'true';

  //3. Create a function inside another function Using html, js
  function getGreeting(user) {
    if(user) {
      return <h3>I am {user}!</h3>;
    }
    return <h3>Hello, Stranger...</h3>; 
  }

  return (

    //1.Here, <div> is the HTML-UI Logic
    //1.Now, this is JSX i.e We can use JS INSIDE our html Code with the Help of the CURLY BRACES {}, we PUT the JS Variable inside the {name}
    <div className="app">

      {/*3. Render the Function */}
      {getGreeting('Vinay')}

      <h1>Hello, {name}</h1>

      {/* 2.Render the Ternary Operator Here*/}
      <h2>you are a {isMale ? 'Male' : 'Female'}</h2>

    </div>
  );
}

export default App;
