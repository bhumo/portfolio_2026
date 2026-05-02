import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <div className="page-container">
               
               <h2 className="text-h2" style={{ marginBottom: '120px', textAlign: 'center' }}>
                  Architecture<br/><span style={{ color: 'var(--text-secondary)' }}>Builds.</span>
               </h2>
               
               {/* 2.5D Sticky Stacking Context */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
                   {[
                      { index: 1, title: "Project Zero / AI Engine", tech: "LANGGRAPH // PGVECTOR // PYTHON" },
                      { index: 2, title: "Aurora Sub-Lattice", tech: "KAFKA // SPRING BOOT // ZK" },
                      { index: 3, title: "NextStep Protocol", tech: "OIDC // NODE // POSTGRESQL" }
                   ].map((p, i) => (
                       <motion.div key={i} 
                          initial={{ opacity: 0, y: 100, scale: 0.9 }} 
                          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                          viewport={{ margin: '-10%' }} 
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          style={{ 
                             position: 'sticky', top: `${10 + i * 5}vh`, height: '70vh', 
                             backgroundColor: i % 2 === 0 ? 'var(--accent)' : 'var(--text-primary)', 
                             color: '#000', borderRadius: '40px', padding: 'clamp(40px, 8vw, 80px)', 
                             display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                             transformOrigin: 'top center', boxShadow: '0 -20px 80px rgba(0,0,0,0.8)'
                          }}
                       >
                           <div style={{ fontWeight: 900, fontSize: 'clamp(5rem, 12vw, 15rem)', lineHeight: 0.7, letterSpacing: '-0.06em', opacity: 0.9 }}>
                              0{p.index}
                           </div>
                           <div>
                              <h3 style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>{p.title}</h3>
                              <div style={{ marginTop: '32px', fontWeight: 800, letterSpacing: '4px', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}>{p.tech}</div>
                           </div>
                       </motion.div>
                   ))}
               </div>

            </div>
        </section>
    );
};

export default Projects;
