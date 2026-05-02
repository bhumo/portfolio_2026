import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '240px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Cinematic Text Reveal Mask */}
                <motion.div 
                   initial={{ opacity: 0, y: 100 }} 
                   whileInView={{ opacity: 1, y: 0 }} 
                   viewport={{ once: true, margin: '-20%' }} 
                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
                   style={{ maxWidth: '1200px' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4, letterSpacing: '-0.02em', textAlign: 'center' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>I engineer deeply resilient backend architectures and AI-native microservices. </span>
                        My focus is bridging the gap between high-frequency raw data pipelines and flawless autonomous execution interfaces.
                    </h2>
                </motion.div>
                
                {/* Massive Metric Bounding Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '120px', width: '100%', justifyContent: 'center' }}>
                    {[
                        { num: '50K+', label: 'Daily Transactions' },
                        { num: '300ms', label: 'Inference Latency Target' },
                        { num: '0.0%', label: 'Tolerance Level' }
                    ].map((metric, i) => (
                        <motion.div key={i} 
                           initial={{ opacity: 0, scale: 0.8 }} 
                           whileInView={{ opacity: 1, scale: 1 }} 
                           viewport={{ once: true, margin: '-10%' }} 
                           transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }} 
                           style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 80px', border: '1px solid var(--border)', borderRadius: '100px', backgroundColor: 'var(--bg-base)' }}
                        >
                            <div style={{ fontSize: 'clamp(3rem, 5vw, 6rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.05em', lineHeight: 1 }}>{metric.num}</div>
                            <div style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--accent)', marginTop: '16px' }}>{metric.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
