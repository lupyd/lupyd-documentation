import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Search, PanelLeftClose, PanelLeft, Book, Rocket, Layers, 
  Code2, Briefcase, Settings, Map,
  TrendingUp, MessageSquare, Library, Terminal, Database, ArrowRight
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
  { id: 'firefly', label: 'Firefly Endpoints', icon: Terminal, path: '/firefly' },
  { id: 'server-api', label: 'Social Graph API', icon: Database, path: '/server-api' },
  { id: 'docs-support', label: 'Docs & Support', icon: Library, path: '/docs-support' },
];

const SEARCH_INDEX = [
  { title: 'Introduction', path: '/', tags: ['home', 'overview', 'about', 'welcome'] },
  { title: 'Getting Started', path: '/installation', tags: ['install', 'download', 'app', 'android', 'ios', 'setup'] },
  { title: 'Developer Docs', path: '/guide', tags: ['dev', 'documentation', 'api', 'code', 'structure'] },
  { title: 'Core Features', path: '/features', tags: ['privacy', 'groups', 'encryption', 'monetization', 'security'] },
  { title: 'Start Fast & Go Viral', path: '/start-fast', tags: ['community', 'growth', 'trending', 'viral', 'audience'] },
  { title: 'Use Cases', path: '/cases', tags: ['b2b', 'b2c', 'business', 'creators', 'enterprise'] },
  { title: 'Settings & Security', path: '/settings', tags: ['config', 'privacy', 'account', 'profile'] },
  { title: 'Platform Guides', path: '/guides', tags: ['tutorial', 'how-to', 'platform', 'guide'] },
  { title: 'Group Chats Dashboard', path: '/groups', tags: ['messaging', 'e2ee', 'chat', 'secure'] },
  { title: 'Firefly Native Protocol', path: '/firefly', tags: ['firefly', 'backend', 'mls', 'encryption', 'api', 'keys', 'auth', 'websocket', 'relayer'] },
  { title: 'Social Graph Rust Server', path: '/server-api', tags: ['rust', 'server', 'post', 'followers', 'timeline', 'database', 'api', 'hashtags', 'votes'] },
  { title: 'Docs & Support', path: '/docs-support', tags: ['help', 'contact', 'support', 'faq'] },
];

export function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Listen for Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) toggleSidebar();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleSidebar]);

  const filteredResults = SEARCH_INDEX.filter(item => {
    const q = searchQuery.toLowerCase();
    if (!q) return false;
    return item.title.toLowerCase().includes(q) || item.tags.some(tag => tag.toLowerCase().includes(q));
  }).slice(0, 5); // display top 5

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
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', transition: 'color 0.2s ease', zIndex: 2 }} 
            />
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search documentation..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => {
                // small delay so we can click results before blur hides them
                setTimeout(() => setSearchFocused(false), 200);
              }}
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
                backgroundColor: searchFocused ? '#fff' : '#fafafa',
                position: 'relative',
                zIndex: 1
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
              fontWeight: 600,
              zIndex: 2,
              display: searchQuery.length > 0 ? 'none' : 'block'
            }}>⌘K</div>

            {/* Search Dropdown */}
            {searchFocused && searchQuery.length > 0 && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                width: '100%',
                backgroundColor: '#ffffff',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                zIndex: 100,
                maxHeight: '300px',
                overflowY: 'auto'
              }}>
                {filteredResults.length > 0 ? (
                  <div style={{ padding: '0.5rem' }}>
                    {filteredResults.map((result, idx) => (
                      <div 
                        key={idx}
                        onClick={() => {
                          navigate(result.path);
                          setSearchQuery('');
                          setSearchFocused(false);
                          if (window.innerWidth <= 768) {
                            toggleSidebar();
                          }
                        }}
                        style={{
                          padding: '0.75rem',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#000' }}>{result.title}</span>
                        <ArrowRight size={14} color="#888" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: '1rem', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
                    No matching documents found.
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <button style={{
            background: 'transparent',
            border: 'none',
            padding: '0.5rem',
            cursor: 'pointer',
            borderRadius: '8px'
          }} className="sidebar-icon-btn" onClick={() => toggleSidebar()}>
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
