import React from "react";
import './nba.css';

var pistonsLose = require('../assets/pistonsNoCheck.png');
var raptorsWin = require('../assets/raptorsGreenCheck.png');
const NBA = () => {
    return(
        <><div className="losingTeam">
        <div>
            <img src={pistonsLose} alt="Yankees Lose" />
        </div>
    </div>
    
    <div className="winningTeam">
        <div>
            <img src ={raptorsWin} alt = "Red Sox Win"/>
        </div>
    </div></>
    )
}
export default NBA