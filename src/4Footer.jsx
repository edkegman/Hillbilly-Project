import { Link } from "react-router";
import logo from "./assets/hbi__logo.png";

export default function Footer({ openCoverageModal }) {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <div className="footer__img">
            <Link to="/">
              <img
                src={logo}
                alt="Hillbilly Internet"
                className="footer__logo"
              />
            </Link>
          </div>

          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link page__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav__link page__link">
                About
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="nav__link page__link"
                onClick={openCoverageModal}
              >
                Coverage
              </button>
            </li>
            <li>
              <Link to="/pricing" className="nav__link page__link">
                Packages
              </Link>
            </li>
          </ul>

          <ul className="nav__list">
            <li>
              <Link to="/terms" className="nav__link page__link">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="nav__link page__link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/use" className="nav__link page__link">
                Acceptable Use Policy
              </Link>
            </li>
          </ul>

          <ul className="socials__list">
            <li>
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <a href="tel:8702837044">(870) 283-7044</a>
            </li>
            <li>
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              <a href="mailto:support@hillbilly.com">
                support@hillbilly.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/hillbillywireless/"
                aria-label="Hillbilly Internet on Facebook"
              >
                <i
                  className="fa-brands fa-facebook-f"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>

          <p className="footer__copyright">
            © 2026 Hillbilly Internet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}