import Navbar from './navbar';
import './App.scss';
import React, { useMemo, useRef, useEffect } from 'react';
import { factory } from 'typescript';
import { gsap } from 'gsap';
import {Transition} from "react-transition-group";

const startState = { autoAlpha: 0, y: -200 };
  export const Home = props => (
    <Transition
    unmountOnExit
    in = {props.show}
    timeout = {1000}
    onPageReload = {node => gsap.set(node, startState)}
    addEndListener = {(node,done) => {
      gsap.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        y: props.show ? 0 : 50,
        onComplete: done
      });
    }}
    >

    </Transition>
  );

function App() {
  
  const root = useMemo( () => document.querySelector(":root"));
  

  const parallaxHandler = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 100;
    const y = (e.clientY - window.innerHeight / 2) / 100;
    root.style.setProperty('--posX', -x)
    root.style.setProperty('--posY', -y)
    console.log(x,y);

  }

  // let logoItem = useRef(null);
  // useEffect(() => {
  //   gsap.timeline().from(logoItem, {y: 100, duration:1.5});
  // }, );

  // gsap.set(".parallax__mainbg2", {scale:0.7});
  // gsap.timeline()
  //     .from(".parallax__mainbg2", {duration: 1, opacity: 0})
  //     .from(".parallax__container", {y: 160, stagger: 0.1, duration: 0.8, ease: "back"})
  


  return (
    
    <body className="" >
      <Navbar/>
     
        <main className="parallax__container" /*ref={el => {logoItem = el}}*/  onMouseMove={parallaxHandler}  >
        <div class="vignette"></div>
        <div className = {'parallax__mainbg2'} />
        <div className = {'parallax__TLbg   '} />
        <div className = {'parallax__fogbgR '} />
        <div className = {'parallax__FatM   '} />
        <div className = {'parallax__fogMbg2'} />
        <div className = {'parallax__MRbg   '} />
        <div className = {'parallax__Rbg    '} />
        <div className = {'parallax__fogMbg '} />
        <div className = {'parallax__midleR '} />
        <div className = {'parallax__MRT    '} />
        <div  className = {'parallax__text'}>
          <h2>Alex</h2>
        </div>
        <div className = {'parallax__MRTall '} />
        <div  className = {'parallax__text-two'}>
          <h1>Lada</h1>
        </div>
        <div className = {'parallax__fogLbg3      '} />
        <div className = {'parallax__fogLbg      '} />
        <div className = {'parallax__LSmall      '} />
        <div className = {'parallax__fogMbgL     '} />
        <div className = {'parallax__Tall-cut    '} />
        <div className = {'parallax__fogL        '} />
        <div className = {'parallax__MTcut       '} />
        <div className = {'parallax__LTF         '} />
        <div className = {'parallax__fogLfg      '} />
        <div className = {'parallax__RT          '} />
        <div className = {'parallax__fogRfg      '} />
        <div className = {'parallax__black-shadow'} />
        <div className = {'parallax__sun_rays    '} />
        <div className = {'parallax__Fgfog       '} />
      </main>
    </body>
    
  );
  

};




export default App;
