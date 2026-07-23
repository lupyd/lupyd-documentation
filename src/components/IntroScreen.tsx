import { useEffect, useState } from 'react';
import { NetworkBackground } from './NetworkBackground';

interface IntroScreenProps {
  onComplete: () => void;
  title?: React.ReactNode;
  subtitle?: string;
  duration?: number;
}

export function IntroScreen({ onComplete, title = "Lupyd", subtitle = "System Documentation", duration = 4000 }: IntroScreenProps) {
  const [stage, setStage] = useState<'loading' | 'fadingOut'>('loading');

  useEffect(() => {
    // Stage 1: Wait duration while showing beautiful sequence
    const timer1 = setTimeout(() => {
      setStage('fadingOut');
      
      // Stage 2: Reveal app fully after CSS transition finishes
      const timer2 = setTimeout(() => {
        onComplete();
      }, 2000); // Wait 2s for fade out
      
      return () => clearTimeout(timer2);
    }, duration); 
    
    return () => clearTimeout(timer1);
  }, [onComplete, duration]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        // Clean modern web interface with white background
        backgroundColor: '#ffffff',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: stage === 'fadingOut' ? 0 : 1,
        // Smooth transition out
        transition: 'opacity 2s cubic-bezier(0.25, 1, 0.5, 1)',
        overflow: 'hidden',
        // Simulate ambient indoor lighting, slightly dim room with a subtle vignette
        boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.05)',
      }}
    >
      <NetworkBackground />
      
      {/* Texture Layer indicating realistic textures / 4k feeling */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.2, // Subtle noise texture effect (CSS gradient simulation)
        background: `
          radial-gradient(circle at 15% 50%, rgba(200,200,200, 0.05), transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(0,0,0, 0.02), transparent 25%)
        `,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Glossy / Screen Reflection Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%)',
        pointerEvents: 'none',
        zIndex: 2,
        mixBlendMode: 'screen'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '10%',
        width: '80%',
        height: '40%',
        background: 'radial-gradient(ellipse at top, rgba(0,0,0,0.03) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Main Content Area */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // Cinematic micro-animation for the logo revealing
        animation: 'introReveal 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          // Soft shadows mapping
          filter: 'drop-shadow(0px 12px 24px rgba(0,0,0,0.08))' 
        }}>
          <img 
            src="/icon-round.svg" 
            alt="Lupyd Logo" 
            style={{ 
              width: '5vw', 
              minWidth: '60px',
              height: 'auto', 
              objectFit: 'contain',
              // Realistic shading on logo shadow
              filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.12))'
            }} 
          />
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 6vw, 7rem)', 
            fontWeight: 800, 
            letterSpacing: '-0.06em',
            margin: 0,
            color: '#000000',
            background: 'linear-gradient(to right bottom, #111, #444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative'
          }}>
            {title}
          </h1>
        </div>
        
        {/* Subtle, modern line separator animation indicator */}
        <div style={{
          height: '2px',
          width: '40px',
          backgroundColor: '#000',
          margin: '2rem 0',
          opacity: 0.2,
          borderRadius: '2px'
        }} />

        <p style={{
          fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)',
          fontWeight: 500,
          color: '#555555',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          margin: 0,
          textShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
