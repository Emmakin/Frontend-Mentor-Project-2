import React from 'react'
import BackP from "../images/image-hero-desktop.png"
import BackP2 from "../images/image-hero-mobile.png"
import "./body.css"
import Databiz from "../images/client-databiz.svg"
import Audio from "../images/client-audiophile.svg"
import Meet from "../images/client-meet.svg"
import Maker from "../images/client-maker.svg"

function Body() {
  return (
    <div className='wrapperB'>
        <div>
            <picture>
                <source srcSet={BackP2} media="(max-width: 375px)"/>
                <img src={BackP}  alt='image'/>
            </picture>
        </div>
        <div className='bodyW'>
            <div className='mainT'>
                <h1>
                    <p>Make</p>
                    <p>remote work</p>
                </h1>
            </div>
            <div className='bodyT'>
                <p>Get your team in sync, no matter your location</p>
                <p>Streamline processes, create tean rituals, and</p>
                <p>watch productivity soar.</p>
            </div>
            <button><strong>Learn more</strong></button>
            <div className='bodyF'>
                <img src={Databiz}></img>
                <img src={Audio}></img>
                <img src={Meet}></img>
                <img src={Maker}></img>
            </div>
        </div>
    </div>
  )
}

export default Body