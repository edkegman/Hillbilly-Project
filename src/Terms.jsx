import { Link } from "react-router";

export default function Terms() {
  return (
    <section className="legal">
      <div className="container">
        <div className="legal__header">
          <h1>Terms of Service</h1>
          <p>Effective Date: January 1, 2026</p>
          <p>Hillbilly Wireless Internet Inc.</p>
        </div>

        <div className="legal__content">
          <div className="legal__section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By purchasing, accessing, or using internet services provided
              by Hillbilly Wireless Internet Inc. ("Hillbilly Internet,"
              "we," "our," or "us"), you agree to these Terms of Service.
            </p>
          </div>

          <div className="legal__section">
            <h2>2. Internet Service</h2>
            <p>
              Hillbilly Internet provides internet access to residential
              and business customers. Service availability, speeds, and
              performance may vary based on location, network conditions,
              equipment, and other factors.
            </p>
          </div>

          <div className="legal__section">
            <h2>3. Customer Responsibilities</h2>
            <p>
              Customers are responsible for using the service lawfully,
              keeping account information current, protecting passwords,
              and ensuring that all users of the connection follow these
              Terms.
            </p>
          </div>

          <div className="legal__section">
            <h2>4. Acceptable Use</h2>
            <p>
              Customers may not use the service for spam, hacking, malware,
              illegal activity, unauthorized access, copyright infringement,
              or any activity that harms our network or other users.
            </p>
            <p>
              Additional rules are listed in our{" "}
              <Link to="/use">Acceptable Use Policy</Link>.
            </p>
          </div>

          <div className="legal__section">
            <h2>5. Billing and Payments</h2>
            <p>
              Customers agree to pay all applicable monthly service charges,
              equipment fees, installation fees, taxes, and other charges
              associated with their selected plan.
            </p>
          </div>

          <div className="legal__section">
            <h2>6. Equipment</h2>
            <p>
              Equipment provided by Hillbilly Internet remains the property
              of Hillbilly Internet unless otherwise stated. Customers are
              responsible for keeping equipment safe and returning it if
              service is canceled.
            </p>
          </div>

          <div className="legal__section">
            <h2>7. Service Availability</h2>
            <p>
              We work to provide reliable service, but we do not guarantee
              uninterrupted service. Outages may occur due to weather,
              maintenance, power issues, equipment failure, or other causes
              outside our control.
            </p>
          </div>

          <div className="legal__section">
            <h2>8. Suspension or Termination</h2>
            <p>
              Hillbilly Internet may suspend or terminate service for
              non-payment, violation of these Terms, abuse of the network,
              illegal activity, or misuse of company equipment.
            </p>
          </div>

          <div className="legal__section">
            <h2>9. Privacy</h2>
            <p>
              Information collected from customers is handled according
              to our <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>

          <div className="legal__section">
            <h2>10. Limitation of Liability</h2>
            <p>
              Hillbilly Internet is not responsible for indirect,
              incidental, or consequential damages, including lost
              profits, data loss, or service interruptions.
            </p>
          </div>

          <div className="legal__section">
            <h2>11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use
              of the service after changes are posted means you accept
              the updated Terms.
            </p>
          </div>

          <div className="legal__section">
            <h2>12. Contact Information</h2>
            <p>
              Phone: <a href="tel:8702837044">(870) 283-7044</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@hillbilly.com">
                support@hillbilly.com
              </a>
            </p>
            <p>
              Website: <Link to="/">hillbillyinternet.com</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}