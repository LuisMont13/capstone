import React from "react";
import NbaCSS from './nba.module.css';
var heatLose = require('../assets/heatNoCheck.png');
var celticsWin = require('../assets/celticsGreenCheck.png');
var versus = require('../assets/versus.png');
var backgroundbasketball = require('../assets/basketballBackground.png');
const NBA = () => {
    const teamData = [
        {
            Team:"Miami Heat",
            Wins: 46,
            Losses: 36,
            PPG: 110.1,
            REB: 42.3,
            APG: 25.8,
            ASTTO:2.2,
            FG: 46.5,
            ThreePP: 37,
            FTP: 81.8,
            SRS: 1.1,
            Pace: 96.2,
            NetRTG: 1.8,
            TOP: 11.7,
            ORTG: 114,
            DRTG: 112.2,
            STL: 7.5,
            BLK: 3.4

        },

        {
            Team: "Boston Celtics",
            Wins: 64,
            Losses: 18,
            PPG: 120.6,
            REB: 46.3,
            APG: 26.9,
            ASTTO:2.4,
            FG: 48.7,
            ThreePP: 38.8,
            FTP: 80.7,
            SRS: 10.74,
            Pace: 97.2,
            NetRTG: 11.6,
            TOP: 11.3,
            ORTG: 123.2,
            DRTG: 111.6,
            STL: 6.8,
            BLK: 6.6
        }
        
    ];

    const calculateTeamScore = (team) => {
        let totalPoints = 0;
    
        // Assign points based on stats
        totalPoints += team.Wins * 0.05;
        totalPoints += team.Losses * -0.1;
        totalPoints += team.PPG * 0.1;
        totalPoints += team.REB * 0.08;
        totalPoints += team.APG * 0.08;
        totalPoints += team.ASTTO * 0.07;
        totalPoints += team.FG * 0.07;
        totalPoints += team.ThreePP * 0.07;
        totalPoints += team.FTP * 0.06;
        totalPoints += team.SRS * 0.15;
        totalPoints += team.Pace * 0.06;
        totalPoints += team.NetRTG * 0.1;
        totalPoints += team.TOP * -0.05;
        totalPoints += team.ORTG * 0.2;
        totalPoints += team.DRTG * 0.2;
        totalPoints += team.STL * 0.06;
        totalPoints += team.BLK * 0.05;
    
        // Ensure total points do not exceed 100
        totalPoints = Math.round(totalPoints);
        totalPoints = Math.min(totalPoints, 100);
    
        return totalPoints;
    };
    return(
        <>
         <div className="background">
            <img className={NbaCSS.img0} src={backgroundbasketball} alt="Basketball Court"></img>
        </div>
        <h1 className={NbaCSS.h1}>Today's NBA Matchup (5/1/2024):</h1>
    <body>
        <div className="losingTeam">
            <div>
                <a href = "https://www.basketball-reference.com/teams/MIA/2024.html" target="_blank" rel="noopener noreferrer">
                <img className={NbaCSS.img} src={heatLose} alt="Heat Lose"></img></a>
                <figcaption className={NbaCSS.figcaption}> Miami Heat ({teamData[0].Wins}-{teamData[0].Losses})<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score: {calculateTeamScore(teamData[0])}</figcaption>
            </div>
        </div>
        
        <div className="versus"> 
            <div>
                <img className={NbaCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        
        </div>
        <div className="winningTeam">
            <div>
            <a href = "https://www.basketball-reference.com/teams/BOS/2024.html" target="_blank" rel="noopener noreferrer">
            <img className={NbaCSS.img2} src ={celticsWin} alt = "Celtics Win"/>
            </a>
            <figcaption className={NbaCSS.figcaption1}> Boston Celtics ({teamData[1].Wins}-{teamData[1].Losses}) <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall score:{calculateTeamScore(teamData[1])}</figcaption>
            </div>
        </div>
    </body>
        </>
    )
}
export default NBA