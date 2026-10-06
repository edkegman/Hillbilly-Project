import envelope from "./assets/envelope.png";

export default function ContactModal({ onClose }) {
  return (
    <div className="modal--open">
      <div
        className="modal__overlay"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          className="modal"
          style={{ "--contact-background": `url("${envelope}")` }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
        >
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Close contact"
            autoFocus
          >
            &times;
          </button>

          <div className="container">
            <div className="row">
              <div className="contact">
                <div className="contact__header">
                  <h1 id="contact-title" className="contact__title">
                    Give us<span className="blue"> a shout</span>
                  </h1>
                  <p>We pride ourselves on our customer service.</p>
                </div>

                <div className="contact__card">
                  <div className="contact__icons">
                    <i
                      className="fa-solid fa-phone contact__icon"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="contact__info">
                    <span className="phone__number">Phone Number</span>
                    <h3 className="contact__phone blue">
                      <a href="tel:8702837044">(870)-283-7044</a>
                    </h3>
                  </div>
                </div>

                <div className="contact__boxes">
                  <div className="contact__inputs">
                    <input
                      className="name"
                      name="name"
                      placeholder="Name"
                      aria-label="Name"
                    />
                    <input
                      type="email"
                      className="email"
                      name="email"
                      placeholder="E-mail"
                      aria-label="Email"
                    />
                  </div>

                  <textarea
                    className="description"
                    name="message"
                    placeholder="How do you do"
                    aria-label="Message"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}