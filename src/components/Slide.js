import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Slide() {
    const SliderContent = [
        { 
            id: 0,
            image: 'https://t1.daumcdn.net/cfile/tistory/2162173F51CF075203'
        },
        {
            id: 1,
            image: 'https://t1.daumcdn.net/cfile/tistory/2544613F51CF074D10'
        },
        {
            id: 2,
            image: 'https://t1.daumcdn.net/cfile/tistory/2560DE4051CF076B46'
        },
        {
            id: 3,
            image: 'https://t1.daumcdn.net/cfile/blog/2104A24F517516A026'
        }
    ]
    const TOTAL_SLIDES = SliderContent.length;
    const [index, setIndex] = useState(0);
    const imageRef = useRef(null);

    const nextSlide = () => {
        console.log(index);
        if(index >= TOTAL_SLIDES){
            setIndex(0);
            imageRef.current.style.transition = "all 0.5s ease-in-out";
            imageRef.current.style.transform = `translateX(0)`;
            setIndex(1);
        } else{
            setIndex(index + 1);
            imageRef.current.style.transition = "all 0.5s ease-in-out";
            imageRef.current.style.transform = `translateX(-${index}00%)`;
        }
    };

    const prevSlide = () => {
        console.log(index);
        if(index < 0){
            imageRef.current.style.transition = "all 0.5s ease-in-out";
            imageRef.current.style.transform = `translateX(-${TOTAL_SLIDES-1}00%)`;
            setIndex(TOTAL_SLIDES-1);
        } else{
            setIndex(index-1);
            imageRef.current.style.transition = "all 0.5s ease-in-out";
            imageRef.current.style.transform = `translateX(-${index-1}00%)`;
        }
    }
    
    const timeSlide = () => {
        if(index >= TOTAL_SLIDES){
            setIndex(0);
            imageRef.current.style.transition = "all 0.5s ease-in-out";
            imageRef.current.style.transform = `translateX(0)`;
            setIndex(1);
        } else{
            setIndex(index + 1);
            imageRef.current.style.transition = "all 0.5s ease-in-out";
            imageRef.current.style.transform = `translateX(-${index}00%)`;
        }
    }
    useEffect(()=>{
        setTimeout(timeSlide, 3000);
    },)
    
    return(
        <SlideDiv>
            <SlideInner ref={imageRef}>
                {SliderContent.map((image)=>{
                    return (
                        <>
                            <SlideImage>
                                <img src={image.image} key={image.id}></img>
                            </SlideImage>   
                        </>
                    )
                })}
            </SlideInner>
            <ButtonGroup>
                <button onClick={()=>prevSlide()}>prev</button>
                <button onClick={()=>nextSlide()}>next</button>
            </ButtonGroup>
        </SlideDiv>
    )
}

export default Slide;

const SlideDiv = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SlideInner = styled.div`
    width: 100vw;
    display: flex;

`

const SlideImage = styled.div`
    display: inline-block;
    width: 390px;
    height: 300px;
    & > .img{
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
`

const ButtonGroup = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 10px;
`
