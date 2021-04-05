import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>My hobbies</span>
          <h2 className={classes.heading}>HERE ARE SOME OF SKILLS</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>HTML &amp; CSS</h3>
                <p>I also have knowledge of Html and Css and I have worked on 3 small projects and learnt from Code academy and from Coursera. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Fast Typing</h3>
                <p>I am highly skilled in typing. I have been typing alot in games and here and there and I have 100+ words speed per minute.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>I am a Gamer. I am a pro player of Counter Strike 1.6! but Currently I don't play and focus on Programming.</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;