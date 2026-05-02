import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeUrl } from '../utils/site';

const GithubIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
const LinkedinIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
const EmailIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const DownloadIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 250]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      
      <motion.div style={{ position: 'relative', zIndex: 10, y: yText, opacity: opacityText, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
              {/* Massive Foreground Text */}
              <h1 className="text-massive" style={{ color: 'var(--text-primary)', position: 'relative', zIndex: 2 }}>BHUMIKA</h1>
          </div>
          
          <div style={{ position: 'relative', marginTop: '-4vw' }}>
              {/* Stroke Background Text */}
              <h1 className="text-massive" style={{ color: 'transparent', WebkitTextStroke: '2px var(--border)', position: 'relative', zIndex: 1 }}>GUPTA.</h1>
              {/* Deep Orange Drop Shadow matching Studio Freight tier layering */}
              <h1 className="text-massive" style={{ position: 'absolute', top: '10px', left: '-10px', color: 'var(--accent)', zIndex: -1, filter: 'blur(8px)', opacity: 0.4 }}>GUPTA.</h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} style={{ marginTop: '40px', padding: '16px 32px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
             <p style={{ fontSize: '1rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-primary)', fontWeight: 600 }}>Software Engineer</p>
          </motion.div>
          
      </motion.div>

      {/* ABSOLUTE GEOMETRIC CORNER ANCHORS (Exactly identical to the 8/10 rated version) */}
      
      <motion.a 
         href={resumeUrl} download="Bhumika_Gupta_Resume.pdf"
         initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1 }}
         style={{ 
           position: 'absolute', bottom: '40px', left: '40px', zIndex: 100, display: 'flex', alignItems: 'center', gap: '12px',
           padding: '24px 48px', borderRadius: '100px', backgroundColor: 'var(--accent)',
           color: '#000', textDecoration: 'none', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem',
           boxShadow: '0 0 40px rgba(255, 77, 0, 0.3)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
         }}
         onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 77, 0, 0.6)'; e.currentTarget.style.backgroundColor = '#ffffff'; }}
         onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 77, 0, 0.3)'; e.currentTarget.style.backgroundColor = 'var(--accent)'; }}
      >
         <DownloadIcon />
         DOWNLOAD RESUME
      </motion.a>

      <motion.div 
         initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 1 }}
         style={{ position: 'absolute', bottom: '40px', right: '40px', zIndex: 100, display: 'flex', gap: '20px', alignItems: 'center' }}
      >
          {[ 
            { icon: <GithubIcon />, link: "https://github.com/bhumo" },
            { icon: <LinkedinIcon />, link: "https://linkedin.com/in/bhumo" },
            { icon: <EmailIcon />, link: "mailto:bhumi.gupta89us@gmail.com" }
          ].map((item, idx) => (
             <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '64px', height: '64px',
                  backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%', color: 'var(--text-primary)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }} 
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = '#000'; }} 
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
               {item.icon}
             </a>
          ))}
      </motion.div>

    </section>
  );
};

export default Hero;
