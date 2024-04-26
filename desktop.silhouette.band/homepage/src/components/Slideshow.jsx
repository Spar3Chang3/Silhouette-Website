import './Slideshow.css';
import { useState, useEffect } from 'react';

export default function Slideshow() {
    const slideNum = 4;
    const imageLink = "https://images.silhouette.band/desktop/";

    const [ currentSlide, setCurrentSlide ] = useState(0);
    const [ slideOpacity, setSlideOpacity ] = useState(1);
    const [ titleOpacity, setTitleOpacity ] = useState(1);
    const [ arrowOpacity, setArrowOpacity ] = useState(1);
    const [ blurStrength, setBlurStrength ] = useState(0);

    useEffect (() => {
        const changeSlide = setInterval(() => {
            setSlideOpacity(0);
            setTimeout(() => {
                setCurrentSlide(currentSlide => (currentSlide + 1) % slideNum);
                setSlideOpacity(1);
            }, 500);
        }, 5000);
        const scrollDetector = () => {
            const scrollPos = window.scrollY;
            const maxScroll = window.innerHeight * 0.5;
            setTitleOpacity(1 - Math.min(scrollPos / maxScroll, 1));
            setArrowOpacity(arrowOpacity - Math.min((scrollPos / maxScroll) * 1.5, 1));
            setBlurStrength(Math.min(scrollPos / maxScroll, 1) * 25)
        };

        window.addEventListener('scroll', scrollDetector);

        return () => {
            window.removeEventListener('scroll', scrollDetector);
            clearInterval(changeSlide);
        };

    }, []);

    const slideStyle = {
        backgroundImage: `url('${imageLink + `slideshow${currentSlide}.jpg`}')`,
        opacity: slideOpacity,
        filter: `blur(${blurStrength}px)`
    }

    const titleStyle = {
        opacity: (1.2 - titleOpacity),
    }

    const arrowStyle = {
        opacity: arrowOpacity
    }

    return (
        <>
            <div className={"slideshowContainer"}>
                <div className={"slideImage"} style={slideStyle}/>
                <div className={"promptArrow"} style={arrowStyle}>↓</div>
            </div>
            <div className={"bandTitle"} style={titleStyle}>
                <h2>Silhouette</h2>
            </div>
        </>
    )
}