import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./views.module.css";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const members = [
  {
    name: "Nowe Moore",
    role: "Project Lead",
    photo: "",
    bio: (
      <p>Nikola, who's behind the idea of AHA Labs, has always been interested in what makes minds&mdash;human and artificial&mdash;decide one way over another. She holds a Research MA and studied language, cognition, and computer science at Penn and Cambridge. She's always happy to chat about the science behind agency. Find her on <a href="https://www.linkedin.com/in/nowemoore/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}>
  <FontAwesomeIcon icon={faLinkedin} />LinkedIn 
</a> or check out her <a href="https://nowemoore.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}>
  <FontAwesomeIcon icon={faLink} />personal website</a>. </p>
    ),
  }
];

export default function Team() {
  return (
    <section
      id="team"
      className={`${styles.section} ${styles.sectionBg}`}
      style={{ "--section-bg": "url('https://images.unsplash.com/photo-1508361727343-ca787442dcd7?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" } as React.CSSProperties}
    >
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className={styles.sectionTitle} style={{ justifyContent: "center", marginBottom: "5rem" }}>
          <FontAwesomeIcon icon={faStar} style={{ marginRight: "0.5rem" }} /> Say Hello to the Team!
        </h1>

        <div style={{ display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap", width: "min(80vw, 80rem)" }}>
          {members.map((m, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25rem" }}>
              {m.photo ? (
                <img src={m.photo} alt={m.name} style={{ width: "7rem", height: "7rem", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent-sage)", marginBottom: "1.25rem" }} />
              ) : (
                <div style={{ width: "7rem", height: "7rem", borderRadius: "50%", border: "2px solid var(--accent-sage)", marginBottom: "1.25rem" }} />
              )}
              <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem" }}>{m.name}</h2>
              <p style={{ color: "var(--accent-sage)", fontSize: "0.85rem", marginBottom: "0.75rem", fontWeight: 400 }}>{m.role}</p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.65 }}>{m.bio}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "2rem",  display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
          <a href="YOUR_SIGNUP_LINK_HERE" target="_blank" rel="noopener noreferrer">
            <button className={styles.btnPrimary}>Be Next</button>
          </a>
          <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: "30rem", textAlign: "center" }}>
            This project is informally mentored by former and present Googlers, MATS researchers and research coordinators, and Oxbridge computer scientists.
          </p>
        </div>

      </div>
    </section>
  );
}