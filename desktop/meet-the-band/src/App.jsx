import './App.css'
import { useState } from 'react'

export default function App() {
    const imgLink = "http://localhost:3000/";

    const [ colinIsHovered, setColinIsHovered ] = useState(false);
    const colinImgStyle = {
        backgroundImage: `url('${imgLink + "colinPortrait.jpg"}')`
    }

    const [ jackIsHovered, setJackIsHovered ] = useState(false);
    const jackImgStyle = {

    }

    const [ noahIsHovered, setNoahIsHovered ] = useState(false);
    const noahImgStyle = {
        backgroundImage: `url('${imgLink + "noahPortrait.jpg"}')`

    }

    const [ simonIsHovered, setSimonIsHovered ] = useState(false);
    const simonImgStyle = {

    }

    const [ henryIsHovered, setHenryIsHovered ] = useState(false);
    const henryImgStyle = {
        backgroundImage: `url('${imgLink + "henryPortrait.jpg"}')`
    }



    return (
      <div className={"bandCardContainer"}>
          <div className={"colinCard"}
               onMouseEnter={() => setColinIsHovered(true)}
               onMouseLeave={() => setColinIsHovered(false)}
          >
              <div className={"backgroundImg"} style={colinImgStyle}></div>
              <div className={`bio ${colinIsHovered ? 'fadeIn' : ''}`}>
                  <h2>Colin Curry</h2>
                  <p></p>
              </div>
              <div className={`socials ${colinIsHovered ? 'fadeIn' : ''}`}>
                  <a href={"https://www.instagram.com/coliincurry/"}>
                      <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                  </a>
              </div>
          </div>
          <div className={"jackCard"}
               onMouseEnter={() => setJackIsHovered(true)}
               onMouseLeave={() => setJackIsHovered(false)}
          >
              <div className={"backgroundImg"} style={colinImgStyle}></div>
              <div className={`bio ${jackIsHovered ? 'fadeIn' : ''}`}>
                  <h2>Jack Riley</h2>
                  <p></p>
              </div>
              <div className={"socials"}>
                  <a href={"https://www.instagram.com/coliincurry/"}>
                      <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                  </a>
              </div>
          </div>
          <div className={"noahCard"}>
              <div className={"backgroundImg"} style={noahImgStyle}
                   onMouseEnter={() => setNoahIsHovered(true)}
                   onMouseLeave={() => setNoahIsHovered(false)}
              ></div>
              <div className={`bio ${noahIsHovered ? 'fadeIn' : ''}`}>
                  <h2>Noah Huddleston</h2>
                  <p></p>
              </div>
              <div className={"socials"}>
                  <a href={"test"}>
                      <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                  </a>
              </div>
          </div>
          <div className={"simonCard"}>
              <div className={"backgroundImg"} style={colinImgStyle}
                   onMouseEnter={() => setSimonIsHovered(true)}
                   onMouseLeave={() => setSimonIsHovered(false)}
              ></div>
              <div className={`bio ${simonIsHovered ? 'fadeIn' : ''}`}>
                  <h2>Simon Lanter</h2>
                  <p></p>
              </div>
              <div className={"socials"}>
                  <a href={"test"}>
                      <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                  </a>
              </div>
          </div>
          <div className={"henryCard"}>
              <div className={"backgroundImg"} style={henryImgStyle}
                   onMouseEnter={() => setHenryIsHovered(true)}
                   onMouseLeave={() => setHenryIsHovered(false)}
              ></div>
              <div className={`bio ${henryIsHovered ? 'fadeIn' : ''}`}>
                  <h2>Henry Shaffer</h2>
                  <p>Henry Schafer is the bassist, co-founder and co-lyricist for Silhouette. He first picked up the
                      bass in the early years of high school, soon harbouring a fascination with the music of yesteryear
                      and developing an eclectic playing style that would lead to his work in Silhouette. When not
                      playing in the band his other pursuits include photography, silversmithing and lost media.</p>
              </div>
              <div className={"socials"}>
                  <a href={"https://www.instagram.com/henry.s_photography"}>
                      <img src={imgLink + 'instagramLogo.png'} alt={"Instagram Link"}/>
                  </a>
              </div>
          </div>
      </div>
    );
}