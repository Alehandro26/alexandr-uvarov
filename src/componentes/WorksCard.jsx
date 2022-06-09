import { useRef } from "react";
import "./WorksCard.scss";
import gsap from "gsap";
import { useIntersection } from "react-use";

function Card({ img, title, subtitle, link }) {
  const workCardRef = useRef();
  const body = document.body;

  function workCard() {
    workCardRef.current.classList.add("active");
    body.classList.add("not-scroll");
  }

  function workCardExit() {
    workCardRef.current.classList.remove("active");
    body.classList.remove("not-scroll");
  }

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
        amount: 1.5,
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
    ? fadeOut(".fade-right4")
    : fadeIn(".fade-right4");

  return (
    <div className="work-card" ref={workCardRef}>
      <div className="work-card__bgr">
        <img src={img} alt="" className="work-card__image bgr" />
      </div>
      <div className="work-card__popup">
        <div className="work-card__popup-bgr" onClick={workCardExit}></div>
        <div className="work-card__popup-wrapper">
          <div className="work-card__exit-wrapper" onClick={workCardExit}>
            <div className="work-card__exit">
              <span className="popup__line"></span>
              <span className="popup__line"></span>
            </div>
          </div>
          <div className="work-card__wrapper" onClick={workCard}>
            <img src={img} alt="" className="work-card__image popup-image" />
          </div>

          <div className="work-card__text" onClick={workCard}>
            <h4 className="work-card__title fade-right4">{title}</h4>
            <p className="work-card__subtitle fade-right4">{subtitle}</p>
          </div>
          <a
            href={link}
            target="_blank"
            className="work-card__link"
            onClick={workCardExit}
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
