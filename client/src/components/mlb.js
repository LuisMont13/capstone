import React from "react";
import MlbCSS from "./mlb.module.css";

var yankeesLose = require('../assets/yankeesNoCheck.png');
var redSoxWin = require('../assets/redsoxGreenCheck.png');
var versus = require('../assets/versus.png')
var baseballBack = require('../assets/baseballBackground.png');

const MLB = () => {
    return(
        <>
         <div className="background">
            <img className={MlbCSS.img0} src={baseballBack} alt="Baseball Field"></img>
        </div>

        <h1 className={MlbCSS.h1}>Today's MLB Matchup (4/17/2024):</h1>
       
        <div className="losingTeam">
            <div>
                <a href = "https://www.baseball-reference.com/teams/NYY/2024.shtml" target="_blank" rel="nooepner noreferrer">
                <img className={MlbCSS.img} src={yankeesLose} alt="Yankees Lose"></img></a>
                <figcaption className={MlbCSS.figcaption}> New York Yankees (11-7)<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: 86</figcaption>
            </div>
        </div>
        
        <div className="versus"> 
            <div>
                <img className={MlbCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        
        </div>
        <div className="winningTeam">
            <div>
            <a href = "https://www.baseball-reference.com/teams/BOS/2024.shtml" target="_blank" rel="nooepner noreferrer">
            <img className={MlbCSS.img2} src ={redSoxWin} alt = "Red Sox Win"/>
            </a>
            <figcaption className={MlbCSS.figcaption1}> Boston Red Sox (9-8)<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: 72</figcaption>
            
            </div>
        </div></>
    )
}
export default MLB