import { broadbandPlans } from "./plans";

export default function PriceCard({
  planId,
  title,
  icon = "fa-wifi",
  description,
  onFacts,
}) {
  const plan = broadbandPlans[planId];

  if (!plan) return null;

  return (
    <div className="price__item reveal">
      <div className="price__top">
        <i
          className={`fa-solid ${icon} feature__icon`}
          aria-hidden="true"
        />
        <h3 className="price__titles">{title || plan.name}</h3>
      </div>

      <div className="feature__price">
        <h2 className="feature__amount">
          {plan.price.replace("/mo", "")}
          <span className="monthly"> /month</span>
        </h2>
      </div>

      <ul className="feature__list">
        <li className="feature__list-item">
          {plan.download} Download
        </li>
        <li className="feature__list-item">
          {plan.upload} Upload
        </li>
        <li className="feature__list-item">
          {description || `${plan.data} Data`}
        </li>
        <li className="feature__list-item">
          + {plan.equipment} Equipment Lease
        </li>

        {plan.install && plan.install !== "None" && (
          <li className="feature__list-item">
            {plan.install} Installation Fee
          </li>
        )}
      </ul>

      {onFacts && (
        <button
          type="button"
          className="facts__button"
          onClick={() => onFacts(planId)}
        >
          <i className="fa-solid fa-file-lines" aria-hidden="true" />
          {" "}Broadband Facts
        </button>
      )}
    </div>
  );
}