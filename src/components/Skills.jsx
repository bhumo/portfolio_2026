import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-base)' }}>
            <div className="page-container">
                
                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                   <h2 className="text-h2">The Precision<br/><span style={{ color: 'var(--accent)' }}>Arsenal.</span></h2>
                   <p style={{ color: 'var(--text-secondary)', marginTop: '24px', fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Built for scale. Wired for performance.</p>
                </div>

                {/* Ultimate DOM Asymmetrical Bento Box */}
                <div className="asym-bento">
                    
                    {/* massive full span header bento */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bento-full" 
                        style={{ padding: '60px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '32px', overflow: 'hidden', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255, 77, 0, 0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
                        <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '24px', color: '#fff', letterSpacing: '-0.02em' }}>Core Backend Architectures.</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '800px' }}>
                            Advanced fluency in Python, Java, and Spring Boot ecosystems. Engineering resilient monoliths and globally distributed microservice arrays capable of ingesting massive, uninterrupted data funnels with absolute zero-failure rates.
                        </p>
                    </motion.div>

                    {/* Half Bento Left */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="bento-half" 
                        style={{ padding: '60px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '32px', transition: 'border-color 0.4s' }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    >
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>Distributed Event Streaming</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Deploying mathematically flawless Apache Kafka arrays capable of directing over 100,000 asynchronous high-volume throughput injections per second.
                        </p>
                        <div style={{ marginTop: '32px', color: 'var(--accent)', fontWeight: 800, letterSpacing: '2px', fontSize: '0.9rem' }}>KAFKA // RABBITMQ // AWS</div>
                    </motion.div>

                    {/* Half Bento Right */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bento-half" 
                        style={{ padding: '60px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '32px', transition: 'border-color 0.4s' }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(255,77,0,0.5)'}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    >
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>AI Integration Workflows</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Constructing deeply persistent, logic-driven vector pipelines utilizing PGVector and LangGraph to architect fully autonomous natural-language processing environments.
                        </p>
                        <div style={{ marginTop: '32px', color: 'var(--accent)', fontWeight: 800, letterSpacing: '2px', fontSize: '0.9rem' }}>LANGGRAPH // DSPY // OPENAI</div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Skills;
