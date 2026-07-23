import { Download, CheckCircle2 } from 'lucide-react';

export function Installation() {
  return (
    <div style={{ maxWidth: '850px' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: '#000000'
        }}>
          Getting Started
        </h1>
        
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd is designed to be instantly accessible across all major platforms, including Windows, Linux, Android, and Apple devices. The onboarding experience is unified—no complex setup, no platform-specific barriers.
        </p>
      </div>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: '#000000' }}>
          Install Lupyd (All Users)
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Getting started with Lupyd is straightforward and consistent for everyone:
        </p>
        
        <div style={{ 
          backgroundColor: '#fafafa', 
          border: '1px solid #eaeaea', 
          borderRadius: '8px', 
          padding: '2rem',
          marginBottom: '1rem'
        }}>
          <ol style={{ 
            margin: 0, 
            paddingLeft: '1.25rem', 
            fontSize: '1.1rem', 
            color: '#111111',
            lineHeight: 1.8,
            fontWeight: 500
          }}>
            <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Open your device's app store</li>
            <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Search for <strong>“Lupyd”</strong></li>
            <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Tap Install</li>
            <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Launch the application</li>
            <li style={{ paddingLeft: '0.5rem' }}>Create your account or sign in</li>
          </ol>
        </div>
        <div style={{
          borderLeft: '4px solid #eaeaea',
          paddingLeft: '1rem',
          marginTop: '1.5rem'
        }}>
          <p style={{ fontSize: '1.05rem', color: '#555555', fontStyle: 'italic', margin: 0 }}>
            That’s it—no additional configuration is required.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: '#000000', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Download size={24} color="#000000" />
          Download Lupyd
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Lupyd is available for download across multiple platforms. You can download the official client directly from the downloads page:
        </p>
        
        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #eaeaea',
          borderRadius: '12px',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#111111' }}>
              Official Downloads
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#666666', margin: 0, lineHeight: 1.5 }}>
              Enjoy secure communications, content creation, and business tools under end-to-end encryption.
            </p>
          </div>
          
          <a 
            href="https://www.lupyd.com/downloads" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.05rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#222222';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = '#000000';
            }}
          >
            <Download size={20} color="#ffffff" />
            Go to Downloads Page
          </a>
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        <section>
          <h3 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.25rem', color: '#000000' }}>
            Cross-Platform Consistency
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Whether you’re using mobile or desktop, Lupyd delivers the same seamless experience:
          </p>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#111111', fontWeight: 500 }}>
              <CheckCircle2 size={20} color="#000000" /> Unified interface
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#111111', fontWeight: 500 }}>
              <CheckCircle2 size={20} color="#000000" /> Secure login
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#111111', fontWeight: 500 }}>
              <CheckCircle2 size={20} color="#000000" /> Real-time synchronization
            </li>
          </ul>
        </section>

        <section>
          <h3 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.25rem', color: '#000000' }}>
            Built-In Security from Day One
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            From the moment you install Lupyd, your protection is guaranteed:
          </p>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#111111', fontWeight: 500 }}>
              <CheckCircle2 size={20} color="#000000" /> Encryption is automatically enabled
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#111111', fontWeight: 500 }}>
              <CheckCircle2 size={20} color="#000000" /> Your data remains private
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#111111', fontWeight: 500 }}>
              <CheckCircle2 size={20} color="#000000" /> No manual security setup is required
            </li>
          </ul>
        </section>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      <section style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', padding: '2rem' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.25rem', color: '#000000' }}>
          Quick Start Summary
        </h3>
        <ul style={{ 
            margin: 0, 
            paddingLeft: '1.5rem', 
            fontSize: '1.1rem', 
            color: '#111111',
            lineHeight: 1.8,
            fontWeight: 500,
            listStyleType: 'disc'
          }}>
          <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Install Lupyd</li>
          <li style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>Sign in or create an account</li>
          <li style={{ paddingLeft: '0.5rem' }}>Start exploring content, connecting, and collaborating.</li>
        </ul>
      </section>

    </div>
  );
}
