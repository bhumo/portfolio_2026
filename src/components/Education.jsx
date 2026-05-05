import React from 'react';
import { motion } from 'framer-motion';

const COURSEWORK = [
  'Machine Learning',
  'Advanced Representation Learning',
  'Trustworthy ML/AI',
  'Data Science II',
];

const Education = () => {
  return (
    <section id="education" style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
      <div className="page-container">

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '80px' }}
        >
          <h2 className="text-h2">Academic<br /><span style={{ color: 'var(--accent)' }}>Foundation.</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          style={{
            backgroundColor: 'var(--bg-base)', border: '1px solid var(--border)',
            borderRadius: '32px', padding: 'clamp(40px, 6vw, 72px)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px', position: 'relative', overflow: 'hidden',
          }}
          onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(255,77,0,0.3)'}
          onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          {/* Subtle glow */}
          <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(255,77,0,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

          {/* Left — Degree info */}
          <div>
            <div style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '4px', fontSize: '0.8rem', fontFamily: 'monospace', marginBottom: '20px' }}>
              [AUG 2023 — MAY 2025]
            </div>
            <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '12px' }}>
              University of Georgia
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '8px' }}>
              Master of Science, Computer Science
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', letterSpacing: '1px' }}>
              Athens, GA
            </p>
            <div style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 28px', backgroundColor: 'rgba(255,77,0,0.1)', border: '1px solid rgba(255,77,0,0.25)', borderRadius: '100px' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-0.02em' }}>3.96</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px' }}>/ 4.0 GPA</span>
            </div>
          </div>

          {/* Right — Coursework */}
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '3px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '28px' }}>
              Relevant Coursework
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {COURSEWORK.map((course, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{
                    padding: '10px 20px', borderRadius: '100px',
                    backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px',
                  }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;
