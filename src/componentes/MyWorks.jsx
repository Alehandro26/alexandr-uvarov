import WorksCard from "./WorksCard";
import "./MyWorks.scss";
import poly from "../assets/images/poly.jpeg";
import budu from "../assets/images/budu.jpeg";
import solid from "../assets/images/solid.jpeg";
import { useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";

function MyWorks() {
  const animationRef = useRef();

  const intersection = useIntersection(animationRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      x: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      x: -100,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(".fade-right3")
    : fadeIn(".fade-right3");

  return (
    <section className="works" ref={animationRef}>
      <div className="works__wrapper container">
        <div className="works__text">
          <h2 className="works__title fade-right3">
            My <span>work</span>s
          </h2>
          <p className="works__subtitle fade-right3">
            Below are some of my works. I'll push more works in my{" "}
            <a href="https://github.com/Alehandro26" className="works__git">
              GitHub
            </a>
          </p>
        </div>
        <div className="works__grid">
          <WorksCard
            title="Kristina Poly"
            subtitle="Demo version site for stylist"
            img={poly}
            link="kristina-poly.online"
          ></WorksCard>
          <WorksCard
            title="Budu"
            subtitle="I created that page, but it has already been slightly modified"
            img={budu}
            link="https://budu.ru/business/online"
          ></WorksCard>
          <WorksCard
            title="Solid"
            subtitle="Paint company. The code + WordPress"
            img={solid}
            link="https://solidrus.com/"
          ></WorksCard>
        </div>
        <div className="works__look">
          <ul className="works__list">
            <li className="works__item">
              <div href="#" className="works__link">
                Home
              </div>
            </li>
            <li className="works__item">
              <div href="#" className="works__link">
                About
              </div>
            </li>
            <li className="works__item">
              <div href="#" className="works__link">
                Pages
              </div>
            </li>
            <li className="works__item">
              <div href="#" className="works__link">
                Links
              </div>
            </li>
            <li className="works__item">
              <div href="#" className="works__link">
                Gallery
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MyWorks;
