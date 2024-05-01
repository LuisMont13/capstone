import NavbarCSS from "./Navbar.module.css";

var logo = require('../assets/logo.png');


function Navbar(){

    return(
        <>
       
            <header>
               <h3><a href="/mlb" class="logo"><img className={NavbarCSS.img} src={logo} alt="logo"></img></a></h3>

                <nav>
                    <a href="/mlb">MLB</a>
                    <a href="/nba">NBA</a>
                    <a href="/epl">EPL</a>
                    <a href="/workspaces/capstone/client/src/components/loginIndex.html">Login</a>
                </nav>


            </header>
    
        
        
        
        </>
    )
}

export default Navbar;