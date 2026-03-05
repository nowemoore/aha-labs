"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faMagnifyingGlass,
  faMicrochip,
  faTent,
  faFlask,
  faCircleChevronDown,
  faLink,
  faAngleDown,
  faAngleUp,
  faAnglesDown,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./components.module.css";

interface Card {
  title: string;
  description: string;
}

interface SideContent {
  freeWriting?: React.ReactNode;
  cards?: Card[];
}

interface TimelineItem {
  id: string;
  title: string;
  icon: IconDefinition;
  details: React.ReactNode[];
  sideContent?: SideContent;
}

function MatrixSkeleton({
  rowLabel,
  colLabel,
  valueLabel,
  rowText,
  colText,
  valueText,
}: {
  rowLabel: string;
  colLabel: string;
  valueLabel: string;
  rowText: React.ReactNode;
  colText: React.ReactNode;
  valueText: React.ReactNode;
}) {
  return (
    <table className={styles.matrixLegend}>
      <tbody>
        <tr>
          <th className={styles.matrixCorner} />
          <th className={styles.matrixCol}>
            {colLabel}
            <div className={styles.matrixSub}>{colText}</div>
          </th>
        </tr>
        <tr>
          <th className={styles.matrixRow}>
            <div className={styles.rotateWrap}>
              <div className={styles.rotateText}>
                {rowLabel}
                <div className={styles.matrixSub}>{rowText}</div>
              </div>
            </div>
          </th>
          <td className={styles.matrixValue}>
            <b>{valueLabel}:</b>
            <div className={styles.valueBody}>{valueText}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ComputationTableSkeleton({
  headers = [
    "Model Error",
    "Disempowerment-Conductive Behaviour",
    "Human Overreliance",
    "Risk",
  ],
  rows,
}: {
  headers?: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <table className={styles.compTable}>
      <thead>
        <tr className={styles.compHeaderRow}>
          {headers.map((h, i) => (
            <th
              key={i}
              className={
                i === headers.length - 1
                  ? styles.compHeaderResult
                  : styles.compHeader
              }
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rIdx) => (
          <tr key={rIdx} className={styles.compRow}>
            {row.map((cell, cIdx) => (
              <td
                key={cIdx}
                className={
                  cIdx === row.length - 1
                    ? styles.compResultCell
                    : styles.compCell
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const up = (
  <FontAwesomeIcon
    icon={faAngleUp}
    style={{ color: "var(--accent-magenta-soft)" }}
  />
);

const down = (
  <FontAwesomeIcon
    icon={faAngleDown}
    style={{ color: "var(--accent-sage)" }}
  />
);

const neutral = <FontAwesomeIcon icon={faAnglesRight} />;

const star = (
  <FontAwesomeIcon
    icon={faAnglesDown}
    style={{ color: "var(--accent-sage)" }}
  />
);

const timelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Brief Background",
    icon: faBookOpen,
    details: [
      <span key="p1" className={styles.paraLeft}>
        The motivation for this agenda is the lack of trackable metrics for{" "}
        <a
          href="https://arxiv.org/abs/2501.16946"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          gradual disempowerment{" "}
          <FontAwesomeIcon icon={faLink} />
        </a>
        , the loss of human power to machines, across human-AI systems. For the
        purposes of this project, gradual disempowerment comes in 3 main forms:
        (i) humans stop being able to follow how decisions around them are made{" "}
        <b style={{ color: "var(--accent-magenta-soft)" }}>(oversight)</b>, (ii)
        humans lose the ability to make decisions without AI assistance{" "}
        <b style={{ color: "var(--accent-magenta-soft)" }}>(agency)</b>, and
        (iii) human decisions, even if perfectly autonomous, have no meaningful
        impact on outcomes{" "}
        <b style={{ color: "var(--accent-magenta-soft)" }}>(impact)</b>.
      </span>,
      <span key="p2" className={styles.paraRight}>
        This agenda turns measuring gradual disempowerment into a feasible
        problem by recognising that not all choices are born equal&mdash;and
        the most impactful of decisions often happen under the exposure to
        conditions that impact judgment. In humans, such{" "}
        <b style={{ color: "var(--accent-magenta-soft)" }}>
          judgment-impairing conditions
        </b>{" "}
        are well documented: see the impact of{" "}
        <a
          href="https://psycnet.apa.org/record/1975-04472-001"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          time pressure
          <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </a>
        ,{" "}
        <a
          href="https://econpapers.repec.org/article/eeejobhdp/v_3a56_3ay_3a1993_3ai_3a1_3ap_3a134-148.htm"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          information ambiguity
          <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </a>
        , or{" "}
        <a
          href="https://www.econstor.eu/bitstream/10419/106817/1/816676984.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          risk level
          <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
        </a>
        . While AI may not <i>experience</i> any of these conditions, they may trigger unexpected behaviours in AI and/or humans that collapse this collaborative system.
      </span>,
    ],
    sideContent: {
      freeWriting: (
        <>
          <h4>Key Definitions</h4>
        </>
      ),
      cards: [
        {
          title: "Gradual Disempowerment",
          description: "Gradual loss of human decision-making power to machines in form of loss of oversight, agency, and impact.",
        },
        {
          title: "Judgment-Impairing Conditions",
          description: "External conditions known to negatively affect human judgment.",
        },
      ],
    },
  },
  {
    id: "2",
    title: "Focus Group",
    icon: faMagnifyingGlass,
    details: [
      <span key="p1" className={styles.paraLeft}>
        Evaluating AI–human collaboration on decision-making tasks requires a qualitative understanding of how human professionals interact with AI tools in practice. However, in order to develop less context-specific metrics, this study proposes to run a focus group that will allow for extracting the <span style={{color: 'var(--accent-magenta-soft)'}}><i>typology</i> of tasks</span>. This study makes the assumption that the type of task has a greater relation to the mechanism behind human-AI system failure than the application domains alone. 
      </span>,
      <span key="p2" className={styles.paraRight}>
        In other words, this study assumes that tasks grouped by characteristics (filtering, recommendation, ranking, etc.) will share similar mechanisms behind human-AI system failures, regardless of application domain (hiring, medical diagnosis, financial advising, etc.). This will later make it possible to develop ~transferable metrics without reiterating the entire methodological pipeline for every new use case. Data collected in this stage will later serve as independent variables in later stages.
      </span>
    ],
    sideContent: {
      freeWriting: (
        <>
          <h4 style={{marginBottom: '0.75rem'}}>Intended Output:</h4>
          <p>
            Qualitative typology of decision-making tasks for which AI tools are widely utilised.
          </p>
        </>
      ),
    },
  },
  {
    id: "3",
    title: "Technical Experiments",
    icon: faMicrochip,
    details: [
      <span key="p1" className={styles.paraLeft}>
        The present study shall conduct controlled experiments to understand models' role in human-AI collaboration failures. For every select task type (based on focus group data) and judgment-impairing condition (based on prior literature), this study evaluates models for <span style={{color: 'var(--accent-magenta-soft)'}}><b>error rates</b></span> (how often models fail to maintain their decision-making standard under judgment-impairing conditions when asked to decide) and <span style={{color: 'var(--accent-magenta-soft)'}}><b>behaviour conductive of disempowerment</b></span> (indications of models encouraging lack of oversight, agency, or impact in human-AI collaboration).
      </span>,
      <span key="p2" className={styles.paraRight}>
        This process will result in <span style={{color: 'var(--accent-magenta-soft)'}}><b>two severity matrices</b></span>, directly indicating how models contribute to disempowerment across task types and judgment-impairing conditions. The performance matrix will identify tasks where human overreliance can be particularly dangerous due to skewed capability. The behaviour matrix will identify potential amplification of disempowerment risks in human-AI collaboration. Together, these matrices will contribute to the final derivation of metrics.
      </span>,
    ],
    sideContent: {
      freeWriting: (
        <>
          <h4 style={{marginBottom: '0.75rem'}}>Intended Output:</h4>
          <p>
            Quantitative evaluation of model performance and disempowerment-conducive behaviour across task types and judgment-impairing conditions.
          </p>
          <div style={{ height: "2rem" }} />
          <h4 style={{marginBottom: '0.75rem'}}>Output Format:</h4>
          <div className={styles.matrixScale}>
            <MatrixSkeleton
              rowLabel="Task Types"
              colLabel="Judgment-Impairing Conditions"
              valueLabel="Cell values measure"
              rowText="collected via focus group"
              colText="collected via prior literature"
              valueText={
                <>
                  Model <b>error rates</b> on decision-making tasks under judgment-impairing conditions.
                </>
              }
            />
          </div>
          <div className={styles.matrixScale}>
            <MatrixSkeleton
              rowLabel="Task Types"
              colLabel="Judgment-Impairing Conditions"
              valueLabel="Cell values measure"
              rowText="collected via focus group"
              colText="collected via prior literature"
              valueText={
                <>
                  Model behaviour propagating erosion of human <b>oversight</b>, <b>agency</b>, and <b>impact</b>.
                </>
              }
            />
          </div>
        </>
      ),
    },
  },
  {
    id: "4",
    title: "In-Situ Study",
    icon: faTent,
    details: [
      <span key="p1" className={styles.paraLeft}>
        Before jumping into deriving metrics, this study additionally considers human role in human-AI system failures. Through an in-situ study, this study asks human participants to share their interactions with AI as well as respond to a brief daily questionnaire, revealing the types of decisions they make throughout the day and any judgment-impairing conditions they may have been exposed to. The goal of this stage is to link judgment-impairing conditions and task types to cues of disempowerment in real-world interactions.
      </span>,
      <span key="p2" className={styles.paraRight}>
        This method will result in a <span style={{color: 'var(--accent-magenta-soft)'}}><b>probability matrix</b></span>, indicating the likelihood (in terms of frequency and extent) of humans giving up their oversight, agency, and impact across task types and judgment-impairing conditions. This matrix will complement the two severity matrices from the technical experiments: while the severity matrices indicate the potential for error and disempowerment amplification on the model side, the probability matrix provides information on how often the problematic events occur in real world. 
      </span>,
    ],
    sideContent: {
      freeWriting: (
        <>
          <h4 style={{marginBottom: '0.75rem'}}>Intended Output:</h4>
          <p>
            Quantitative evaluation of human disempowerment cues across task types and judgment-impairing conditions.
          </p>
          <div style={{ height: "2rem" }} />
          <h4 style={{marginBottom: '0.75rem'}}>Output Format:</h4>
          <div className={styles.matrixScale}>
            <MatrixSkeleton
              rowLabel="Task Types"
              colLabel="Judgment-Impairing Conditions"
              valueLabel="Cell values measure"
              rowText="collected via focus group"
              colText="collected via prior literature"
              valueText={
                <>
                  Cues of loss of <b>oversight</b>, <b>agency</b>, and <b>impact</b> when making decisions, based on interactions with AI tools and daily questionnaires.
                </>
              }
            />
          </div>
        </>
      ),
    },
  },
  {
    id: "5",
    title: "Deriving Metrics",
    icon: faFlask,
    details: [
      <span key="p1" className={styles.paraLeft}>
        The final part of this study is where all pieces come together to form a risk metric for gradual disempowerment in human-AI decision-making. By combining the two severity matrices (model error rates and disempowerment-conducive behaviour) with the probability matrix (disempowerment cues from human real-world interactions with models), this study derives <span style={{color: 'var(--accent-magenta-soft)'}}>expected values for disempowerment risk</span> across task types and judgment-impairing conditions. We arrive at a metric that will grow in accuracy and reliability upon collecting more data and can be customised to specific use cases.
      </span>,
      <span key="p1" className={styles.paraRight}>
        Left to their own devices, humans tend to <span style={{color: 'var(--accent-sage)'}}>overcorrect for probability</span>: we pay attention to probable but low-value events but disregard improbable but high-value events. This bias is practical (people <i>should</i> take more precautions against getting pickpocketed rather than struck by the lightning), but unhelpful in measuring exposure to disempowerment. Improbable but costly risk from AI must still be taken seriously. Probable but low-cost risk should likewise be monitored. This study's metric accounts for both extremes, providing a foundation for early detection and context-specific response when appropriate. 
      </span>,
      <div style={{ height: "1rem" }} key="spacer" />,
      <p key="intro">
        View intuitions for the predicted interpretation of the final outcome below:
      </p>,
      <ComputationTableSkeleton
        key="table"
        rows={[
          [up, up, up, up],
          [up, up, down, neutral],
          [up, down, up, up],
          [up, down, down, down],
          [down, up, up, up],
          [down, up, down, down],
          [down, down, up, star],
          [down, down, down, down],
        ]}
      />
    ],
  },
];

export default function ResearchTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [contentVisibleId, setContentVisibleId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setContentVisibleId(null);
      setTimeout(() => setExpandedId(null), 50);
    } else {
      setExpandedId(id);
      setTimeout(() => setContentVisibleId(id), 300);
      
      setTimeout(() => {
        const element = document.getElementById(`timeline-item-${id}`);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }
      }, 50);
    }
  };

  return (
    <div className={`${styles.timeline} ${expandedId ? styles.timelineExpanded : styles.timelineCentered}`} style={{ marginTop: "3rem" }}>
      <div className={styles.line} />

      {timelineData.map((item) => {
        const isExpanded = expandedId === item.id;

        return (
          <div key={item.id} id={`timeline-item-${item.id}`} className={styles.item}>
            <div 
              className={styles.dot}
              onClick={() => toggleExpand(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <span className={styles.dotIcon}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
            </div>

            <div className={styles.content}>
              <button
                className={styles.titleRow}
                onClick={() => toggleExpand(item.id)}
                aria-expanded={isExpanded}
              >
                <h3 className={styles.title}>{item.title}</h3>
                <span className={`${styles.chevron} ${isExpanded ? styles.chevronUp : ""}`}>
                  <FontAwesomeIcon icon={faCircleChevronDown} />
                </span>
              </button>

              <div
                className={`${styles.expandWrapper} ${
                  isExpanded ? styles.expandWrapperOpen : ""
                }`}
              >
                <div className={`${styles.expandInner} ${contentVisibleId === item.id ? styles.contentVisible : styles.contentHidden}`}>
                  <div className={styles.expandGrid}>
                    <div className={styles.detailsColumn}>
                      {item.details.map((para, idx) => (
                        <div key={idx} className={styles.detailsText}>
                          {para}
                        </div>
                      ))}
                    </div>

                    {item.sideContent && (
                      <div className={styles.sideColumn}>
                        {item.sideContent.freeWriting && (
                          <div className={styles.freeWriting}>
                            {item.sideContent.freeWriting}
                          </div>
                        )}

                        {item.sideContent.cards?.length ? (
                          <div className={styles.sideSection}>
                            {item.sideContent.cards.map((card, i) => (
                              <div key={i} className={styles.card}>
                                <h4 className={styles.cardTerm}>
                                  {card.title}
                                </h4>
                                <p className={styles.cardText}>
                                  {card.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}