import React from 'react'
import part2Image from '../../assets/img/backgrounds/desktop/part2.png'
import arrowRightOrange from '../../assets/img/icons/rightorange.svg'
import MobileNavigation from '../mobileNavigation'

const PageFour = () => {
  return (
    <div style={{ width: '100%', height: '100vh', background: `url(${part2Image})`, backgroundSize: 'cover', maxHeight: '100%' }}>
      <MobileNavigation />
      <div className='chapter-container'>
        <div className='page-2-content'>
          <h1 className='page-2-title'>Part 2</h1>
          <h1 className='page-2-title'>Principles into Action</h1>
          <div className='page-2-chapter-menu'>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 4</h2>
              <h2>Strategic Planning <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 5</h2>
              <h2>Business Activity Measurement <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 6</h2>
              <h2>Driving Business Result <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
            </a>
            <a href='/' className='page-2-menu-item'>
              <h2>Chapter 7</h2>
              <h2>Inclusive & Responsible Marketing <img src={arrowRightOrange} style={{ transform: 'translateY(4px)' }} alt='' /></h2>
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

export default PageFour
