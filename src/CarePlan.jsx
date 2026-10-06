import { Link } from "react-router";
import jake from "./assets/Jake.png";

const benefits = [
  {
    title: "Router Support",
    icon: "fa-network-wired",
    description: "Get help diagnosing common router and Wi-Fi issues.",
  },
  {
    title: "Home Internet Help",
    icon: "fa-wifi",
    description:
      "Support for connection problems affecting your home service.",
  },
  {
    title: "Service Calls",
    icon: "fa-truck",
    description: "Eligible service visits may be covered under the plan.",
  },
  {
    title: "Local Support",
    icon: "fa-headset",
    description: "Friendly help from the local Hillbilly Internet team.",
  },
];

const coverageDetails = [
  {
    title: "What the Care Plan May Help With",
    items: [
      "Approved router troubleshooting",
      "Basic Wi-Fi support",
      "Eligible service call assistance",
      "Connection-related support",
      "Help understanding equipment issues",
    ],
  },
  {
    title: "What May Not Be Covered",
    items: [
      "Customer-caused physical damage",
      "Damage from lightning, flooding, or power surges",
      "Unauthorized equipment changes",
      "Third-party networking equipment",
      "Damage caused by neglect or misuse",
    ],
  },
];

export default function CarePlan({ openModal }) {
  return (
    <section id="care-plan">
      <div className="container">
        <div className="row care-plan__row">
          <Link to="/portal" className="care-plan__back">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            {" "}Back to Customer Portal
          </Link>

          <div className="care-plan__hero">
            <div className="care-plan__text">
              <div className="care-plan__icon">
                <i
                  className="fa-solid fa-screwdriver-wrench"
                  aria-hidden="true"
                />
              </div>

              <h1>Hillbilly Care Plan</h1>

              <p>
                Extra peace of mind for your home internet service. The
                Hillbilly Care Plan helps customers get support for
                approved equipment, router issues, and eligible service
                calls.
              </p>

              <button
                type="button"
                onClick={openModal}
                className="care-plan__btn"
              >
                Ask About the Care Plan
              </button>
            </div>

            <div className="care-plan__image-wrap">
              <img
                src={jake}
                alt="Hillbilly Internet technician"
                className="care-plan__image"
              />
            </div>
          </div>

          <div className="care-plan__grid">
            {benefits.map((benefit) => (
              <div className="care-plan__card" key={benefit.title}>
                <i
                  className={`fa-solid ${benefit.icon}`}
                  aria-hidden="true"
                />
                <h2>{benefit.title}</h2>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="care-plan__details">
            {coverageDetails.map((detail) => (
              <div key={detail.title}>
                <h2>{detail.title}</h2>
                <ul>
                  {detail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="care-plan__cta">
            <h2>Have Questions About Coverage?</h2>
            <p>
              Call Hillbilly Internet at{" "}
              <a href="tel:8702837044">
                <strong>(870) 283-7044</strong>
              </a>{" "}
              and our team can help explain whether the Care Plan is
              right for your home.
            </p>

            <button
              type="button"
              onClick={openModal}
              className="care-plan__cta-btn"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}