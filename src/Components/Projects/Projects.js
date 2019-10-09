import React from 'react';
import {Element, scroller} from 'react-scroll'

import Carousel1 from './Carousel/Carousel1'
import Carousel2 from './Carousel/Carousel2'

import './Projects.scss';
import bestPet from './bestPet'
import update from './update'

import { Carousel } from 'react-responsive-carousel';



function Projects(props) {

    function scrollTo(section){
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutCubic'
        })
      }
    // console.log(bestPet)
    return (
        <div id='projects'>
            <div id='project_div'>
                <div id='project1_carousel'>
                    <Carousel1 bestPet={bestPet}/>
                </div>
                <div style={{color: 'white'}} id='project1_info'>
                    <div>
                        <h1 style={{marginBottom: 0, fontSize: '450%', fontFamily: 'Barrio'}}>bestPet.tech</h1>
                        <p style={{marginTop: 0, fontFamily: 'Permanent Marker'}}>(Personal Project)</p>
                    </div>
                    <h1 id='bio_paragraph'>Employs a multi-faceted algorithm to fit dog breeds to a user's profile. Further allows users to search for and save real pets that fit the match using Petfinder's API. To top it off, a simple click of the button allows you to contact a shelter to inquire about a particular animal.</h1>
                    <div style={{width: '50vw'}} id='skills_logos_div_projects'>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-html5-plain"></i>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-css3-plain"></i>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-react-original"></i>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-javascript-plain"></i>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-nodejs-plain"></i>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-postgresql-plain"></i>
                        <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-git-plain"></i>
                        <img style={{height: '32px', margin: '10px'}} src={require('../../Photos/firebase.png')}/>
                    </div>
                    <div style={{marginTop: '5vh'}} id='skills_link_div'>
                        <img id='arrow_left' src={require('../../Photos/downward-rotation-white.png')}/>
                        <h3 id='landing_button' onClick={() => scrollTo('projects2')}>But Wait, There's More!</h3>
                        <img id='arrow_right' src={require('../../Photos/downward-rotation-white.png')}/>
                    </div>
                </div>
            </div>
            <Element name='projects2'>
                <div id='project_div'>
                    <div id='project2_info'>
                        <div id='project2_info_dim'>
                            <div>
                                <h1 style={{color: 'white', marginBottom: 0, fontSize: '450%', fontFamily: 'Barrio'}}>up-date.love</h1>
                                <p style={{color: 'white', marginTop: 0, fontFamily: 'Permanent Marker'}}>(Group Project)</p>
                            </div>
                            <h1 style={{color: 'white'}} id='bio_paragraph'>Online date-planning site that allows users to create, use, and review date plans. Powered by Google Places API and using Material UI throughout, it also adopts React Hooks for a large portion of component architecture. Firebase provides both the authentication and image storage.</h1>
                            <div style={{width: '50vw'}} id='skills_logos_div_projects'>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-html5-plain"></i>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-css3-plain"></i>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-react-original"></i>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-javascript-plain"></i>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-nodejs-plain"></i>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-postgresql-plain"></i>
                                <i style={{margin: '10px', color: 'white', fontSize: '200%'}} className="devicon-git-plain"></i>
                                <img style={{height: '32px', margin: '10px'}} src={require('../../Photos/firebase.png')}/>
                            </div>
                            <div style={{marginTop: '5vh'}} id='skills_link_div'>
                                <img id='arrow_left' src={require('../../Photos/downward-rotation-white.png')}/>
                                <h3 style={{color: 'white'}} id='landing_button' onClick={() => props.scrollTo('contact')}>Get In Touch</h3>
                                <img id='arrow_right' src={require('../../Photos/downward-rotation-white.png')}/>
                            </div>
                        </div>
                    </div>
                    <div id='project2_carousel'>
                        <Carousel2 update={update}/>
                    </div>
                </div>
            </Element>
        </div>
    );
}

export default Projects;