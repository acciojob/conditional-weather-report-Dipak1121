
import React from "react";
import './../styles/App.css';

const App = ({temp, condition}) => {
  let divStyle = {
    color: "blue",
  }

  if(temp > 20){
    divStyle.color = "red";
  }
  return (
    <div>
        <p><span style={divStyle}>Temperature: {temp}</span></p>
        <p>Conditions: {condition}</p>
    </div>
  )
}

export default App
