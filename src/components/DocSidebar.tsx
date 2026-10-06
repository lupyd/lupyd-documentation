import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Search, Library, ChevronDown, ChevronRight, ExternalLink,
  BookOpen, Rocket, Layers, Compass, Terminal, HelpCircle,
  X
} from 'lucide-react';
import { DOC_SECTIONS, ALL_SEARCH_ITEMS, DocSection } from '../data/docsData';

const SECTION_ICONS: Record<string, React.ElementType> = {
  intro: BookOpen,
  'get-started': Rocket,
  'using-lupyd': Layers,
  guides: Compass,
  build: Terminal,
  help: HelpCircle
};

interface DocSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Track expanded sections in the accordion
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    DOC_SECTIONS.forEach(s => {
      // Auto-expand section if current route matches
      initial[s.id] = location.pathname.startsWith(s.path);
    });
    return initial;
  });

  // When route changes, make sure the active section is expanded
  useEffect(() => {
    DOC_SECTIONS.forEach(s => {
      if (location.pathname.startsWith(s.path)) {
        setExpandedSections(prev => ({ ...prev, [s.id]: true }));
      }
    });
  }, [location.pathname]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const searchResults = ALL_SEARCH_ITEMS.filter(item => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return false;
    return item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
  }).slice(0, 5);

  return (
    <aside className={`doc-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      {/* Top Header: Brand + Return to Bookshelf button */}
      <div className="doc-sidebar-header">
        <Link to="/" className="sidebar-brand-link" title="Return to Lupyd Bookshelf">
          <img src="/favicon.svg" alt="Lupyd Logo" className="sidebar-logo" />
          <div className="sidebar-brand-info">
            <span className="sidebar-title">Lupyd</span>
            <span className="sidebar-subtitle">Documentation</span>
          </div>
        </Link>
        <button className="sidebar-mobile-close" onClick={onClose} aria-label="Close Sidebar">
          <X size={20} />
        </button>
      </div>

      {/* Primary Bookshelf Back-Link */}
      <div className="sidebar-bookshelf-return">
        <Link to="/" className="bookshelf-return-link" onClick={onClose}>
          <Library size={16} />
          <span>← Back to Bookshelf</span>
        </Link>
      </div>

      {/* Search Input */}
      <div className="sidebar-search-box">
        <div className="sidebar-search-input-wrap">
          <Search size={15} className="sidebar-search-icon" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search docs (⌘K)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
            className="sidebar-search-input"
          />
        </div>

        {searchFocused && searchQuery.trim().length > 0 && (
          <div className="sidebar-search-results">
            {searchResults.length > 0 ? (
              searchResults.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="sidebar-search-result-row"
                  onClick={() => {
                    setSearchQuery('');
                    setSearchFocused(false);
                    onClose();
                  }}
                >
                  <div className="search-row-title">{item.title}</div>
                  <div className="search-row-sub">{item.section}</div>
                </Link>
              ))
            ) : (
              <div className="search-no-results">No documents found.</div>
            )}
          </div>
        )}
      </div>

      {/* Six Main Sections & Subtopics Navigation */}
      <nav className="doc-sidebar-nav" aria-label="Documentation sections">
        <div className="sidebar-nav-label">Documentation Sections</div>

        {DOC_SECTIONS.map((section: DocSection) => {
          const Icon = SECTION_ICONS[section.id] || BookOpen;
          const isExpanded = !!expandedSections[section.id];
          const isSectionActive = location.pathname === section.path;

          return (
            <div key={section.id} className="sidebar-section-group">
              {/* Section Header Accordion Toggle */}
              <div className={`sidebar-section-header ${isSectionActive ? 'active-section' : ''}`}>
                <NavLink
                  to={section.path}
                  end
                  className={({ isActive }) => `sidebar-section-title-link ${isActive ? 'active' : ''}`}
                  onClick={onClose}
                >
                  <Icon size={16} className="sidebar-section-icon" />
                  <span className="section-title-text">{section.title}</span>
                </NavLink>

                <button
                  type="button"
                  className="sidebar-chevron-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSection(section.id);
                  }}
                  aria-label={`Toggle ${section.title} subtopics`}
                >
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
              </div>

              {/* Subtopic Items */}
              {isExpanded && (
                <ul className="sidebar-subtopics-list">
                  {section.subtopics.map((sub) => {
                    const isSubActive = location.pathname === sub.path;
                    return (
                      <li key={sub.id}>
                        <NavLink
                          to={sub.path}
                          className={`sidebar-subtopic-link ${isSubActive ? 'active' : ''}`}
                          onClick={onClose}
                        >
                          <span className="subtopic-dot" />
                          <span className="subtopic-text">{sub.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        {/* Ecosystem Links */}
        <div className="sidebar-ecosystem-divider">
          <span className="ecosystem-label">Lupyd Ecosystem</span>
          <a href="https://blogs.lupyd.com" target="_blank" rel="noopener noreferrer" className="sidebar-eco-link">
            <span>Blogs</span>
            <ExternalLink size={12} />
          </a>
          <a href="https://about.lupyd.com" target="_blank" rel="noopener noreferrer" className="sidebar-eco-link">
            <span>About Lupyd</span>
            <ExternalLink size={12} />
          </a>
          <a href="https://billing.lupyd.com" target="_blank" rel="noopener noreferrer" className="sidebar-eco-link">
            <span>Pricing</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </nav>
    </aside>
  );
};
