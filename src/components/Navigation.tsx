import { Link } from 'react-router-dom';

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
          gap: '2px', 
          fontWeight: 700, 
          fontSize: '1.25rem',
          letterSpacing: '-0.025em'
        }}>
          <img src="/icon-round.svg" alt="Lupyd Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
          <span>Lupyd</span>
        </Link>
        <nav style={{
          display: 'flex',
          gap: '2rem',
          fontWeight: 500
        }}>
          <Link to="/">Overview</Link>
          <Link to="/installation">Installation</Link>
          <Link to="/guide">User Guide</Link>
        </nav>
      </div>
    </header>
  );
}
