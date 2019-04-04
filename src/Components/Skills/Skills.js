import React from 'react';
import './Skills.scss';



function Skills(props) {
  
    return (
        <div className='skills'>
            <h1 style={{color: 'white', fontSize: '450%', fontFamily: 'Barrio'}}>Skills</h1>
            <div id='skills_logos_div'>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-html5-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-css3-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-react-original"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-vuejs-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-javascript-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-nodejs-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-postgresql-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-git-plain"></i>
                <i style={{margin: '25px', color: 'white', fontSize: '650%'}} className="devicon-sass-original"></i>
            </div>
            <div id='skills_link_div'>
                <img style={{color: 'white'}} id='arrow_left' src={require('../../Photos/downward-rotation-white.png')}/>
                <div style={{textAlign: 'center'}}>
                    <h1 style={{color: 'white', marginBottom: 0, marginTop: '5vh', fontSize: '450%', fontFamily: 'Barrio'}}>Projects</h1>
                    <h3 style={{marginTop: 0}} id='skills_button' onClick={() => props.scrollTo('projects')}>The Proof is in The Pudding</h3>
                </div>
                <img style={{color: 'white'}} id='arrow_right' src={require('../../Photos/downward-rotation-white.png')}/>
            </div>
        </div>
    );
}

export default Skills;