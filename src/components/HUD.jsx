import React from 'react';
import { resumeUrl } from '../utils/site';

const GithubIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
const LinkedinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
const EmailIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const DownloadIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;

const HUD = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1000, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '40px' }}>
            
            {/* Top Navigation Frame */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ color: '#fff', fontWeight: 800, letterSpacing: '4px', fontSize: '0.8rem' }}>
                    SYS.WEBGL_1M // <span style={{ color: '#ff4d00' }}>ACTIVE</span>
                </div>
            </div>

            {/* Bottom Floating Base */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                
                {/* HUD Interactive Anchors */}
                <a href={resumeUrl} download="Bhumika_Gupta_Resume.pdf" 
                   style={{ 
                       pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 32px',
                       backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)',
                       color: '#fff', borderRadius: '100px', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '2px', textDecoration: 'none',
                       transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                   }}
                   onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#ff4d00'; e.currentTarget.style.color = '#000'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                   onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                    <DownloadIcon />
                    RESUME EXPORT
                </a>

                {/* HUD Social Cluster */}
                <div style={{ pointerEvents: 'auto', display: 'flex', gap: '12px' }}>
                   {[ 
                      { icon: <GithubIcon />, link: "https://github.com/bhumo" },
                      { icon: <LinkedinIcon />, link: "https://linkedin.com/in/bhumo" },
                      { icon: <EmailIcon />, link: "mailto:bhumi.gupta89us@gmail.com" }
                   ].map((item, idx) => (
                      <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer"
                         style={{ 
                             display: 'flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)',
                             backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', transition: 'all 0.3s'
                         }}
                         onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#000'; }}
                         onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#fff'; }}
                      >
                          {item.icon}
                      </a>
                   ))}
                </div>

            </div>

            {/* Cinematic Overlay Scroll Helper */}
            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.3)', fontFamily: "monospace", letterSpacing: '4px', fontSize: '0.7rem', pointerEvents: 'none' }}>
                SCROLL TO NAVIGATE FLIGHT PATH
            </div>

        </div>
    );
};

export default HUD;
