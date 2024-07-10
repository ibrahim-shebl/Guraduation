import React from 'react'
import './about.css'
import CommonSection from './common-section/CommonSection'
import about from '../../assets/images/about.jpg'
import feature1 from '../../assets/images/feature2.jpg'
import feature2 from '../../assets/images/feature (2).jpg'
import feature3 from '../../assets/images/feature.jpg'
import meImg from '../../assets/images/me.jpg'
import img1 from '../../assets/images/profile (1).jpg'
import img3 from '../../assets/images/profile (2).jpg'
import img4 from '../../assets/images/profile (3).jpg'
import img5 from '../../assets/images/profile (4).jpg'
import img6 from '../../assets/images/profile (5).jpg'
import {useEffect } from 'react';
 
const teamMember = [
    {
        title: "Ibrahim Shebl",
        job: "FullStack Reactjs & .Net",
        desc: "I am Ibrahim Shebl ReactJs graduate of the Faculty of Computers and Information Department CS my job in this site is the front and make the site responsive to all screens and also responsible for linking with Backend.",
        img1: meImg
    },
    {
        title: "Muhammad Etman",
        job: "Backend Php",
        desc: "I am Muhammad Etman my job in this site is the backend and make the Api and deployment in server.",
        img1: img5
    },
    {
        title: "Ahmed Esmail",
        job: "Backend",
        desc: "Backend developer specializing in Laravel with strong problem-solving skills.",
        img1: img1
    },
    {
        title: "Ahmed Al-Arabi",
        job: "Backend",
        desc: "I am Ahmed Al-Arabi I participated in the project's persentation work.",
        img1: img6
    },
    {
        title: "Ibrahim Al-Jaziri",
        job: "Backend",
        desc: "I am Ibrahim Al-Jaziri I participated in the project's persentation work.",
        img1: img4
    },
    {
        title: "Islam Adel",
        job: "Frontend",
        desc: "I am Islam Adel I participated in the project's persentation work.",
        img1: img3
    },



];
const About = () => {

    useEffect(() => {
        const handleScroll = () => {
            // Skills Element
            const ourSkills = document.querySelector(".skills");

            // Skills Offset Top
            const skillsOffsetTop = ourSkills.offsetTop;

            // Skills Outer Height
            const skillsOuterHeight = ourSkills.offsetHeight;

            // Window Height
            const windowHeight = window.innerHeight;

            // Window ScrollTop
            const windowScrollTop = window.pageYOffset;

            if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
                const allSkills = document.querySelectorAll(".skill-box .skill-progress span");
                allSkills.forEach(skill => {
                    skill.style.width = skill.dataset.progress;
                });
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Detach scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <CommonSection title="About Us" />
            <div className='txt-c'>
                <h1>Auction.</h1>
            </div>
            <section className="about">
                <img src={about} alt="" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>We are six students who studied in the faculty of computers and information Menoufia CS section and this project is the idea of our graduation project and studied the project well and we started to implement.</p>

                    <br /><br />

                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Welcome to Auction to get products and enter the auctions.</marquee>
                </div>
            </section>
            <section>
                {/* start feature */}
                <div className="features">
                    <h2 className="main-title">Features</h2>
                    <div className="container">
                        <div className="box quality">
                            <div className="img-holder">
                                <img src={feature3} alt="" />
                            </div>
                            <h2>Why this project</h2>
                            <p>We chose this project because our goal is to make it easier for people to shop and attend auctions. In light of the development of everything, people can now buy anything they want at any time, so we want to break into this development.</p>
                        </div>
                        <div className="box challenge">
                            <div className="img-holder">
                                <img src={feature1} alt="" />
                            </div>
                            <h2>Challenge</h2>
                            <p>I encountered many challenges, especially in offline auctions for scrap. I asked people specializing in auctions about how to hold an auction, the required documents, about the companies that conduct these auctions, and what the idea of ​​the auction was. I learned information about the scrap field in general.</p>
                        </div>
                        <div className="box passion">
                            <div className="img-holder">
                                <img src={feature2} alt="" />
                            </div>
                            <h2>Goal</h2>
                            <p>The goal of this project is to make it easier for people to shop and provide them with all services and provide for those who like to enter auctions. There are all types of auctions, whether online or offline, and we arrange auction dates for them in order to ensure order and lack of randomness.</p>
                        </div>
                    </div>
                </div>
                {/* End feature */}
            </section>
            <section>
                {/* start team members */}
                <div className="perfoileTestimonials">
                    <h2 className="main-title">Team Members</h2>
                    <div className="container">
                        {teamMember.map((item, index) => (
                            <div className="box" key={index}>
                                <img src={item.img1} alt="" />
                                <h3>{item.title}</h3>
                                <span className="title">{item.job}</span>
                                <div className="rate">
                                    <i className="filled fas fa-star"></i>
                                    <i className="filled fas fa-star"></i>
                                    <i className="filled fas fa-star"></i>
                                    <i className="filled fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* end team members */}
            </section>
            <section>
                {/* Start Our Skills */}
                <div className="skills">
                    <div className="container">
                        <h2>Our Skills</h2>
                        <div className="skill-box">
                            <div className="skill-name">JSX</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div className="skill-name">CSS</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">Tailwind CSS</div>
                            <div className="skill-progress">
                                <span data-progress="35%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">BootStrap</div>
                            <div className="skill-progress">
                                <span data-progress="65%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">ReactJs</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div className="skill-name">Responsive Design</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">Php</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">MySql</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">Laravel</div>
                            <div className="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <div className="skill-name">JQuery</div>
                            <div className="skill-progress">
                                <span data-progress="50%"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Our Skills */}
            </section>

        </>
    )
}

export default About



