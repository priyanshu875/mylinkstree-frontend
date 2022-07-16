import React from "react";
import {Link} from 'react-router-dom';
function HomeContTwo(){
    return (
        <div className="homeContTwo">
            <div className="image-one image-two ">
            <img src={require('./img12.png')} />
            </div>
            <div className="title-two title-one">
                <h1>Create and customize your bio link in minutes</h1>
                <p>Connect your socials, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
                <Link to="./register"><button>Get started for free</button></Link>
            </div>
            
        </div>
    )
}
export default HomeContTwo;