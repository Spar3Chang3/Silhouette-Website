import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
    const imgLink = "http://localhost:3000/";

    const colinImgStyle = {
        backgroundImage: `url('${imgLink + "full-band.jpg"}')`
    }

    return (
      <div className={"bandCardContainer"}>
          <div className={"colinCard"}>
              <div className={"backgroundImg"}>
              </div>
              <div className={"bio"}>
                  <h2>Colin Curry</h2>
                  <p></p>
              </div>
          </div>
          <div className={"jackCard"}>
              <div className={"backgroundImg"}></div>
              <div className={"bio"}>
                  <h2>Jack Riley</h2>
                  <p></p>
              </div>
          </div>
          <div className={"noahCard"}>
              <div className={"backgroundImg"}></div>
              <div className={"bio"}>
                  <h2>Noah Huddleston</h2>
                  <p></p>
              </div>
          </div>
          <div className={"simonCard"}>
              <div className={"backgroundImg"}></div>
              <div className={"bio"}>
                  <h2>Simon Lanter</h2>
                  <p></p>
              </div>
          </div>
          <div className={"henryCard"}>
              <div className={"backgroundImg"}></div>
              <div className={"bio"}>
                  <h2>Henry Shaffer</h2>
                  <p></p>
              </div>
          </div>
      </div>
    );
}