import { Link } from "react-router";
import contract from "./assets/contract.png";

const summaries = [
  {
    title: "Scope of Service",
    icon: "fa-tower-broadcast",
    description:
      "Hillbilly Internet agrees to run fiber internet service to the customer’s location under the terms of the agreement.",
  },
  {
    title: "Fiber Installation",
    icon: "fa-ruler-horizontal",
    description:
      "The agreement covers the first 400 feet of fiber installation. Additional fiber footage may require extra cost depending on the installation.",
  },
  {
    title: "Service Commitment",
    icon: "fa-calendar-check",
    description:
      "Customers may be required to maintain an active fiber internet account for 24 months as part of the installation agreement.",
  },
  {
    title: "Payment Terms",
    icon: "fa-dollar-sign",
    description:
      "Some installation costs may be paid monthly or upfront depending on the agreement between the customer and Hillbilly Internet.",
  },
  {
    title: "Early Cancellation",
    icon: "fa-triangle-exclamation",
    description:
      "If the customer does not maintain the required active service period, remaining installation charges may become due.",
  },
];

export default function FiberContract() {
  return (
    <section id="fiber-contract">
      <div className="container">
        <div className="row fiber-contract__row">
          <Link to="/portal" className="fiber-contract__back">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            {" "}Back to Customer Portal
          </Link>

          <div className="fiber-contract__header">
            <i
              className="fa-solid fa-file-signature fiber-contract__header-icon"
              aria-hidden="true"
            />
            <h1>Fiber Service Agreement</h1>
            <p>
              Review the key details of Hillbilly Internet’s fiber
              installation agreement in a simple, easy-to-read format.
            </p>
          </div>

          <div className="fiber-contract__notice">
            <i className="fa-solid fa-circle-info" aria-hidden="true" />
            <p>
              This page is a simplified overview for convenience. The
              official contract document should be reviewed for the
              complete legal terms.
            </p>
          </div>

          <div className="contract-summary">
            {summaries.map((summary) => (
              <div className="contract-summary__card" key={summary.title}>
                <i
                  className={`fa-solid ${summary.icon}`}
                  aria-hidden="true"
                />
                <h2>{summary.title}</h2>
                <p>{summary.description}</p>
              </div>
            ))}

            <div className="contract-summary__card">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <h2>Questions?</h2>
              <p>
                Contact Hillbilly Internet at{" "}
                <a href="tel:8702837044">
                  <strong>(870) 283-7044</strong>
                </a>{" "}
                for help understanding the fiber service agreement.
              </p>
            </div>
          </div>

          <div className="official-contract">
            <div className="official-contract__text">
              <h2>Official Contract Document</h2>
              <p>
                View the original contract document below. This is
                useful for customers who want to see the physical
                copy of the agreement.
              </p>
            </div>

            <div className="official-contract__buttons">
              <a
                href={contract}
                target="_blank"
                rel="noopener noreferrer"
                className="contract-btn"
              >
                Open Contract
              </a>

              <a
                href={contract}
                download="Hillbilly-Internet-Fiber-Contract.png"
                className="contract-btn contract-btn--outline"
              >
                Download Contract
              </a>
            </div>
          </div>

          <div className="contract-preview">
            <h2>Contract Preview</h2>

            <div className="contract-preview__page">
              <span>Page 1</span>
              <img src={contract} alt="Fiber Contract Page 1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}