import React from "react";
import { Link } from "react-router-dom";

function HomeContThree(){
    return (
        <div className="homeContThree">
            <div className="title-one title-three">
                <h1>Share your Linktree anywhere you like!</h1>
                <p>Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
                <Link to="./register"><button>Get started for free</button></Link>
            </div>
            <div className="image-one image-three">
            <img src={require('./img14.png')} />
            </div>
        </div>
    )
}
export default HomeContThree;
//<img src={require('./sec.png')} />