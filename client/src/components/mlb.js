import React from "react";
import './mlb.css';

var yankeesLose = require('../assets/yankeesNoCheck.png');
var redSoxWin = require('../assets/redsoxGreenCheck.png');

const MLB = () => {
    return(
        <><div className="losingTeam">
            <div>
                <img src={yankeesLose} alt="Yankees Lose" />
            </div>
        </div>
        
        <div className="winningTeam">
            <div>
                <img src ={redSoxWin} alt = "Red Sox Win"/>
            </div>
        </div></>
    )
}
export default MLB