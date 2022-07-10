import "./SkillsCard.scss";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function SkillsCard({
  title,
  image,
  item,
  item2,
  item3,
  item4,
  item5,
  beforeTitle,
  afterTitle,
}) {
  useEffect(() => {
    gsap.to(".fade-skill-item", {
      scrollTrigger: {
        trigger: ".fade-skill-item",
        start: "0 65%",
      },
      opacity: 1,
      y: 0,
      delay: 0.3,
      duration: 1.5,
      ease: "power4.out",
      stagger: {
        amount: 1,
      },
    });
  }, []);

  return (
    <div className="card-border fade-skills">
      <div className="card">
        <div className="card__wrapper">
          <div className="card__text">
            <h3 className="card__title">
              {beforeTitle && (
                <span className="card__title_before">{beforeTitle}</span>
              )}
              {title}
              {afterTitle && (
                <span className="card__title_after">{afterTitle}</span>
              )}
            </h3>
            <ul className="card__list">
              {item && <li className="card__item fade-skill-item">{item}</li>}
              {item2 && <li className="card__item fade-skill-item">{item2}</li>}
              {item3 && <li className="card__item fade-skill-item">{item3}</li>}
              {item4 && <li className="card__item fade-skill-item">{item4}</li>}
              {item5 && <li className="card__item fade-skill-item">{item5}</li>}
            </ul>
          </div>
          <div className="card__wrap-image">
            <img className="card__image" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
