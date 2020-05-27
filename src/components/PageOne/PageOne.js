import React from 'react'
import homeImage from '../../assets/img/backgrounds/desktop/home.png'
import MobileNavigation from '../mobileNavigation'
import './style.css'

const PageOne = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundImage: `url(${homeImage})`, backgroundSize: 'cover' }}>
      <MobileNavigation />
        <div className='chapter-container'>
        <h2 className='title'>Nothing Better in the Market</h2>
        <div className='chapter-content'>
          <h3>Welcome to Brown-Forman</h3>
          <h1>Way of</h1>
          <h1>Brand Building</h1>
          <br />
          <p>
            Scroll down to explore the content, then select<br />
            a chapter to start your journey.
          </p>
          <br />
          <p>
            if this is your first visit, we recommend you start<br />
            at the beginning and work your way through.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageOne
