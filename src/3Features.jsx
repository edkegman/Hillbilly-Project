import { Link } from "react-router";
import { broadbandPlans } from "./plans";
import useReveal from "./useReveal";

const featuredGroups = [
  {
    title: "Most Popular Fiber Packages",
    plans: [
      {
        planId: "fiber-value",
        title: "Value Package",
        icon: "fa-rocket",
      },
      {
        planId: "fiber-select",
        title: "Select Package",
        icon: "fa-star",
        popular: true,
      },
    ],
  },
  {
    title: "Most Popular Wireless Packages",
    plans: [
      {
        planId: "wireless-value",
        title: "Value Package",
        icon: "fa-wifi",
      },
      {
        planId: "wireless-gamers",
        title: "Gamers Package",
        icon: "fa-gamepad",
      },
    ],
  },
];

function FeatureCard({ planId, title, icon, popular }) {
  const plan = broadbandPlans[planId];

  return (
    <div className="feature__item reveal">
      <div className="feature__top">
        <i
          className={`fa-solid ${icon} feature__icon`}
          aria-hidden="true"
        />

        {popular && (
          <h3 className="feature__popular">Most Popular</h3>
        )}

        <h3 className="feature__title">{title}</h3>
      </div>

      <div className="feature__price">
        <h2 className="feature__amount">
          {plan.price.replace("/mo", "")}
          <span className="monthly"> /month</span>
        </h2>
      </div>

      <ul className="feature__list">
        <li className="feature__list-item">
          {plan.download} download
        </li>
        <li className="feature__list-item">
          {plan.upload} upload
        </li>
        <li className="feature__list-item">{plan.data} Data</li>
        <li className="feature__list-item">No Throttling</li>
        <li className="feature__list-item">Low latency</li>
      </ul>
    </div>
  );
}

export default function Features() {
  const sectionRef = useReveal();

  return (
    <section id="features" ref={sectionRef}>
      <div className="container">
        <div className="row feature__row">
          {featuredGroups.map((group) => (
            <div className="feature__half" key={group.title}>
              <div className="feature__header">
                <h2 className="feature__heading">{group.title}</h2>
              </div>

              <div className="feature__lists">
                {group.plans.map((plan) => (
                  <FeatureCard key={plan.planId} {...plan} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="feature__button">
          <Link to="/pricing" className="package__button">
            More Packages
          </Link>
        </div>
      </div>
    </section>
  );
}