
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
    <div style={divStyle}>
        <p>Tempreature: {temp}</p>
        <p>Condition: {condition}</p>
    </div>
  )
}

export default App
