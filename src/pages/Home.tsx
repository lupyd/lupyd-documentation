import { Link } from 'react-router-dom';
import { ArrowRight, Box, Zap } from 'lucide-react';

export function Home() {
  return (
    <div style={{ maxWidth: '850px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '2rem',
          color: '#000000'
        }}>
          Introduction to Lupyd
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            <strong style={{ color: '#000000', fontWeight: 600 }}>Lupyd</strong> is a unified digital platform designed to serve both individuals and businesses through a seamless combination of communication, content, and cloud-driven services. It bridges the gap between social interaction and professional engagement, enabling users to create, connect, and collaborate within a secure environment.
          </p>
          
          <div style={{
            borderLeft: '4px solid #eaeaea',
            paddingLeft: '1.25rem',
            margin: '0.75rem 0'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
              At its core, Lupyd redefines social media by placing privacy and trust at the forefront. Every interaction is built with strong encryption principles, ensuring that user data remains protected and conversations stay strictly between intended participants.
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            The platform empowers users to discover and share content while engaging with emerging voices, trends, and communities shaped by the evolving Gen Z digital culture. At the same time, businesses gain access to a dynamic ecosystem where they can showcase their services, connect with audiences, and grow organically.
          </p>
          
          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Unlike traditional platforms that rely on user data monetization, Lupyd is built on a different philosophy—prioritizing user control, transparency, and ethical data practices. Personal information is never sold, and content integrity is maintained without compromise.
          </p>
          
          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            With a focus on simplicity and performance, Lupyd delivers an intuitive user experience that feels natural, responsive, and accessible to all. Whether for communication, entertainment, or business growth, the platform is designed to adapt to modern digital needs without sacrificing security.
          </p>
          
          <div style={{
            backgroundColor: '#fafafa',
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            padding: '1.5rem',
            marginTop: '1.25rem'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#000000', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
              Lupyd is not just another social platform—it is a secure digital infrastructure where privacy, innovation, and user empowerment come together to shape the future of online interaction.
            </p>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: '#000000' }}>
        Next Steps
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        <Link to="/installation/" className="doc-card">
          <Box size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Getting Started</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Install the Lupyd SDK and integrate perfectly within minutes.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
        
        <Link to="/features/" className="doc-card">
          <Zap size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Core Features</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Explore our encryption patterns, scheduling, and secure group features.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
      </div>
    </div>
  );
}
