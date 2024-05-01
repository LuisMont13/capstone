import React from "react";
import MlbCSS from "./mlb.module.css";

var giantsLose = require('../assets/giantsNoCheck.png');
var redSoxWin = require('../assets/redsoxGreenCheck.png');
var versus = require('../assets/versus.png')
var baseballBack = require('../assets/baseballBackground.png');

const MLB = () => {
    const teamData = [
    {
        Team:"Boston Red Sox",
        Wins: 17,
        Losses: 13,
        Runs: 139,
        Hits: 247,
        Doubles: 47,
        Triples:6,
        Homeruns:36,
        Rbi: 133,
        Walks: 95,
        Strikeouts: 285,
        BattingAverage: 0.246,
        OBP: 0.319,
        SLG: 0.414,
        OPS: 0.733,
        OPSPlus: 105,
        OWAR: 4.2,
        DWAR: -0.5,
        ERA: 2.68,
        K: 254,
        SERAPlus:308,
        SOPS: .527,
        RD: 37,
        WHIP: 1.125,
        SOBB: 3.43,
        RA9: 3.64
    },

    {
        Team:"San Francisco Giants",
        Wins: 14,
        Losses: 15,
        Runs: 116,
        Hits: 234,
        Doubles: 45,
        Triples:3,
        Homeruns:27,
        Rbi: 110,
        Walks: 90,
        Strikeouts: 232,
        BattingAverage: 0.245,
        OBP: 0.311,
        SLG: 0.383,
        OPS: 0.694,
        OPSPlus: 101,
        OWAR: 3.3,
        DWAR: 0.8,
        ERA: 4.43,
        K: 215,
        SERAPlus:251,
        SOPS: .512,
        RD: -21,
        WHIP: 1.264,
        SOBB: 2.87,
        RA9: 4.71
    }

    ];
   const calculateTeamScore = (team) =>{
    let totalPoints = 0;
    totalPoints += team.Wins * .05;
    totalPoints += team.Losses * -.10;
    totalPoints += team.Runs * .05;
    totalPoints += team.Hits * .03;
    totalPoints += team.Doubles * .03;
    totalPoints += team.Triples * .02;
    totalPoints += team.Homeruns * .12;
    totalPoints += team.Rbi * .05;
    totalPoints += team.Walks * .06;
    totalPoints += team.Strikeouts * -.1;
    totalPoints += team.BattingAverage * .06;
    totalPoints += team.OBP * .1;
    totalPoints += team.SLG * .08;
    totalPoints += team.OPS * .07;
    totalPoints += team.OPSPlus * .15;
    totalPoints += team.OWAR * .20;
    totalPoints += team.DWAR * .2;
    totalPoints += team.ERA * .2;
    totalPoints += team.K * .08;
    totalPoints += team.SERAPlus * .07;
    totalPoints += team.SOPS * .06;
    totalPoints += team.RD * .07;
    totalPoints += team.WHIP * .08;
    totalPoints += team.SOBB * .06;
    totalPoints += team.RA9 * .10;

    // Ensure total points do not exceed 100
    totalPoints = Math.round(totalPoints);
    totalPoints = Math.min(totalPoints, 100);
     return totalPoints;
   }
    return(

        <>
         <div className="background">
            <img className={MlbCSS.img0} src={baseballBack} alt="Baseball Field"></img>
        </div>

        <h1 className={MlbCSS.h1}>Today's MLB Matchup (5/1/2024):</h1>
       
        <div className="winningTeam">
            <div>
                <a href = "https://www.baseball-reference.com/teams/BOS/2024.shtml" target="_blank" rel="noopener noreferrer">
                <img className={MlbCSS.img} src={redSoxWin} alt="Red Sox Lose"></img></a>
                <figcaption className={MlbCSS.figcaption}> Boston Red Sox ({teamData[0].Wins}-{teamData[0].Losses})<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: {calculateTeamScore(teamData[0])}</figcaption>
            </div>
        </div>
        
        <div className="versus"> 
            <div>
                <img className={MlbCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        
        </div>
        <div className="losingTeam">
            <div>
            <a href = "https://www.baseball-reference.com/teams/SFG/2024.shtml" target="_blank" rel="noopener noreferrer">
            <img className={MlbCSS.img2} src ={giantsLose} alt = "Giants Lose"/>
            </a>
            <figcaption className={MlbCSS.figcaption1}> San Francisco Giants ({teamData[1].Wins}-{teamData[1].Losses})<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: {calculateTeamScore(teamData[1])}</figcaption>
            
            </div>
        </div></>
    )
}
export default MLB