import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    index: 1,
    title: "StudyBuddy AI Agent",
    tech: "LANGGRAPH // PGVECTOR // FASTAPI // GPT-4",
    bullets: [
      "Multi-agent RAG tutoring system — LangGraph orchestrator, pgvector semantic store, FastAPI backend.",
      "10x faster query recall vs. baseline, sub-200ms retrieval latency on AWS.",
    ],
    link: "https://github.com/bhumo/ai-tutor-agent",
    label: "VIEW ON GITHUB",
  },
  {
    index: 2,
    title: "Decentralized P2P Encrypted File System",
    tech: "AES-256-CBC // RSA // DHT // ASYNC I/O",
    bullets: [
      "Hybrid AES-256-CBC + RSA dual-key scheme with per-session isolation — no re-encryption on key revocation.",
      "Push-based CA with real-time socket revocation over DHT replica sync — 3x throughput, zero plaintext exposure.",
    ],
    link: "https://github.com/bhumo/decenter_p2p",
    label: "VIEW ON GITHUB",
  },
];

const RESEARCH = [
  {
    index: 1,
    title: "Adaptive Lookahead Optimizer for NLP",
    tech: "PYTORCH // TRANSFORMERS // LSTM // CIFAR-10 // PENN TREEBANK",
    bullets: [
      "Designed dynamic variants of the Lookahead optimizer (Adaptive K, Adaptive α) that outperform ADAM on Transformer and LSTM language models.",
      "Adaptive Increase K hit 96.72% on CIFAR-10 and matched ADAM's perplexity on Penn Treebank — proving adaptive tuning beats static baselines.",
    ],
    link: "https://drive.google.com/file/d/1z78nngM8Qsgd_xTN72D-GmTj1Bf6Nd6A/view?usp=sharing",
    label: "READ PAPER",
    repoLink: "https://github.com/bhumo/nlp-lookahead",
  },
  {
    index: 2,
    title: "Automated Poultry Health Monitoring via Deep Learning",
    tech: "YOLOV8 // SAM2 // RAFT // CNN-BILSTM // SHAP // LIME",
    bullets: [
      "Non-invasive vision pipeline combining RAFT optical flow, YOLOv8 tracking, and SAM2 segmentation to isolate individual chickens from RGB video — zero manual labeling.",
      "CNN-BiLSTM predicts footpad dermatitis and gait scores at scale; SHAP + LIME deliver interpretable predictions ready for real farm deployment.",
    ],
    link: "https://drive.google.com/file/d/1bR8Ch4gxzvtRbp-h_Hm_alugbUZl4EL6/view",
    label: "READ PAPER",
    repoLink: null,
  },
  {
    index: 3,
    title: "Multi-Round Adversarial Prompt Attack Framework",
    tech: "LLM RED-TEAMING // NLP // CHEMCROW // CHEMAGENT",
    bullets: [
      "Black-box red-teaming framework that auto-generates adversarial prompts against LLM chemistry agents (ChemCrow, ChemAgent).",
      "LLM-based attacks hit 44–46% success on ChemCrow; ChemAgent jumped from 78.3% → 97.7% across rounds.",
    ],
    link: "https://drive.google.com/file/d/1-DJHlsJWD9SmgGj1oXzzNEC5qVYcqJYU/view",
    label: "READ PAPER",
    repoLink: null,
  },
];

const CardGrid = ({ items }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
    {items.map((p, i) => (
      <motion.div key={i}
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ margin: '-10%' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'sticky', top: `${10 + i * 5}vh`,
          backgroundColor: i % 2 === 0 ? 'var(--accent)' : 'var(--text-primary)',
          color: '#000', borderRadius: '40px', padding: 'clamp(40px, 8vw, 80px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          transformOrigin: 'top center', boxShadow: '0 -20px 80px rgba(0,0,0,0.8)',
          minHeight: '70vh',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: 'clamp(5rem, 12vw, 15rem)', lineHeight: 0.7, letterSpacing: '-0.06em', opacity: 0.9 }}>
          0{p.index}
        </div>
        <div>
          <h3 style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '24px' }}>{p.title}</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '700px' }}>
            {p.bullets.map((b, j) => (
              <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontWeight: 900, flexShrink: 0, marginTop: '2px' }}>—</span>
                <span style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', lineHeight: 1.6, opacity: 0.85 }}>{b}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ fontWeight: 800, letterSpacing: '4px', fontSize: 'clamp(0.7rem, 1.5vw, 1rem)' }}>{p.tech}</div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {p.repoLink && (
                <a href={p.repoLink} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 28px', borderRadius: '100px',
                    backgroundColor: 'rgba(0,0,0,0.1)', border: '2px solid rgba(0,0,0,0.25)',
                    color: '#000', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '2px',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)'; }}
                >
                  VIEW ON GITHUB
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              )}
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 28px', borderRadius: '100px',
                    backgroundColor: 'rgba(0,0,0,0.15)', border: '2px solid rgba(0,0,0,0.25)',
                    color: '#000', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '2px',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.15)'; }}
                >
                  {p.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

const Projects = () => {
  return (
    <>
      {/* Projects Section */}
      <section id="projects" style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
        <div className="page-container">
          <h2 className="text-h2" style={{ marginBottom: '120px', textAlign: 'center' }}>
            Architecture<br /><span style={{ color: 'var(--text-secondary)' }}>Builds.</span>
          </h2>
          <CardGrid items={PROJECTS} />
        </div>
      </section>

      {/* Research Section */}
      <section id="research" style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-base)' }}>
        <div className="page-container">
          <h2 className="text-h2" style={{ marginBottom: '120px', textAlign: 'center' }}>
            Research<br /><span style={{ color: 'var(--accent)' }}>Papers.</span>
          </h2>
          <CardGrid items={RESEARCH} />
        </div>
      </section>
    </>
  );
};

export default Projects;
