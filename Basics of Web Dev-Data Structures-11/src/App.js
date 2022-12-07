import { useEffect, useState } from "react";



function App() {
  //Declare Variable & Use Array Destructuring
  const [name, setName] = useState("Vinay");
  const [age, setAge] = useState(28);

  //REplacement for ComponentDidMount
  useEffect(() => {
    console.log("I Mounted!!!");
  }, []);

  return(
    <div>
      {/*Using JSX*/}
      <h1>I am {name}, my age is {age} years, FUNCTIONAL</h1>
      {/*Using Arrow Function*/}
      <button onClick={() => (setAge(age + 100)) (setName("VC"))}>Make me 100 years Older</button>
    </div>
  );
}

export default App;


//------------------------------------------------------
//--------------LOG-IN PAGE-----------------------------
//-----------------------------------------------------------

// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const signIn =  (e) => {
//     document.write(`You Are Signed-In`)
//   }
//   return(
//     <div>

//       <form>
//       <input 
//       type="text" 
//       placeholder="Enter email" 
//       value={email}  
//       onChange={(e) => setEmail(e.target.value)} 
//       />
//       <input 
//       type="text" 
//       placeholder="Enter password" 
//       value={password} 
//       onChange={(e) => setPassword(e.target.value)} 
//       />
//       <button type="submit" onClick={signIn}>Sign-In</button>
//       </form>
      
//     </div>
//   );
// }
// export default App;








