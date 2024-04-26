import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
    const slideNum = 4;
    const imageLink = "https://images.silhouette.band/mobile/"

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
        opacity: Math.min((titleOpacity * 0.9), 1),
        transform: `scale(${Math.min(Math.max(0.4, titleOpacity),1)})`
    }

    const altTitleStyle = {
        opacity: Math.min((1 - titleOpacity), 1)
    }

    const arrowStyle = {
        opacity: arrowOpacity
    }

    return (
        <>
            <div className={"homepage"}>
                <div className={"titleContainer"}>
                    <div className={"bandTitle"} style={titleStyle}>
                        <h2>Silhouette</h2>
                    </div>
                </div>
                <div className={"slideshowContainer"}>
                    <div className={"slideImage"} style={slideStyle}/>
                    <div className={"promptArrow"} style={arrowStyle}>↓</div>
                </div>
                <div className={"quickLinks"}>
                    <div className={"altTitle"} style={altTitleStyle}>
                        <h2>Silhouette</h2>
                    </div>
                    <div className={"redirects"}>
                        <a href={"https://mobile.silhouette.band/events/"}>
                            <button>View Upcoming Events</button>
                        </a>
                        <a href={"https://mobile.silhouette.band/members/"}>
                            <button>Meet the Band</button>
                        </a>
                        <a href={"mailto:contact@silhouette.band"}>
                            <button>Contact Us</button>
                        </a>
                    </div>

                    <div className={"socials"}>
                        <a href={"https://instagram.com"}><img src={imageLink + "instagramLogo.png"}
                                                               alt={"Link to Instagram page"}/></a>

                        <a href={"https://youtube.com"}><img src={imageLink + "youtubeLogo.png"}
                                                             alt={"Link to YouTube channel"}/></a>

                        <a href={"https://facebook.com"}><img src={imageLink + "facebookLogo.png"}
                                                              alt={"Link to Facebook page"}/></a>
                    </div>
                    <div className={"mobileLink"}>
                        Looking for
                        <a href={"https://desktop.silhouette.band/"}> Desktop</a>
                        ?
                    </div>
                </div>
            </div>
        </>
    )
}