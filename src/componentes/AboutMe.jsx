import "./AboutMe.scss";
import me from "../assets/images/me.png";

function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__wrapper container">
        <div className="aboutme__image-wrap">
          <img src={me} alt="Me" className="aboutme__image" />
        </div>
        <div className="aboutme__text">
          <h2 className="aboutme__title">
            About <span>me</span>
          </h2>
          <p className="aboutme__subtitle">Hi. I'm Alexandr, and you?</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
