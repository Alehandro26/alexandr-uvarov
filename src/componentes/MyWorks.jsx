import WorksCard from "./WorksCard";
import "./MyWorks.scss";
import poly from "../assets/images/poly.jpeg";
import budu from "../assets/images/budu.jpeg";
import solid from "../assets/images/solid.jpeg";

function MyWorks() {
  return (
    <section className="works">
      <div className="works__wrapper container">
        <div className="works__text">
          <h2 className="works__title">
            My <span>work</span>s
          </h2>
          <p className="works__subtitle">
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
