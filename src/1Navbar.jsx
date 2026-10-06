import logo from "./assets/hbi__logo--full.png";

export default function Navbar({ openCoverageModal, openModal }) {
  return (
    <section id="landing">
      <nav>
        <div className="container">
          <div className="row">
            <div className="nav__bar">
              <a href="/">
                <img
                  src={logo}
                  alt="Hillbilly Internet"
                  className="nav__logo"
                />
              </a>

              <ul className="nav__list">
                <li>
                  <a href="/" className="nav__link page__link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="nav__link page__link">
                    About
                  </a>
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
                <li>
                  <a href="/portal" className="nav__link page__link">
                    Portal
                  </a>
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