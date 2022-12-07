import "./App.css";

import Header from "./Header";

function App() {
  return (

    /* BEM--Block Element Modifier.
       RULES:- DO NOT GO TWO-LEVELS-DEEP
       <h2 className ="app__header__title"></h2> */

    //BEM Naming Convention(Channge App => app)
    //1.Here BLOCK,  "app" is BLOCK(component in React)
    <div className="app">

      {/*2.This is a Header component to Understand the benefit of BEM */}
      <Header /> {/*Press CTRl + Space keys to Import file */}

      {/*1.here ELEMENT, <h1> "app__title" is ELEMENT(headings in React) */}
      <h1 className="app__title">This is title</h1>

      {/*1.Here MODIFIER, "app__title--large/small" is MODIFIER(Variants in React) */}
      {/*1. <h1 className="app__title--large">This is large title</h1>
      <h2 className="app__title--small">This is small title</h2> */}

    </div>
  );
}

export default App;
