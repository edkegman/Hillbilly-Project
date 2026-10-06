import { useState } from "react";
import PriceCard from "./PriceCard";
import FactsModal from "./FactsModal";
import useReveal from "./useReveal";

const packageGroups = [
  {
    title: "Fiber Optic Internet",
    subtitle:
      "Symmetrical speeds up to 1 Gig. Built for streaming, gaming, and working from home.",
    icon: "fa-network-wired",
    business: false,
    cards: [
      {
        planId: "fiber-value",
        title: "Value",
        icon: "fa-wifi",
        description: "Great for a household of 4",
      },
      {
        planId: "fiber-extra-value",
        title: "Extra Value",
        icon: "fa-video",
        description: "Best for 2 live streaming and 3 gamers",
      },
      {
        planId: "fiber-select",
        title: "Select",
        icon: "fa-star",
        description: "Perfect for gamers, downloads, and streaming",
      },
      {
        planId: "fiber-pro",
        title: "Pro",
        icon: "fa-bolt",
        description: "The ultimate internet experience",
      },
    ],
  },
  {
    title: "Wireless Internet",
    subtitle:
      "Wireless internet for rural homes, streaming, gaming, and everyday use.",
    icon: "fa-satellite-dish",
    business: false,
    cards: [
      {
        planId: "wireless-value",
        title: "Value",
        icon: "fa-wifi",
      },
      {
        planId: "wireless-select",
        title: "Select",
        icon: "fa-star",
      },
      {
        planId: "wireless-pro",
        title: "Pro",
        icon: "fa-film",
        description: "Great for Streaming",
      },
      {
        planId: "wireless-gamers",
        title: "Gamers",
        icon: "fa-gamepad",
        description: "Best for Gaming",
      },
      {
        planId: "wireless-ultra",
        title: "Ultra",
        icon: "fa-bolt",
        description: "Best for Downloads",
      },
      {
        planId: "wireless-supercharged",
        title: "Supercharged",
        icon: "fa-tower-broadcast",
        description: "Best for Multiple Users",
      },
    ],
  },
  {
    title: "Business Fiber Internet",
    subtitle:
      "Reliable business-class fiber with static IP options and symmetrical speeds.",
    icon: "fa-building",
    business: true,
    cards: [
      {
        planId: "biz-fiber-basic",
        title: "Biz Basic",
        icon: "fa-briefcase",
        description: "1 Static IP Address",
      },
      {
        planId: "biz-fiber-silver",
        title: "Biz Silver",
        icon: "fa-scale-balanced",
        description: "5 Static IP Addresses",
      },
      {
        planId: "biz-fiber-gold",
        title: "Biz Gold",
        icon: "fa-medal",
        description: "5 Static IP Addresses",
      },
      {
        planId: "biz-fiber-platinum",
        title: "Biz Platinum",
        icon: "fa-gem",
        description: "5 Static IP Addresses",
      },
    ],
  },
  {
    title: "Business Wireless Internet",
    subtitle:
      "Reliable wireless internet plans built for small businesses, file transfers, and multiple employees.",
    icon: "fa-tower-broadcast",
    business: true,
    cards: [
      {
        planId: "biz-wireless-1",
        title: "Biz-1",
        icon: "fa-user-tie",
        description: "Best for single person business",
      },
      {
        planId: "biz-wireless-2",
        title: "Biz-2",
        icon: "fa-envelope-open-text",
        description: "Frequent emails and file transfers",
      },
      {
        planId: "biz-wireless-3",
        title: "Biz-3",
        icon: "fa-users",
        description: "Multiple employees and large file transfers",
      },
      {
        planId: "biz-wireless-4",
        title: "Biz-4",
        icon: "fa-building",
        description: "Business wireless package",
      },
    ],
  },
];

export default function Packages() {
  const sectionRef = useReveal();
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  return (
    <>
      <section id="pricing" ref={sectionRef}>
        <div className="container">
          <div className="row">
            <div className="price__containers">
              <div className="price__header">
                <div className="price__header-icon">
                  <i
                    className="fa-solid fa-tower-broadcast"
                    aria-hidden="true"
                  />
                </div>

                <h1 className="price__title">Internet Packages</h1>
                <p className="price__title--sub">
                  Fast, reliable Internet for every home and budget
                </p>
              </div>

              {packageGroups.map((group) => (
                <div key={group.title}>
                  <div className="price__genre">
                    <div className="price__genre--left">
                      <div className="price__icon">
                        <i
                          className={`fa-solid ${group.icon}`}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="price__text">
                        <h2 className="price__catagory">
                          {group.title}
                        </h2>
                        <p className="price__subtitle">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="price__genre--right">
                      <h3
                        className={
                          group.business ? "price__badge" : "personal"
                        }
                      >
                        {group.business
                          ? "Business Plans"
                          : "Residential Plans"}
                      </h3>
                    </div>
                  </div>

                  <div className="price__container">
                    <div className="price__group">
                      {group.cards.map((card) => (
                        <PriceCard
                          key={card.planId}
                          {...card}
                          onFacts={setSelectedPlanId}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedPlanId && (
        <FactsModal
          planId={selectedPlanId}
          onClose={() => setSelectedPlanId(null)}
        />
      )}
    </>
  );
}