"use client";
import { useEffect, useState } from "react";
import styles from "./components.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoadBarrier, faFlask, faRocket, faBullseye, faStopwatch, faStar } from "@fortawesome/free-solid-svg-icons";

const SECTIONS = ["hero", "problem",  "approach", "impact", "timeline", "team", "take-action"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      let closest = SECTIONS[0];
      let closestDist = Infinity;

      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // distance from top of section to 30% down the viewport
        const dist = Math.abs(rect.top - window.innerHeight * 0.3);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      setActive(closest);
      const path = closest === "" ? "#hero" : `#${closest}`;
      history.replaceState(null, "", path);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.nav}>
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
        {[
          { id: "problem",     label: "Problem",      icon: faRoadBarrier },
          { id: "approach",   label: "Approach",     icon: faFlask },
          { id: "impact",     label: "Impact",       icon: faBullseye },
          { id: "timeline",     label: "Timeline",       icon: faStopwatch },
          { id: "team",     label: "Team",       icon: faStar },
          { id: "take-action", label: "Get Involved", icon: faRocket, cta: true },
          ].map(({ id, label, icon, cta }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={cta ? styles.navCta : `${styles.navLink} ${active === id ? styles.navLinkActive : ""}`}style={{}}
          >
            <FontAwesomeIcon icon={icon} style={{ marginRight: "0.4rem", fontSize: "0.8em", opacity: 0.7 }} />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}