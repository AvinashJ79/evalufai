import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Globe,
  Cloud,
  Cpu,
  Database,
  Code2,
  Layers,
} from "lucide-react";

const logos = [
  { name: "Infosys", icon: Zap },
  { name: "PWC", icon: ShieldCheck },
  { name: "Intuit", icon: Globe },
  { name: "Amazon", icon: Cloud },
  { name: "Hexaware", icon: Cpu },
  { name: "Zensar", icon: Database },
  { name: "Applied Materials", icon: Code2 },
  { name: "Oracle", icon: Layers },
  { name: "Wipro", icon: Layers },
  { name: "Mastercard", icon: ShieldCheck },
];

const rotatingWords = ["Screen", "Hire", "Upskill", "Assess", "Grow"];

/* ─────────────────────────────────────────────
   ANIMATED GLOBE  (WebGL-free, pure Canvas 2D)
───────────────────────────────────────────── */
function AnimatedGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let rotation = 0;

    const W = 720,
      H = 720;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2,
      cy = H / 2;
    const R = 270; // globe radius

    // Dot map — lat/lng grid points on a sphere
    const dots = [];
    for (let lat = -80; lat <= 80; lat += 10) {
      for (let lng = -180; lng < 180; lng += 10) {
        dots.push({ lat: (lat * Math.PI) / 180, lng: (lng * Math.PI) / 180 });
      }
    }

    // A few glowing "connection" arcs between random city pairs
    const arcPairs = [
      [
        { lat: 0.31, lng: 1.35 },
        { lat: 0.65, lng: -1.87 },
      ], // Asia → USA
      [
        { lat: 0.9, lng: 0.14 },
        { lat: 0.31, lng: 1.35 },
      ], // Europe → Asia
      [
        { lat: -0.35, lng: -0.65 },
        { lat: 0.9, lng: 0.14 },
      ], // S.America → Europe
      [
        { lat: 0.19, lng: 0.73 },
        { lat: 0.65, lng: -1.87 },
      ], // India → USA
      [
        { lat: 0.65, lng: -1.87 },
        { lat: 0.9, lng: 0.14 },
      ], // USA → Europe
      [
        { lat: -0.2, lng: 1.1 },
        { lat: 0.19, lng: 0.73 },
      ], // SE Asia → India
    ];

    // Project a sphere point to canvas 2D, accounting for rotation
    const project = (lat, lng) => {
      const lngR = lng + rotation;
      const x = cx + R * Math.cos(lat) * Math.sin(lngR);
      const y = cy - R * Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lngR); // depth
      return { x, y, z };
    };

    // Great-circle arc: interpolate N points between two sphere coords
    const arcPoints = (p1, p2, n = 50) => {
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const lat = p1.lat + (p2.lat - p1.lat) * t;
        const lng = p1.lng + (p2.lng - p1.lng) * t;
        pts.push(project(lat, lng));
      }
      return pts;
    };

    // Animate arc progress (0→1 loop)
    let arcPhase = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      rotation += 0.0022;
      arcPhase = (arcPhase + 0.0035) % 1;

      // ── Outer glow ring — stronger ──
      const grad = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.2);
      grad.addColorStop(0, "rgba(11,168,168,0.0)");
      grad.addColorStop(0.65, "rgba(11,168,168,0.10)");
      grad.addColorStop(0.85, "rgba(11,168,168,0.18)");
      grad.addColorStop(1, "rgba(11,168,168,0.0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.2, 0, Math.PI * 2);
      ctx.fill();

      // ── Inner sphere fill — subtle glow ──
      const sphereGrad = ctx.createRadialGradient(
        cx - R * 0.25,
        cy - R * 0.25,
        0,
        cx,
        cy,
        R,
      );
      sphereGrad.addColorStop(0, "rgba(11,168,168,0.07)");
      sphereGrad.addColorStop(0.5, "rgba(11,168,168,0.03)");
      sphereGrad.addColorStop(1, "rgba(11,168,168,0.0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // ── Latitude lines — more visible ──
      const latLines = [-60, -45, -30, -15, 0, 15, 30, 45, 60];
      latLines.forEach((latDeg) => {
        const lat = (latDeg * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let lngDeg = -180; lngDeg <= 180; lngDeg += 2) {
          const { x, y, z } = project(lat, (lngDeg * Math.PI) / 180);
          if (z < 0) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          first = false;
        }
        // Equator gets extra emphasis
        const isEquator = latDeg === 0;
        ctx.strokeStyle = isEquator
          ? "rgba(11,168,168,0.40)"
          : "rgba(11,168,168,0.22)";
        ctx.lineWidth = isEquator ? 1.2 : 0.8;
        ctx.stroke();
      });

      // ── Longitude lines — more visible ──
      for (let lngDeg = -180; lngDeg < 180; lngDeg += 15) {
        const lng = (lngDeg * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let latDeg = -90; latDeg <= 90; latDeg += 2) {
          const { x, y, z } = project((latDeg * Math.PI) / 180, lng);
          if (z < 0) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          first = false;
        }
        ctx.strokeStyle = "rgba(11,168,168,0.18)";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // ── Dots on grid intersections — bigger & brighter ──
      dots.forEach(({ lat, lng }) => {
        const { x, y, z } = project(lat, lng);
        if (z < 0.05) return;
        const size = 0.8 + z * 2.8;
        const alpha = 0.25 + z * 0.55;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(11,188,188,${alpha})`;
        ctx.fill();
      });

      // ── Animated arcs — thicker & brighter ──
      arcPairs.forEach((pair, idx) => {
        const offset = idx / arcPairs.length;
        const phase = (arcPhase + offset) % 1;
        const tail = 0.28;
        const head = phase;
        const tailStart = Math.max(0, head - tail);

        const pts = arcPoints(pair[0], pair[1], 70);
        const visiblePts = pts.filter((p) => p.z > 0);
        if (visiblePts.length < 2) return;

        const startIdx = Math.floor(tailStart * pts.length);
        const endIdx = Math.floor(head * pts.length);
        const seg = pts.slice(startIdx, endIdx + 1).filter((p) => p.z > 0);
        if (seg.length < 2) return;

        // Gradient stroke along arc
        const grad = ctx.createLinearGradient(
          seg[0].x,
          seg[0].y,
          seg[seg.length - 1].x,
          seg[seg.length - 1].y,
        );
        grad.addColorStop(0, "rgba(43,210,210,0)");
        grad.addColorStop(0.5, "rgba(43,210,210,0.65)");
        grad.addColorStop(1, "rgba(43,230,230,1)");

        ctx.beginPath();
        ctx.moveTo(seg[0].x, seg[0].y);
        seg.forEach((p) => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = "rgba(43,210,210,0.6)";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Glowing head dot — bigger halo
        const tip = seg[seg.length - 1];
        if (tip.z > 0) {
          // Outer halo
          const g2 = ctx.createRadialGradient(
            tip.x,
            tip.y,
            0,
            tip.x,
            tip.y,
            12,
          );
          g2.addColorStop(0, "rgba(43,220,220,0.85)");
          g2.addColorStop(0.4, "rgba(43,220,220,0.35)");
          g2.addColorStop(1, "rgba(43,220,220,0)");
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = g2;
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,1)";
          ctx.shadowColor = "rgba(43,220,220,1)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // ── Outer circle border — glowing ──
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(11,168,168,0.30)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "rgba(11,168,168,0.5)";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: "50%",
        bottom: -60,
        transform: "translateX(-50%)",
        width: 720,
        height: 720,
        pointerEvents: "none",
        opacity: 1,
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   FLOWING GRID LINES  (background layer)
───────────────────────────────────────────── */
function FlowingGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      const COLS = 14,
        ROWS = 8;
      const cw = canvas.width / COLS;
      const rh = canvas.height / ROWS;

      // Vertical flowing lines — more visible
      for (let i = 0; i <= COLS; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cw, 0);
        for (let y = 0; y <= canvas.height; y += 16) {
          const wx = i * cw + Math.sin(t + i * 0.5 + y * 0.012) * 22;
          ctx.lineTo(wx, y);
        }
        const alpha = 0.06 + Math.abs(Math.sin(t * 0.4 + i)) * 0.07;
        ctx.strokeStyle = `rgba(11,158,158,${alpha})`;
        ctx.lineWidth = 1.0;
        ctx.stroke();
      }

      // Horizontal flowing lines — more visible
      for (let j = 0; j <= ROWS; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * rh);
        for (let x = 0; x <= canvas.width; x += 16) {
          const wy = j * rh + Math.sin(t + j * 0.7 + x * 0.008) * 16;
          ctx.lineTo(x, wy);
        }
        const alpha = 0.05 + Math.abs(Math.sin(t * 0.3 + j)) * 0.06;
        ctx.strokeStyle = `rgba(11,158,158,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Intersection glow dots — punchier
      for (let i = 0; i <= COLS; i++) {
        for (let j = 0; j <= ROWS; j++) {
          const x = i * cw + Math.sin(t + i * 0.5 + j * 0.3) * 14;
          const y = j * rh + Math.sin(t + j * 0.7 + i * 0.4) * 12;
          const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + i + j * 1.3);
          const size = 1.2 + pulse * 1.2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(11,178,178,${0.1 + pulse * 0.18})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   SIDE ZIGZAG LINES  (left & right panels)
───────────────────────────────────────────── */
function SideZigzags() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Each zigzag line: lives in the left or right corridor
    // Properties are randomised once and then slowly drifted
    const makeZig = (side) => {
      const sideW = canvas.width * 0.22; // corridor width
      return {
        side, // "left" | "right"
        xBase: Math.random() * sideW, // base x within corridor
        xDrift: (Math.random() - 0.5) * 0.3, // slow x wander speed
        yOffset: Math.random() * 1000, // phase offset
        speed: 0.004 + Math.random() * 0.008, // scroll speed
        segH: 28 + Math.random() * 38, // vertical segment height
        amp: 8 + Math.random() * 18, // horizontal zigzag width
        alpha: 0.06 + Math.random() * 0.1, // max opacity (kept subtle)
        alphaPhase: Math.random() * Math.PI * 2, // breathing phase
        alphaSpeed: 0.008 + Math.random() * 0.012, // breathing speed
        lineW: 0.6 + Math.random() * 0.8, // stroke width
        length: 220 + Math.random() * 260, // total drawn length (px)
        // tail fade: gradient from transparent → colour → transparent
        color: `rgba(11,178,178,1)`,
      };
    };

    // Spawn ~6 lines per side
    const lines = [
      ...Array.from({ length: 6 }, () => makeZig("left")),
      ...Array.from({ length: 6 }, () => makeZig("right")),
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      const sideW = canvas.width * 0.22;

      lines.forEach((ln) => {
        // Drift x slowly
        ln.xBase += ln.xDrift * 0.18;
        if (ln.xBase < 0 || ln.xBase > sideW) ln.xDrift *= -1;

        // Compute absolute x based on side
        const absX =
          ln.side === "left" ? ln.xBase : canvas.width - sideW + ln.xBase;

        // Breathing alpha
        const breath =
          0.5 + 0.5 * Math.sin(t * ln.alphaSpeed * 60 + ln.alphaPhase);
        const alpha = ln.alpha * (0.4 + 0.6 * breath);

        // Build zigzag path — segment by segment
        // The "head" scrolls downward continuously
        const headY =
          ((t * ln.speed * 1000 + ln.yOffset) % (canvas.height + ln.length)) -
          ln.length * 0.5;

        // Collect zigzag points
        const pts = [];
        let curY = headY;
        let dir = 1; // alternates left/right
        pts.push({ x: absX, y: curY });
        while (curY < headY + ln.length) {
          curY += ln.segH;
          const zx = absX + dir * ln.amp;
          pts.push({ x: zx, y: curY });
          dir *= -1;
        }

        if (pts.length < 2) return;

        // Gradient: fade in from top of line, solid in middle, fade out at bottom
        const grad = ctx.createLinearGradient(
          absX,
          headY,
          absX,
          headY + ln.length,
        );
        grad.addColorStop(0, `rgba(11,188,188,0)`);
        grad.addColorStop(0.15, `rgba(11,188,188,${alpha})`);
        grad.addColorStop(0.85, `rgba(11,188,188,${alpha})`);
        grad.addColorStop(1, `rgba(11,188,188,0)`);

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = ln.lineW;
        ctx.lineJoin = "round";
        ctx.stroke();

        // Small dot at each zigzag vertex (except first/last)
        for (let i = 1; i < pts.length - 1; i++) {
          const pY = pts[i].y;
          // fade based on position within line
          const frac = (pY - headY) / ln.length;
          const dotAlpha =
            alpha *
            (frac < 0.15 ? frac / 0.15 : frac > 0.85 ? (1 - frac) / 0.15 : 1);
          ctx.beginPath();
          ctx.arc(pts[i].x, pts[i].y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(11,188,188,${dotAlpha * 1.6})`;
          ctx.fill();
        }
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}

/* ── Rotating word ── */
function RotatingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((p) => (p + 1) % rotatingWords.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
        minWidth: "3ch",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -36, opacity: 0 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "block", color: "#0e9e9e" }}
        >
          {rotatingWords[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ── Magnetic CTA ── */
function MagneticButton({ children, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 20 });
  const sy = useSpring(y, { stiffness: 280, damping: 20 });
  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.18);
        y.set((e.clientY - r.top - r.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "15px 36px",
        borderRadius: 14,
        background: "#0f1a1a",
        color: "#f0f8f8",
        fontWeight: 700,
        fontSize: 16,
        border: "none",
        cursor: "pointer",
        letterSpacing: "-0.01em",
        boxShadow: "0 4px 28px rgba(10,30,30,0.14)",
      }}
    >
      {children}
    </motion.button>
  );
}

/* ── HERO ── */
const Hero = ({ setView }) => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "linear-gradient(160deg, #e0f0f0 0%, #e8f2f2 30%, #e2ecf5 65%, #ece8f5 100%)",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 34s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* Background layers */}
      <FlowingGrid />
      <AnimatedGlobe />
      <SideZigzags />

      {/* Vignette — softened so globe shows through more */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 46%, transparent 35%, rgba(232,242,242,0.70) 100%)",
        }}
      />

      {/* ── Hero text ── */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 24px 220px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#0f1a1a",
            marginBottom: "0.15em",
          }}
        >
          <RotatingWord /> and Develop
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            marginBottom: "1.1rem",
            background:
              "linear-gradient(90deg, #0b8a8a 0%, #2bbfbf 50%, #0b8a8a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Real-World Skills at Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: 18,
            color: "#4a6e6e",
            fontWeight: 400,
            marginBottom: "2.5rem",
            maxWidth: 440,
            lineHeight: 1.65,
          }}
        >
          Your conversational AI Agent for recruiting and learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MagneticButton onClick={() => setView?.("book-demo")}>
            Book My Demo <ArrowRight size={18} />
          </MagneticButton>
        </motion.div>
      </div>

      {/* ── Logo marquee ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "1px solid rgba(10,120,120,0.09)",
          background: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(10px)",
          padding: "28px 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: 100,
            background:
              "linear-gradient(to right, rgba(232,242,242,0.95), transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 100,
            background:
              "linear-gradient(to left, rgba(232,242,242,0.95), transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div style={{ overflow: "hidden" }}>
          <div
            className="marquee-track"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              alignItems: "center",
              width: "max-content",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  margin: "0 36px",
                  opacity: 0.32,
                  transition: "opacity 0.3s",
                  cursor: "pointer",
                  filter: "grayscale(1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.75";
                  e.currentTarget.style.filter = "grayscale(0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.32";
                  e.currentTarget.style.filter = "grayscale(1)";
                }}
              >
                <logo.icon size={15} color="#0e5e5e" />
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0f2a2a",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
