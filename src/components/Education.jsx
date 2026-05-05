import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const COURSEWORK = [
  'Machine Learning',
  'Advanced Representation Learning',
  'Trustworthy ML/AI',
  'Data Science II',
];

const EASE = [0.16, 1, 0.3, 1];

const useCountUp = (target, duration = 1.4, decimals = 2) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, decimals]);

  return { value, ref };
};

const Education = () => {
  const { value: gpa, ref: gpaRef } = useCountUp(3.96, 1.6, 2);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section id="education" ref={sectionRef} style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
      <div className="page-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{ marginBottom: '80px' }}
        >
          <h2 className="text-h2">Academic<br /><span style={{ color: 'var(--accent)' }}>Foundation.</span></h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: EASE }}
          style={{
            backgroundColor: 'var(--bg-base)', border: '1px solid var(--border)',
            borderRadius: '32px', padding: 'clamp(40px, 6vw, 72px)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px', position: 'relative', overflow: 'hidden',
            transition: 'border-color 0.35s ease',
          }}
          onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(255,77,0,0.3)'}
          onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          {/* Ambient glow */}
          <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(255,77,0,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />

          {/* Left — Degree info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '4px', fontSize: '0.8rem', fontFamily: 'monospace', marginBottom: '20px' }}
            >
              [AUG 2023 — MAY 2025]
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '12px' }}
            >
              University of Georgia
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.29, ease: EASE }}
              style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '1px', marginBottom: '4px' }}
            >
              Master of Science, Computer Science
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', letterSpacing: '1px' }}
            >
              Athens, GA
            </motion.p>

            {/* GPA count-up */}
            <motion.div
              ref={gpaRef}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 28px', backgroundColor: 'rgba(255,77,0,0.1)', border: '1px solid rgba(255,77,0,0.25)', borderRadius: '100px' }}
            >
              <span style={{ color: 'var(--accent)', fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                {gpa.toFixed(2)}
              </span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px' }}>/ 4.0 GPA</span>
            </motion.div>
          </div>

          {/* Right — Coursework */}
          <div>
            <motion.h4
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ color: 'var(--text-secondary)', fontWeight: 700, letterSpacing: '3px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '28px' }}
            >
              Relevant Coursework
            </motion.h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {COURSEWORK.map((course, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08, ease: EASE }}
                  whileHover={{ y: -2, borderColor: 'rgba(255,77,0,0.4)', transition: { duration: 0.2 } }}
                  style={{
                    padding: '10px 20px', borderRadius: '100px',
                    backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px',
                    cursor: 'default',
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
