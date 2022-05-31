import "./Footer.scss";
import inst from "../assets/images/icons/inst.svg";
import telegram from "../assets/images/icons/telegram.svg";
import whats from "../assets/images/icons/whats.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <NavLink to="/" className="footer__link">
                Home
              </NavLink>
            </li>
            <li className="footer__item">
              <NavLink to="works" className="footer__link">
                Works
              </NavLink>
            </li>
          </ul>
          <div className="footer__contact">
            <a href="" className="footer__link-contact">
              <img src={inst} alt="" className="footer__image" />
            </a>
            <a href="" className="footer__link-contact">
              <img src={telegram} alt="" className="footer__image" />
            </a>
            <a href="" className="footer__link-contact">
              <img src={whats} alt="" className="footer__image" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;