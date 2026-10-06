import { useState } from "react";
import CoverageMap from "./CoverageMap";

export default function CoverageModal({ onClose }) {
  const [step, setStep] = useState("form");
  const [information, setInformation] = useState(null);
  const [preview, setPreview] = useState(null);

  const [location, setLocation] = useState({
    lat: 35.7698,
    lng: -91.6409,
  });

  function handleSubmit(event) {
    event.preventDefault();

    setInformation(
      Object.fromEntries(new FormData(event.currentTarget))
    );

    setPreview(null);
    setStep("map");
  }

  function previewRequest() {
    setPreview({
      ...information,
      latitude: location.lat,
      longitude: location.lng,
    });
  }

  function goBack() {
    setPreview(null);
    setStep("form");
  }

  return (
    <div className="coverage--open">
      <div
        className="coverage__overlay"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          className="coverage__modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coverage-title"
        >
          <button
            type="button"
            className="coverage__close"
            onClick={onClose}
            aria-label="Close coverage"
            autoFocus
          >
            &times;
          </button>

          <h2 id="coverage-title" className="coverage__title">
            {step === "form"
              ? "Fill out your Hillbilly Info:"
              : "Pin Your Home"}
          </h2>

          <form
            className={`coverage__form ${
              step === "form" ? "" : "hidden"
            }`}
            onSubmit={handleSubmit}
          >
            <p className="coverage__required">* Required</p>

            <label>
              First:
              <input
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
              />
            </label>

            <label>
              Last:
              <input
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
              />
            </label>

            <label>
              Address:
              <input
                name="address"
                type="text"
                autoComplete="street-address"
                required
              />
            </label>

            <label>
              City:
              <input
                name="city"
                type="text"
                autoComplete="address-level2"
                required
              />
            </label>

            <label>
              Country:
              <select name="country" autoComplete="country-name">
                <option>United States</option>
              </select>
            </label>

            <label>
              State:
              <select name="state" autoComplete="address-level1">
                <option>Arkansas</option>
              </select>
            </label>

            <label>
              Zip:
              <input
                name="zip"
                type="text"
                autoComplete="postal-code"
              />
            </label>

            <label>
              Phone:
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
            </label>

            <label>
              Email:
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Where did you hear about us:
              <select name="referral" defaultValue="" required>
                <option value="" disabled>
                  Please Select
                </option>
                <option>Facebook</option>
                <option>Google</option>
                <option>Friend</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Contact by:
              <select name="contactMethod">
                <option>Phone</option>
                <option>Email</option>
              </select>
            </label>

            <label>
              Best time to contact:
              <select name="contactTime">
                <option>Anytime</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </label>

            <label>
              Comments / Questions:
              <textarea name="comments" />
            </label>

            <button type="submit" className="coverage__submit">
              Next
            </button>
          </form>

          {step === "map" && (
            <div className="coverage__map">
              <p className="coverage__subtitle">
                Drag the marker or click your exact house.
              </p>

              <CoverageMap
                initialLocation={location}
                onLocationChange={setLocation}
              />

              <div className="coverage__buttons">
                <button
                  type="button"
                  className="coverage__back"
                  onClick={goBack}
                >
                  Back
                </button>

                <button
                  type="button"
                  className="coverage__submit"
                  onClick={previewRequest}
                >
                  Preview Request
                </button>
              </div>

              {preview && (
                <div aria-live="polite">
                  <p>Request preview only—nothing has been sent.</p>
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {JSON.stringify(preview, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}