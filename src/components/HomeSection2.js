import React from 'react';
import Typewriter from 'typewriter-effect';
import img from '../sec1.PNG';

export default function HomeSection2() {
    return (
        <div className="sectionTwo">
            <div className="webdev-content" style={{ backgroundImage: `url(${img})`,backgroundRepeat: 'no-repeat',backgroundPosition:'cover' }}>
                More or less, I am a 
                <Typewriter onInit={
                    (typewriter)=>{
                        typewriter.typeString("Web Developer!")
                        .pauseFor(2000)
                        .deleteAll()
                        .start()
                        .typeString("Software Developer!")
                        .pauseFor(2000)
                        .deleteAll()
                    }}/>
                
            </div>
            
        </div>
    )
}
