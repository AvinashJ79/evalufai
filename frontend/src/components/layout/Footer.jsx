import React, { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";

const NAV = [
  {
    heading: "Product",
    links: [
      "Skill Assessments",
      "Video Interviews",
      "AI Proctoring",
      "ID Verification",
      "Live Coding",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Customers", "Careers", "Blog", "Help Center"],
  },
  {
    heading: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Integrations",
      "Changelog",
      "Status Page",
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      style={{
        background: "#0a1414",
        fontFamily: "'Sora', sans-serif",
        color: "#7aa0a0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        .ft-link {
          color: #5a8888;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 400;
          transition: color 0.18s;
          display: block;
          padding: 4px 0;
          letter-spacing: -0.01em;
        }
        .ft-link:hover { color: #2bbfbf; }

        .ft-legal-link {
          color: #2e5050;
          text-decoration: none;
          font-size: 12px;
          transition: color 0.18s;
        }
        .ft-legal-link:hover { color: #2bbfbf; }

        .ft-social:hover {
          background: rgba(43,191,191,0.10) !important;
          border-color: rgba(43,191,191,0.30) !important;
        }
        .ft-social:hover .ft-social-icon { fill: #2bbfbf !important; }

        .ft-subscribe:hover { background: #0a7a7a !important; }

        .ft-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(43,191,191,0.15);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13px;
          color: #e0f0f0;
          font-family: 'Sora', sans-serif;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ft-input:focus {
          outline: none;
          border-color: rgba(43,191,191,0.40);
          box-shadow: 0 0 0 3px rgba(43,191,191,0.07);
        }
        .ft-input::placeholder { color: #2e5050; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>

      {/* Top teal hairline */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #0e9e9e 25%, #2bbfbf 50%, #0e9e9e 75%, transparent)",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "56px 48px 44px",
          display: "grid",
          gridTemplateColumns: "1.7fr 1fr 1fr 1fr",
          gap: "0 40px",
        }}
      >
        {/* Brand column */}
        <div style={{ paddingRight: 16 }}>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                background: "#0e9e9e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Zap size={15} color="white" />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 15,
                  color: "#cce8e8",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                EvalufAI
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: "#2e5a5a",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  marginTop: 2,
                }}
              >
                Talent Intelligence
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.75,
              color: "#4a7070",
              margin: "0 0 24px",
              maxWidth: 210,
            }}
          >
            AI-native platform for screening, assessing, and developing
            real-world skills at scale.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 24, marginBottom: 28 }}>
            {[
              ["500+", "Companies"],
              ["2M+", "Assessments"],
              ["98%", "Satisfaction"],
            ].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#0e9e9e",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 9.5,
                    color: "#2e5050",
                    fontWeight: 500,
                    marginTop: 3,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#2e6060",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Newsletter
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <input
                type="email"
                className="ft-input"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1 }}
              />
              <button
                className="ft-subscribe"
                style={{
                  background: "#0e9e9e",
                  border: "none",
                  borderRadius: 8,
                  padding: "0 12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={14} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* Nav columns */}
        {NAV.map(({ heading, links }) => (
          <div key={heading}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#cce8e8",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              {heading}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {links.map((link) => (
                <a key={link} href="#" className="ft-link">
                  {link}
                  {link === "Live Coding" && (
                    <span
                      style={{
                        display: "inline-block",
                        marginLeft: 7,
                        fontSize: 9,
                        fontWeight: 600,
                        padding: "1px 6px",
                        borderRadius: 20,
                        background: "rgba(11,158,158,0.18)",
                        color: "#2bbfbf",
                        letterSpacing: "0.04em",
                        verticalAlign: "middle",
                      }}
                    >
                      New
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(43,191,191,0.07)",
          margin: "0 48px",
        }}
      />

      {/* ── Bottom bar ── */}
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "18px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 12, color: "#1e4040" }}>
            © 2026 EvalufAI, Inc.
          </span>
          <div style={{ display: "flex", gap: 14 }}>
            {["Privacy", "Terms", "Security", "Cookies"].map((item) => (
              <a key={item} href="#" className="ft-legal-link">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            color: "#2a5050",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 7px rgba(34,197,94,0.65)",
              animation: "pulse-dot 2.5s ease-in-out infinite",
            }}
          />
          All systems operational
        </div>

        {/* Socials */}
        <div style={{ display: "flex", gap: 7 }}>
          {[
            {
              label: "X",
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            },
            {
              label: "LinkedIn",
              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            },
            {
              label: "GitHub",
              d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
            },
          ].map(({ label, d }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="ft-social"
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                border: "1px solid rgba(43,191,191,0.12)",
                background: "rgba(43,191,191,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                transition: "background 0.18s, border-color 0.18s",
              }}
            >
              <svg viewBox="0 0 24 24" width="12" height="12">
                <path
                  className="ft-social-icon"
                  d={d}
                  style={{ fill: "#2e5858", transition: "fill 0.18s" }}
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
