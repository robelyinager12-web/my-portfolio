'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const TelegramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 13.26l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.993.3z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const socials = [
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/robel-yinager-943b37419/', color: '#0A66C2' },
  { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/robaNew05', color: '#26A5E4' },
  { icon: FacebookIcon, label: 'Facebook', href: '#', color: '#1877F2' },
  { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com/robelyinager12-web', color: '#E2E8F0' }
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ height: '2px', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6,#EC4899,#F59E0B,#10B981,#00E5FF)' }} />

      <div style={{ background: '#020610', paddingTop: '60px', paddingBottom: '40px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '200px', background: 'rgba(139,92,246,0.04)', borderRadius: '50%', filter: 'blur(80px)' }} />
          {Array.from({length:15},(_,i)=>(
            <div key={i} className="particle" style={{ left:(i*43+7)%100+'%', top:(i*67+12)%100+'%', width:(i%2+1)*3+'px', height:(i%2+1)*3+'px', background:i%3===0?'#00E5FF':i%3===1?'#8B5CF6':'#EC4899', opacity:0.2, animationDelay:i*0.3+'s', animationDuration:(3+i%3)+'s' }} />
          ))}
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ display:'flex', alignItems:'center', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
              {socials.map(s => {
                const Icon = s.icon;
                return (
                  <motion.a key={s.label} href={s.href} target={s.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer" whileHover={{ y:-5, scale:1.05 }} whileTap={{ scale:0.95 }} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', textDecoration:'none' }}>
                    <div style={{ width:'56px', height:'56px', borderRadius:'14px', background:'rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'center', color: s.color, transition:'all 0.2s' }}
                      onMouseEnter={e=>{ const d=e.currentTarget as HTMLDivElement; d.style.background=s.color+'22'; d.style.boxShadow=`0 0 20px ${s.color}44`; }}
                      onMouseLeave={e=>{ const d=e.currentTarget as HTMLDivElement; d.style.background='rgba(255,255,255,0.06)'; d.style.boxShadow='none'; }}>
                      <Icon />
                    </div>
                    <span style={{ fontFamily:'Inter', fontSize:'11px', fontWeight:400, color:'#64748B', letterSpacing:'0.05em' }}>{s.label}</span>
                  </motion.a>
                );
              })}
            </motion.div>

            <div style={{ width:'100%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)' }} />

            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', width:'100%', gap:'16px' }}>
              <p style={{ fontFamily:'Inter', fontSize:'13px', fontWeight:400, color:'#475569' }}>
                © {new Date().getFullYear()} Robel Yinager. All rights reserved.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:'24px', flexWrap:'wrap' }}>
                {['Terms of Service','Privacy Policy','Accessibility'].map(item=>(
                  <a key={item} href="#" style={{ fontFamily:'Inter', fontSize:'13px', fontWeight:400, color:'#475569', textDecoration:'none', transition:'color 0.2s' }}
                    onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.color='#94A3B8'}
                    onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.color='#475569'}>
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ fontFamily:'Inter', fontSize:'13px', color:'#475569' }}>Designed & built by</span>
              <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', border:'1.5px solid rgba(139,92,246,0.4)', flexShrink:0 }}>
                  <Image src="/avatar.jpg" alt="Robel" width={28} height={28} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }} />
                </div>
                <span style={{ fontFamily:'Space Grotesk', fontSize:'14px', fontWeight:600, color:'#ffffff' }}>Robel Yinager</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div style={{ height:'1px', background:'linear-gradient(90deg,#00E5FF,#8B5CF6,#EC4899,#F59E0B,#10B981,#00E5FF)', opacity:0.3 }} />
    </footer>
  );
}
