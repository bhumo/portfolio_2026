import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
   
   return (
       <section id="experience" ref={ref} style={{ position: 'relative', padding: '160px 0', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
          
          <div className="page-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
             
             {/* Left Column Sticky Header Track */}
             <div style={{ position: 'sticky', top: '20vh', height: 'fit-content' }}>
                <h2 className="text-h2">Career<br/><span style={{ color: 'var(--accent)' }}>Timeline.</span></h2>
                <div style={{ position: 'relative', marginTop: '60px', height: '40vh', display: 'flex' }}>
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '4px', background: 'var(--border)', borderRadius: '100px' }} />
                    <motion.div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '4px', background: 'var(--accent)', scaleY: scrollYProgress, transformOrigin: 'top', borderRadius: '100px', boxShadow: '0 0 20px rgba(255,77,0,0.5)' }} />
                </div>
             </div>

             {/* Right Column Stacking Job Nodes */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
                 {[
                   { role: "Backend & AI Engineer", date: "2026 — Present", company: "Softtechers", desc: "Engineered fraud-detection microservices processing 50K+ high-frequency transactions daily. Built LangGraph LLM agent reducing handling time by 45%." },
                   { role: "Software Engineer", date: "2025 — 2026", company: "Changing The Present", desc: "Optimized massive NLP model inference throughput natively. Compress cycles via aggressive dynamic orchestrations." },
                   { role: "Systems Engineer", date: "2022 — 2023", company: "WebCraft", desc: "Apache Kafka continuous ingestion architecture holding 100K streams." },
                   { role: "Backend Developer", date: "2021 — 2022", company: "Freshworks", desc: "OIDC SSO federation unblocking immense microservice grids." }
                 ].map((job, idx) => (
                    <motion.div key={idx} 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true, margin: '-20%' }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '4px', marginBottom: '16px', fontSize: '1rem', fontFamily: 'monospace' }}>
                           [{job.date}]
                        </div>
                        <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text-primary)' }}>{job.role}</h3>
                        <h4 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginTop: '8px', marginBottom: '24px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>{job.company}</h4>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px' }}>{job.desc}</p>
                    </motion.div>
                 ))}
             </div>

          </div>
       </section>
   );
};

export default Experience;
