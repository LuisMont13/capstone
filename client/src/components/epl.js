import React from "react";
import EplCSS from "./epl.module.css";
var chelseaLose = require('../assets/chelseaNoCheck.png');
var arsenalWin = require('../assets/arsenalGreenCheck.png');
var versus = require('../assets/versus.png')
var background = require('../assets/soccerBackground.png');

const EPL = () => {
    return(
        <>
        <div className="background">
            <img className={EplCSS.img0} src={background} alt="Soccer Field"></img>
        </div>
        
        <h1 className={EplCSS.h1}>Today's EPL Matchup (4/17/2024):</h1>
        

        <div className="losingTeam">
            <div>
                <a href = "https://fbref.com/en/squads/cff3d9bb/Chelsea-Stats" target="_blank" rel="nooepner noreferrer">
                <img className={EplCSS.img} src={chelseaLose} alt="Chelsea Lose"></img></a>
                <figcaption className={EplCSS.figcaption}> Chelsea (13-8-10)<br></br>&nbsp;Overall score: 81</figcaption>
            </div>
        </div>
        
        <div className="versus"> 
            <div>
                <img className={EplCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        </div>
    
        <div className="winningTeam">
            <div>
            <a href = "https://fbref.com/en/squads/18bb7c10/Arsenal-Stats" target="_blank" rel="nooepner noreferrer">
            <img className={EplCSS.img2} src ={arsenalWin} alt = "Arsenal Win"/>
            </a>
            <figcaption className={EplCSS.figcaption1}> Arsenal (22-5-5) <br></br>Overall score: 92</figcaption>
            
        </div>

        </div> </>
    )
}
export default EPL;