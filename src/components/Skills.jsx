import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'all',          label: 'All' },
  { id: 'languages',   label: 'Languages' },
  { id: 'backend',     label: 'Backend' },
  { id: 'ai',          label: 'AI / ML' },
  { id: 'cloud',       label: 'Cloud & DevOps' },
  { id: 'data',        label: 'Data' },
  { id: 'architecture',label: 'Architecture' },
];

const SKILLS = [
  // Languages
  { name: 'Java',           cat: 'languages', featured: true  },
  { name: 'Python',         cat: 'languages', featured: true  },
  { name: 'TypeScript',     cat: 'languages', featured: true  },
  { name: 'JavaScript',     cat: 'languages', featured: false },
  { name: 'SQL',            cat: 'languages', featured: false },
  { name: 'C++',            cat: 'languages', featured: false },

  // Backend
  { name: 'Spring Boot',    cat: 'backend',   featured: true  },
  { name: 'FastAPI',        cat: 'backend',   featured: true  },
  { name: 'Node.js',        cat: 'backend',   featured: false },
  { name: 'React.js',       cat: 'backend',   featured: false },
  { name: 'gRPC',           cat: 'backend',   featured: false },
  { name: 'REST',           cat: 'backend',   featured: false },

  // AI / ML
  { name: 'LangGraph',      cat: 'ai',        featured: true  },
  { name: 'LangChain',      cat: 'ai',        featured: true  },
  { name: 'CrewAI',         cat: 'ai',        featured: true  },
  { name: 'RAG',            cat: 'ai',        featured: true  },
  { name: 'DSPy',           cat: 'ai',        featured: false },
  { name: 'Guardrails AI',  cat: 'ai',        featured: false },
  { name: 'RAGAS',          cat: 'ai',        featured: false },
  { name: 'OpenAI GPT-4',   cat: 'ai',        featured: false },
  { name: 'pgvector',       cat: 'ai',        featured: false },
  { name: 'Pinecone',       cat: 'ai',        featured: false },

  // Cloud & DevOps
  { name: 'AWS',              cat: 'cloud',   featured: true  },
  { name: 'Docker',           cat: 'cloud',   featured: true  },
  { name: 'Kubernetes',       cat: 'cloud',   featured: false },
  { name: 'Terraform',        cat: 'cloud',   featured: false },
  { name: 'GitHub Actions',   cat: 'cloud',   featured: false },
  { name: 'Palantir Foundry', cat: 'cloud',   featured: false },

  // Data
  { name: 'Apache Kafka',   cat: 'data',      featured: true  },
  { name: 'Apache Spark',   cat: 'data',      featured: false },
  { name: 'PostgreSQL',     cat: 'data',      featured: false },
  { name: 'Redis',          cat: 'data',      featured: false },
  { name: 'MongoDB',        cat: 'data',      featured: false },

  // Architecture
  { name: 'Microservices',      cat: 'architecture', featured: true  },
  { name: 'System Design',      cat: 'architecture', featured: true  },
  { name: 'Distributed Systems',cat: 'architecture', featured: false },
  { name: 'Event-Driven',       cat: 'architecture', featured: false },
  { name: 'CI/CD',              cat: 'architecture', featured: false },
  { name: 'OAuth2 / OIDC',      cat: 'architecture', featured: false },
];

const SPRING = { type: 'spring', stiffness: 400, damping: 30 };
const EASE   = [0.16, 1, 0.3, 1];

const SkillPill = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const delay = Math.min(index * 0.018, 0.18); // cap total stagger at 180ms

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
      exit={{    opacity: 0, y: -6, filter: 'blur(4px)', transition: { duration: 0.15, ease: 'easeIn' } }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -2, transition: SPRING }}
      style={{
        padding: skill.featured ? '12px 24px' : '10px 20px',
        borderRadius: '100px',
        border: hovered
          ? '1px solid rgba(255,77,0,0.5)'
          : skill.featured
            ? '1px solid rgba(255,255,255,0.18)'
            : '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered
          ? 'rgba(255,77,0,0.1)'
          : skill.featured
            ? 'rgba(255,255,255,0.06)'
            : 'rgba(255,255,255,0.02)',
        color: hovered ? '#fff' : skill.featured ? '#fff' : 'var(--text-secondary)',
        fontWeight: skill.featured ? 700 : 500,
        fontSize: skill.featured ? '0.95rem' : '0.88rem',
        letterSpacing: '0.3px',
        cursor: 'default',
        transition: 'border-color 0.25s ease, background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
        boxShadow: hovered ? '0 4px 24px rgba(255,77,0,0.12)' : 'none',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {skill.featured && (
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0, boxShadow: '0 0 6px rgba(255,77,0,0.9)' }}
        />
      )}
      {skill.name}
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all' ? SKILLS : SKILLS.filter(s => s.cat === active);

  return (
    <section id="skills" style={{ padding: '160px 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-base)' }}>
      <div className="page-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }} transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '80px' }}
        >
          <h2 className="text-h2">The Precision<br /><span style={{ color: 'var(--accent)' }}>Arsenal.</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '20px', fontSize: '1rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Built for scale. Wired for performance.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '60px' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: '10px 24px', borderRadius: '100px', fontWeight: 700,
                fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer',
                border: '1px solid transparent',
                backgroundColor: 'transparent',
                color: active === cat.id ? '#000' : 'var(--text-secondary)',
                position: 'relative', zIndex: 0,
                transition: 'color 0.2s ease',
              }}
              onMouseOver={e => { if (active !== cat.id) e.currentTarget.style.color = '#fff'; }}
              onMouseOut={e => { if (active !== cat.id) e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="tab-active"
                  transition={SPRING}
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '100px',
                    backgroundColor: 'var(--accent)', zIndex: -1,
                  }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill count */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '32px' }}>
          {filtered.length} skills
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          transition={SPRING}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillPill key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)', boxShadow: '0 0 6px rgba(255,77,0,0.8)', display: 'inline-block' }} />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Core strength</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Proficient</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
