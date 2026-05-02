import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Distinct Magnetic Physics Extrapolation Module
const MagneticButton = ({ children, onClick }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        // Bind gravitational limit ratio
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); 
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            style={{ position: 'relative', display: 'inline-block' }}
            ref={ref}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
        >
            <motion.div 
               animate={{ x: position.x * 0.5, y: position.y * 0.5 }} 
               transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
               style={{
                   padding: '40px 100px', backgroundColor: 'var(--accent)', borderRadius: '200px',
                   color: '#000', fontWeight: 900, fontSize: 'clamp(1.2rem, 2vw, 2rem)', cursor: 'pointer',
                   boxShadow: '0 20px 60px rgba(255, 77, 0, 0.3)', display: 'inline-block',
                   letterSpacing: '4px', textTransform: 'uppercase'
               }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

const Footer = () => {
    return (
        <footer id="contact" style={{ paddingTop: '240px', paddingBottom: '80px', borderTop: '1px solid var(--border)', background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background Infinite Framer Track */}
            <div style={{ position: 'absolute', top: '10%', left: 0, width: '200vw', whiteSpace: 'nowrap', opacity: 0.02, pointerEvents: 'none', zIndex: 0 }}>
                <motion.div 
                   animate={{ x: ['0%', '-50%'] }} 
                   transition={{ ease: 'linear', duration: 30, repeat: Infinity }} 
                   style={{ fontSize: '35vh', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.05em' }}
                >
                    INITIATE ARCHITECTURE — INITIATE ARCHITECTURE — INITIATE ARCHITECTURE —
                </motion.div>
            </div>

            <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <h2 style={{ fontSize: 'clamp(4rem, 15vw, 15rem)', fontWeight: 900, lineHeight: 0.8, letterSpacing: '-0.06em', color: 'var(--text-primary)', zIndex: 10, textAlign: 'center' }}>
                    LET'S BUILD.
                </h2>

                <div style={{ marginTop: '120px', zIndex: 10 }}>
                    <MagneticButton onClick={() => window.location.href = 'mailto:bhumi.gupta89us@gmail.com'}>
                        CONNECT
                    </MagneticButton>
                </div>

                {/* Sub-Footer Logic */}
                <div style={{ marginTop: '200px', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', borderTop: '1px solid var(--border)', paddingTop: '40px' }}>
                    <div>VERSION 17.5 // AWWWARDS TIER</div>
                    <div>(C) 2026 // BHUMIKA GUPTA</div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
