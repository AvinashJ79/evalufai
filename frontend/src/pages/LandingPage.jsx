import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import CaseStudies from "../components/home/CaseStudies";
import Testimonials from "../components/home/Testimonials";
import {
  Users,
  BarChart3,
  Zap,
  Bot,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Star,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  ScanFace,
  Mic2,
  Video,
  Code2,
  Brain,
  Play,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────
   Use Cases Section
───────────────────────────────────────── */
const UseCases = () => {
  const cases = [
    {
      title: "Enterprise Hiring",
      icon: <Users />,
      desc: "Scale your high-performing teams with objective skill data.",
    },
    {
      title: "Staffing Firms",
      icon: <BarChart3 />,
      desc: "Deliver vetted, top-tier candidates to your clients faster.",
    },
    {
      title: "High Volume",
      icon: <Zap />,
      desc: "Filter thousands of applicants automatically without losing quality.",
    },
    {
      title: "Startups",
      icon: <Bot />,
      desc: "Find the right talent early when every hire counts.",
    },
  ];
  return (
    <section id="solutions" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Built for Every Growth Stage
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Flexible solutions for modern recruitment teams.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {cases.map((c, i) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={i}
            className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
              {c.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              {c.desc}
            </p>
            <a
              href="#"
              className="text-indigo-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   Product Categories — Redesigned
   Dark editorial aesthetic with animated
   category cards and product spotlight
───────────────────────────────────────── */

const CATEGORIES = [
  {
    id: "source",
    step: "01",
    tag: "Source & Engage",
    title: "Replicate Your Best Recruiter",
    headline: "AI agents that never sleep.",
    desc: "Autonomous sourcing, outreach, candidate Q&A, and live phone screens — handled end-to-end with precision that rivals your top recruiter.",
    funnelLayer: 0,
    accentColor: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.2)",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #0a1628 100%)",
    icon: <Sparkles size={18} />,
    products: [
      { id: "ai-recruiter", label: "AI Recruiter", icon: <Bot size={14} /> },
      { id: "ai-voice", label: "AI Voice Screening", icon: <Mic2 size={14} /> },
      { id: "ai-chatbot", label: "AI Chatbot", icon: <Brain size={14} /> },
    ],
    stat: { value: "300×", label: "faster screening" },
    visual: "source",
  },
  {
    id: "assess",
    step: "02",
    tag: "Evaluate & Score",
    title: "Replicate Your Best Interviewer",
    headline: "Objective scoring at scale.",
    desc: "Structured skill and behavioral evaluation with AI-assisted scoring, one-way video, and live interviews — removing bias at every stage.",
    funnelLayer: 1,
    accentColor: "#818cf8",
    accentBg: "rgba(129,140,248,0.08)",
    accentBorder: "rgba(129,140,248,0.2)",
    gradient: "linear-gradient(135deg, #0d0b1f 0%, #0b0a1c 100%)",
    icon: <Video size={18} />,
    products: [
      {
        id: "technical-assessments",
        label: "Technical Assessments",
        icon: <Code2 size={14} />,
      },
      {
        id: "behavioral-assessments",
        label: "Behavioral Assessments",
        icon: <Brain size={14} />,
      },
      {
        id: "ai-video-interviews",
        label: "AI Video Interviews",
        icon: <Video size={14} />,
      },
      {
        id: "one-way-video-interviews",
        label: "One-Way Video",
        icon: <Play size={14} />,
      },
    ],
    stat: { value: "98%", label: "candidate satisfaction" },
    visual: "assess",
  },
  {
    id: "verify",
    step: "03",
    tag: "Verify & Protect",
    title: "Replicate Your Best Auditor",
    headline: "Zero fraud. Zero compromise.",
    desc: "Biometric ID verification, AI proctoring, and live coding environments ensure every candidate is exactly who they say they are.",
    funnelLayer: 2,
    accentColor: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.2)",
    gradient: "linear-gradient(135deg, #081a13 0%, #071610 100%)",
    icon: <ShieldCheck size={18} />,
    products: [
      {
        id: "id-verify",
        label: "ID Verification",
        icon: <ScanFace size={14} />,
      },
      {
        id: "ai-proctoring",
        label: "AI Proctoring",
        icon: <ShieldCheck size={14} />,
      },
      {
        id: "live-coding-interviews",
        label: "Live Coding",
        icon: <Code2 size={14} />,
      },
    ],
    stat: { value: "90%", label: "fraud reduction" },
    visual: "verify",
  },
  {
    id: "train",
    step: "04",
    tag: "Develop & Retain",
    title: "Replicate Your Best Trainer",
    headline: "Turn hires into top performers.",
    desc: "Simulation-based learning and competency assessments that compound over time — building the muscle memory your team needs to win.",
    funnelLayer: 3,
    accentColor: "#e879f9",
    accentBg: "rgba(232,121,249,0.08)",
    accentBorder: "rgba(232,121,249,0.2)",
    gradient: "linear-gradient(135deg, #190f22 0%, #160d1e 100%)",
    icon: <GraduationCap size={18} />,
    products: [
      {
        id: "coding-simulations",
        label: "Coding Simulations",
        icon: <Code2 size={14} />,
      },
      {
        id: "competency-assessments",
        label: "Competency Assessments",
        icon: <Brain size={14} />,
      },
      {
        id: "ai-role-play",
        label: "AI Role Play",
        icon: <Sparkles size={14} />,
      },
      {
        id: "ld-software",
        label: "L&D Software",
        icon: <GraduationCap size={14} />,
      },
    ],
    stat: { value: "2×", label: "skill attainment" },
    visual: "train",
  },
];

/* Mini visual components per category */
const VisualSource = ({ accent }) => (
  <div
    style={{
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    {[
      "Outreach sent → Priya K.",
      "Phone screen complete → James R.",
      "Shortlist updated → 3 new",
    ].map((msg, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.18 + 0.2 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 10,
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: accent,
            flexShrink: 0,
            boxShadow: `0 0 6px ${accent}`,
          }}
        />
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          {msg}
        </span>
      </motion.div>
    ))}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      style={{
        marginTop: "auto",
        background: `linear-gradient(135deg, ${accent}18, ${accent}05)`,
        border: `1px solid ${accent}30`,
        borderRadius: 12,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 2,
          }}
        >
          Active pipeline
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: accent,
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          1,248
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          color: accent,
          fontWeight: 700,
          background: `${accent}15`,
          borderRadius: 6,
          padding: "3px 8px",
        }}
      >
        ↑ 34% this week
      </div>
    </motion.div>
  </div>
);

const VisualAssess = ({ accent }) => {
  const skills = [
    { name: "System Design", val: 94 },
    { name: "Problem Solving", val: 87 },
    { name: "Communication", val: 91 },
    { name: "Code Quality", val: 78 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {skills.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 + 0.2 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
              {s.name}
            </span>
            <span style={{ fontSize: 11, fontWeight: 800, color: accent }}>
              {s.val}
            </span>
          </div>
          <div
            style={{
              height: 4,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${s.val}%` }}
              transition={{
                delay: i * 0.1 + 0.4,
                duration: 0.7,
                ease: "easeOut",
              }}
              style={{
                height: "100%",
                background: `linear-gradient(90deg, ${accent}99, ${accent})`,
                borderRadius: 10,
              }}
            />
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: 8,
          background: `${accent}10`,
          border: `1px solid ${accent}25`,
          borderRadius: 10,
          padding: "10px 14px",
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: accent,
            lineHeight: 1,
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          87
        </div>
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Overall AI Score
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.35)",
              marginTop: 2,
            }}
          >
            Top 12% of applicants
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const VisualVerify = ({ accent }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {[
      { check: "Identity verified", status: "pass" },
      { check: "AI proctoring active", status: "pass" },
      { check: "Biometric match", status: "pass" },
      { check: "Suspicious activity", status: "none" },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.15 + 0.2 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 14px",
          background:
            item.status === "none" ? "rgba(255,255,255,0.02)" : `${accent}08`,
          border: `1px solid ${item.status === "none" ? "rgba(255,255,255,0.05)" : accent + "20"}`,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background:
              item.status === "none" ? "rgba(255,255,255,0.06)" : `${accent}20`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {item.status === "pass" ? (
            <svg width="10" height="10" viewBox="0 0 10 10">
              <polyline
                points="1.5,5 4,7.5 8.5,2"
                stroke={accent}
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10">
              <line
                x1="3"
                y1="3"
                x2="7"
                y2="7"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />
              <line
                x1="7"
                y1="3"
                x2="3"
                y2="7"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </div>
        <span
          style={{
            fontSize: 12,
            color:
              item.status === "none"
                ? "rgba(255,255,255,0.25)"
                : "rgba(255,255,255,0.7)",
          }}
        >
          {item.check}
        </span>
        {item.status === "pass" && (
          <span
            style={{
              marginLeft: "auto",
              fontSize: 10,
              fontWeight: 700,
              color: accent,
              background: `${accent}15`,
              borderRadius: 4,
              padding: "2px 6px",
            }}
          >
            PASS
          </span>
        )}
      </motion.div>
    ))}
  </div>
);

const VisualTrain = ({ accent }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {[
        { label: "Modules complete", val: "6/12" },
        { label: "Avg. score", val: "91%" },
        { label: "Time saved", val: "14h" },
        { label: "Streak", val: "7 days" },
      ].map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 + 0.2 }}
          style={{
            background: `${accent}08`,
            border: `1px solid ${accent}18`,
            borderRadius: 10,
            padding: "12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: accent,
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {s.val}
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.35)",
              marginTop: 3,
            }}
          >
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 10,
        padding: "12px 14px",
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
          marginBottom: 8,
        }}
      >
        Learning path
      </div>
      <div
        style={{
          height: 6,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${accent}70, ${accent})`,
            borderRadius: 10,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>
          50% complete
        </span>
        <span style={{ fontSize: 10, color: accent }}>6 modules left</span>
      </div>
    </motion.div>
  </div>
);

const VISUALS = {
  source: VisualSource,
  assess: VisualAssess,
  verify: VisualVerify,
  train: VisualTrain,
};

const ProductCategories = ({ setView }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const cat = CATEGORIES[activeIdx];
  const Visual = VISUALS[cat.visual];

  return (
    <section
      style={{
        background: "#080812",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient BG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        key={activeIdx + "-blob"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${cat.accentColor}12 0%, transparent 70%)`,
          top: "10%",
          right: "-10%",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: "72px 24px 0",
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              padding: "5px 16px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: cat.accentColor,
                transition: "background 0.4s",
              }}
            />
            The Full Hiring OS
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: 14,
            }}
          >
            One platform.
            <br />
            <span
              style={{
                background: `linear-gradient(90deg, ${CATEGORIES[0].accentColor}, ${CATEGORIES[1].accentColor}, ${CATEGORIES[2].accentColor}, ${CATEGORIES[3].accentColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Four unfair advantages.
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: 15,
              lineHeight: 1.6,
              maxWidth: 400,
              margin: "0 auto",
            }}
          >
            From first touchpoint to fully trained — every stage powered by AI.
          </p>
        </motion.div>
      </div>

      {/* Tab Nav */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16,
            padding: 4,
            position: "relative",
          }}
        >
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveIdx(i)}
              style={{
                position: "relative",
                padding: "14px 12px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background:
                  activeIdx === i ? "rgba(255,255,255,0.07)" : "transparent",
                transition: "background 0.25s",
                textAlign: "left",
                zIndex: 1,
              }}
            >
              {activeIdx === i && (
                <motion.div
                  layoutId="tab-indicator"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 12,
                    border: `1px solid ${c.accentColor}30`,
                    background: `linear-gradient(135deg, ${c.accentColor}0a, transparent)`,
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color:
                      activeIdx === i ? c.accentColor : "rgba(255,255,255,0.2)",
                    fontFamily: "'IBM Plex Mono', monospace",
                    transition: "color 0.25s",
                  }}
                >
                  {c.step}
                </span>
                <span
                  style={{
                    display: "none",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    background:
                      activeIdx === i ? `${c.accentColor}18` : "transparent",
                    color:
                      activeIdx === i
                        ? c.accentColor
                        : "rgba(255,255,255,0.25)",
                    padding: "2px 7px",
                    borderRadius: 4,
                    transition: "all 0.25s",
                    ...(typeof window !== "undefined" && window.innerWidth > 640
                      ? { display: "inline-block" }
                      : {}),
                  }}
                >
                  {c.tag}
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: activeIdx === i ? "#fff" : "rgba(255,255,255,0.3)",
                  lineHeight: 1.3,
                  transition: "color 0.25s",
                }}
              >
                {c.title.replace("Replicate Your Best ", "")}
              </div>

              {/* Bottom accent line */}
              {activeIdx === i && (
                <motion.div
                  layoutId="tab-line"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "20%",
                    right: "20%",
                    height: 2,
                    borderRadius: 2,
                    background: c.accentColor,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              marginTop: 3,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              minHeight: 380,
            }}
          >
            {/* LEFT — Content */}
            <div
              style={{
                background: cat.gradient,
                borderRadius: "0 0 0 16px",
                border: `1px solid ${cat.accentColor}15`,
                borderTop: "none",
                padding: "40px 44px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: cat.accentBg,
                  border: `1px solid ${cat.accentBorder}`,
                  borderRadius: 8,
                  padding: "5px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: cat.accentColor,
                  width: "fit-content",
                  marginBottom: 24,
                }}
              >
                {cat.icon}
                {cat.tag}
              </div>

              <div
                style={{
                  fontSize: "clamp(24px, 2.5vw, 34px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                  marginBottom: 6,
                }}
              >
                {cat.headline}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                  maxWidth: 380,
                }}
              >
                {cat.desc}
              </div>

              {/* Stat callout */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 900,
                    color: cat.accentColor,
                    lineHeight: 1,
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "-2px",
                  }}
                >
                  {cat.stat.value}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 600,
                  }}
                >
                  {cat.stat.label}
                </span>
              </div>

              {/* Products */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.2)",
                    marginBottom: 4,
                  }}
                >
                  Products included
                </div>
                {cat.products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setView(p.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid rgba(255,255,255,0.07)`,
                      borderRadius: 10,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: 13,
                      fontWeight: 600,
                      textAlign: "left",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = cat.accentBg;
                      e.currentTarget.style.borderColor = cat.accentBorder;
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.07)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                    }}
                  >
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span style={{ color: cat.accentColor, display: "flex" }}>
                        {p.icon}
                      </span>
                      {p.label}
                    </span>
                    <ArrowUpRight
                      size={13}
                      style={{
                        color: cat.accentColor,
                        opacity: 0.6,
                        flexShrink: 0,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Visual */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                borderRadius: "0 0 16px 0",
                border: `1px solid ${cat.accentColor}15`,
                borderTop: "none",
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner label */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: cat.accentColor,
                  opacity: 0.5,
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                LIVE PREVIEW
              </div>

              {/* Subtle grid accent */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  backgroundImage: `radial-gradient(${cat.accentColor}06 1px, transparent 1px)`,
                  backgroundSize: "22px 22px",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <Visual key={cat.id} accent={cat.accentColor} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setView("book-demo")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "#0a0a0a",
              fontSize: 14,
              fontWeight: 700,
              padding: "13px 28px",
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            See it in action
            <ArrowRight size={15} />
          </button>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "rgba(255,255,255,0.45)",
              fontSize: 14,
              fontWeight: 600,
              padding: "13px 20px",
              borderRadius: 100,
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            Explore all products
            <ChevronRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   Bento Stats — 3-column layout
───────────────────────────────────────── */
const BentoStats = () => {
  const CandidateCard = () => (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "16px 18px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <div>
          <div style={{ fontWeight: 800, fontSize: 14, color: "#1e1b4b" }}>
            John Dylan
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>
            Senior Engineer
          </div>
        </div>
        <div
          style={{
            background: "#4f46e5",
            color: "#fff",
            fontSize: 10,
            fontWeight: 800,
            borderRadius: 100,
            padding: "4px 10px",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Star size={9} fill="#fff" strokeWidth={0} /> RANK 1/10
        </div>
      </div>
      {[
        { label: "Critical Thinking", val: 98, color: "#4f46e5" },
        { label: "Communication", val: 91, color: "#7c3aed" },
        { label: "Problem Solving", val: 80, color: "#a855f7" },
      ].map((s) => (
        <div key={s.label} style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>
              {s.label}
            </span>
            <span style={{ fontSize: 11, fontWeight: 800, color: s.color }}>
              {s.val}%
            </span>
          </div>
          <div
            style={{
              height: 5,
              background: "#f1f5f9",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${s.val}%`,
                background: s.color,
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const TrainingCard = () => (
    <div
      style={{
        background: "rgba(255,255,255,0.13)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: 16,
        padding: "14px 16px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}>
            New Manager Training
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.55)",
              marginTop: 2,
            }}
          >
            6 Classes
          </div>
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "9px solid #4f46e5",
              marginLeft: 2,
            }}
          />
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>
            Progress
          </span>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>
            20% complete
          </span>
        </div>
        <div
          style={{
            height: 4,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "20%",
              background: "#4ade80",
              borderRadius: 10,
            }}
          />
        </div>
      </div>
      {["Module 1: Leadership Basics", "Module 2: Team Communication"].map(
        (m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 0",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              fontSize: 11,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <CheckCircle2
              size={12}
              color={i === 0 ? "#4ade80" : "rgba(255,255,255,0.25)"}
            />
            {m}
          </div>
        ),
      )}
    </div>
  );

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  });

  return (
    <section style={{ background: "#f0f4ff", padding: "88px 0" }}>
      <style>{`
        .bento-outer { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .bento-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; align-items: stretch; }
        .bento-left  { display: flex; flex-direction: column; gap: 16px; }
        .bento-right { display: flex; flex-direction: column; gap: 16px; }
        .bc { border-radius: 24px; overflow: hidden; position: relative; }
        .bm-num { font-size: clamp(54px, 5.5vw, 72px); font-weight: 900; line-height: 1; letter-spacing: -3px; }
        .bm-label { font-size: 16px; font-weight: 700; margin: 6px 0 10px; }
        .bm-desc { font-size: 13px; line-height: 1.65; }
        @media (max-width: 860px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-mid  { min-height: 360px; }
        }
      `}</style>

      <motion.div
        {...fadeUp(0)}
        className="bento-outer"
        style={{ textAlign: "center", marginBottom: 48 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "#e0e7ff",
            border: "1px solid #c7d2fe",
            borderRadius: 100,
            padding: "5px 14px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4338ca",
            marginBottom: 16,
          }}
        >
          Why EvalufAI
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#1e1b4b",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
          }}
        >
          Every metric that matters,{" "}
          <em
            style={{
              fontStyle: "italic",
              background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            dramatically improved.
          </em>
        </h2>
      </motion.div>

      <div className="bento-outer">
        <div className="bento-grid">
          <div className="bento-left">
            <motion.div
              {...fadeUp(0.05)}
              className="bc"
              style={{
                background: "#4f46e5",
                padding: "36px 32px",
                flex: "0 0 auto",
              }}
            >
              <div className="bm-num" style={{ color: "#fff" }}>
                300
                <span
                  style={{
                    fontSize: "0.5em",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  x
                </span>
              </div>
              <div className="bm-label" style={{ color: "#fff" }}>
                Faster Screening
              </div>
              <p
                className="bm-desc"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Screen candidates faster, reduce manual effort, and surface top
                talent sooner.
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: -40,
                  right: -40,
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
            <motion.div
              {...fadeUp(0.12)}
              className="bc"
              style={{
                background: "#3730a3",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div className="bm-num" style={{ color: "#fff" }}>
                2
                <span
                  style={{
                    fontSize: "0.5em",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  x
                </span>
              </div>
              <div className="bm-label" style={{ color: "#fff" }}>
                Skill Attainment
              </div>
              <p
                className="bm-desc"
                style={{ color: "rgba(255,255,255,0.6)", marginBottom: 24 }}
              >
                Accelerate skill development and improve on-the-job performance.
              </p>
              <TrainingCard />
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.08)}
            className="bc bento-mid"
            style={{
              background: "#1e1b4b",
              minHeight: 560,
              position: "relative",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
              alt="Professional using AI hiring platform"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(30,27,75,0.15) 0%, rgba(30,27,75,0.2) 40%, rgba(30,27,75,0.82) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 28px",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 100,
                  padding: "4px 12px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: 12,
                }}
              >
                <TrendingUp size={11} /> AI-Powered Screening
              </div>
              <div
                style={{
                  fontSize: "clamp(22px, 2.8vw, 30px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                  marginBottom: 8,
                }}
              >
                Smarter decisions,
                <br />
                every single hire.
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                }}
              >
                Our AI evaluates 50+ signals per candidate so your team makes
                confident, data-backed decisions fast.
              </p>
            </div>
          </motion.div>

          <div className="bento-right">
            <motion.div
              {...fadeUp(0.1)}
              className="bc"
              style={{
                background: "#fff",
                border: "1px solid #e8ecf2",
                padding: "36px 32px",
                flex: "0 0 auto",
              }}
            >
              <div className="bm-num" style={{ color: "#1e1b4b" }}>
                98
                <span style={{ fontSize: "0.55em", color: "#4f46e5" }}>%</span>
              </div>
              <div className="bm-label" style={{ color: "#1e1b4b" }}>
                Higher Satisfaction
              </div>
              <p className="bm-desc" style={{ color: "#6b7280" }}>
                Deliver a smoother, more transparent candidate experience
                end-to-end.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp(0.16)}
              className="bc"
              style={{
                background: "#eef2ff",
                border: "1px solid #c7d2fe",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div className="bm-num" style={{ color: "#1e1b4b" }}>
                90
                <span style={{ fontSize: "0.55em", color: "#7c3aed" }}>%</span>
              </div>
              <div className="bm-label" style={{ color: "#1e1b4b" }}>
                Less Fraud
              </div>
              <p
                className="bm-desc"
                style={{ color: "#4b5563", marginBottom: 24 }}
              >
                Prevent impersonation and hiring fraud with advanced ID
                verification and AI proctoring.
              </p>
              <CandidateCard />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   Integrations Data
───────────────────────────────────────── */
const INTEGRATIONS = [
  {
    name: "Workday",
    letter: "W",
    color: "#f97316",
    bg: "#1a1218",
    x: -33,
    y: -36,
    size: 72,
  },
  {
    name: "SAP",
    letter: "SAP",
    color: "#60a5fa",
    bg: "#0f1520",
    x: 31,
    y: -38,
    size: 72,
  },
  {
    name: "Lever",
    letter: "L",
    color: "#e2e8f0",
    bg: "#1a1a22",
    x: -46,
    y: -7,
    size: 64,
  },
  {
    name: "Greenhouse",
    letter: "G",
    color: "#4ade80",
    bg: "#0f2015",
    x: 45,
    y: -5,
    size: 64,
  },
  {
    name: "iCIMS",
    letter: "i",
    color: "#f87171",
    bg: "#200f0f",
    x: -38,
    y: 25,
    size: 60,
  },
  {
    name: "Jobvite",
    letter: "J",
    color: "#c084fc",
    bg: "#170f22",
    x: 37,
    y: 27,
    size: 60,
  },
  {
    name: "Zoom",
    letter: "Z",
    color: "#93c5fd",
    bg: "#0f1520",
    x: -15,
    y: 43,
    size: 64,
  },
  {
    name: "Slack",
    letter: "S",
    color: "#fb923c",
    bg: "#201508",
    x: 17,
    y: 44,
    size: 64,
  },
  {
    name: "Google",
    letter: "G",
    color: "#fbbf24",
    bg: "#20190a",
    x: -54,
    y: 7,
    size: 56,
  },
  {
    name: "Deel",
    letter: "D",
    color: "#a78bfa",
    bg: "#150f22",
    x: 55,
    y: 9,
    size: 56,
  },
  {
    name: "Gusto",
    letter: "Gu",
    color: "#34d399",
    bg: "#0a2015",
    x: -4,
    y: -50,
    size: 58,
  },
  {
    name: "Oyster",
    letter: "O",
    color: "#f472b6",
    bg: "#200f18",
    x: 4,
    y: 52,
    size: 58,
  },
  {
    name: "BambooHR",
    letter: "B",
    color: "#86efac",
    bg: "#0a1a10",
    x: -62,
    y: -20,
    size: 54,
  },
  {
    name: "Rippling",
    letter: "R",
    color: "#fca5a5",
    bg: "#1a0c0c",
    x: 62,
    y: -18,
    size: 54,
  },
];

/* ─────────────────────────────────────────
   Integrations – Animated Orb Section
───────────────────────────────────────── */
const IntegrationsSection = ({ setView }) => {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const stage = stageRef.current,
      canvas = canvasRef.current;
    if (!stage || !canvas) return;
    const W = stage.offsetWidth,
      H = stage.offsetHeight;
    const cx = W / 2,
      cy = H / 2;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    INTEGRATIONS.forEach((card, i) => {
      const el = cardRefs.current[i];
      if (!el) return;
      el.style.left = `${cx + (card.x / 100) * W - card.size / 2}px`;
      const top = cy + (card.y / 100) * H - card.size / 2;
      el.style.top = `${top}px`;
      el._baseTop = top;
      setTimeout(
        () => {
          el.style.opacity = "1";
          el.style.transform = "scale(1)";
        },
        60 + i * 55,
      );
    });

    let dashOffset = 0;
    const fa = [
      (t, d) => Math.sin((t / 1000) * (3.4 + d * 0.75) * 0.9) * 9,
      (t, d) => Math.cos((t / 1000) * (2.8 + d * 0.6) * 0.9) * 7,
      (t, d) => Math.sin((t / 1000) * (4.0 + d * 0.5) * 0.9) * 10,
    ];

    const animate = (t) => {
      ctx.clearRect(0, 0, W, H);
      dashOffset = (dashOffset + 0.3) % 20;
      INTEGRATIONS.forEach((card) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + (card.x / 100) * W, cy + (card.y / 100) * H);
        ctx.strokeStyle = "rgba(168,85,247,0.18)";
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 7]);
        ctx.lineDashOffset = -dashOffset;
        ctx.stroke();
      });
      INTEGRATIONS.forEach((card, i) => {
        const el = cardRefs.current[i];
        if (!el || el._baseTop === undefined) return;
        el.style.top = `${el._baseTop + fa[i % 3](t, i % 4)}px`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes orbSpin { from{filter:hue-rotate(0deg)} to{filter:hue-rotate(360deg)} }
        @keyframes rP0 { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.45} 50%{transform:translate(-50%,-50%) scale(1.09);opacity:1} }
        @keyframes rP1 { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.35} 50%{transform:translate(-50%,-50%) scale(1.08);opacity:.9} }
        @keyframes rP2 { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.25} 50%{transform:translate(-50%,-50%) scale(1.07);opacity:.75} }
        @keyframes iBB { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.7} 50%{transform:translate(-50%,-50%) scale(1.12);opacity:1} }
        @keyframes iPD { 0%{transform:scale(.8);opacity:1} 100%{transform:scale(2.4);opacity:0} }
        .ilc { position:absolute;z-index:2;border-radius:14px;border:1px solid rgba(255,255,255,.07);
          display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;
          box-shadow:0 8px 28px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.05);
          opacity:0;transform:scale(.5);
          transition:opacity .5s,transform .5s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;cursor:default; }
        .ilc:hover { box-shadow:0 12px 40px rgba(0,0,0,.7),0 0 0 1px rgba(168,85,247,.4);z-index:8; }
      `}</style>
      <section
        style={{
          background: "#06060f",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.035) 1px,transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 500,
            left: "50%",
            top: "50%",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center,rgba(99,102,241,0.28) 0%,rgba(168,85,247,0.14) 35%,transparent 68%)",
            pointerEvents: "none",
            zIndex: 0,
            animation: "iBB 8s ease-in-out infinite",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "72px 24px 0",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.28)",
              borderRadius: 100,
              padding: "6px 16px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                background: "#a855f7",
                borderRadius: "50%",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: -5,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(168,85,247,0.7)",
                  animation: "iPD 1.8s ease-out infinite",
                }}
              />
            </span>
            100+ native integrations
          </div>
          <h2
            style={{
              fontSize: "clamp(30px,4.5vw,52px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              marginBottom: 14,
            }}
          >
            Works With The HR Tech You{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg,#a855f7,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Already
            </em>{" "}
            Use
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: 15,
              lineHeight: 1.65,
              maxWidth: 380,
              margin: "0 auto 28px",
            }}
          >
            Connect your ATS, HRIS, and comms tools in one click. No engineering
            required.
          </p>
          <button
            type="button"
            onClick={() => setView("integrations")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              padding: "12px 26px",
              borderRadius: 100,
              cursor: "pointer",
            }}
          >
            See All Integrations →
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          ref={stageRef}
          style={{
            position: "relative",
            width: "100%",
            height: 520,
            margin: "0 auto",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 5,
              pointerEvents: "none",
            }}
          >
            {[160, 240, 330].map((sz, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: sz,
                  height: sz,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  borderRadius: "50%",
                  border: `1px solid rgba(168,85,247,${0.2 - i * 0.05})`,
                  animation: `rP${i} ${2.8 + i * 0.7}s ease-in-out ${i * 0.5}s infinite`,
                }}
              />
            ))}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background:
                  "conic-gradient(from 180deg,#a855f7 0%,#ec4899 30%,#3b82f6 60%,#06b6d4 80%,#a855f7 100%)",
                boxShadow:
                  "0 0 44px 16px rgba(168,85,247,0.42),0 0 90px 36px rgba(236,72,153,0.18)",
                animation: "orbSpin 9s linear infinite",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 9,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 33% 28%,rgba(255,255,255,0.28) 0%,transparent 55%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 17,
                  borderRadius: "50%",
                  background: "rgba(8,4,18,0.48)",
                }}
              />
            </div>
          </div>
          {INTEGRATIONS.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="ilc"
              style={{
                width: card.size,
                height: card.size,
                background: card.bg,
              }}
            >
              <span
                style={{
                  fontWeight: 800,
                  fontSize: card.letter.length > 1 ? 11 : 20,
                  color: card.color,
                  lineHeight: 1,
                  letterSpacing: card.letter.length > 1 ? "0.05em" : 0,
                }}
              >
                {card.letter}
              </span>
              <span
                style={{
                  fontSize: 8,
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                {card.name}
              </span>
            </div>
          ))}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 140,
              background: "linear-gradient(to bottom,transparent,#06060f)",
              zIndex: 6,
              pointerEvents: "none",
            }}
          />
        </motion.div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────
   Compact CTA – Light
───────────────────────────────────────── */
const BADGES = [
  { label: "ATS synced", dot: "#16a34a", pos: { top: "18%", left: "5%" } },
  {
    label: "AI scoring live",
    dot: "#4f46e5",
    pos: { top: "22%", right: "4%" },
  },
  {
    label: "3.2× faster hires",
    dot: "#ea580c",
    pos: { bottom: "22%", left: "6%" },
  },
  {
    label: "Zero bias mode",
    dot: "#7c3aed",
    pos: { bottom: "18%", right: "5%" },
  },
];
const AVATARS = [
  { initials: "S", bg: "#7c3aed" },
  { initials: "A", bg: "#db2777" },
  { initials: "M", bg: "#0891b2" },
  { initials: "R", bg: "#059669" },
];

const CompactCTA = ({ setView }) => (
  <>
    <style>{`
      @keyframes blobDrift  { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(20px,-15px) scale(1.06)} 66%{transform:translate(-15px,10px) scale(0.95)} }
      @keyframes floatBadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
      @keyframes epulse     { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(2.2);opacity:0} }
      .cta-blob { position:absolute;border-radius:50%;pointer-events:none;filter:blur(64px);opacity:0.45; }
      .cta-blob1 { width:420px;height:300px;background:#c4b5fd;top:-80px;left:-60px;animation:blobDrift 10s ease-in-out infinite; }
      .cta-blob2 { width:360px;height:260px;background:#fbcfe8;top:-40px;right:-80px;animation:blobDrift 12s ease-in-out 3s infinite; }
      .cta-blob3 { width:300px;height:200px;background:#bfdbfe;bottom:-60px;left:30%;animation:blobDrift 9s ease-in-out 6s infinite; }
      .cta-fbadge { position:absolute;display:flex;align-items:center;gap:7px;background:#fff;border:1.5px solid #ddd6fe;border-radius:100px;padding:7px 14px;font-size:12px;font-weight:700;color:#3b0764;box-shadow:0 2px 14px rgba(109,40,217,0.12);white-space:nowrap;z-index:5; }
      .cta-fdot  { width:7px;height:7px;border-radius:50%;flex-shrink:0; }
      .cta-book-btn  { display:inline-flex;align-items:center;gap:8px;background:#7c3aed;color:#fff;font-size:15px;font-weight:700;padding:14px 32px;border-radius:100px;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(124,58,237,0.35);transition:transform .15s,box-shadow .15s,background .15s; }
      .cta-book-btn:hover  { background:#6d28d9;transform:translateY(-2px);box-shadow:0 8px 28px rgba(124,58,237,0.45); }
      .cta-ghost-btn { display:inline-flex;align-items:center;gap:6px;color:#5b21b6;font-size:14px;font-weight:700;padding:14px 24px;border-radius:100px;border:1.5px solid #a78bfa;background:#fff;cursor:pointer;transition:background .15s,border-color .15s;box-shadow:0 2px 8px rgba(109,40,217,0.1); }
      .cta-ghost-btn:hover { background:#ede9fe;border-color:#7c3aed; }
    `}</style>
    <section
      style={{
        background: "#f5f3ff",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div className="cta-blob cta-blob1" />
      <div className="cta-blob cta-blob2" />
      <div className="cta-blob cta-blob3" />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          backgroundImage:
            "radial-gradient(rgba(109,40,217,0.06) 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {BADGES.map((b, i) => (
        <div
          key={i}
          className="cta-fbadge"
          style={{
            ...b.pos,
            animation: `floatBadge ${4.5 + i * 0.5}s ease-in-out ${i * 0.5}s infinite`,
          }}
        >
          <span className="cta-fdot" style={{ background: b.dot }} />
          {b.label}
        </div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "#ede9fe",
            border: "1px solid #c4b5fd",
            borderRadius: 100,
            padding: "5px 14px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4c1d95",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#7c3aed",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                border: "1.5px solid rgba(124,58,237,0.5)",
                animation: "epulse 1.8s ease-out infinite",
              }}
            />
          </span>
          Ready to get started?
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,4vw,46px)",
            fontWeight: 800,
            color: "#1e1b4b",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            marginBottom: 14,
          }}
        >
          Hire{" "}
          <em
            style={{
              fontStyle: "italic",
              background: "linear-gradient(90deg,#7c3aed,#db2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            smarter
          </em>
          ,<br />
          starting today.
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#374151",
            lineHeight: 1.65,
            maxWidth: 380,
            margin: "0 auto 32px",
          }}
        >
          Join 500+ companies that cut time-to-hire in half. No engineering
          required.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <button className="cta-book-btn" onClick={() => setView("book-demo")}>
            Book a Demo →
          </button>
          <button className="cta-ghost-btn">See how it works</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          {[
            { n: "10×", l: "Faster screening" },
            { n: "500+", l: "Companies live" },
            { n: "98%", l: "Satisfaction rate" },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    height: 36,
                    background: "#d8b4fe",
                    margin: "0 24px",
                  }}
                />
              )}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{ fontSize: 24, fontWeight: 800, color: "#1e1b4b" }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#4b5563",
                    fontWeight: 600,
                    marginTop: 3,
                    letterSpacing: "0.03em",
                  }}
                >
                  {s.l}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 28,
            fontSize: 12,
            color: "#374151",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>
            {AVATARS.map((a, i) => (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: a.bg,
                  border: "2px solid #f5f3ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#fff",
                  marginLeft: i === 0 ? 0 : -8,
                }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          Trusted by 500+ hiring teams worldwide
        </div>
      </motion.div>
    </section>
  </>
);

/* ─────────────────────────────────────────
   Landing Page
───────────────────────────────────────── */
const LandingPage = ({ setView }) => (
  <main>
    <Hero setView={setView} />
    <ProductCategories setView={setView} />
    <UseCases />
    <Features />
    <CaseStudies setView={setView} />
    <BentoStats />
    <Testimonials />
    <IntegrationsSection setView={setView} />
    <CompactCTA setView={setView} />
  </main>
);

export default LandingPage;
