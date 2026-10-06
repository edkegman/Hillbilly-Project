import owner from "./assets/owner.avif";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about__half">
            <div className="about__title">
              <h2 className="about__title--title">
                ABOUT <span className="blue">US</span>
              </h2>
            </div>

            <div className="about__box">
              <div className="about__header">
                <div className="about__icons">
                  <i
                    className="fa-regular fa-clock about__icon"
                    aria-hidden="true"
                  />
                </div>

                <div className="about__subject">
                  <div className="about__box--title">
                    <h3 className="about__title--sub">
                      Store <span className="blue">Hours</span>
                    </h3>
                  </div>

                  <div className="about__content">
                    <p>
                      Monday-Friday:{" "}
                      <span className="blue">8:00am to 6:00pm</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__box">
              <div className="about__header">
                <div className="about__icons">
                  <i
                    className="fa-solid fa-phone about__icon"
                    aria-hidden="true"
                  />
                </div>

                <div className="about__subject">
                  <div className="about__box--title">
                    <h3 className="about__title--sub">
                      Contact <span className="blue">Us</span>
                    </h3>
                  </div>

                  <div className="about__content">
                    <p>
                      Phone Number:{" "}
                      <a
                        href="tel:8702837044"
                        className="blue underline"
                      >
                        (870)-283-7044
                      </a>
                    </p>

                    <p>
                      Email:{" "}
                      <a
                        href="mailto:support@hillbillywireless.com"
                        className="blue"
                      >
                        support@hillbillywireless.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__box">
              <div className="about__header">
                <div className="about__icons">
                  <i
                    className="fa-solid fa-book-open about__icon"
                    aria-hidden="true"
                  />
                </div>

                <div className="about__subject">
                  <div className="about__box--title">
                    <h3 className="about__title--sub">
                      Hillbilly <span className="blue">History</span>
                    </h3>
                  </div>

                  <div className="about__content">
                    <p>
                      Frontier Computer Solutions was started by Ed and
                      Laura Kegley in November of 2000. They were building
                      and repairing PCs themselves in a small rented space.
                      They added a computer technician in 2001. In 2002
                      they built their own building and added a sales clerk.
                      They also added repair contracts with several large
                      employers to maintain their computers and networks.
                    </p>

                    <p>
                      In 2006 Hillbilly Wireless was added in order to
                      provide high speed wireless internet access to the
                      rural areas surrounding the Cave City Area.
                    </p>

                    <p>
                      In 2009 they started WISPequipment.com to provide the
                      wireless equipment used to access the internet to
                      other wireless internet service providers.
                    </p>

                    <p>
                      In November 2014 they purchased the assets of Black
                      Sheep Computing's wireless network in Jonesboro /
                      Paragould, AR.
                    </p>

                    <p>
                      In October 2017 they purchased the assets of Vue
                      Wireless in Searcy, AR. They are currently upgrading
                      it to the latest technology.
                    </p>

                    <p>
                      In 2021 we changed our name to Hillbilly Internet.
                      We applied for and received three fiber grants from
                      the ARC program through the State to install fiber
                      internet into Tupelo, AR, North Independence County
                      (Pfeiffer to Cave City) and South Sharp County
                      (Cave City to Evening Shade). So far we have installed
                      over 3 million feet of conduit and one million feet
                      of fiber. Construction is still ongoing.
                    </p>

                    <p>
                      HBW currently has 150+ towers and over 1,600 customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about__half">
            <div className="about__half--right">
              <div className="about__imgs">
                <img
                  className="about__img"
                  src={owner}
                  alt="Hillbilly Internet founders"
                />
              </div>

              <div className="about__mission">
                <div className="about__comma blue" aria-hidden="true">
                  ,,
                </div>

                <h2 className="about__title--sub blue">Our Mission</h2>

                <p>
                  Providing reliable technology solutions and high speed
                  internet access to the rural communities we call home
                </p>

                <div className="about__founder">
                  <div className="about__icons">
                    <i
                      className="fa-solid fa-heart about__icon--founder"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="about__founder--words">
                    <h2 className="about__founder--name">
                      Ed &amp; Laura Kegley
                    </h2>
                    <p className="about__founder--title">Founders</p>
                  </div>
                </div>
              </div>

              <div className="customer__portal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}