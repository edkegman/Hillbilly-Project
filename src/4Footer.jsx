import logo from "./assets/hbi__logo.png";

export default function Footer({ openCoverageModal }) {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <div className="footer__img">
            <a href="#">
              <img
                src={logo}
                alt="Hillbilly Internet"
                className="footer__logo"
              />
            </a>
          </div>

          <ul className="nav__list">
            <li>
              <a href="/" className="nav__link page__link">Home</a>
            </li>
            <li>
              <a href="/about" className="nav__link page__link">About</a>
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
              <a href="/pricing" className="nav__link page__link">
                Packages
              </a>
            </li>
          </ul>

          <ul className="nav__list">
            <li>
              <a href="/terms" className="nav__link page__link">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="nav__link page__link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/use" className="nav__link page__link">
                Acceptable Use Policy
              </a>
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