import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import MainNavigation from './MainNavigation'
import PageTwo from './PageTwo/PageTwo'
import PageThree from './PageThree/PageThree'
import PageOne from './PageOne/PageOne'
import PageFour from './PageFour/PageFour'
import Menu from './menu'


class MainPage extends React.Component{

  constructor(props) {
    super(props)
    this.options = {
          sectionClassName: 'section',
          anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
          scrollBar: false,
          navigation: true,
          verticalAlign: true,
          sectionPaddingTop: '0px',
          sectionPaddingBottom: '0px',
          arrowNavigation: true
        }
this.state = {
isShowMenuState: false,
setMenuBtn: false,
menuImg: false 
}
  }

  showMenu = () => {
		this.setState(function(prevState) {
			return {isShowMenuState: !prevState.isShowMenuState};
		});
this.seeamenu();
  }

seeamenu = () => {
  this.setState({
    menuImg: false  
  })
}


  render() {
     return <div style={{ backgroundColor: '#000000' }}>
      <div className='main-pages-container'>
        <div className='mobile-line' />

        {this.state.isShowMenuState && <Menu />}
        <MainNavigation showMenu={this.showMenu} 
        Menu={this.state.isShowMenuState} />

        <SectionsContainer {...this.options}>
 
          <Section color='#333'>
            <PageOne />
          </Section>
          <Section color='#A7DBD8'>
            <PageTwo />
          </Section>
          <Section color='#E0E4CC'>
            <PageThree />
          </Section>
          <Section color='#E0E4CC'>
            <PageFour />
          </Section>

 
        </SectionsContainer>
      </div>
    </div>
     }
}

export default MainPage
