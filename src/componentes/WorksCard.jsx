import { useRef } from "react";
import "./WorksCard.scss";

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

          <div className="work-card__text">
            <h4 className="work-card__title">{title}</h4>
            <p className="work-card__subtitle">{subtitle}</p>
          </div>
          <a href={link} target="_blank" className="work-card__link">
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
