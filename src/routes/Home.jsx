import React from "react";
import { Link } from "react-router-dom";
import HomeContOne from "./HomeContOne";
import HomeContTwo from "./HomeContTwo";
import HomeContThree from "./HomeContThree";
import './css/home.css'

function Home(){
    return <div className="Home">
        <header>
            <span className="logo"><h1>Mylinkstree</h1></span>
            <div><Link to="./login"><button className="login-btn">Login</button></Link>
            <Link to="./register"><button className="signup-btn">Sign up free</button></Link></div>
        </header>
        
        <HomeContOne />
        <HomeContTwo />
       <HomeContThree />
       <footer>
        <div className="footname">
            <h1>Mylinkstree..</h1>
        </div>
       </footer>
    </div>
}
export default Home;