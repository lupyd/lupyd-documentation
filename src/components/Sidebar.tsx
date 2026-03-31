import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Search, PanelLeftClose, PanelLeft, Book, Rocket, Layers, 
  Code2, Briefcase, Settings, Map,
  TrendingUp, MessageSquare, Library
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

const navSections: NavItem[] = [
  { id: 'intro', label: 'Introduction', icon: Book, path: '/' },
  { id: 'start', label: 'Getting Started', icon: Rocket, path: '/installation' },
  { id: 'dev', label: 'Developer Docs', icon: Code2, path: '/guide' },
  { id: 'features', label: 'Core Features', icon: Layers, path: '/features' },
  { id: 'start-fast', label: 'Start Fast & Go Viral', icon: TrendingUp, path: '/start-fast' },
  { id: 'cases', label: 'Use Cases', icon: Briefcase, path: '/cases' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  { id: 'guides', label: 'Platform Guides', icon: Map, path: '/guides' },
  { id: 'groups', label: 'Group Chats', icon: MessageSquare, path: '/groups' },
  { id: 'docs-support', label: 'Docs & Support', icon: Library, path: '/docs-support' },
];

export function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <aside className={`sidebar-container ${!isOpen ? 'sidebar-closed' : ''} ${isOpen ? 'mobile-open' : ''}`}>
      {/* Header / Logo */}
      <div style={{
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.25rem',
        borderBottom: '1px solid #eaeaea',
        justifyContent: isOpen ? 'space-between' : 'center',
        minWidth: '70px'
      }}>
        {isOpen && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/icon-512.webp" alt="Lupyd Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#000' }}>Lupyd</span>
          </div>
        )}
        {!isOpen && (
          <img src="/icon-512.webp" alt="Lupyd Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
        )}
      </div>

      {/* Search Bar */}
      <div style={{ padding: isOpen ? '1.5rem 1.25rem 1rem' : '1.5rem 0 1rem', display: 'flex', justifyContent: 'center' }}>
        {isOpen ? (
          <div style={{
            position: 'relative',
            width: '100%',
          }}>
            <Search 
              size={16} 
              color={searchFocused ? '#000' : '#888'} 
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', transition: 'color 0.2s ease' }} 
            />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.5rem',
                border: searchFocused ? '1px solid #000' : '1px solid #eaeaea',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#000',
                outline: 'none',
                boxShadow: searchFocused ? '0 0 0 2px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.2s ease',
                backgroundColor: searchFocused ? '#fff' : '#fafafa'
              }}
            />
            <div style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '0.65rem',
              color: '#888',
              border: '1px solid #e0e0e0',
              backgroundColor: '#fff',
              borderRadius: '4px',
              padding: '2px 6px',
              pointerEvents: 'none',
              fontWeight: 600
            }}>⌘K</div>
          </div>
        ) : (
          <button style={{
            background: 'transparent',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            borderRadius: '8px'
          }} className="sidebar-icon-btn">
            <Search size={22} color="#555" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <nav style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: isOpen ? '0 0.75rem 1rem' : '0 0 1rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem'
      }} className="sidebar-nav">
        {navSections.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink 
              key={item.id} 
              to={item.path}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''} ${!isOpen ? 'collapsed' : ''}`}
              title={!isOpen ? item.label : undefined}
            >
              <Icon size={18} className="sidebar-link-icon" />
              {isOpen && <span style={{ width: 'max-content' }}>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Toggle Button */}
      <div style={{
        padding: '1rem',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: isOpen ? 'flex-end' : 'center',
        backgroundColor: '#fafafa'
      }} className="sidebar-toggle-btn-container">
        <button 
          onClick={toggleSidebar}
          className="sidebar-toggle-btn"
          title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {isOpen ? <PanelLeftClose size={20} /> : <PanelLeft size={20} />}
        </button>
      </div>
    </aside>
  );
}
