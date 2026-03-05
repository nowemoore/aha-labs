import styles from "./components.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span  style={{ color: "var(--accent-sage)"}}>© 2026 AI for Human Agency Labs</span>
      <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> London, UK</span>
    </footer>
  );
}
