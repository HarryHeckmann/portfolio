import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import './Carousel.scss';

function Carousel1(props) {
    const update = props.update.update

    return (
        <div className='carousel_div'>
            <Carousel showThumbs={false} width='45vw' showStatus={false}>
                <div>
                    <img src={update[0].link} />
                    <h1 style={{color: 'black'}} id='carousel_title'>{update[0].title}</h1>
                </div>
                <div>
                    <img src={update[1].link}  />
                    <h1 style={{color: 'black'}} id='carousel_title'>{update[1].title}</h1>
                </div>
                <div>
                    <img src={update[2].link}  />
                    <h1 style={{color: 'black'}} id='carousel_title'>{update[2].title}</h1>
                </div>
                <div>
                    <img src={update[3].link}  />
                    <h1 style={{color: 'black'}} id='carousel_title'>{update[3].title}</h1>
                </div>
                <div>
                    <img src={update[4].link}  />
                    <h1 style={{color: 'black'}} id='carousel_title'>{update[4].title}</h1>
                </div>
                <div>
                    <img src={update[5].link}  />
                    <h1 style={{color: 'black'}} id='carousel_title'>{update[5].title}</h1>
                </div>
            </Carousel>
            <div className='carousel_links_div'>
                <a target='_blank' style={{color: 'black'}} className='bottom_carousel_link' href='https://up-date.love'>Check it Out</a>
                <a target='_blank' style={{color: 'black'}} className='bottom_carousel_link' href='https://github.com/datemake/update'>View on Github</a>
            </div>
        </div>
    );
}

export default Carousel1;