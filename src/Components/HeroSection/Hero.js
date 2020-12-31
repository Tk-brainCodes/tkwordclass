import React from 'react'
import './Herosection.css';
import thankgod from './hero-image.png'

const Hero = () => {
    return (
        <div className="Herosection__">
            <div className="introduction__">
            <div className="image">
            </div>
                <h3 className="contentIntro__">
                    Eboreime ThankGod
                </h3>
                <h1 className="remark__"> AMAZING, <b className="react">React</b></h1>
                <h1 className="developer__">FRONT END DEVELOPER</h1>
                <button className="btn__">RESUME</button>
            </div>
        </div>
    )
}

export default Hero;
