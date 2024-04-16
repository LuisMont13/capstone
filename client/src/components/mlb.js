import React from "react";
import MlbCSS from "./mlb.module.css";

var yankeesLose = require('../assets/yankeesNoCheck.png');
var redSoxWin = require('../assets/redsoxGreenCheck.png');
var versus = require('../assets/versus.png')

const MLB = () => {
    return(
        <>
        
        <h1 className={MlbCSS.h1}>Today's MLB Matchup:</h1>
       
        <figure>
        <div className="losingTeam">
            <div>
                <img className={MlbCSS.img} src={yankeesLose} alt="Yankees Lose"></img>
                <figcaption className={MlbCSS.figcaption}> New York Yankees (11-7)</figcaption>
            </div>
        </div>
        </figure>

        <div className="versus"> 
            <div>
                <img className={MlbCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        
        </div>
        <div className="winningTeam">
            <div>
                <img className={MlbCSS.img2} src ={redSoxWin} alt = "Red Sox Win"/>
            </div>
        </div></>
    )
}
export default MLB