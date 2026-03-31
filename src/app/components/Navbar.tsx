"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./components.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoadBarrier, faFlask, faRocket, faBullseye, faStopwatch, faStar, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const SECTIONS = ["hero", "problem", "approach", "impact", "timeline", "team", "take-action"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastReplaceRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      let closest = SECTIONS[0];
      let closestDist = Infinity;

      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - window.innerHeight * 0.3);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      setActive(closest);

      const now = Date.now();
      if (now - lastReplaceRef.current > 200) {
        lastReplaceRef.current = now;
        const path = closest === "hero" ? window.location.pathname : `#${closest}`;
        history.replaceState(null, "", path);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  const navItems = [
    { id: "problem",     label: "Problem",      icon: faRoadBarrier },
    { id: "approach",    label: "Approach",     icon: faFlask },
    { id: "impact",      label: "Impact",       icon: faBullseye },
    { id: "timeline",    label: "Timeline",     icon: faStopwatch },
    { id: "team",        label: "Team",         icon: faStar },
    { id: "take-action", label: "Get Involved", icon: faRocket, cta: true },
  ];

  return (
    <>
      {/* ── Desktop navbar ── */}
      <nav className={`${styles.nav} ${styles.navDesktop}`}>
        <button onClick={() => scrollTo("hero")} className={styles.navLogo} style={{ background: "none", border: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          AHA
          <img
            src={`${process.env.NODE_ENV === 'production' ? '/aha-labs' : ''}/icon_dm.svg`}
            alt=""
            style={{ width: "2.2rem", height: "1.8rem" }}
          />
          <span>Labs</span>
        </button>
        <div className={styles.navLinks}>
          {navItems.map(({ id, label, icon, cta }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cta ? styles.navCta : `${styles.navLink} ${active === id ? styles.navLinkActive : ""}`}
            >
              <FontAwesomeIcon icon={icon} style={{ marginRight: "0.4rem", fontSize: "0.8em", opacity: 0.7 }} />
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Mobile navbar ── */}
      <nav className={`${styles.nav} ${styles.navMobile}`}>
        {/* Spacer to balance the hamburger */}
        <div style={{ width: "2.5rem" }} />

        {/* Centred logo */}
        <button
          onClick={() => scrollTo("hero")}
          className={`${styles.navLogo} ${styles.navLogoMobile}`}
          style={{ background: "none", border: "none" }}
        >
          AHA
          <img
            src={`${process.env.NODE_ENV === 'production' ? '/aha-labs' : ''}/icon_dm.svg`}
            alt=""
            style={{ width: "2.2rem", height: "1.8rem" }}
          />
          <span>Labs</span>
        </button>

        {/* Hamburger / X toggle — right */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={`${styles.drawerOverlay} ${menuOpen ? styles.drawerOverlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.drawerNav}>
          {navItems.map(({ id, label, icon, cta }, i) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`${styles.drawerNavItem} ${cta ? styles.drawerNavPink : ""}`}
              style={{ animationDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className={styles.drawerNavIcon}>
                <FontAwesomeIcon icon={icon} />
              </span>
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}