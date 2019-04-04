import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import './Carousel.scss';

function Carousel1(props) {
    const bestPet = props.bestPet.bestPet


    return (
        <div className='carousel_div'>
            <Carousel showThumbs={false} width='45vw' showStatus={false}>
                <div style={{color: 'white'}}>
                    <img src={bestPet[0].link} />
                    <h1 id='carousel_title'>{bestPet[0].title}</h1>
                </div>
                <div>
                    <img src={bestPet[1].link}  />
                    <h1 id='carousel_title'>{bestPet[1].title}</h1>
                </div>
                <div>
                    <img src={bestPet[2].link}  />
                    <h1 id='carousel_title'>{bestPet[2].title}</h1>
                </div>
                <div>
                    <img src={bestPet[3].link}  />
                    <h1 id='carousel_title'>{bestPet[3].title}</h1>
                </div>
                <div>
                    <img src={bestPet[4].link}  />
                    <h1 id='carousel_title'>{bestPet[4].title}</h1>
                </div>
            </Carousel>
            <div className='carousel_links_div'>
                <a className='bottom_carousel_link' href='https://bestPet.tech'>Check it Out</a>
                <a className='bottom_carousel_link' href='https://github.com/HarryHeckmann/personal-project'>View on Github</a>
            </div>
        </div>
    );
}

export default Carousel1;

