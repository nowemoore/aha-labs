import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faAnglesDown, faShuffle, faGaugeHigh, faWrench, faRoute, faMagnifyingGlass, faBoltLightning, faGears, faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import styles from "./views.module.css";
import ResearchTimeline from "../components/ResearchTimeline";

const researchBases = [
  {
    icon: faGears,
    text: (
      <p style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", fontWeight: 300, color: "var(--text-tertiary)", lineHeight: 1.75, margin: 0 }}>
        <span style={{ color: "var(--accent-magenta-soft)" }}><b>There is value in evaluating systems.</b></span> Evaluating models and humans in isolation always leaves out a half of the picture. To understand the risks of gradual disempowerment, we need to evaluate human-AI systems as a whole.
      </p>
    ),
  },
  {
    icon: faBoltLightning,
    text: (
      <p style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", fontWeight: 300, color: "var(--text-tertiary)", lineHeight: 1.75, margin: 0 }}>
        <span style={{ color: "var(--accent-magenta-soft)" }}><b>Known conditions that impair judgment point where to look.</b></span> Decades of social science research document conditions that impair human judgment. This research uses them as deliberate entry points to study where human-AI collaboration is most likely to break.
      </p>
    ),
  },
  {
    icon: faCircleNodes,
    text: (
      <p style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", fontWeight: 300, color: "var(--text-tertiary)", lineHeight: 1.75, margin: 0}}>
        <span style={{ color: "var(--accent-magenta-soft)" }}><b>Decisions share features.</b></span> Without a layer of abstraction, every new domain needs a new study. This research avoids that by working at the level of decision types instead of domains, looking for patterns tied to mechanisms instad of specific contexts.
      </p>
    ),
  },
];

export default function Approach() {
  return (
    <section id="approach" style={{ padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <div
        className={styles.sectionBg}
        style={{ "--section-bg": "url('https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&w=2232&auto=format&fit=crop')" } as React.CSSProperties}
      >
        <div className={styles.principlesInner}>
          <h1 className={styles.sectionTitle} style={{ justifyContent: "center" }}>
            <FontAwesomeIcon icon={faFlask} style={{ marginRight: "0.5rem" }} /> <span style={{ background: "var(--accent-forest)", padding: "4px 4px" }}>What</span> does it take to protect human agency?
          </h1>
          <p className={styles.sectionText} style={{ margin: "0 auto" }}>
            AHA Labs are dedicated to <span style={{ color: "var(--accent-sage)" }}>minimising the impact of gradual disempowerment on high-stakes decision-making processes</span>. Here are three interdependent lines of work that help move the needle on this cause:
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FontAwesomeIcon icon={faShuffle} /></div>
            <h2>Studying Human-AI Systems</h2>
            <p>Both models and humans contribute to collaboration failures. That is why research should weigh in both sides of the equation.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FontAwesomeIcon icon={faGaugeHigh} /></div>
            <h2>Quantifying Complex Risk</h2>
            <p>Real-world changes are currently bottlenecked on reliable metrics. We need more work that converts nuanced behavioural patterns into trackable data.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><FontAwesomeIcon icon={faWrench} /></div>
            <h2>Building Monitoring Tools</h2>
            <p>Organisations should know how much risk they are unknowingly carrying. Using trackable data to power monitoring tools helps them do that.</p>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "5rem 0 0" }}>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--text-secondary)" }} />
            <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "0.75rem" }} />
            <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "0.75rem" }} />
            <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "0.75rem" }} />
            <div style={{ flex: 1, height: "1px", background: "var(--text-secondary)" }} />
          </div>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-secondary)", marginTop: "1rem" }}>
            show me what the research involves
          </span>
        </div>
      </div>

      <div style={{ width: "100%", padding: "5rem clamp(1.25rem, 4vw, 3rem) 4rem", background: "#131212" }}>
        <div className={styles.principlesInner}>
          <h1 className={styles.sectionTitle} style={{ justifyContent: "center" }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "0.5rem" }} /><span style={{ background: "var(--accent-magenta)", padding: "4px 4px" }}>How</span> will this project achieve progress?
          </h1>
          <p className={styles.sectionText} style={{ margin: "0 auto" }}>
            Quantifying gradual disempowerment is no straightforward task. To keep the work <span style={{ color: "var(--accent-magenta)" }}>relevant</span>, <span style={{ color: "var(--accent-magenta)" }}>novel</span>, and <span style={{ color: "var(--accent-magenta)" }}>feasible</span>, this project builds on three core ideas:
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", maxWidth: "50rem", margin: "3.5rem auto 0" }}>
          {researchBases.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div style={{ flexShrink: 0, width: "6rem", height: "6rem", borderRadius: "50%", border: "1.5px solid var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-primary)", fontSize: "2.5rem" }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              {item.text}
            </div>
          ))}
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", padding: "5rem 0 0" }}>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--text-secondary)" }} />
            <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "0.75rem" }} />
            <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "0.75rem" }} />
            <FontAwesomeIcon icon={faAnglesDown} style={{ fontSize: "0.75rem" }} />
            <div style={{ flex: 1, height: "1px", background: "var(--text-secondary)" }} />
          </div>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-secondary)", marginTop: "1rem" }}>
            show me an actual project
          </span>
        </div>
      </div>

      <div className={styles.pilotWrap}>
        <div className={styles.container}>
          <h1 className={styles.sectionTitle} style={{ justifyContent: "center" }}>
            <FontAwesomeIcon icon={faRoute} style={{ marginRight: "0.5rem" }} /> Pilot Project
          </h1>
          <p className={styles.sectionText} style={{ margin: "0 auto", textAlign: "center" }}>
            This example agenda explores a potential way to compute the <span style={{ color: "var(--accent-sage)" }}>expected value of exposure to AI influence</span> across decision-making tasks. Click through the segments to learn about the methodology.
          </p>
          <ResearchTimeline />
        </div>
      </div>

    </section>
  );
}