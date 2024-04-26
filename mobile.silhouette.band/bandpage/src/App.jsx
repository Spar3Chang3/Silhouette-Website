import './App.css'
import { useState } from 'react'

export default function App() {
    const imgLink = "https://images.silhouette.band/desktop/";

    const [ colinIsHovered, setColinIsHovered ] = useState(false);
    const colinImgStyle = {
        filter: `blur(${colinIsHovered ? 15 : 0}px)`,
        backgroundImage: `url('${imgLink + "colinPortrait.jpg"}')`
    }

    const [ jackIsHovered, setJackIsHovered ] = useState(false);
    const jackImgStyle = {
        filter: `blur(${jackIsHovered ? 15 : 0}px)`,
        backgroundImage: `url('${imgLink + "jackPortrait.jpg"}')`
    }

    const [ noahIsHovered, setNoahIsHovered ] = useState(false);
    const noahImgStyle = {
        filter: `blur(${noahIsHovered ? 15 : 0}px)`,
        backgroundImage: `url('${imgLink + "noahPortrait.jpg"}')`

    }

    const [ simonIsHovered, setSimonIsHovered ] = useState(false);
    const simonImgStyle = {
        filter: `blur(${simonIsHovered ? 15 : 0}px)`,
        backgroundImage: `url('${imgLink + "simonPortrait.jpg"}')`
    }

    const [ henryIsHovered, setHenryIsHovered ] = useState(false);
    const henryImgStyle = {
        filter: `blur(${henryIsHovered ? 15 : 0}px)`,
        backgroundImage: `url('${imgLink + "henryPortrait.jpg"}')`
    }



    return (
        <>
            <div className={"hoverTip"}>Tap on a member to learn more</div>

            <div className={"bandCardContainer"}>
                <div className={"bandMemberCard"}
                     onMouseEnter={() => setColinIsHovered(true)}
                     onMouseLeave={() => setColinIsHovered(false)}
                >
                    <div className={"backgroundImg"} style={colinImgStyle}></div>
                    <div className={`bio ${colinIsHovered ? 'fadeIn' : ''}`}>
                        <h2>Colin Curry</h2>
                        <p></p>
                    </div>
                    <div className={`socials ${colinIsHovered ? 'fadeIn' : ''}`}
                         onMouseEnter={() => setColinIsHovered(true)}
                    >
                        <a href={"https://www.instagram.com/coliincurry/"}>
                            <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                        </a>
                    </div>
                </div>


                <div className={"bandMemberCard"}
                     onMouseEnter={() => setJackIsHovered(true)}
                     onMouseLeave={() => setJackIsHovered(false)}
                >
                    <div className={"backgroundImg"} style={jackImgStyle}></div>
                    <div className={`bio ${jackIsHovered ? 'fadeIn' : ''}`}>
                        <h2>Jack Reilly</h2>
                        <p></p>
                    </div>
                    <div className={`socials ${jackIsHovered ? 'fadeIn' : ''}`}
                         onMouseEnter={() => setJackIsHovered(true)}
                    >
                        <a href={"https://www.instagram.com/henry.s_photography"}>
                            <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                        </a>
                    </div>
                </div>


                <div className={"bandMemberCard"}
                     onMouseEnter={() => setNoahIsHovered(true)}
                     onMouseLeave={() => setNoahIsHovered(false)}
                >
                    <div className={"backgroundImg"} style={noahImgStyle}></div>
                    <div className={`bio ${noahIsHovered ? 'fadeIn' : ''}`}>
                        <h2>Noah Huddleston</h2>
                        <p></p>
                    </div>
                    <div className={`socials ${noahIsHovered ? 'fadeIn' : ''}`}
                         onMouseEnter={() => setNoahIsHovered(true)}
                    >
                        <a href={"https://www.instagram.com/henry.s_photography"}>
                            <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                        </a>
                    </div>
                </div>


                <div className={"bandMemberCard"}
                     onMouseEnter={() => setSimonIsHovered(true)}
                     onMouseLeave={() => setSimonIsHovered(false)}
                >
                    <div className={"backgroundImg"} style={simonImgStyle}></div>
                    <div className={`bio ${simonIsHovered ? 'fadeIn' : ''}`}>
                        <h2>Simon Lanter</h2>
                        <p></p>
                    </div>
                    <div className={`socials ${simonIsHovered ? 'fadeIn' : ''}`}
                         onMouseEnter={() => setSimonIsHovered(true)}
                    >
                        <a href={"https://www.instagram.com/henry.s_photography"}>
                            <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                        </a>
                    </div>
                </div>


                <div className={"bandMemberCard"}
                     onMouseEnter={() => setHenryIsHovered(true)}
                     onMouseLeave={() => setHenryIsHovered(false)}
                >
                    <div className={"backgroundImg"} style={henryImgStyle}></div>
                    <div className={`bio ${henryIsHovered ? 'fadeIn' : ''}`}>
                        <h2>Henry Schafer</h2>
                        <p>Henry Schafer is the bassist, co-founder and co-lyricist for Silhouette. He first picked up the
                            bass in the early years of high school, soon harbouring a fascination with the music of yesteryear
                            and developing an eclectic playing style that would lead to his work in Silhouette. When not
                            playing in the band his other pursuits include photography, silversmithing and lost media.</p>
                    </div>
                    <div className={`socials ${henryIsHovered ? 'fadeIn' : ''}`}
                         onMouseEnter={() => setHenryIsHovered(true)}
                    >
                        <a href={"https://www.instagram.com/henry.s_photography"}>
                            <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}