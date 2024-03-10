import React, { useState, useEffect } from 'react'
import './Slideshow.css'
export default function Slideshow() {
    const imgArray = ["slideshow1.jpg", "slideshow2.jpg"];
    const imgLink = "http://localhost:3000/";

    let slideNum = 1;
    const [currentSlideLink, setCurrentSlideLink] = useState(imgLink);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [blurStrength, setBlurStrength] = useState(0);

    useEffect (() => {
        const changeSlide = setInterval(() => {
            slideNum = (slideNum + 1) % imgArray.length;
            console.log(slideNum);
            setCurrentSlideLink(imgLink + imgArray[slideNum]);
            return () => clearInterval(changeSlide);
        }, 5000);

        const scrollDetector = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = window.innerHeight * 0.65;
            setScrollOpacity(1 - Math.min(scrollPosition / maxScroll, 1));
            setBlurStrength(Math.min(scrollPosition / maxScroll, 1) * 50);

        };

        window.addEventListener('scroll', scrollDetector);
        return () => window.removeEventListener('scroll', scrollDetector);

    }, []);

    const backgroundSlide = {
        backgroundImage: `url('${currentSlideLink}')`,
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