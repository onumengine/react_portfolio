import '../../App.css'
import React from 'react'
import WelcomeImage from '../atoms/WelcomeImage'
import WelcomeBanner from '../molecules/WelcomeBanner'

const WelcomeSection = () => 
    <div className="row">
        <WelcomeBanner/>
        <WelcomeImage/>
    </div>

export default WelcomeSection