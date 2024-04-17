import React from "react";
import NbaCSS from './nba.module.css';
var pistonsLose = require('../assets/pistonsNoCheck.png');
var raptorsWin = require('../assets/raptors.png');
var versus = require('../assets/versus.png');
var backgroundbasketball = require('../assets/basketballBackground.png');
const NBA = () => {
    return(
        <>
         <div className="background">
            <img className={NbaCSS.img0} src={backgroundbasketball} alt="Basketball Court"></img>
        </div>
        <h1 className={NbaCSS.h1}>Today's NBA Matchup (4/17/2024):</h1>
    <body>
        <div className="losingTeam">
            <div>
                <a href = "https://www.basketball-reference.com/teams/DET/2024.html" target="_blank" rel="nooepner noreferrer">
                <img className={NbaCSS.img} src={pistonsLose} alt="Pistons Lose"></img></a>
                <figcaption className={NbaCSS.figcaption}> Detroit Pistons (14-68)<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: 59</figcaption>
            </div>
        </div>
        
        <div className="versus"> 
            <div>
                <img className={NbaCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        
        </div>
        <div className="winningTeam">
            <div>
            <a href = "https://www.basketball-reference.com/teams/TOR/2024.html" target="_blank" rel="nooepner noreferrer">
            <img className={NbaCSS.img2} src ={raptorsWin} alt = "Raptors Win"/>
            </a>
            <figcaption className={NbaCSS.figcaption1}> Toronto Raptors (25-57) <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: 65</figcaption>
            </div>
        </div>
    </body>
        </>
    )
}
export default NBA