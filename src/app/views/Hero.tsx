"use client";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import hero from "./Hero.module.css";
import styles from "./views.module.css";

interface Particle {
  x: number; y: number; r: number;
  speed: number; opacity: number; drift: number; hue: number;
  baseX: number; baseY: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const mouse = { x: -999, y: -999 };
    const MOUSE_RADIUS = 100;
    const MAX = 2;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseleave", () => { mouse.x = -999; mouse.y = -999; });

    const particles: Particle[] = [];
    for (let i = 0; i < 80; i++) {
      const bx = (Math.random() - 0.5) * 1.2;
      const by = (Math.random() - 0.5) * 1.2;
      particles.push({
        x:       Math.random() * window.innerWidth,
        y:       Math.random() * window.innerHeight,
        r:       Math.random() * 1.8 + 0.4,
        speed:   by,
        opacity: Math.random() * 0.5 + 0.15,
        drift:   bx,
        hue:     Math.random() > 0.7 ? 320 : 160,
        baseX:   bx,
        baseY:   by,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (a.r + b.r) * 8;
          if (dist < minDist && dist > 0) {
            const force = (minDist - dist) / minDist * 0.03;
            const nx = dx / dist, ny = dy / dist;
            a.drift -= nx * force;
            a.speed -= ny * force;
            b.drift += nx * force;
            b.speed += ny * force;
          }
        }
      }

      for (const p of particles) {
        // mouse repulsion
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.8;
          p.drift += (dx / dist) * force;
          p.speed += (dy / dist) * force;
        }

        // drift back toward baseline
        p.drift = p.drift * 0.992 + p.baseX * 0.008;
        p.speed = p.speed * 0.992 + p.baseY * 0.008;

        // small random nudge to prevent settling
        p.drift += (Math.random() - 0.5) * 0.02;
        p.speed += (Math.random() - 0.5) * 0.02;

        // clamp
        p.drift = Math.max(-MAX, Math.min(MAX, p.drift));
        p.speed = Math.max(-MAX, Math.min(MAX, p.speed));

        p.x += p.drift;
        p.y += p.speed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `hsla(${p.hue}, 50%, 75%, ${p.opacity})`);
        grad.addColorStop(1, `hsla(${p.hue}, 50%, 75%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="hero" className={hero.heroSection}>
      <canvas ref={canvasRef} className={hero.canvas} />

      <div className={hero.heroInner}>
        <div className={hero.heroEyebrow}>
          <span style={{ color: "var(--accent-magenta-soft)" }}>AI for Human Agency</span>
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: "0.3rem" }} />
          <span>Research &amp; Development</span>
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: "0.3rem" }} />
          <span>Human-Centred Futures</span>
        </div>

        <h1 className={hero.heroTitle}>
          Protect Decisions that are <span style={{ color: "var(--accent-magenta-soft)" }}>Yours</span> to Make
        </h1>

        <p className={hero.heroSub}>
          AI makes decisions faster (and sometimes also better) than humans. AHA (AI for Human Agency) Labs are here to help make sure
          that efficiency doesn&apos;t cost humanity control.
        </p>

        <div className={hero.heroBtns}>
          <a href="#problem" className={styles.btnGhost}>Tell Me More</a>
          <a href="#take-action" className={styles.btnPrimary}>Get Me Involved</a>
        </div>
      </div>

      <button
        className={hero.heroScroll}
        onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <div style={{ width: "3rem", height: "3rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <span style={{ animation: "none",  textTransform: "uppercase" }}>scroll for the tea</span>
      </button>
    </section>
  );
}