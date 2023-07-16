import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

{/* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script> */ }
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
                                Download Resume
                            </button>
                        </div>
                        <div className="btn2">
                        <button>
                                Visit Github
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
            {/* <div className="hrw">
                <hr />
            </div> */}
             {/* <hr className="absolute"> <hr /> */}

        </>
    )
}

export default Hero
