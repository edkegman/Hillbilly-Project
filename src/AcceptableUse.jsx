import { Link } from "react-router";

export default function AcceptableUse() {
  return (
    <section className="legal">
      <div className="container">
        <div className="legal__header">
          <h1>Acceptable Use Policy</h1>
          <p>Effective Date: January 1, 2026</p>
          <p>Hillbilly Wireless Internet Inc.</p>
        </div>

        <div className="legal__content">
          <div className="legal__section">
            <h2>1. Purpose</h2>
            <p>
              This Acceptable Use Policy ("AUP") explains the acceptable
              use of Hillbilly Wireless Internet Inc.'s internet services.
              It is designed to protect our customers, network, and the
              public while ensuring a reliable internet experience for
              everyone.
            </p>
          </div>

          <div className="legal__section">
            <h2>2. Compliance With Laws</h2>
            <p>
              Customers must comply with all applicable local, state,
              and federal laws while using our services.
            </p>
            <p>
              Customers may not use the service to engage in illegal
              activities or assist others in illegal activities.
            </p>
          </div>

          <div className="legal__section">
            <h2>3. Prohibited Activities</h2>
            <p>The following activities are prohibited:</p>

            <ul>
              <li>Sending unsolicited bulk email (spam).</li>
              <li>
                Attempting to gain unauthorized access to computers,
                accounts, or networks.
              </li>
              <li>
                Distributing malware, ransomware, spyware, or other
                malicious software.
              </li>
              <li>
                Launching denial-of-service (DoS) or distributed
                denial-of-service (DDoS) attacks.
              </li>
              <li>
                Using the service for phishing, fraud, identity theft,
                or scams.
              </li>
              <li>Interfering with the normal operation of our network.</li>
              <li>Violating copyright or intellectual property laws.</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2>4. Network Integrity</h2>
            <p>
              Customers may not intentionally disrupt, damage, overload,
              or interfere with the Hillbilly Internet network or the
              internet service provided to other customers.
            </p>
          </div>

          <div className="legal__section">
            <h2>5. Security</h2>
            <p>
              Customers are responsible for maintaining the security of
              their own devices, passwords, wireless networks, and
              equipment connected to the internet service.
            </p>
          </div>

          <div className="legal__section">
            <h2>6. Resale of Service</h2>
            <p>
              Residential internet service may not be resold or shared
              commercially without prior written authorization from
              Hillbilly Wireless Internet Inc.
            </p>
          </div>

          <div className="legal__section">
            <h2>7. Monitoring</h2>
            <p>
              Hillbilly Internet reserves the right to investigate
              suspected violations of this policy when necessary to
              protect the integrity of our network, comply with legal
              obligations, or protect our customers.
            </p>
          </div>

          <div className="legal__section">
            <h2>8. Violations</h2>
            <p>
              Violations of this Acceptable Use Policy may result in
              one or more of the following:
            </p>

            <ul>
              <li>Warning to the customer.</li>
              <li>Temporary suspension of service.</li>
              <li>Termination of service.</li>
              <li>Referral to law enforcement when required.</li>
            </ul>
          </div>

          <div className="legal__section">
            <h2>9. Changes to This Policy</h2>
            <p>
              Hillbilly Internet may update this Acceptable Use Policy
              from time to time. Continued use of our services after
              changes are posted constitutes acceptance of the updated
              policy.
            </p>
          </div>

          <div className="legal__section">
            <h2>10. Contact Us</h2>
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