import "./AboutMe.scss";
import me from "../assets/images/me.png";
import qadro from "../assets/images/qadrocopter.png";
import qadro2 from "../assets/images/qadro2.png";

function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__wrapper container">
        <div className="aboutme__image-wrap">
          <img src={me} alt="Me" className="aboutme__image" />
          <div className="aboutme__animated">
            <img src={qadro} alt="" className="aboutme__qadro" />
          </div>
          <div className="aboutme__animated-two">
            <img src={qadro2} alt="" className="aboutme__qadro" />
          </div>
        </div>
        <div className="aboutme__text">
          <h2 className="aboutme__title">
            About <span>me</span>
          </h2>
          <p className="aboutme__subtitle">
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
