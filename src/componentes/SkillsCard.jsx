import "./SkillsCard.scss";

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
  return (
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
            {item && <li className="card__item">{item}</li>}
            {item2 && <li className="card__item">{item2}</li>}
            {item3 && <li className="card__item">{item3}</li>}
            {item4 && <li className="card__item">{item4}</li>}
            {item5 && <li className="card__item">{item5}</li>}
          </ul>
        </div>
        <div className="card__wrap-image">
          <img className="card__image" src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
