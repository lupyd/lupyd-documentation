import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export function Navigation() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: 'var(--primary-bg)',
      borderBottom: '1px solid var(--border-color)',
      zIndex: 100,
      padding: '0.5rem 0'
    }}>
      <div style={{
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          fontWeight: 700, 
          fontSize: '1.25rem',
          letterSpacing: '-0.025em'
        }}>
          <img src="/favicon.svg" alt="Lupyd Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
          <span>Lupyd</span>
        </Link>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.75rem',
          fontWeight: 500,
          fontSize: '0.95rem'
        }}>
          <Link to="/">Overview</Link>
          <Link to="/installation">Installation</Link>
          <Link to="/guide">User Guide</Link>
          <a 
            href="https://blogs.lupyd.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span>Blogs</span>
            <ExternalLink size={12} style={{ opacity: 0.6 }} />
          </a>
          <a 
            href="https://about.lupyd.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span>About</span>
            <ExternalLink size={12} style={{ opacity: 0.6 }} />
          </a>
          <a 
            href="https://billing.lupyd.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span>Pricing</span>
            <ExternalLink size={12} style={{ opacity: 0.6 }} />
          </a>
        </nav>
      </div>
    </header>
  );
}
