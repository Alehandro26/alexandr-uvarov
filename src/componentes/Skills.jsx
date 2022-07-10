import "./Skills.scss";
import SkillsCard from "./SkillsCard";
import html from "../assets/images/icons/html.svg";
import css from "../assets/images/icons/css.svg";
import js from "../assets/images/icons/js.svg";
import react from "../assets/images/icons/react.svg";
import Slider from "react-slick/lib/slider";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const settings = {
    variableWidth: true,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    gsap.to(".fade-skills", {
      scrollTrigger: {
        trigger: ".fade-skills",
        start: "0 65%",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: -0.6,
      },
    });
  }, []);

  return (
    <section className="skills">
      <div className="skills__wrapper">
        <div className="skills__text container">
          <h2 className="skills__title fade-skills">
            S<span>kills</span>
          </h2>
          <p className="skills__subtitle fade-skills">
            My level of knowledge is shown below
          </p>
        </div>
        <div className="skills__cards">
          <Slider {...settings}>
            <SkillsCard
              beforeTitle="<"
              title="HTML5"
              afterTitle=" />"
              item="Semantic layout;"
              item2="Adaptive layout;"
              item3="Cross-browser layout;"
              item4="Mobile first."
              image={html}
            ></SkillsCard>
            <SkillsCard
              title="CSS3"
              afterTitle=" {}"
              item="SCSS;"
              item2="BEM;"
              item3="Animations;"
              item4="Flex;"
              item5="Grid."
              image={css}
            ></SkillsCard>
            <SkillsCard
              title="JavaScript"
              item="Functions();"
              item2="Objects{};"
              item3="Arrays[];"
              item4="DOM."
              image={js}
            ></SkillsCard>
            <SkillsCard
              beforeTitle="<"
              title="React"
              afterTitle=" />"
              item="Router;"
              item2="Hooks;"
              item3="Component layout."
              image={react}
            ></SkillsCard>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Skills;
