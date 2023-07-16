import React from 'react'
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"></link>

function About() {
    return (
        <>
            <nav>
            <div className="tu pt-3">
                <h2 className='tit text-center col-md-4 mx-auto'>MUHAMMAD HARRIS</h2>
            </div>
            <div className="ab">
                <div className="about">
                    <div className="c1">
                        <div className="heading col-mid-12">
                            <h4 className=' pro'><i>Professional Summary</i></h4>
                            <p className='quote'><i>
                                A self-motivated student of Computer Science and a Web Developer with the ability to create new ideas and overcome obstacles to help a company achieve its objectives more quickly.Passionate in learning, eager to contribute, and great in management
                            </i> </p>
                        </div>
                    </div>
                <div className="c2">
                    <div className="heading2 col-md-12">
                        <h4 className=' pro'><i>Contact</i></h4>
                        <div className="icons">
                            <div className="phone">
                                <img src="./phone-linear.svg" alt="" />
                                <p>+93311-1246705</p>
                            </div>
                            <div className="email">
                                <img src="email.svg" alt="" />
                                <p>HarrisImran55@gmail.com</p>
                            </div>
                            <div className="github">
                                <img src="github.svg" alt="" />
                                <p>github.com/Muhammad-Haris55</p>
                            </div>
                            <div className="linkedin">
                                <img src="linkedin.svg" alt="" />
                                <p>linkedin.com/in/harris-imran55
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            <div className="c4 col-md-12 mx-auto">
                <div className="c3 col-md-10 mx-auto ">
                        <h4 className='pro'><i>Education</i></h4>
                    <div className="heading3 col-mid-10 mx-auto pt-2">
                        <div className="df">
                            <div className="uni">
                                <div className="unimain">
                                    <h6>University of Karachi(UBIT)</h6>
                                    <p>Bachelors of Science in Software Engineering(CGPA:--/4.0)</p>
                                </div>
                            </div>
                            <div className="coll">
                                <div className="unimain">
                                    <h6>Commecs College</h6>
                                    <p>HEC Intermediate in Computer Science(A1 Grade,80.23%)</p>
                                </div>
                            </div>
                            <div className="school">
                                <div className="unimain">
                                    <h6>The Educators</h6>
                                    <p>SSC Matriculations in Science(A Grade,78%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="texts">
                            <span id="white">
                                <h6>Karachi,Pakistan</h6>
                                <p>(2021-Present)</p>
                            </span>
                            <span class="white2"id="white">
                                <h6>Karachi,Pakistan</h6>
                                <p>(2019-2021)</p>
                            </span>
                            <span id="white">
                                <h6>Karachi,Pakistan</h6>
                                <p>(2018-2019)</p>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
</nav>        
        </>
    )
}

export default About
