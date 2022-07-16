import React from "react";

import {Link} from 'react-router-dom';

function HomeContOne(){
    return (
        <div className="homeContOne">
            <div className="title-one">
                <h1>Everything you are. <br /> In one simple <br /> link.</h1>
                <p>Join 25M+ people and share everything you create, curate <br /> and sell online. All from the one link in bio.</p>
                <Link to="./register"><button>Claim you Linktree</button></Link>
            </div>
            <div className="image-one">
            {/* <Tilt> */}
                <img src={require('./img11.png')} />
            {/* </Tilt> */}
            </div>
        </div>
    )
}
export default HomeContOne;

//<img src={require('./sec.png')} />