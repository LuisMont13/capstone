import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NBA from "./components/nba";
import MLB from "./components/mlb";
import EPL from "./components/epl";

function App(){
  let component
  switch(window.location.pathname){
    case "/nba":
      component = <NBA />
      break
    case "/mlb":
      component = <MLB />
      break
    case "/epl":
      component = <EPL />
      break
    case "/about":
      component = <about />
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