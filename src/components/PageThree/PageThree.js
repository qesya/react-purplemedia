import React from 'react'
import part1Image from '../../assets/img/backgrounds/desktop/part1.png'
import arrowRightOrange from '../../assets/img/icons/rightorange.svg'
import MobileNavigation from '../mobileNavigation'

const PageThree = () => {
  return (
    <div style={{ width: '100%', height: '100vh', background: `url(${part1Image})`, backgroundSize: 'cover', maxHeight: '100%' }}>
      <MobileNavigation />
      <div className='chapter-container'>
        <div className='page-2-content'>
          <h1 className='page-2-title'>Part 1</h1>
          <h1 className='page-2-title'>B-F Brand Building Principles</h1>
          <div className='page-2-chapter-menu'>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 1</h2>
              <h2>Brand Foundations <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 2</h2>
              <h2>B-F Growth Framework <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 2.1</h2>
              <h2>Mental Availability <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 2.2</h2>
              <h2>Physical Availability <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 3</h2>
              <h2>B-F BRAND B <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageThree
