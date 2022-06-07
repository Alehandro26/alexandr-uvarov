import "./MenuDes.scss";
import inst from "../assets/images/icons/inst.svg";
import telegram from "../assets/images/icons/telegram.svg";
import whats from "../assets/images/icons/whats.svg";
import { NavHashLink } from "react-router-hash-link";

function MenuDes() {
  return (
    <nav className="menu-des">
      <ul className="menu-des__list">
        <li className="menu-des__item">
          <NavHashLink to="/#top" className="menu-des__link">
            Home
          </NavHashLink>
        </li>

        <li className="menu-des__item">
          <NavHashLink to="works#top" className="menu-des__link">
            Works
          </NavHashLink>
        </li>

        <li className="menu-des__item">
          <button className="menu-des__button">
            Contacts{" "}
            <span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.97637 5.07191L9.33367 0.7146L9.95239 1.33332L5.28573 5.99999L4.66701 5.99998L0.000340435 1.33332L0.61906 0.714599L4.97637 5.07191Z"
                  fill="#fff"
                />
              </svg>
            </span>
          </button>

          <ul className="menu-des__list-contact">
            <li className="menu-des__item-contact">
              <a
                href="https://instagram.com/_uvarov_aa?igshid=YmMyMTA2M2Y="
                className="menu-des__link-contact"
              >
                Instagram
                <img src={inst} alt="" className="menu-des__image" />
              </a>
            </li>
            <li className="menu-des__item-contact">
              <a
                href="https://wa.me/79620003743"
                className="menu-des__link-contact"
              >
                What's App
                <img src={whats} alt="" className="menu-des__image" />
              </a>
            </li>
            <li className="menu-des__item-contact">
              <a
                href="https://t.me/iammiracle0"
                className="menu-des__link-contact"
              >
                Telegram
                <img src={telegram} alt="" className="menu-des__image" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default MenuDes;
