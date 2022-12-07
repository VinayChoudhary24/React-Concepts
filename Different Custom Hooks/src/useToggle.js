// //Toggle Meaning:- switch from one effect, feature, or state to OPPOSITE by using a toggle.

// //This Hook is used to show and hide modal, show more/show less text, open/close side menu.
 
// // Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite. It's useful when we want to take some action into it's opposite action.

// import { useCallback, useState } from 'react';

// // Usage
// function App() {
//     // Call the hook which returns, current value and the toggler function
//     const [isTextChanged, setIsTextChanged] = useToggle();
    
//     return (
//         <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
//     );
// }
// // Hook
// // Parameter is the boolean, with default "false" value
// const useToggle = (initialState = false) => {
//     // Initialize the state
//     const [state, setState] = useState(initialState);
    
//     // Define and memorize toggler function in case we pass down the component,
//     // This function change the boolean value to it's opposite value
//     const toggle = useCallback(() => setState(state => !state), []);
    
//     return [state, toggle]
// }

