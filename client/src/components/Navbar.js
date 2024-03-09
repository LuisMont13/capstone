import "./Navbar.css";

var logo = require('../assets/logo.png');

function Navbar(){
    return(
        <>
        <nav>
            <a href = "index.html"><img src = {logo} alt = "logo"/> </a> 
            
            <div>
                <ul> 
                    <li><a href="index.html">Home</a></li>
                    <li><a href="/nba">NBA</a></li>
                    <li><a href="/mlb">MLB</a></li>
                    <li><a href="/epl">EPL</a></li>
                </ul>
            </div>
        </nav></>
    )
}

export default Navbar;