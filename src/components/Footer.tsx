import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #eaeaea',
      marginTop: '5rem',
      padding: '3rem 0 4rem',
      color: '#666',
      fontSize: '0.9rem'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2.5rem',
        marginBottom: '2.5rem'
      }}>
        <div style={{ maxWidth: '320px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <img src="/favicon.svg" alt="Lupyd Logo" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#000', letterSpacing: '-0.02em' }}>Lupyd</span>
          </div>
          <p style={{ margin: 0, lineHeight: 1.6, color: '#666', fontSize: '0.875rem' }}>
            A unified digital platform prioritizing user control, data privacy, and ethical practices for individuals and businesses.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3.5rem' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#000', fontSize: '0.85rem', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Documentation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <Link to="/" style={{ color: '#666' }}>Introduction</Link>
              <Link to="/installation/" style={{ color: '#666' }}>Getting Started</Link>
              <Link to="/guide/" style={{ color: '#666' }}>Developer Docs</Link>
              <Link to="/features/" style={{ color: '#666' }}>Core Features</Link>
              <Link to="/docs-support/" style={{ color: '#666' }}>Docs & Support</Link>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 600, color: '#000', fontSize: '0.85rem', marginBottom: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Ecosystem
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <a 
                href="https://blogs.lupyd.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#666', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>Blogs</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
              <a 
                href="https://about.lupyd.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#666', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>About</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
              <a 
                href="https://billing.lupyd.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#666', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>Pricing</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        paddingTop: '1.5rem',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.8rem',
        color: '#999'
      }}>
        <span>© {new Date().getFullYear()} Lupyd Inc. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://blogs.lupyd.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>Blogs</a>
          <a href="https://about.lupyd.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>About</a>
          <a href="https://billing.lupyd.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>Pricing</a>
        </div>
      </div>
    </footer>
  );
}
