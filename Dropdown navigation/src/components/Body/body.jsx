import React from 'react'
import BackP from "../images/image-hero-desktop.png"
import "./body.css"

function Body() {
  return (
    <div className='wrapperB'>
        <div><img src={BackP}/></div>
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
            <button>Learn more</button>
        </div>
    </div>
  )
}

export default Body