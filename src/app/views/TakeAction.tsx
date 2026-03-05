"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faBrain, faSeedling, faComments, faChevronDown, faUserTie } from "@fortawesome/free-solid-svg-icons";
import styles from "./views.module.css";

const GROUPS = [
  { id: "researchers", icon: faBrain, label: "Researchers", tagline: "Help build the empirical foundation",
    actions: [
      { title: "Join as Core Researcher", desc: "Background in LLM evaluations, game theory, or human-AI interaction? You would be a great fit.", cta: "Express Interest", href: "https://airtable.com/appGoEa2TUeXbwDRO/pagCC47tkGZm2EHHy/form" },
      { title: "Work on Open Questions",  desc: "Looking for a meaningful side project? Browse ready-to-research open questions relevant to AHA.", cta: "View Questions",   href: "https://airtable.com/appGoEa2TUeXbwDRO/shrBefuusGierQcgi" },
    ],
  },
  { id: "funders", icon: faSeedling, label: "Funders", tagline: "Support work that fills a critical gap",
    actions: [
      { title: "Support the Work",      desc: "Offering expertise, connections, or funding? Even small contributions build momentum on a neglected problem.", cta: "Let's Talk", href: "https://calendly.com/nowemoore/1-on-1" },
    ],
  },
  { id: "professionals", icon: faUserTie, label: "Professionals and Businesses", tagline: "Ground the research in real-world use",
    actions: [
      { title: "Guide the Research Agenda", desc: "Help ground AHA research by sharing how AI contributes to and undermines decisions in your field.", cta: "Tell Your Story",   href: "https://airtable.com/appGoEa2TUeXbwDRO/pagNavvL8j9EzjzEX/form" },
      { title: "Join the Pilot",            desc: "Want to see what this looks like in practice before it goes public? Join the first wave of partners.",       cta: "Sign Up for Pilot", href: "https://airtable.com/appGoEa2TUeXbwDRO/paghSplZigBcSSKJY/form" },
    ],
  },
  { id: "public", icon: faComments, label: "General Public", tagline: "Follow along and spread the word",
    actions: [
      { title: "Attend an Infosession", desc: "Join a public session to hear what is being built and why it matters. Next session: TBD.", cta: "Sign Up",      href: "https://airtable.com/appGoEa2TUeXbwDRO/pagUZLqcAZhWoqQOh/form" },
      { title: "Share and Connect",     desc: "Know someone who should be involved: a researcher, a funder, someone affected by AI risk?",  cta: "Get in Touch", href: "mailto:nowe.moore@gmail.com" },
    ],
  },
];

export default function TakeAction() {
  const [open, setOpen] = useState("");
  return (
    <section id="take-action" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faRocket} /> Be Part of the Story
        </h1>
        <p className={styles.sectionText}>
          <span style={{ color: "var(--accent-sage)" }}>Many ways to get involved!</span> Choose one that fits you best.
        </p>
        <div className={styles.accordionList}>
          {GROUPS.map((g) => {
            const isOpen = open === g.id;
            return (
              <div key={g.id} className={styles.accordion}>
                <div className={styles.accordionHdr} onClick={() => setOpen(isOpen ? "" : g.id)}>
                  <div className={styles.accordionHdrLeft}>
                    <div className={styles.accordionHdrIcon}>
                      <FontAwesomeIcon icon={g.icon} />
                    </div>
                    <div>
                      <h3>{g.label}</h3>
                      <p>{g.tagline}</p>
                    </div>
                  </div>
                  <div className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                    <FontAwesomeIcon icon={faChevronDown} style={{ color: isOpen ? "var(--accent-sage)" : "var(--text-tertiary)" }} />
                  </div>
                </div>
                {isOpen && (
                  <div className={styles.accordionBody}>
                    {g.actions.map((a, i) => (
                      <div key={i} className={styles.actionRow}>
                        <div><h4>{a.title}</h4><p>{a.desc}</p></div>
                        <a href={a.href} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>{a.cta}</a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p style={{ marginTop: "2rem", textAlign: "right", fontSize: "0.85rem", opacity: 0.7 }}>
          If any of this sparked something or you want to explore working together, please <a href="mailto:nowe.moore@gmail.com" style={{ color: "var(--accent-teal)" }}>reach out</a>.
        </p>
      </div>
    </section>
  );
}
