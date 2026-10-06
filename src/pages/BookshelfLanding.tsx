import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { Bookshelf } from '../components/Bookshelf';
import { ALL_SEARCH_ITEMS } from '../data/docsData';
import { Footer } from '../components/Footer';

export const BookshelfLanding: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Listen for Cmd+K or Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchResults = ALL_SEARCH_ITEMS.filter(item => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return false;
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.section.toLowerCase().includes(q)
    );
  }).slice(0, 6);

  return (
    <div className="bookshelf-page-root">
      {/* Top Navigation Bar */}
      <header className="library-top-bar">
        <div className="library-nav-inner">
          <Link to="/" className="library-brand-link">
            <img src="/favicon.svg" alt="Lupyd Logo" className="library-logo-img" />
            <div className="library-brand-text">
              <span className="brand-primary">Lupyd</span>
              <span className="brand-badge">Docs Library</span>
            </div>
          </Link>

          <div className="library-nav-actions">
            <div className="library-quick-search-wrapper">
              <Search size={15} className="library-search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="library-search-input"
              />
              <span className="search-kbd-hint">⌘K</span>

              {/* Instant Search Results Dropdown */}
              {searchFocused && searchQuery.trim().length > 0 && (
                <div className="library-search-dropdown">
                  {searchResults.length > 0 ? (
                    searchResults.map((item, idx) => (
                      <div
                        key={idx}
                        className="search-result-item"
                        onMouseDown={() => navigate(item.path)}
                      >
                        <div className="result-text">
                          <span className="result-title">{item.title}</span>
                          <span className="result-section">
                            {item.volume} · {item.section}
                          </span>
                        </div>
                        <ArrowRight size={14} className="result-arrow" />
                      </div>
                    ))
                  ) : (
                    <div className="search-empty-state">
                      No matching documents found.
                    </div>
                  )}
                </div>
              )}
            </div>

            <nav className="library-external-links">
              <a href="https://blogs.lupyd.com" target="_blank" rel="noopener noreferrer" className="library-ext-link">
                <span>Blogs</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
              <a href="https://about.lupyd.com" target="_blank" rel="noopener noreferrer" className="library-ext-link">
                <span>About</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
              <a href="https://billing.lupyd.com" target="_blank" rel="noopener noreferrer" className="library-ext-link">
                <span>Pricing</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="library-hero">
        <div className="library-hero-badge">
          <BookOpen size={14} />
          <span>Lupyd Documentation Library</span>
        </div>
        <h1 className="library-hero-title">
          Six Volumes. One Secure Platform.
        </h1>
        <p className="library-hero-subtitle">
          Select a book from the shelf to browse that section’s documentation, platform guides, and developer APIs.
        </p>
      </section>

      {/* THE SIX-BOOK BOOKSHELF */}
      <main className="library-shelf-container">
        <Bookshelf />
      </main>



      {/* Footer */}
      <div className="library-footer-wrap">
        <Footer />
      </div>
    </div>
  );
};
