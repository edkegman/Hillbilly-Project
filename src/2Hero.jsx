import jake from "./assets/Jake.png";

export default function Hero({ openCoverageModal }) {
  return (
    <section id="header">
      <div className="container">
        <div className="row header__row">
          <div className="header__half">
            <h2 className="header__title">
              Fast, reliable unlimited internet
            </h2>

            <p className="header__para">
              Unlimited high-speed Internet for everyone in your home.
              Packages start at $49.99 per month!
            </p>

            <h2 className="header__title">
              Wanna know if we cover your area?
            </h2>

            <p className="header__para">
              Enter your information below and one of our local team members
              will check service availability at your address and contact you
              as soon as possible.
            </p>

            <button
              type="button"
              className="coverage__button"
              onClick={openCoverageModal}
            >
              Coverage
            </button>
          </div>

          <div className="header__images">
            <img src={jake} className="header__img" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}