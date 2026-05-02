import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  {
    id: '01',
    title: 'BACKEND ARCHITECT',
    desc: 'Specialized in high-scale distributed systems. Engineered Kafka/Spring Boot microservices processing 50K+ daily transactions with 99.95% reliability.'
  },
  {
    id: '02',
    title: 'AI INTEGRATOR',
    desc: 'Deployed robust RAG pipelines using Guardrails AI and Ragas. Reduced fraud false-positives and manual reviews by 40% using LangGraph and DSPy.'
  },
  {
    id: '03',
    title: 'SYSTEMS LEAD',
    desc: 'Expert in building production-ready, autonomous AI solutions. Deep experience with Event-Driven Architecture, PostgreSQL, and AWS.'
  }
];

const AboutAccordion = () => {
  const [hoverId, setHoverId] = useState('01');

  return (
    <section id="expertise" style={{ 
      padding: '160px 40px', 
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div className="page-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '100px', alignItems: 'start' }}>
        
        <div>
          <div style={{ color: 'var(--accent-brand)', fontSize: '1rem', fontWeight: 700, letterSpacing: '4px', marginBottom: '24px' }}>// CORE COMPETENCIES</div>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1, textTransform: 'uppercase' }}>
            Technical<br/>Arsenal.
          </h2>
          <p style={{ marginTop: '40px', color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Driving elite execution across core backend infrastructures and complex machine learning generation layers.
          </p>
        </div>

        <div>
          {roles.map((role) => {
            const isActive = hoverId === role.id;
            return (
              <div 
                key={role.id} 
                onMouseEnter={() => setHoverId(role.id)}
                style={{ 
                  borderTop: '1px solid var(--border-subtle)', 
                  borderBottom: role.id === '03' ? '1px solid var(--border-subtle)' : 'none',
                  padding: '40px 0',
                  cursor: 'crosshair',
                  transition: 'background 0.3s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '40px' }}>
                  <div style={{ 
                    fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: isActive ? 700 : 400, 
                    color: isActive ? 'var(--accent-brand)' : 'var(--text-muted)',
                    transition: 'color 0.3s'
                  }}>
                    {role.id}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      fontSize: '3rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-1px',
                      color: isActive ? 'var(--text-main)' : 'rgba(255,255,255,0.2)',
                      transition: 'color 0.3s'
                    }}>
                      {role.title}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ marginTop: '24px', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '80%' }}>
                            {role.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutAccordion;
