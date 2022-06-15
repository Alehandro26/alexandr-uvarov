import "./AboutMe.scss";
import me from "../assets/images/me.png";
import qadro from "../assets/images/qadrocopter.png";
import qadro2 from "../assets/images/qadro2.png";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { useRef } from "react";

function AboutMe() {
  const animationRef = useRef(null);

  const intersection = useIntersection(animationRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.4,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      x: 100,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fade-left")
    : fadeIn(".fade-left");

  return (
    <section className="aboutme" ref={animationRef}>
      <div className="aboutme__wrapper container">
        <div className="aboutme__image-wrap fade-left">
          <img src={me} alt="Me" className="aboutme__image" />
          <div className="aboutme__animated">
            <img src={qadro} alt="" className="aboutme__qadro" />
          </div>
          <div className="aboutme__animated-two">
            <img src={qadro2} alt="" className="aboutme__qadro" />
          </div>
        </div>
        <div className="aboutme__text">
          <h2 className="aboutme__title fade-left">
            About <span>me</span>
          </h2>
          <p className="aboutme__subtitle fade-left">
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
