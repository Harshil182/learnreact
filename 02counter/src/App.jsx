import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);  
  // let counter = 0;
  const addvalue = () => {
    if(counter >= 10) {
      alert("Counter cannot exceed 10");
      return;
    }
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);    
    // same method call karaiye che aetle bunch bani jay che ne ek j vaar call thai ne overwrite thai jay 

    // aenu solution chhe k previous state use kari sakiye aene its one type of propogation  aema ek sathe 2 k 3 plus thay 

    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)

    // aama directly 3 add thase 
  };
  const removevalue = () => {
    if(counter <= 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
    
  };
  return (
    <>
      <h2 className="heading">learn about hooks and counter with example </h2>
      <p> counter value : {counter} </p>

      <button onClick={addvalue}> add value </button> <br/><br/>
      <button onClick={removevalue}> remove value </button>
    </>
  );
}

export default App;
