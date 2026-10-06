import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, Library, ExternalLink } from 'lucide-react';
import { DocSidebar } from './DocSidebar';
import { Footer } from './Footer';
import { DOC_SECTIONS } from '../data/docsData';
import { seoData } from '../seoData';

export const DocLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Dynamic SEO handler
  useEffect(() => {
    const path = location.pathname.endsWith('/') && location.pathname !== '/'
      ? location.pathname.slice(0, -1)
      : location.pathname;
    const data = seoData[path];

    if (data) {
      document.title = data.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.description);
    } else {
      // Find current section/subtopic title
      let activeTitle = 'Documentation';
      DOC_SECTIONS.forEach(sec => {
        if (location.pathname === sec.path) {
          activeTitle = `${sec.title} - Lupyd Documentation`;
        }
        sec.subtopics.forEach(sub => {
          if (location.pathname === sub.path) {
            activeTitle = `${sub.title} - ${sec.title} - Lupyd Documentation`;
          }
        });
      });
      document.title = activeTitle;
    }
  }, [location.pathname]);

  // Find breadcrumb elements
  const currentSection = DOC_SECTIONS.find(sec => location.pathname.startsWith(sec.path));
  const currentSubtopic = currentSection?.subtopics.find(sub => sub.path === location.pathname);

  return (
    <div className="doc-layout-root">
      {/* Mobile Top Header */}
      <div className="doc-mobile-header">
        <button
          className="doc-mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Sidebar"
        >
          <Menu size={22} />
        </button>

        <Link to="/" className="doc-mobile-brand">
          <img src="/favicon.svg" alt="Lupyd" />
          <span>Lupyd Docs</span>
        </Link>

        <Link to="/" className="doc-mobile-shelf-btn" title="Back to Bookshelf">
          <Library size={18} />
        </Link>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="doc-mobile-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Left Sidebar */}
      <DocSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area Wrapper */}
      <div className="doc-layout-wrapper">
        {/* Desktop Sticky Header */}
        <header className="doc-desktop-header">
          <div className="doc-desktop-header-inner">
            {/* Breadcrumb Trail */}
            <nav className="doc-breadcrumbs" aria-label="Breadcrumbs">
              <Link to="/" className="breadcrumb-item breadcrumb-home">
                <Library size={14} style={{ marginRight: '5px' }} />
                <span>Bookshelf</span>
              </Link>

              {currentSection && (
                <>
                  <span className="breadcrumb-separator">/</span>
                  <Link to={currentSection.path} className="breadcrumb-item">
                    {currentSection.title}
                  </Link>
                </>
              )}

              {currentSubtopic && (
                <>
                  <span className="breadcrumb-separator">/</span>
                  <span className="breadcrumb-item breadcrumb-active">
                    {currentSubtopic.title}
                  </span>
                </>
              )}
            </nav>

            {/* Header Right Actions */}
            <div className="doc-header-actions">
              <Link to="/" className="doc-bookshelf-switch-btn">
                <Library size={14} />
                <span>Bookshelf Library</span>
              </Link>
              <a
                href="https://blogs.lupyd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="doc-header-link"
              >
                <span>Blogs</span>
                <ExternalLink size={11} style={{ opacity: 0.6 }} />
              </a>
              <a
                href="https://about.lupyd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="doc-header-link"
              >
                <span>About</span>
                <ExternalLink size={11} style={{ opacity: 0.6 }} />
              </a>
              <a
                href="https://billing.lupyd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="doc-header-link"
              >
                <span>Pricing</span>
                <ExternalLink size={11} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="doc-main-content">
          <div key={location.pathname} className="doc-content-fade">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <div className="doc-footer-wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
};
