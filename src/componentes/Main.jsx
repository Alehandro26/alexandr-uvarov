import { useRef } from "react";
import "./Main.scss";

function Main() {
  const body = document.body;
  const buttonMainRef = useRef();
  const popupMainRef = useRef();

  const popupMain = () => {
    buttonMainRef.current.classList.toggle("active");
    popupMainRef.current.classList.toggle("active");
    body.classList.toggle("not-scroll");
  };

  return (
    <section className="main">
      <div className="main__wrapper">
        <div className="main__content">
          <div className="main__object">
            <img
              src={require("../assets/images/main.jpg")}
              alt="Main image"
              className="main__image"
            />
          </div>
          <div className="main__text container">
            <div className="main__animation-block">
              <h1 className="main__title">
                <span>Web-</span>developer
              </h1>
              <div className="main__animation-wrapper">
                <div className="main__animation"></div>
              </div>
            </div>
            <p className="main__subtitle">
              Do you want to get a new website? Do you need to edit an existing
              site? Add content? Okay, text me and I'll solve your case.
            </p>
            <button
              className="main__button"
              onClick={popupMain}
              ref={buttonMainRef}
            >
              Request
            </button>
          </div>
        </div>
      </div>
      <div className="popup" ref={popupMainRef}>
        <div className="popup__bgr" onClick={popupMain}></div>
        <div className="popup__wrapper">
          <div className="popup__exit-wrapper">
            <div className="popup__animation"></div>
            <div className="popup__exit" onClick={popupMain}>
              <span className="popup__line"></span>
              <span className="popup__line"></span>
            </div>
          </div>
          <h3 className="popup__title">Request</h3>
          <form action="#" className="popup__form form">
            <div className="form__item">
              <label htmlFor="nameForm" className="form__label">
                Name:
              </label>
              <input
                type="text"
                id="nameForm"
                name="name"
                placeholder="Alexandr"
                className="form__input"
              />
            </div>
            <div className="form__item">
              <label htmlFor="emailForm" className="form__label">
                Number:
              </label>
              <input
                type="number"
                id="emailForm"
                name="number"
                placeholder="+"
                className="form__input"
              />
            </div>
            <div className="form__item">
              <label htmlFor="" className="form__text"></label>
              <textarea
                name="message"
                id="messageForm"
                className="textarea form__input"
                placeholder="Your text"
              ></textarea>
            </div>
            <button type="submit" className="form__button">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Main;
