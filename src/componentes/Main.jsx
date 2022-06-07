import { useEffect, useRef, useState } from "react";
import "./Main.scss";
import emailjs from "emailjs-com";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return {
    isEmpty,
    minLengthError,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

function Main() {
  const body = document.body;
  const buttonMainRef = useRef();
  const popupMainRef = useRef();

  const popupMain = () => {
    buttonMainRef.current.classList.toggle("active");
    popupMainRef.current.classList.toggle("active");
    body.classList.toggle("not-scroll");
  };

  const name = useInput("", { isEmpty: true, minLength: 2 });
  const number = useInput("", { isEmpty: true, minLength: 11 });

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_pxiujpm", form.current, "FuF4LLcHu-TaLR4tf")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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
          <div className="main__text">
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
              site? Add content? Okay, text me and rest assured, I'll solve your
              the problem.
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
            <div className="popup__exit" onClick={popupMain}>
              <span className="popup__line"></span>
              <span className="popup__line"></span>
            </div>
          </div>
          <h3 className="popup__title">Request</h3>
          <form
            onSubmit={sendEmail}
            ref={form}
            action="#"
            className="popup__form form"
          >
            <div className="form__item">
              <label htmlFor="nameForm" className="form__label">
                Name:
              </label>
              {name.isDirty && name.isEmpty && (
                <div style={{ color: "red" }}>The field cannot be empty</div>
              )}
              {name.isDirty && name.minLengthError && (
                <div style={{ color: "red" }}>Incorrect length</div>
              )}
              <input
                type="text"
                id="nameForm"
                name="name"
                value={name.value}
                onChange={(e) => name.onChange(e)}
                onBlur={(e) => name.onBlur(e)}
                placeholder="Alexandr"
                className="form__input"
              />
            </div>
            <div className="form__item">
              <label htmlFor="emailForm" className="form__label">
                Number:
              </label>
              {number.isDirty && number.isEmpty && (
                <div style={{ color: "red" }}>The field cannot be empty</div>
              )}
              {number.isDirty && number.minLengthError && (
                <div style={{ color: "red" }}>Incorrect length</div>
              )}
              <input
                type="number"
                id="emailForm"
                name="number"
                value={number.value}
                onChange={(e) => number.onChange(e)}
                onBlur={(e) => number.onBlur(e)}
                placeholder="79999990000"
                className="form__input"
              />
            </div>
            <div className="form__item">
              <textarea
                name="message"
                id="messageForm"
                className="textarea form__input"
                placeholder="Your text"
              ></textarea>
            </div>
            <button
              disabled={!name.inputValid || !number.inputValid}
              type="submit"
              className="form__button"
              value="Send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Main;
