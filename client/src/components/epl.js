import React from "react";
import styles from './epl.css';
var chelseaLose = require('../assets/chelseaNoCheck.png');
var arsenalWin = require('../assets/arsenalGreenCheck.png');

const EPL = () => {
    return(
            <><div className= {styles.winner}>
                <div>
                    <img src={chelseaLose} alt="Chelsea Lose"/>
                </div>
            </div>
            
            <div className="winningTeam">
                <div>
                    <img src ={arsenalWin} alt = "Arsenal Win"/>
                </div>
            </div></>
    )
}
export default EPL;