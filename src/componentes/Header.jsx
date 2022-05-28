import { useRef } from "react";
import "./Header.scss";

function Header() {
  const buttonRef = useRef();
  const popupRef = useRef();
  const buttonContactRef = useRef();
  const listContact = useRef();

  const popup = () => {
    popupRef.current.classList.toggle("active");
    buttonRef.current.classList.toggle("active");
  };

  const contacts = () => {
    buttonContactRef.current.classList.toggle("active");
    listContact.current.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__image">
          <img src="/main.jpg" alt="logo" className="header__image_logo" />
        </div>
        <div className="header__button" ref={buttonRef} onClick={popup}>
          <span className="header__button_line"></span>
          <span className="header__button_line"></span>
          <span className="header__button_line"></span>
        </div>
      </div>
      <nav className="header__nav" ref={popupRef}>
        <ul className="header__list">
          <li className="header__list_item">
            <a href="#" className="header__list_link" onClick={popup}>
              Home
            </a>
          </li>
          <li className="header__list_item">
            <a href="#" className="header__list_link" onClick={popup}>
              Works
            </a>
          </li>
          <li className="header__list_item">
            <div
              href="#"
              ref={buttonContactRef}
              onClick={contacts}
              className="header__list_link"
            >
              Contacts
            </div>
          </li>
        </ul>
        <ul className="header__list-contact" ref={listContact}>
          <li className="header__list-contact_item">
            <a href="" className="header__list-contact_link">
              Instagram
            </a>
          </li>
          <li className="header__list-contact_item">
            <a href="" className="header__list-contact_link">
              What's up
            </a>
          </li>
          <li className="header__list-contact_item">
            <a href="" className="header__list-contact_link">
              Telegram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
