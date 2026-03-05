import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faPeopleGroup, faCrown, faCubesStacked, faShield, faArrowsUpDownLeftRight, faStopwatch, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import viewStyles from "./views.module.css";

const events = [
  {
    id: "1",
    date: "Q1 - Q2 2026",
    icon: faDumbbell,
    topContent: { title: "Build Momentum", desc: "Establish of researchers and consultants keen to chip in on advancing the research." },
    bottomContent: null,
  },
  {
    id: "2",
    date: "Q2 - Q3 2026",
    icon: faCrown,
    topContent: null,
    bottomContent: { title: "Raise Support", desc: "Identify and engage funders who see the value in early-stage AI safety research and want to help it move faster." },
  },
  {
    id: "3",
    date: "Q2 – Q3 2026",
    icon: faRocket,
    topContent: { title: "Conduct Preliminary Studies", desc: "Produce early empirical results with available resources to establish a track record and enable the development of monitoring tools." },
    bottomContent: null,
  },
  {
    id: "4",
    date: "Q3 – Q4 2026",
    icon: faCubesStacked,
    topContent: null,
    bottomContent: { title: "Begin Building", desc: "Implement empirical data to develop prototype of monitoring tools and organise testing in live environments." },
  },
  {
    id: "5",
    date: "2027+",
    icon: faArrowsUpDownLeftRight,
    topContent: { title: "Expand Coverage", desc: "This phase uses edge cases, blind spots, and gaps found throughout testing to refine how the framework is configured for different use cases, building out a library of context-specific adaptations." },
    bottomContent: { title: "Drive Iterative Improvement", desc: "Follow questions raised by the pilot project and branch out the research into areas relevant to improving and fine-graining the metrics." },
  },
  {
    id: "6",
    date: "2027+",
    icon: faShield,
    topContent: null,
    bottomContent: { title: "Towards Policy & Safeguards", desc: "Following a clearer picture of the global state of human agency, at this stage of the project, empirical research translates into safeguard development and governance recommendations." },
  },
];

export default function TimelineView() {
  return (
    <section id="timeline" className={`${viewStyles.section} ${viewStyles.timelineSection}`}>
      <div className={viewStyles.container}>
        <h1 className={viewStyles.sectionTitle} style={{ justifyContent: "center", marginBottom: "2rem" }}>
          <FontAwesomeIcon icon={faStopwatch} style={{ marginRight: "0.5rem" }} /> Time to get going!
        </h1>
      </div>

      <div className={viewStyles.timelineScroll}>
        <div className={viewStyles.timeline}>
          <div className={viewStyles.line} />
          {events.map((e) => (
            <div key={e.id} className={viewStyles.item}>
              <div className={viewStyles.contentTop}>
                {e.topContent && (
                  <>
                    <span className={viewStyles.date}>{e.date}</span>
                    <h3 className={viewStyles.title}>{e.topContent.title}</h3>
                    <p className={viewStyles.desc}>{e.topContent.desc}</p>
                  </>
                )}
              </div>
              <div className={viewStyles.dot}>
                <FontAwesomeIcon icon={e.icon} className={viewStyles.dotIcon} />
              </div>
              <div className={viewStyles.contentBottom}>
                {e.bottomContent && (
                  <>
                    <span className={viewStyles.date}>{e.date}</span>
                    <h3 className={viewStyles.title}>{e.bottomContent.title}</h3>
                    <p className={viewStyles.desc}>{e.bottomContent.desc}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}