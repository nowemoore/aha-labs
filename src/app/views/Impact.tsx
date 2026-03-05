import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine, faBuilding, faShield, faBrain,
  faBullseye,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./views.module.css";

const cards = [
  {
    icon: faChartLine,
    title: "Expanding Evaluation Science",
    body: (
      <p>Designing evaluation protocols that account for both model performance and human behaviour fills in a critical gap in current evaluation science.</p>
    ),
  },
  {
    icon: faBuilding,
    title: "Advancing Preparedness",
    body: (
      <p>Powering monitoring tools can help organisations understand their risk exposure and prepare for safer AI transition.</p>
    ),
  },
  {
    icon: faShield,
    title: "Forming Empirical Grounding",
    body: (
      <p>Quantifying impacts of gradual disempowerment provides important empirical bases for safeguard development and policy.</p>
    ),
  },
  {
    icon: faEarthEurope,
    title: "Collecting Global Intelligence",
    body: (
      <p>Metrics enable organisations to compare their human-AI collaboration quality to a global standard, and accountability becomes possible.</p>
    ),
  },
  {
    icon: faBrain,
    title: "Building Research Capacity",
    body: (
      <p>Even negative results make for strong portfolio projects for all involved. Check out <a href="https://airtable.com/appGoEa2TUeXbwDRO/shrBefuusGierQcgi" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}>this question bank</a> for additional ready-to-research ideas.</p>
    ),
  },
];

export default function Impact() {
  return (
    <section
        id="impact"
        className={`${styles.section} ${styles.sectionBg}`}
        style={{ "--section-bg": "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop')" } as React.CSSProperties}
      >
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faBullseye} style={{ margin: "0.5rem" }} /> Why does this all matter?
        </h1>
        <p className={styles.sectionText}>
          Here is where the above project can make a difference.
        </p>
        <div className={styles.cardGrid}>
          {cards.slice(0, 3).map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}><FontAwesomeIcon icon={c.icon} /></div>
              <h3>{c.title}</h3>
              {c.body}
            </div>
          ))}
        </div>
        <div className={styles.cardGrid} style={{ gridTemplateColumns: "repeat(2, 1fr)", maxWidth: "66%", margin: "1.5rem auto 0" }}>
          {cards.slice(3).map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}><FontAwesomeIcon icon={c.icon} /></div>
              <h3>{c.title}</h3>
              {c.body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
