import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Hero() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Front-End Developer', 'Web designer.'],
            startDelay: 120,
            typeSpeed: 40,
            backDelay: 60,
            backSpeed: 80,
            smartBackspace: true,
        });
    }, []);
    return (
        <>
            <div className="hero pt-4">
                <div className="hr1 col-md-6">
                    <div className="text">
                        <p id="tx">Hi,My name is
                            <span className="names" id="name"><p> Harris</p></span>  
                                 <p id="tx">and I am a passionate</p> <span id="name"ref={el}><p></p></span>
                        </p>
                        <div className="btns">
                        <div className="btn1">
                            <button>
                                <a href="HarrisResume.pdf" download="HarrisResume.pdf">Download Resume</a>
                            </button>
                        </div>
                        <div className="btn2">
                        <button>
                                <a href="https://github.com/Muhammad-Haris55" target="_blank">Visit Github</a>
                            </button>
                        </div>    
                        </div>
                    </div>
                </div>
                <div className="hr2 col-md-6">
                    <div className="img">
                        <img src="./img.png" alt="" />
                    </div>
                </div>
            </div>
            <div id="foot" className="footer">
        <div className="legal-text-contain">
            <div className="small-print">
                © 2021– 
                <span className="copyright-year">2023</span>
                <span className="copyright-business-name"> Muhammad Harris</span>
            </div>
            <div className="legal-links">
                <div className="small-prints copyright">
                    <a href="/policies/privacy-policy" class="legal-link">Privacy Policy</a>
                </div>
                <div class="small-prints copyright"> | </div>
                <div className="small-prints copyright">
                    <a href="/policies/privacy-policy" class="legal-link">Terms of Service </a>
                </div>
                <div class="small-prints copyright"> | </div>
                <div className="small-prints copyright">
                    <a href="/policies/privacy-policy" class="legal-link">Disclaimers</a>
                </div>
            </div>
        </div>
     </div>
        </>
    )
}

export default Hero
