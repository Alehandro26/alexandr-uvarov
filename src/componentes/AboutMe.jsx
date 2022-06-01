import "./AboutMe.scss";
import me from "../assets/images/me.png";

function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__wrapper container">
        <div className="aboutme__image-wrap">
          <img src={me} alt="Me" className="aboutme__image" />
          <div className="aboutme__animated"></div>
        </div>
        <div className="aboutme__text">
          <h2 className="aboutme__title">
            About <span>me</span>
          </h2>
          <p className="aboutme__subtitle">
            Hi. I'm Alexandr, and you? I'm twenty six years old, if you're
            interested, but it doesn't matter anymore. I love to see the results
            of my work. Sport is my hobby. Okay, enough about me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
