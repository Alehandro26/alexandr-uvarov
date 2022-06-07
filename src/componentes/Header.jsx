import { useRef } from "react";
import "./Header.scss";
import inst from "../assets/images/icons/inst.svg";
import telegram from "../assets/images/icons/telegram.svg";
import whats from "../assets/images/icons/whats.svg";
import { NavHashLink } from "react-router-hash-link";
import MenuDes from "./MenuDes";

function Header() {
  const body = document.body;
  const buttonRef = useRef();
  const popupRef = useRef();
  const buttonContactRef = useRef();
  const listContactRef = useRef();

  const popup = () => {
    popupRef.current.classList.toggle("active");
    buttonRef.current.classList.toggle("active");
    body.classList.toggle("not-scroll");
  };

  const contactsRemove = () => {
    buttonContactRef.current.classList.remove("active");
    listContactRef.current.classList.remove("active");
  };

  const popupContact = () => {
    popup();
    contactsRemove();
  };

  const contacts = () => {
    buttonContactRef.current.classList.toggle("active-button");
    listContactRef.current.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <NavHashLink to="/#top" className="header__logo">
          <p className="header__logo_text">
            <span>A</span>lexandr Uvarov
          </p>
        </NavHashLink>
        <div className="header__button" ref={buttonRef} onClick={popupContact}>
          <span className="header__button_line"></span>
          <span className="header__button_line"></span>
          <span className="header__button_line"></span>
        </div>
        <MenuDes />
      </div>
      <nav className="header__nav" ref={popupRef}>
        <div className="header__nav_bgr" onClick={popupContact}></div>
        <ul className="header__list">
          <li className="header__item">
            <NavHashLink
              to="/#top"
              className="header__link"
              onClick={popupContact}
            >
              Home
            </NavHashLink>
          </li>
          <li className="header__item">
            <NavHashLink
              to="works#top"
              className="header__link"
              onClick={popupContact}
            >
              Works
            </NavHashLink>
          </li>
          <li className="header__item">
            <div
              href="#"
              ref={buttonContactRef}
              onClick={contacts}
              className="header__link"
            >
              Contacts{" "}
              <span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.97637 5.07191L9.33367 0.7146L9.95239 1.33332L5.28573 5.99999L4.66701 5.99998L0.000340435 1.33332L0.61906 0.714599L4.97637 5.07191Z"
                    fill="#424242"
                  />
                </svg>
              </span>
            </div>
          </li>
        </ul>
        <ul className="header__list-contact" ref={listContactRef}>
          <li className="header__item-contact">
            <a
              href="https://instagram.com/_uvarov_aa?igshid=YmMyMTA2M2Y="
              className="header__link-contact"
            >
              Instagram
              <img src={inst} alt="" className="header__icon-contact" />
            </a>
          </li>
          <li className="header__item-contact">
            <a
              href="https://wa.me/79620003743"
              className="header__link-contact"
            >
              What's App
              <img src={whats} alt="" className="header__icon-contact" />
            </a>
          </li>
          <li className="header__item-contact">
            <a href="https://t.me/iammiracle0" className="header__link-contact">
              Telegram
              <img src={telegram} alt="" className="header__icon-contact" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
