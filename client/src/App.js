import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NBA from "./components/pages/nba";
import MLB from "./components/pages/mlb";
import EPL from "./components/pages/epl";

function App(){
  let component
  switch(window.location.pathname){
    case "/":
      component = <index />
      break
    case "/nba":
      component = <NBA />
      break
    case "/mlb":
      component = <MLB />
      break
    case "/epl":
      component = <EPL />
      break
      
  }

  return (
    <>
      <Navbar />
      {component}
    </>
  )

}
export default App;