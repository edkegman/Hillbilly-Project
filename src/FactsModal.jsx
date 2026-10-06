import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { broadbandPlans } from "./plans";

export default function FactsModal({ planId, onClose }) {
  const plan = broadbandPlans[planId];
  const [showLabel, setShowLabel] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") closeRef.current();

      if (event.key !== "Tab") return;

      const elements = Array.from(
        dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex="0"]'
        )
      ).filter((element) => element.getClientRects().length > 0);

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (!first) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    dialogRef.current?.querySelector("button")?.focus();
  }, [showLabel]);

  const sections = [
    {
      title: "Monthly Price",
      rows: [
        ["Plan Price", plan.price],
        ["Equipment Lease", plan.equipment],
        ["Contract", "None"],
      ],
    },
    {
      title: "Typical Performance",
      rows: [
        ["Download Speed", plan.download],
        ["Upload Speed", plan.upload],
        ["Latency", plan.latency],
      ],
    },
    {
      title: "Data Included",
      rows: [["Monthly Data", plan.data]],
    },
    {
      title: "Additional Charges",
      rows: [
        ["Equipment Lease", plan.equipment],
        ["Installation Fee", plan.install ?? "Not provided"],
        ["Government Taxes", "Varies"],
        ["Early Termination Fee", "None"],
      ],
    },
  ];

  const labelSections = [
    {
      title: "Monthly Price",
      rows: [
        ["Monthly Price", plan.price],
        ["This Monthly Price is an Introductory Rate", "No"],
        ["Contract", "None"],
      ],
    },
    {
      title: "Typical Speeds",
      rows: [
        ["Download Speed", plan.download],
        ["Upload Speed", plan.upload],
        ["Latency", plan.latency],
      ],
    },
    {
      title: "Data Included",
      rows: [["Monthly Data Included", plan.data]],
    },
    {
      title: "Additional Charges & Terms",
      rows: [
        ["Provider Monthly Fees", `Equipment Lease ${plan.equipment}`],
        ["One-Time Fees", plan.install ?? "Not provided"],
        ["Early Termination Fee", "None"],
        ["Government Taxes", "Varies"],
      ],
    },
  ];

  function handleBackdrop(event) {
    if (event.target === event.currentTarget) onClose();
  }

  if (showLabel) {
    return (
      <div
        className="fcc__overlay fcc__overlay--open"
        onClick={handleBackdrop}
      >
        <div
          className="fcc__modal"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="label-title"
        >
          <button
            type="button"
            className="fcc__close"
            onClick={onClose}
            aria-label="Close broadband label"
          >
            &times;
          </button>

          <div className="fcc__label">
            <h1 id="label-title" className="fcc__title">
              Broadband Facts
            </h1>

            <div className="fcc__provider">
              <strong>Hillbilly Internet</strong>
              <span>{plan.name}</span>
            </div>

            <div className="fcc__disclosure">
              Broadband Consumer Disclosure
            </div>

            {labelSections.map((section) => (
              <div className="fcc__section" key={section.title}>
                <div className="fcc__section-title">
                  {section.title}
                </div>

                {section.rows.map(([label, value]) => (
                  <div className="fcc__row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}

                {section.title === "Monthly Price" && (
                  <div className="fcc__row">
                    <span>Terms of Contract</span>
                    <Link to="/terms" onClick={onClose}>
                      View Terms
                    </Link>
                  </div>
                )}
              </div>
            ))}

            <div className="fcc__section">
              <div className="fcc__section-title">Customer Support</div>
              <p>Phone: (870) 283-7044</p>
              <p>Email: support@hillbillywireless.com</p>
              <p>Website: hillbillywireless.com</p>
            </div>

            <div className="fcc__footer">
              <p>
                Learn more about the terms used on this label by
                visiting the FCC Consumer Resource Center.
              </p>

              <a
                href="https://www.fcc.gov/consumers"
                target="_blank"
                rel="noopener noreferrer"
              >
                FCC Consumer Resource Center
              </a>

              <div className="fcc__id">
                Unique Plan Identifier:{" "}
                <span>{plan.id ?? "Not provided"}</span>
              </div>

              <button
                type="button"
                className="facts__official facts__official-btn"
                onClick={() => setShowLabel(false)}
              >
                Back to Plan Facts
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="facts__overlay facts__overlay--open"
      onClick={handleBackdrop}
    >
      <div
        className="facts__modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="facts-title"
      >
        <button
          type="button"
          className="facts__close"
          onClick={onClose}
          aria-label="Close broadband facts"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        <div className="facts__header">
          <i className="fa-solid fa-file-lines" aria-hidden="true" />
          <div>
            <h2 id="facts-title">Broadband Facts</h2>
            <p>{plan.name}</p>
          </div>
        </div>

        <div className="facts__body">
          {sections.map((section) => (
            <div className="facts__section" key={section.title}>
              <h3>{section.title}</h3>

              {section.rows.map(([label, value]) => (
                <div className="facts__row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          ))}

          <div className="facts__section">
            <h3>Customer Support</h3>

            <div className="facts__support">
              <div>
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <a href="tel:8702837044">(870) 283-7044</a>
              </div>
              <div>
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <a href="mailto:support@hillbillywireless.com">
                  support@hillbillywireless.com
                </a>
              </div>
              <div>
                <i className="fa-solid fa-globe" aria-hidden="true" />
                <span>hillbillywireless.com</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="facts__official facts__official-btn"
            onClick={() => setShowLabel(true)}
          >
            View Broadband Label
          </button>
        </div>

        <div className="facts__footer">
          <a
            href="https://www.fcc.gov/consumers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Broadband Consumer Labels
          </a>
        </div>
      </div>
    </div>
  );
}