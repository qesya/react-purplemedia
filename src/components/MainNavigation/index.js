import React from 'react'
import sloganIcon from '../../assets/img/logos/logoM1.svg'
import brandLogo from '../../assets/img/logos/nextgenerationblack.svg'
import menuLogo from '../../assets/img/icons/menuicon.svg'
import menuclose from '../../assets/img/icons/menuclose.svg';
import audioLogo from '../../assets/img/icons/audio.svg'

import './style.css'


function MainNavigation (props) {

  return (
    <div className='main-navigation'>
      <div className='nav-brand-slogan'>
        <img src={sloganIcon} alt='' />
      </div>
      <div className='nav-brand-header'>
        <img src={brandLogo} alt='' />
      </div>
      <div className='nav'>
        <div className='nav-item'>
          <div><h6>MENU</h6></div>
          <div>
            {
              !props.Menu ?
                <img src={menuLogo} alt='' onClick={props.showMenu} /> 
              :
                <img src={menuclose} className="swing" alt='' onClick={props.showMenu} />
            }
          </div>
          <br clear='all' />
        </div>
        <br />
        {
          props.Menu ?
            <div className='nav-item'>
              <div><h6>AUDIO</h6></div>
              <div><img src={audioLogo} alt='' /></div>
              <br clear='all' />
            </div>
          : null
        }
      </div>
      <div className='bottom-nav'>
        <div className='bottom-nav-container'>
          <div className='bottom-nav-item'>
            <h6>SCROLL</h6>
            <h6>TO VIEW</h6>
            <h6>CONTENTS</h6>
          </div>
          <div className='bottom-nav-item'>
            <div className='nav-border' />
          </div>
          <br clear='all' />
        </div>
      </div>


    </div>
  )
}

export default MainNavigation
