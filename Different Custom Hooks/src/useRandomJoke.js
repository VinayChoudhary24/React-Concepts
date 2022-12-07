//This is the Custom hook for Joke Generator
import { useState, useEffect } from 'react'

//First, we Dont need Return Block forCustom Hook, we will Remove it and Import useState, useEffect
//##This is the Custom hook(it has it's own useState, useEffect)
function useRandomJoke(firstName, lastName) { //4- with parameters(firstName, lastName)

     //2- Create a Variable to Store Joke, //Piece of State to track the jokes
    const [joke, setJoke] = useState("");
  
  //1- we Fetch(GET REQUEST) the Joke from A random API with the use useEffect HOOK
  useEffect(() => {
    //async and await function because its an API call
    const fetchJoke = async () =>
      //use bectic for string interpolation
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
    //Convert the DATA in JSON Format
        .then((res) => res.json()) 

        // Gets the data from the joke
        .then((data) => {
          //2. Give setJoke the Value of Joke
          setJoke(data.value.joke);
        });
    fetchJoke();
  }, [firstName, lastName]); //5- Pass the Dependancies here i.e firstName, lastName. All this is Happening when The Component Gets MOUNT/LOADS
  
//4- Here we Return the Joke
return joke;
}

export default useRandomJoke
