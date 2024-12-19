
import React from "react";
import './../styles/App.css';

const namechanged = () =>{
  let input = document.getElementById("nameinput");
  let output = document.getElementById("outputdiv");
  output.innerHTML=input.value;
  
}


const App = () => {
  return (
    <div id="mainwrapper">
      <label for="nameinput">Enter your name: </label>
      <input id="nameinput" type="text" onChange={namechanged}></input>
      <div>
          Hello <div id="outputdiv" ></div>!
      </div>
    </div>
  )
}



export default App

