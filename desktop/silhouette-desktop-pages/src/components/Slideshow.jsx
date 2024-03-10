import React, { useState, useEffect } from 'react'
import './Slideshow.css'
export default function Slideshow() {
    const slideNum = 2;
    const imgLink = "https://images.silhouette.band/";

    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [blurStrength, setBlurStrength] = useState(0);

    useEffect (() => {
        const changeSlide = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % slideNum);
        }, 5000);

        const scrollDetector = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = window.innerHeight * 0.5;
            setScrollOpacity(1 - Math.min(scrollPosition / maxScroll, 1));
            setBlurStrength(Math.min(scrollPosition / maxScroll, 1) * 50);
        };

        window.addEventListener('scroll', scrollDetector);
        return () => {
            window.removeEventListener('scroll', scrollDetector);
            clearInterval(changeSlide);
        };

    }, []);

    const backgroundSlide = {
        backgroundImage: `url('${imgLink + `slideshow${currentSlide}.jpg`}')`,
        filter: `blur(${blurStrength}px)`,
    };

    const titleStyle = {
        opacity: (1.5 - scrollOpacity)
    }

    return (
        <div className={"slideshowContainer"}>
            <div className={"slideImg"} style={backgroundSlide}></div>
            <div className={"bandName"} style={titleStyle}>Silhouette</div>
            <div className={"helpArrow"}>↓</div>
        </div>
    )
}