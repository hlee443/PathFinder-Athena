import React, {useState} from 'react';
import { TutorialData } from './data';
import { faArrowRight, faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flexbox } from "../../styles/globals";
import styled from 'styled-components';

const Tutorial = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length
const [show, setShow] = useState(true)

const nextSlide = () => {
    setCurrent(current === length - 1 ?  0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ?  length - 1 : current - 1)
}

const ContentCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
`

const Slider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    background: grey;
    border-radius: 3rem;
`

const RightArrowCont = styled.div`
    margin-top: 10rem;
`

const LeftArrowCont = styled.div`
    margin-top: 10rem;
`

const XIconCont = styled.div`
    display:flex;
    justify-content: flex-end;
    margin: 2rem;
    margin-bottom: -3rem;
`

const DescriptionCont = styled.div`
    display:flex;
    justify-content: center;
    width: 23rem;
`

if(!Array.isArray(slides) || slides.length <= 0){
    return null
}

    return (
        <div>
            {show && (
            <div>
            <XIconCont> <FontAwesomeIcon icon={faXmark} className="fa-lg" onClick={()=>setShow(false)} /> </XIconCont>

            <Slider>
                <LeftArrowCont>
                    <FontAwesomeIcon className='left-arrow' icon={faArrowLeft} onClick={prevSlide} />
                </LeftArrowCont>
                {TutorialData.map((slide, index) => {
                    return (
                        <ContentCont className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && <div> 
                                <Flexbox> <FontAwesomeIcon icon={slide.icon} className="fa-6x" /> </Flexbox> 
                                <Flexbox> {slide.name} </Flexbox> 
                                <DescriptionCont> {slide.description} </DescriptionCont> </div>}
                        </ContentCont>
                    )
                })}
                <RightArrowCont>
                    <FontAwesomeIcon className='right-arrow' icon={faArrowRight} onClick={nextSlide} />
                </RightArrowCont>
            </Slider>

            </div>
            )}
            
        </div>
    )
};

export default Tutorial;