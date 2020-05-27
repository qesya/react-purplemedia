import React from 'react'
import menuIcon from '../assets/img/icons/menuicon.svg'
import sloganIcon from '../assets/img/logos/logoM1.svg'
import brandLogo from '../assets/img/logos/nextgenerationblack.svg'

const MobileNavigation = () => {
  return (
    <div className='mobile-navigation'>
      <div className='mobile-navigation-img'>
        <img src={sloganIcon} alt='' />
      </div>
      <div className='mobile-navigation-brand-menu-div'>
        <div className='mobile-mobile-icon'>
          <img src={menuIcon} alt='' />
        </div>
        <img className='mobile-navigation-brand-menu' src={brandLogo} alt='' />
      </div>
    </div>
  )
}

export default MobileNavigation
