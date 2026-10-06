import { Link } from "react-router";

export default function Privacy() {
  return (
    <section className="legal">
      <div className="container">
        <div className="legal__header">
          <h1>Privacy Policy</h1>
          <p>Effective Date: January 1, 2026</p>
          <p>Hillbilly Wireless Internet Inc.</p>
        </div>

        <div className="legal__content">
          <div className="legal__section">
            <h2>1. Introduction</h2>

            <p>
              Hillbilly Wireless Internet Inc. ("Hillbilly Internet,"
              "we," "our," or "us") respects your privacy and is
              committed to protecting the personal information you
              provide while using our website and internet services.
            </p>

            <p>
              This Privacy Policy explains what information we collect,
              how we use it, and how we protect it.
            </p>
          </div>

          <div className="legal__section">
            <h2>2. Information We Collect</h2>

            <p>We may collect information including:</p>

            <ul>
              <li>Name</li>
              <li>Mailing address</li>
              <li>Service address</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing information</li>
              <li>Information submitted through contact forms</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2>3. How We Use Your Information</h2>

            <p>Your information may be used to:</p>

            <ul>
              <li>Provide internet service.</li>
              <li>Process billing and payments.</li>
              <li>Respond to customer support requests.</li>
              <li>Schedule installations and repairs.</li>
              <li>Notify customers of service updates or outages.</li>
              <li>Improve our website and customer experience.</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2>4. Sharing Information</h2>

            <p>
              Hillbilly Internet does not sell customer personal
              information.
            </p>

            <p>Information may be shared only when necessary to:</p>

            <ul>
              <li>Process payments.</li>
              <li>Provide requested services.</li>
              <li>Comply with legal obligations.</li>
              <li>
                Protect the safety and security of our network and
                customers.
              </li>
            </ul>
          </div>

          <div className="legal__section">
            <h2>5. Cookies and Website Analytics</h2>

            <p>
              Our website may use cookies or similar technologies to
              improve functionality and understand how visitors use
              the website.
            </p>

            <p>
              These technologies do not collect more personal
              information than necessary to operate and improve our
              website.
            </p>
          </div>

          <div className="legal__section">
            <h2>6. Data Security</h2>

            <p>
              We use reasonable administrative, technical, and physical
              safeguards to protect customer information from
              unauthorized access, disclosure, alteration, or
              destruction.
            </p>
          </div>

          <div className="legal__section">
            <h2>7. Data Retention</h2>

            <p>
              Customer information is retained only as long as
              reasonably necessary to provide services, comply with
              legal requirements, resolve disputes, and maintain
              business records.
            </p>
          </div>

          <div className="legal__section">
            <h2>8. Third-Party Links</h2>

            <p>
              Our website may contain links to third-party websites.
              Hillbilly Internet is not responsible for the privacy
              practices or content of those websites.
            </p>
          </div>

          <div className="legal__section">
            <h2>9. Children's Privacy</h2>

            <p>
              Our services are not directed toward children under the
              age of 13, and we do not knowingly collect personal
              information from children.
            </p>
          </div>

          <div className="legal__section">
            <h2>10. Changes to This Privacy Policy</h2>

            <p>
              Hillbilly Internet may update this Privacy Policy from
              time to time. Changes become effective when posted on
              this website.
            </p>
          </div>

          <div className="legal__section">
            <h2>11. Contact Us</h2>

            <p>
              If you have questions about this Privacy Policy, please
              contact us:
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:8702837044">(870) 283-7044</a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@hillbilly.com">
                support@hillbilly.com
              </a>
            </p>

            <p>
              <strong>Website:</strong>{" "}
              <Link to="/">hillbillyinternet.com</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}