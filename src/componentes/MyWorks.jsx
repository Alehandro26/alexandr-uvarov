import WorksCard from "./WorksCard";
import "./MyWorks.scss";
import poly from "../assets/images/poly.jpeg";
import budu from "../assets/images/budu.jpeg";
import solid from "../assets/images/solid.jpeg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function MyWorks() {
  useEffect(() => {
    gsap.to(".fade-work", {
      scrollTrigger: {
        trigger: ".fade-work",
        start: "80px 55%",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <section className="works">
      <div className="works__wrapper container">
        <div className="works__text">
          <h2 className="works__title fade-work">
            My <span>work</span>s
          </h2>
          <p className="works__subtitle fade-work">
            Below are some of my works. I'll push more works in my{" "}
            <a href="https://github.com/Alehandro26" className="works__git">
              GitHub
            </a>
          </p>
        </div>
        <div className="works__grid">
          <WorksCard
            title="Kristina Poly"
            subtitle="Site for stylist"
            img={poly}
            link="http://kristina-poly.online/"
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
      </div>
    </section>
  );
}

export default MyWorks;
