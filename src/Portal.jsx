import { Link } from "react-router";
import bobby from "./assets/Bobby.png";

const portalCards = [
  {
    title: "Pay My Bill",
    description: "Access your account and make a payment online.",
    href: "https://serv01.apogeebilling.com/selfcare/hillbillywireless/",
    icon: "fa-credit-card",
    primary: true,
    external: true,
  },
  {
    title: "Fiber Contract",
    description: "View customer fiber agreement information.",
    href: "/fiber-contract",
    icon: "fa-file-signature",
  },
  {
    title: "Hillbilly Care Plan",
    description: "Learn about router help, service calls, and support coverage.",
    href: "/care-plan",
    icon: "fa-screwdriver-wrench",
  },
  {
    title: "Terms of Service",
    description: "Review HBW internet service terms.",
    href: "/terms",
    icon: "fa-file-lines",
  },
  {
    title: "Privacy Policy",
    description: "Understanding Your Privacy and Data Rights",
    href: "/privacy",
    icon: "fa-lock",
  },
  {
    title: "Acceptable Use Policy",
    description: "Read the rules for acceptable network usage.",
    href: "/use",
    icon: "fa-scale-balanced",
  },
];

export default function Portal() {
  return (
    <section id="portal">
      <div className="container">
        <div className="row portal__row">
          <div className="portal__header">
            <div className="portal__header-icon">
              <i className="fa-solid fa-user-shield" aria-hidden="true" />
            </div>

            <h1 className="portal__title">Customer Portal</h1>

            <p className="portal__subtitle">
              Quick access to billing, account help, email settings,
              and customer documents.
            </p>
          </div>

          <div className="portal__feature">
            <div className="portal__feature-text">
              <h2>Local help when you need it</h2>

              <p>
                Welcome to the Hillbilly Internet Customer Portal.
                We've made it easy to manage your account and find
                the information you need all in one place.
              </p>

              <p>
                From paying your monthly bill to reviewing your fiber
                agreement and accessing important customer documents,
                our goal is to make your experience as simple and
                convenient as possible.
              </p>
            </div>

            <div className="portal__imgs">
              <img
                className="portal__img"
                src={bobby}
                alt="Hillbilly Internet customer support"
              />
            </div>
          </div>

          <div className="portal__grid">
            {portalCards.map((card) => {
              const className = `portal__card${
                card.primary ? " portal__card--primary" : ""
              }`;

              const content = (
                <>
                  <i
                    className={`fa-solid ${card.icon} portal__icon`}
                    aria-hidden="true"
                  />
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </>
              );

              return card.external ? (
                <a
                  key={card.href}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={card.href}
                  to={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}