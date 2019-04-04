import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll'
import './App.scss';

import Bio from './Components/Bio/Bio'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

class App extends Component {

  scrollTo = this.scrollTo.bind(this)
  
  scrollTo(section){
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutCubic'
    })
  }

  render() {
    return (
      <div>
        <Element className="landing" name='landing'>
          <div id='landing_center'>
            {/* <h1 style={{fontSize: '600%', fontFamily: 'Permanent Marker'}}>Harry Heckmann</h1> */}
            {/* <h1 style={{fontSize: '600%', fontFamily: 'Megrim'}}>Harry Heckmann</h1> */}
            {/* <h1 style={{fontSize: '600%', fontFamily: 'IM Fell English SC'}}>Harry Heckmann</h1> */}
            <h1 style={{fontSize: '600%', fontFamily: 'Barrio'}}>Harry Heckmann</h1>
            <h3 id='landing_button' onClick={() => this.scrollTo('bio')}>Let's Meet</h3>
          </div>
        </Element>
        <Element name='bio'>
          <Bio scrollTo={this.scrollTo}/>
        </Element>
        <Element name='skills'>
          <Skills scrollTo={this.scrollTo}/>
        </Element>
        <Element name='projects'>
          <Projects scrollTo={this.scrollTo}/>
        </Element>
        <Element name='contact'>
          <Contact scrollTo={this.scrollTo}/>
        </Element>
      </div>
    );
  }
}

export default App;
