import "./AboutMe.scss";
import me from "../assets/images/me.png";
import qadro from "../assets/images/qadrocopter.png";
import qadro2 from "../assets/images/qadro2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  useEffect(() => {
    gsap.to(".fade-about", {
      scrollTrigger: {
        trigger: ".fade-about",
        start: "0 55%",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.6,
      },
    });
  }, []);

  return (
    <section className="aboutme">
      <div className="aboutme__wrapper container">
        <div className="aboutme__image-wrap">
          <img src={me} alt="Me" className="aboutme__image fade-about" />
          <div className="aboutme__animated">
            <img src={qadro} alt="" className="aboutme__qadro fade-about" />
          </div>
          <div className="aboutme__animated-two">
            <img src={qadro2} alt="" className="aboutme__qadro fade-about" />
          </div>
        </div>
        <div className="aboutme__text">
          <h2 className="aboutme__title fade-about">
            About <span>me</span>
          </h2>
          <p className="aboutme__subtitle fade-about">
            Hi. I'm Alexandr, and you? I'm twenty six years old, if you're
            interested, but it doesn't matter anymore. I'm the web-developer
            specializing in layout. I love to see the results of my work and
            dogs. Hobby? Sport is my hobby.. and travel. Okay, enough about me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
