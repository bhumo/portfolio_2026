import React from 'react';
import { motion } from 'framer-motion';
import { resumeUrl } from '../utils/site';

const Navbar = () => {
  const navLinks = ['skills', 'experience', 'projects'];
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: '-50%' }} 
      animate={{ y: 0, opacity: 1, x: '-50%' }} 
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: '40px', left: '50%', zIndex: 1000,
        display: 'flex', gap: '32px', padding: '16px 24px', borderRadius: '100px',
        backgroundColor: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(40px)', 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 30px 60px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05)',
        alignItems: 'center'
      }}
    >
      {navLinks.map(link => (
        <a key={link} href={`#${link}`} style={{ 
            color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.8.5rem', 
            textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 600, transition: 'color 0.3s' 
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
        >
          {link}
        </a>
      ))}
      
      {/* Moved PDF Download directly into Nav Island */}
      <a 
         href={resumeUrl} download="Bhumika_Gupta_Resume.pdf"
         style={{ 
           marginLeft: '16px', padding: '12px 24px', borderRadius: '100px', backgroundColor: 'var(--accent)',
           color: '#000', textDecoration: 'none', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', 
           fontSize: '0.8rem', boxShadow: '0 4px 15px rgba(255, 77, 0, 0.4)', transition: 'all 0.3s'
         }}
         onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 77, 0, 0.6)'; }}
         onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 77, 0, 0.4)'; }}
      >
         DOWNLOAD CV
      </a>
    </motion.nav>
  );
};

export default Navbar;
