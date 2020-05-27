import React from 'react'
import arrowRight from '../../assets/img/icons/right.svg'
import introImage from '../../assets/img/backgrounds/desktop/intro.png'
import MobileNavigation from '../mobileNavigation'

const PageTwo = () => {
  return (
    <div style={{ width: '100%', height: '100vh', background: `url(${introImage})`, backgroundSize: 'cover', maxHeight: '100%' }}>
      <MobileNavigation />
      <div className='chapter-container'>
        <div className='page-2-content'>
          <h1 className='page-2-title'>Introduction</h1>
          <br />
          <h3><a href='#sectionThree'><span>READ STORY</span> <img src={arrowRight} style={{ transform: 'translateY(4px)' }} alt='' /></a></h3>
        </div>
      </div>
    </div>
  )
}

export default PageTwo
