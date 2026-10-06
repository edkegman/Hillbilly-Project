import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import "./index.css";

import Navbar from "./1Navbar";
import Hero from "./2Hero";
import Features from "./3Features";
import Footer from "./4Footer";
import About from "./About";
import ContactModal from "./ContactModal";
import CoverageModal from "./CoverageModal";
import Packages from "./Packages";
import Portal from "./Portal";
import FiberContract from "./FiberContract";
import CarePlan from "./CarePlan";
import Terms from "./Terms";
import Privacy from "./Privacy";
import AcceptableUse from "./AcceptableUse";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openContact = () => setActiveModal("contact");
  const openCoverage = () => setActiveModal("coverage");
  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    if (!activeModal) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveModal(null);
      }

      if (event.key === "Tab") {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return;

        const elements = Array.from(
          dialog.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), ' +
              'select:not([disabled]), textarea:not([disabled])'
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
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [activeModal]);

  return (
    <>
      <Navbar
        openModal={openContact}
        openCoverageModal={openCoverage}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero openCoverageModal={openCoverage} />
                <Features />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Packages />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/fiber-contract" element={<FiberContract />} />
          <Route
            path="/care-plan"
            element={<CarePlan openModal={openContact} />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/use" element={<AcceptableUse />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </main>

      <Footer openCoverageModal={openCoverage} />

      {activeModal === "contact" && (
        <ContactModal onClose={closeModal} />
      )}

      {activeModal === "coverage" && (
        <CoverageModal onClose={closeModal} />
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);