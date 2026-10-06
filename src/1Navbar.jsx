import { Link } from "react-router";
import logo from "./assets/hbi__logo--full.png";

export default function Navbar({ openCoverageModal, openModal }) {
  return (
    <section id="landing">
      <nav>
        <div className="container">
          <div className="row">
            <div className="nav__bar">
              <Link to="/">
                <img
                  src={logo}
                  alt="Hillbilly Internet"
                  className="nav__logo"
                />
              </Link>

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

                <li>
                  <Link to="/portal" className="nav__link page__link">
                    Portal
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    className="nav__link nav__link--primary"
                    onClick={openModal}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}