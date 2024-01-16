
import React from "react";
import './../styles/App.css';

const App = ({temp, condition}) => {
  let divStyle = {
    color: "white",
    backgroundColor: "blue"
  }

  if(temp > 20){
    divStyle.backgroundColor = "red";
  }
  return (
    <div style={divStyle}>
        <h1>Tempreature: {temp}</h1>
        <h1>Condition: {condition}</h1>
    </div>
  )
}

export default App
