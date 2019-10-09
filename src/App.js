import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll'
import './App.scss';

import Bio from './Components/Bio/Bio'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

class App extends Component {

  scroll = this.scroll.bind(this)

  scroll(id){
    let elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
        behavior: 'smooth'
    })
  }
  
  // scrollTo(section){
  //   scroller.scrollTo(section, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutCubic'
  //   })
  // }

  render() {
    return (
      <div   >
        <div  id='landing' >
          <div id='landing_center'>
            {/* <h1 style={{fontSize: '600%', fontFamily: 'Permanent Marker'}}>Harry Heckmann</h1> */}
            {/* <h1 style={{fontSize: '600%', fontFamily: 'Megrim'}}>Harry Heckmann</h1> */}
            {/* <h1 style={{fontSize: '600%', fontFamily: 'IM Fell English SC'}}>Harry Heckmann</h1> */}
            <h1 id='harry' style={{fontSize: '600%', fontFamily: 'Barrio'}}>Harry Heckmann</h1>
            <h3 id='landing_button' onClick={() => this.scroll('bio')}>Let's Meet</h3>
          </div>
        </div>
        {/* <Element name='bio'> */}
          <Bio scroll={this.scroll}/>
        {/* </Element> */}
        {/* <Element name='skills'> */}
          <Skills scroll={this.scroll}/>
        {/* </Element> */}
        {/* <Element name='projects'> */}
          <Projects scroll={this.scroll}/>
        {/* </Element> */}
        {/* <Element name='contact'> */}
          <Contact scroll={this.scroll}/>
        {/* </Element> */}
      </div>
    );
  }
}

export default App;
