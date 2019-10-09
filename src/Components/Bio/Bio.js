import React from 'react';
import './Bio.scss';



function Bio(props) {
  
    return (
        <div  id='bio'>
            <div id='bio_left'>
                <div>
                    <h1 style={{marginBottom: 0, fontSize: '450%', fontFamily: 'Barrio'}}>My Story</h1>
                    <p style={{marginTop: 0, fontFamily: 'Permanent Marker'}}>(Featuring my lovely Wife ->)</p>
                </div>
                <h2 id='bio_paragraph'>Former music educator turned developer. Met aforementioned  wife in college (At UNT, she plays clarinet, I play horn) and stuck around DFW afterwards. Upon realizing teaching wasn't for me, I pursued tech, starting in support, then project management, and now (finally) web development. I have a passion for creating, and love the design and build of a new project. Let's build something together.</h2>
                <div id='skills_link_div'>
                    <img id='arrow_left' src={require('../../Photos/downward-rotation.png')}/>
                    <h3 id='landing_button' onClick={() => props.scroll('skills')}>The Important Bits</h3>
                    <img id='arrow_right' src={require('../../Photos/downward-rotation.png')}/>
                </div>
            </div>
            <div id='bio_right'>
                <img id='bio_image' src={require('../../Photos/me_and_les.jpg')}/>
            </div>
        </div>
    );
}

export default Bio;