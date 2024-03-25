import React, { useState, useEffect } from 'react'
import './Slideshow.css'
export default function Slideshow() {
    const slideNum = 2;
    const imgLink = "https://images.silhouette.band/";

    const [currentSlide, setCurrentSlide] = useState(0);
    const [visible, setIsVisible] = useState(true);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [blurStrength, setBlurStrength] = useState(0);
    const [arrowOpacity, setArrowOpacity] = useState(1);

    useEffect (() => {
        const changeSlide = setInterval(() => {
            setTimeout(() => {
                setCurrentSlide(currentSlide => (currentSlide + 1) % slideNum);

            }, 500)
            setIsVisible(! visible);
        }, 5000);

        const scrollDetector = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = window.innerHeight * 0.5;
            setScrollOpacity(1 - Math.min(scrollPosition / maxScroll, 1));
            setBlurStrength(Math.min(scrollPosition / maxScroll, 1) * 25);
            setArrowOpacity(arrowOpacity - (scrollPosition / maxScroll) * 1.5);
        };

        window.addEventListener('scroll', scrollDetector);
        return () => {
            window.removeEventListener('scroll', scrollDetector);
            clearInterval(changeSlide);
        };

    }, []);

    const currentSlideStyle = {
        backgroundImage: `url('${imgLink + `slideshow${currentSlide}.jpg`}')`,
        filter: `blur(${blurStrength}px)`,
    };

    const nextSlideStyle = {
        backgroundImage: `url('${imgLink + `slideshow${currentSlide}.jpg`}')`,
        filter: `blur(${blurStrength}px)`,
    };

    const titleStyle = {
        opacity: (1.5 - scrollOpacity),
        transform: `scale(${blurStrength > 10 ? 0.65 : 1})`,
    };

    const helpArrowStyle = {
        opacity: arrowOpacity
    };

    return (
        <>
            <div className={"slideshowContainer"}>
                <div className={`currentSlideImg${visible ? '' : 'fadeOut'}`} style={currentSlideStyle}></div>
                <div className={`nextSlideImg${visible ? 'fadeOut' : ''}`} style={nextSlideStyle}></div>
                <div className={"helpArrow"} style={helpArrowStyle}>↓</div>
            </div>
            <div className={"bandName"} style={titleStyle}>Silhouette</div>
        </>
    )
}