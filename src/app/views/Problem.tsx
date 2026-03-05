"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignsPost, faLightbulb, faRoadBarrier,
  faDice, faHandPointUp, faChevronDown,
  faPiggyBank, faComments, faScaleBalanced, faBrain,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./views.module.css";

const items = [
  {
    icon: faHandPointUp,
    content: (
      <p>
        <span style={{ color: "var(--accent-magenta-soft)" }}>Ever caught yourself asking AI for recommendations on decisions you used to make on your own? </span>
        You're not alone. Over <a href="https://www.gov.uk/government/publications/ai-skills-for-life-and-work-general-public-survey-findings/ai-skills-for-life-and-work-general-public-survey-findings#:~:text=2.,%25%20being%20full%2Dtime%20students." target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>56%</a> of workers report using AI at work, but only <a href="https://www.gov.uk/government/publications/ai-skills-for-life-and-work-general-public-survey-findings/ai-skills-for-life-and-work-general-public-survey-findings#:~:text=2.,%25%20being%20full%2Dtime%20students." target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>22%</a> feel confident judging the output quality.
      </p>
    ),
  },
  {
    icon: faDice,
    content: (
      <p>
        Unverified decisions made with AI result in errors <a href="https://arxiv.org/pdf/2411.00998" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-sage)" }}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>larger</a> than any other automation bias. Each overlooked error puts
        the next decision at risk. Imagine that decision is{" "}
        <span style={{ color: "var(--accent-sage)" }}>an investment. </span>
        <span style={{ color: "var(--accent-teal)" }}>A medical diagnosis. </span>
        <span style={{ color: "var(--accent-forest)" }}>A military call.</span>
      </p>
    ),
  },
  {
    icon: faSignsPost,
    content: (
      <p>
        But even if AI <span style={{ color: "var(--accent-magenta-soft)" }}>never made a wrong decision again</span>, the rapid integration of AI into society forces humans to delegate as many decisions as possible, retire their agency, and surrender meaningful impact on the world.
      </p>
    ),
  },
  {
    icon: faLightbulb,
    content: (
      <p>
        That is <a href="https://arxiv.org/abs/2501.16946" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-magenta)" }}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>gradual disempowerment</a>. In 2026, we continue being unable to mitigate it, as modern science has no reliable way to measure and monitor its progression. AHA Labs are here to change that.
      </p>
    ),
  },
];

const examples = [
  {
    icon: faPiggyBank,
    title: "Financial Exposure",
    body: (
      <p>
        Deloitte <span style={{ color: "var(--accent-magenta-soft)" }}>refunded the government</span> hundreds of thousands of dollars after an AI-generated reports scandal. iTutorGroup <span style={{ color: "var(--accent-magenta-soft)" }}>had to settle</span> after their AI screened out older candidates. Similar AI solutions have actually cost companies <span style={{ color: "var(--accent-magenta-soft)" }}>$4.4M on average</span>.
      </p>
    ),
  },
  {
    icon: faComments,
    title: "Reputational Damage",
    body: (
      <p>
        The Milan Olympic Committee had the resources, the expertise, the global spotlight. Still they faced <span style={{ color: "var(--accent-magenta-soft)" }}>worldwide embarrassment</span> for opening the Games with AI slop. The ceremony ended. The memes didn't. People remember.
      </p>
    ),
  },
  {
    icon: faScaleBalanced,
    title: "Competitive Disadvantage",
    body: (
      <p>
        <span style={{ color: "var(--accent-magenta-soft)" }}>Klarna</span> aimed to replace 75% of their customer service agents with AI. After a 22% drop in headcount, they learnt AI wasn't meeting their standards and had to rehire — costing them the very efficiency they were chasing.
      </p>
    ),
  },
  {
    icon: faBrain,
    title: "Talent Erosion",
    body: (
      <p>
        Even perfectly accurate AI can cause harm by leading people to stop developing their own judgement. Eventually there may be <span style={{ color: "var(--accent-magenta-soft)" }}>no one left</span> to tell the difference between a good and a bad recommendation, or to step in if something goes wrong.
      </p>
    ),
  },
];

export default function Problem() {
  const [open, setOpen] = useState(false);

  return (
    <section id="problem" className={`${styles.section} ${styles.problemSection}`}>
      <div className={styles.container}>

        <h1 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faRoadBarrier} style={{ marginRight: "0.5rem" }} />
          Can <span style={{ background: "var(--accent-forest)", padding: "4px 4px" }}>perfectly aligned</span> AI cause <span style={{ background: "var(--accent-magenta)", padding: "4px 4px" }}>harm?</span>
        </h1>

        <div className={styles.zigzag}>
          {items.map((item, i) => (
            <div key={i} className={`${styles.zigzagRow} ${i % 2 !== 0 ? styles.zigzagRowReverse : ""}`}>
              <div className={styles.zigzagIcon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className={styles.zigzagContent}>
                {item.content}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "4rem" }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              background: "none", border: "none", cursor: "pointer",
              color: "var(--text-secondary)", fontFamily: "inherit",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)", padding: 0,
              opacity: 0.75, transition: "opacity 0.2s ease",
            }}
          >
            <span style={{ textTransform: "uppercase", fontSize: "0.7rem"}}>Still can't quite see what this looks like in practice</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ transition: "transform 0.3s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", fontSize: "0.85rem" }}
            />
          </button>

          {open && (
            <div className={styles.cardGrid} style={{ marginTop: "2rem", gridTemplateColumns: "repeat(4, 1fr)", width: "95vw", marginLeft: "calc(-47.5vw + 50%)", alignItems: "start" }}>
                {examples.map((ex, i) => (
                  <div key={i} className={styles.card} style={{ marginTop: i % 2 !== 0 ? "2rem" : "0" }}>
                  <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={ex.icon} />
                  </div>
                  <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {ex.title}
                  </h3>
                  <div style={{ fontSize: "0.88rem", fontWeight: 300, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {ex.body}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}