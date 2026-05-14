import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
   
   return (
       <section id="experience" ref={ref} style={{ position: 'relative', padding: '160px 0', borderTop: '1px solid var(--border)', overflow: 'clip' }}>
          
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
                   {
                     role: "Software Engineer — Backend & AI", date: "Jan 2026 — Present", company: "Softtechers LLC",
                     bullets: [
                       "Built a fraud-detection microservice (Spring Boot, Kafka) processing 50K+ daily transactions, using LLMs with Guardrails AI and Ragas for output validation, lowering false positives and manual reviews by 40%.",
                       "Pioneered a LLM-powered dispute-resolution agent with LangGraph, DSPy, and FastAPI to autonomously triage cardholder disputes, cutting average handling time by 45% across 10K+ monthly cases.",
                       "Constructed payment REST APIs in Java Spring Boot supporting 100K requests/minute peak loads with idempotency keys, circuit breakers, and retry logic — 99.95% transaction success rate.",
                       "Launched a React.js real-time risk operations dashboard aggregating live transaction streams and ML confidence scores, cutting triage time from 12 to 8 minutes per alert.",
                     ]
                   },
                   {
                     role: "Software Engineer", date: "Sep 2025 — Jan 2026", company: "Changing The Present",
                     bullets: [
                       "Improved NLP model inference via request batching and layer deduplication, boosting summarization throughput by 25% and lowering p95 API latency from 850ms to 630ms.",
                       "Shrank production MTTR from 45 minutes to under 15 minutes as primary on-call engineer by authoring structured AWS CloudWatch log-correlation runbooks.",
                       "Orchestrated a Docker-based CI/CD pipeline that compressed release cycles by 40% and eliminated environment drift failures.",
                       "Partnered with Risk Ops to launch a React.js dashboard aggregating live transaction streams and ML scores, cutting triage time from 12 to 8 minutes per alert.",
                     ]
                   },
                   {
                     role: "Software Engineer", date: "Apr 2022 — Jul 2023", company: "WebCraft-IT",
                     bullets: [
                       "Scaled an Apache Kafka and Spark Streaming pipeline on AWS ingesting 100K daily events across 150+ event types, minimizing data-sync latency by 30% for a 10K-user SaaS platform.",
                       "Optimized PostgreSQL query execution plans and layered Redis caching, cutting p95 page-load time by 25% and database CPU load by 40% under peak traffic.",
                       "Accelerated release cycles from bi-weekly to weekly by implementing a Jenkins CI/CD pipeline with automated unit and integration test gates.",
                     ]
                   },
                   {
                     role: "Software Engineer", date: "Mar 2021 — Mar 2022", company: "Freshworks Inc.",
                     bullets: [
                       "Refactored a monolithic authentication module into event-driven Spring Boot microservices with Kafka, sustaining 1M+ requests/day while dropping p95 latency by 35%.",
                       "Implemented Spring Security JWT and RBAC enforcement at the API gateway, mitigating unauthorized access by 25%.",
                       "Centralized authentication via OAuth2 and OIDC SSO federation across the product suite, increasing enterprise-tier retention by 15%.",
                     ]
                   },
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
                        <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--text-primary)' }}>{job.role}</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginTop: '8px', marginBottom: '28px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>{job.company}</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, maxWidth: '640px' }}>
                          {job.bullets.map((point, i) => (
                            <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                              <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '1rem', marginTop: '3px', flexShrink: 0 }}>—</span>
                              <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{point}</span>
                            </li>
                          ))}
                        </ul>
                    </motion.div>
                 ))}
             </div>

          </div>
       </section>
   );
};

export default Experience;
