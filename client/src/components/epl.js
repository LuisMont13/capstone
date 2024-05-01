import React from "react";
import EplCSS from "./epl.module.css";
var chelseaWin = require('../assets/chelseaNoCheck.png');
var tottenhamLose = require('../assets/tottenhamNoCheck.png');
var versus = require('../assets/versus.png')
var background = require('../assets/soccerBackground.png');

const EPL = () => {
    const teamData = [
        {
            Team:"Tottenham",
            Wins:16,
            Draws: 6,
            Losses: 9,
            Goals: 62,
            Assists: 51,
            YellowCards:81,
            RedCards: 4,
            ShotsonTargetPer: 5.30,
            XG: 57.8,
            PassCMP: 85.2,
            GCAPer90: 3.27,
            TKLPercent: 52.6,
            GoalsAllowed: 52
        },
    
        {
            Team:"Chelsea",
            Wins:13,
            Draws: 9,
            Losses: 11,
            Goals: 62,
            Assists: 40,
            YellowCards:101,
            RedCards: 3,
            ShotsonTargetPer: 4.82,
            XG: 63.9,
            PassCMP: 85.5,
            GCAPer90: 3.36,
            TKLPercent: 52,
            GoalsAllowed: 59



        }
    ];

    const calculateTeamScore = (team) => {
        let totalPoints = 0;
    
        // Assign points based on stats
        totalPoints += team.Wins * 0.5;
        totalPoints += team.Draws * 0.2;
        totalPoints += team.Losses * -1;
        totalPoints += team.Goals * 0.8;
        totalPoints += team.Assists * 0.6;
        totalPoints += team.YellowCards * -0.2;
        totalPoints += team.RedCards * -0.5;
        totalPoints += team.ShotsonTargetPer * 0.3;
        totalPoints += team.XG * 0.1;
        totalPoints += team.PassCMP * 0.1;
        totalPoints += team.GCAPer90 * -0.05;
        totalPoints += team.TKLPercent * 0.05;
        totalPoints += (100 - team.GoalsAllowed) * 0.1; // Inversely proportional to Goals Allowed
    
        // Ensure total points do not exceed 100
        totalPoints = Math.round(totalPoints);
        totalPoints = Math.min(totalPoints, 100);
    
        return totalPoints;
    };
    

    return(
        <>
        <div className="background">
            <img className={EplCSS.img0} src={background} alt="Soccer Field"></img>
        </div>
        
        <h1 className={EplCSS.h1}>Next Upcoming EPL Matchup (5/2/2024):</h1>
        

        <div className="losingTeam">
            <div>
                <a href = "https://fbref.com/en/squads/361ca564/Tottenham-Hotspur-Stats" target="_blank" rel="nooepner noreferrer">
                <img className={EplCSS.img} src={tottenhamLose} alt="Tottenham Lose"></img></a>
                <figcaption className={EplCSS.figcaption}> Tottenham ({teamData[0].Wins}-{teamData[0].Draws}-{teamData[0].Losses})<br></br>&nbsp;Overall score:{calculateTeamScore(teamData[0])} </figcaption>
            </div>
        </div>
        
        <div className="versus"> 
            <div>
                <img className={EplCSS.versus} src = {versus} alt = "Versus Logo"/>
            </div>
        </div>
    
        <div className="winningTeam">
            <div>
            <a href = "https://fbref.com/en/squads/cff3d9bb/Chelsea-Stats" target="_blank" rel="nooepner noreferrer">
            <img className={EplCSS.img2} src ={chelseaWin} alt = "Chelsea Win"/>
            </a>
            <figcaption className={EplCSS.figcaption1}> Chelsea ({teamData[1].Wins}-{teamData[1].Draws}-{teamData[1].Losses}) <br></br>Overall score:{calculateTeamScore(teamData[1])}</figcaption>
            
        </div>

        </div> </>
    )
}
export default EPL;