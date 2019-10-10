import React from 'react';
import './Contact.scss';



function Contact(props) {
  
    return (
        <div id='contact'>
            <div id='contact_center'>
                <h1 style={{color: 'white', fontSize: '600%', fontFamily: 'Barrio'}}>Let's Get Connected</h1>
                <div>
                    <a className='bottom_carousel_link' href='https://www.linkedin.com/in/harry-heckmann/'>
                        <img id='linkedin' style={{height: '32px', margin: '25px'}} src={require('../../Photos/linkedin.png')}/>
                    </a>
                    <a target='_blank' className='bottom_carousel_link' href='https://mail.google.com/mail/?view=cm&fs=1&to=heckmann.harry@gmail.com/'>
                        <img style={{height: '50px', margin: '25px'}} src={require('../../Photos/mail.png')}/>
                    </a>
                    <a className='bottom_carousel_link' href='https://github.com/HarryHeckmann'>
                        <img style={{height: '50px', margin: '25px'}} src={require('../../Photos/github.png')}/>
                    </a>
                </div>
                <div style={{marginTop: '5vh', justifyContent: 'center'}} id='skills_link_div'>
                    <img id='arrow_left_end' src={require('../../Photos/downward-rotation-white.png')}/>
                    <h3 style={{color: 'white'}} id='landing_button' onClick={() => props.scroll('landing')}>Let's Start Over</h3>
                    <img id='arrow_right_end' src={require('../../Photos/downward-rotation-white.png')}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;


