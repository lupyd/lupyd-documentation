import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { NetworkBackground } from './NetworkBackground';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', position: 'relative' }}>
      
      {/* Permanent Cinematic Background mapped globally behind documentation text */}
      <div style={{ 
        position: 'fixed', 
        top: 0, left: 0, 
        width: '100vw', height: '100vh', 
        pointerEvents: 'none', 
        zIndex: 0 
      }}>
        {/* Animated Dots Network Pattern */}
        <NetworkBackground />
        
        {/* Soft Room Shadow and Ambient Indoor Lighting */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          boxShadow: 'inset 0 0 150px rgba(0, 0, 0, 0.04)',
        }} />

        {/* Glossy Natural Reflection Layer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 100%)',
          mixBlendMode: 'screen'
        }} />

        {/* Cinematic Texture and Depth Layer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          opacity: 0.2,
          background: `
            radial-gradient(circle at 15% 50%, rgba(200,200,200, 0.05), transparent 25%),
            radial-gradient(circle at 85% 30%, rgba(0,0,0, 0.02), transparent 25%)
          `
        }} />
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-header-logo">
          <img src="/icon-512.webp" alt="Lupyd Logo" />
          <span>Lupyd</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(true)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.4rem', color: '#000', display: 'flex' }}
        >
          <Menu size={26} strokeWidth={2.5} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${isSidebarOpen ? 'active' : ''}`} 
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      
      <div className={`layout-wrapper ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        <main className="main-content">
          {/* Fading animation trigger on route change */}
          <div key={location.pathname} style={{ animation: 'contentFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <Outlet />
          </div>
        </main>
        
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}
