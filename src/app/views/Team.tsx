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
      <p>Nikola is behind the idea of initiating AHA Labs. She holds a Research MA in linguistics and a BA in language, cognition, and computer science. Find her on <a href="https://www.linkedin.com/in/nowemoore/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}>
  <FontAwesomeIcon icon={faLinkedin} />LinkedIn 
</a> or check out her <a href="https://nowemoore.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}>
  <FontAwesomeIcon icon={faLink} />personal website</a>. </p>
    ),
  },
  {
    name: "Name Surname",
    role: "Role Title",
    photo: "",
    bio: (
      <p>Short bio here.</p>
    ),
  },
  {
    name: "Name Surname",
    role: "Role Title",
    photo: "",
    bio: (
      <p>Short bio here.</p>
    ),
  },
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
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "18rem", flex: "0 0 18rem" }}>
              {m.photo ? (
                <img
                    src={m.photo}
                    alt={m.name}
                    style={{
                    width: "7rem",
                    height: "7rem",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid var(--accent-sage)",
                    marginBottom: "1.25rem",
                    }}
                />
                ) : (
                <div style={{
                    width: "7rem",
                    height: "7rem",
                    borderRadius: "50%",
                    border: "2px solid var(--accent-sage)",
                    marginBottom: "1.25rem",
                }} />
                )}
              <h2 style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.4rem" }}>{m.name}</h2>
              <p style={{ color: "var(--accent-sage)", fontSize: "0.85rem", marginBottom: "0.75rem", fontWeight: 400 }}>{m.role}</p>
              <p style={{ fontSize: "0.9rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.65 }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}