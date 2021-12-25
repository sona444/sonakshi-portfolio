import React from 'react';
import img from '../section1.gif';

export default function Home() {
    return (
        <div className="home-section1">
            <div className="col-md-5 img">
                <img src={img} alt="image"/>
            </div>
            <div className="col-md-6 second-half">
                <p>HELLO</p>
            </div>
        </div>
    )
}
