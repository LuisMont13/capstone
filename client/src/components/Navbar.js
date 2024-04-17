import NavbarCSS from "./Navbar.module.css";

var logo = require('../assets/logo.png');


function Navbar(){

    return(
        <>
       
            <header>
               <h3><a href="index.html" class="logo"><img className={NavbarCSS.img} src={logo} alt="logo"></img></a></h3>

                <nav>
                    <a href="/index.html">Home</a>
                    <a href="/mlb">MLB</a>
                    <a href="/nba">NBA</a>
                    <a href="/epl">EPL</a>

                </nav>


            </header>
    
        
        
        
        </>
    )
}

export default Navbar;