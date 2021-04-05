import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Intro</h2>
                    <div className={classes.About}>
                        <p> My name is Rahul Gianchandani, studying in SZABIST karachi, doing BSCS and I am currently learning Mern stack from Sir Waqas, and also learning javascript online else learning react is hard without knowing Javascript. I know Html and css well because I have completed course on Coursera. </p>
                         <p className={classes.br}>I want to learn Web Development as soon as i can, completely!
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;