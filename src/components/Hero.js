import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div classname='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                GET STARTED</Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                GET STARTED</Button>
            </div>
        </div>
    )
}

export default Hero
