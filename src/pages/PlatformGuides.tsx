import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IntroScreen } from '../components/IntroScreen';
import { Download, Smartphone, Monitor, Compass, Bell, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';

export function PlatformGuides() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTransitioning(true);
  };

  return (
    <>
      {transitioning && (
        <IntroScreen 
          title={<span style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>Installation</span>}
          subtitle="Initializing Environment..."
          duration={2500}
          onComplete={() => {
            setTransitioning(false);
            navigate('/installation');
          }}
        />
      )}
      
      <div style={{ maxWidth: '850px' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '1.05rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.5rem' }}>
            🚀 Pro Touch
          </p>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 700, 
            letterSpacing: '-0.02em', 
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            color: '#000000'
          }}>
            Platform Guides
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: '#444444', lineHeight: 1.75, fontWeight: 500, margin: '0 0 1.5rem 0' }}>
            Learn how to use Lupyd seamlessly across every platform.
          </p>

          <a href="/installation" onClick={handleInstallClick} style={{
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            <Download size={20} color="#ffffff" />
            Go to Installation Guide
          </a>
        </div>

        {/* Overview */}
        <div style={{
          backgroundColor: '#fafafa',
          borderLeft: '4px solid #eaeaea',
          padding: '1.5rem',
          borderRadius: '0 8px 8px 0',
          marginBottom: '4rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}>
            <Compass size={24} color="#000000" /> Overview
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.6, margin: 0 }}>
            Lupyd is built to deliver a consistent and secure experience across all platforms. Whether accessed on mobile or desktop platforms, users can interact with the same core features with optimized performance and seamless navigation.
          </p>
        </div>

        {/* Core Platforms Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Mobile Experience */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#000000' }}>
              <Smartphone size={24} color="#000000" /> Mobile Experience
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#888888', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Getting Started</p>
            <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li>Install Lupyd from your app store</li>
              <li>Sign in or create an account</li>
              <li>Access your personalized home feed</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#888888', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Key Actions</p>
            <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li>Create and publish content</li>
              <li>Explore trending posts and creators</li>
              <li>Send and receive secure messages</li>
              <li>Discover businesses and services</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#888888', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Navigation</p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li>Bottom navigation bar for quick access</li>
              <li>Tap-based interactions for smooth usage</li>
              <li>Instant switching between features</li>
            </ul>
          </div>

          {/* Web & Desktop Experience */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#000000' }}>
              <Monitor size={24} color="#000000" /> Web & Desktop
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#888888', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Access</p>
            <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li>Open Lupyd in your browser or desktop app</li>
              <li>Log in securely with your account</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#888888', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Key Actions</p>
            <ul style={{ margin: '0 0 1.5rem 0', paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li>Manage content and interactions</li>
              <li>Use messaging and business features</li>
              <li>Access a wider dashboard view</li>
            </ul>
            <p style={{ fontSize: '0.9rem', color: '#888888', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>Advantages</p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li>Larger workspace for productivity</li>
              <li>Faster navigation with keyboard and mouse</li>
              <li>Multi-tasking support</li>
            </ul>
          </div>


        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

        {/* Guides Overview Grid */}
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#000000' }}>
          <Compass size={28} color="#000000" /> Core Guides
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          
          <div style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}>Navigation Guide</h4>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333333', marginBottom: '0.25rem' }}>Sidebar</p>
            <p style={{ fontSize: '0.95rem', color: '#666666', marginBottom: '1rem' }}>Access all main sections from the left sidebar. Collapse or expand for better focus.</p>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333333', marginBottom: '0.25rem' }}>Search</p>
            <p style={{ fontSize: '0.95rem', color: '#666666', marginBottom: '1rem' }}>Quickly find content, users, or businesses. Instant results with minimal input.</p>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333333', marginBottom: '0.25rem' }}>Profile & Settings</p>
            <p style={{ fontSize: '0.95rem', color: '#666666', margin: 0 }}>Manage account details, update preferences and privacy controls.</p>
          </div>

          <div style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}><Bell size={20} color="#000000" /> Notifications & Activity</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555555', lineHeight: 1.6 }}>
              <li>Receive real-time updates on messages and interactions</li>
              <li>Stay informed about content engagement</li>
              <li>Customize notification preferences</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}><ShieldCheck size={20} color="#000000" /> Privacy Controls</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555555', lineHeight: 1.6 }}>
              <li>Manage visibility of your profile and content</li>
              <li>Control who can interact with you</li>
              <li>Built-in encryption ensures secure communication</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}><RefreshCw size={20} color="#000000" /> Sync Across Devices</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555555', lineHeight: 1.6 }}>
              <li>Access Lupyd from multiple devices</li>
              <li>Real-time synchronization of messages and content</li>
              <li>Seamless transition between mobile and desktop</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#fff0f0', border: '1px solid #ffcccc', borderRadius: '8px', padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#cc0000', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertCircle size={20} color="#cc0000" /> Troubleshooting</h4>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#cc0000', marginBottom: '0.25rem' }}>Common Issues</p>
            <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.5rem', color: '#990000', lineHeight: 1.6 }}>
              <li>Login or authentication problems</li>
              <li>App performance delays</li>
              <li>Sync interruptions</li>
            </ul>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#cc0000', marginBottom: '0.25rem' }}>Quick Fixes</p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#990000', lineHeight: 1.6 }}>
              <li>Check internet connection</li>
              <li>Restart the application</li>
              <li>Update to the latest version</li>
            </ul>
          </div>

        </div>

      </div>
    </>
  );
}
