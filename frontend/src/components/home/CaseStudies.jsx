import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudiesData } from "../../data/caseStudiesData";

/* ─────────────────────────────────────────
   Unsplash image map per case study index
   (professional workplace / people photos)
───────────────────────────────────────── */
const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", // sales / headset woman
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", // team meeting
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80", // nurse / healthcare
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", // professional man
];

/* Category labels pulled from study data or fallback */
const CATEGORY_LABELS = [
  "Assessment for",
  "Screening for",
  "Training for",
  "Screening for",
];

const CaseStudies = ({ setView }) => {
  const featuredStudies = Object.entries(caseStudiesData).slice(0, 4);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="case-studies"
      className="py-24 overflow-hidden"
      style={{ background: "#f0f4ff" }}
    >
      <style>{`
        @keyframes shimCard { 0%{opacity:0;transform:translateY(28px)} 100%{opacity:1;transform:translateY(0)} }

        .cs-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3/4;
          flex: 1;
          min-width: 0;
          transition: flex 0.5s cubic-bezier(0.34,1.26,0.64,1), box-shadow 0.3s;
          box-shadow: 0 4px 24px rgba(30,27,75,0.10);
        }
        .cs-card:hover {
          flex: 1.55;
          box-shadow: 0 20px 60px rgba(30,27,75,0.22);
        }
        .cs-card-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .cs-card:hover .cs-card-img { transform: scale(1.07); }

        .cs-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10,10,30,0.18) 0%,
            rgba(10,10,30,0.10) 30%,
            rgba(10,10,30,0.65) 65%,
            rgba(10,10,30,0.92) 100%
          );
          transition: background 0.4s;
        }
        .cs-card:hover .cs-card-overlay {
          background: linear-gradient(
            180deg,
            rgba(10,10,30,0.22) 0%,
            rgba(10,10,30,0.12) 25%,
            rgba(10,10,30,0.70) 60%,
            rgba(10,10,30,0.95) 100%
          );
        }

        .cs-card-top {
          position: absolute; top: 20px; left: 20px; right: 20px;
          display: flex; justify-content: space-between; align-items: flex-start;
        }
        .cs-category-pill {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 11px; font-weight: 700;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .cs-metric-pill {
          background: rgba(99,102,241,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(99,102,241,0.6);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 12px; font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
        }

        .cs-card-bottom {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 24px 22px;
        }
        .cs-role-label {
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 5px;
        }
        .cs-card-title {
          font-size: clamp(16px, 1.6vw, 20px);
          font-weight: 800; color: #fff;
          line-height: 1.2; margin-bottom: 10px;
          letter-spacing: -0.3px;
        }
        .cs-card-desc {
          font-size: 12px; color: rgba(255,255,255,0.6);
          line-height: 1.55;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 16px;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.35s ease, margin-bottom 0.35s ease;
        }
        .cs-card:hover .cs-card-desc {
          max-height: 60px;
          opacity: 1;
        }
        .cs-read-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 100px;
          padding: 7px 14px;
          font-size: 12px; font-weight: 700; color: #fff;
          transition: background 0.2s, gap 0.2s;
          white-space: nowrap;
        }
        .cs-card:hover .cs-read-btn {
          background: rgba(99,102,241,0.85);
          border-color: rgba(99,102,241,0.7);
          gap: 9px;
        }

        .cs-stats-bar {
          background: #1e1b4b;
          border-radius: 24px;
          padding: 2px;
          margin-top: 20px;
        }
        .cs-stats-inner {
          background: #1e1b4b;
          border-radius: 22px;
          padding: 40px 48px;
          display: grid;
          grid-template-columns: 1fr 1px 1fr 1px 1fr;
          gap: 0;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .cs-stats-inner::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(168,85,247,0.08) 50%, rgba(236,72,153,0.06) 100%);
          pointer-events: none;
        }
        .cs-stat { text-align: center; position: relative; z-index: 1; }
        .cs-stat-num {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 900; color: #fff;
          letter-spacing: -1.5px; line-height: 1;
          margin-bottom: 6px;
        }
        .cs-stat-label { font-size: 13px; color: rgba(255,255,255,0.45); font-weight: 500; }
        .cs-stat-divider { width: 1px; height: 48px; background: rgba(255,255,255,0.08); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#4f46e5",
                background: "#e0e7ff",
                border: "1px solid #c7d2fe",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 14,
              }}
            >
              Success Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 800,
                color: "#1e1b4b",
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
              }}
            >
              Real Results for Real Teams
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setView("case-studies-list")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                color: "#4f46e5",
                fontWeight: 700,
                fontSize: 14,
                background: "#e0e7ff",
                border: "1.5px solid #c7d2fe",
                borderRadius: 100,
                padding: "10px 20px",
                cursor: "pointer",
                transition: "background 0.18s, border-color 0.18s",
              }}
            >
              View all case studies <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Cards row — accordion expand on hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", gap: 12, height: 480 }}
        >
          {featuredStudies.map(([id, study], index) => (
            <div
              key={id}
              className="cs-card"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setView(`case-study-${id}`)}
            >
              {/* Background image */}
              <img
                src={CARD_IMAGES[index % CARD_IMAGES.length]}
                alt={study.title}
                className="cs-card-img"
              />

              {/* Overlay */}
              <div className="cs-card-overlay" />

              {/* Top row: category pill + metric pill */}
              <div className="cs-card-top">
                <span className="cs-category-pill">
                  {CATEGORY_LABELS[index]}
                </span>
                <span className="cs-metric-pill">{study.metrics[0].value}</span>
              </div>

              {/* Bottom content */}
              <div className="cs-card-bottom">
                <div className="cs-role-label">{study.metrics[0].label}</div>
                <div className="cs-card-title">{study.title.split(":")[0]}</div>
                <div className="cs-card-desc">{study.summary}</div>
                <button className="cs-read-btn">
                  Read Story <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="cs-stats-bar"
          style={{
            background: "linear-gradient(135deg, #4f46e5, #7c3aed, #db2777)",
            padding: 2,
          }}
        >
          <div className="cs-stats-inner">
            <div className="cs-stat">
              <div className="cs-stat-num">500k+</div>
              <div className="cs-stat-label">Assessments Completed</div>
            </div>
            <div className="cs-stat-divider" />
            <div className="cs-stat">
              <div className="cs-stat-num">150+</div>
              <div className="cs-stat-label">Enterprise Clients</div>
            </div>
            <div className="cs-stat-divider" />
            <div className="cs-stat">
              <div className="cs-stat-num">12M+</div>
              <div className="cs-stat-label">Candidate Hours Saved</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
