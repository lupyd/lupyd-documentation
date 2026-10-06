import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { DOC_SECTIONS, DocSection } from '../data/docsData';

// Minimalist line-art glyphs for each volume to provide subtle visual distinction
function BookArtGlyph({ sectionId }: { sectionId: string }) {
  switch (sectionId) {
    case 'intro':
      // Concentric circles & orbital line art
      return (
        <svg viewBox="0 0 100 80" className="book-art-svg" aria-hidden="true">
          <circle cx="50" cy="40" r="28" fill="none" stroke="#111" strokeWidth="1.5" />
          <circle cx="50" cy="40" r="16" fill="none" stroke="#111" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="50" cy="40" r="5" fill="#111" />
          <line x1="12" y1="40" x2="88" y2="40" stroke="#111" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="50" y1="6" x2="50" y2="74" stroke="#111" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      );
    case 'get-started':
      // Ascending geometric speed chevrons / launch motif
      return (
        <svg viewBox="0 0 100 80" className="book-art-svg" aria-hidden="true">
          <polyline points="20,55 50,22 80,55" fill="none" stroke="#111" strokeWidth="1.75" />
          <polyline points="28,62 50,38 72,62" fill="none" stroke="#111" strokeWidth="1.25" strokeDasharray="3 2" />
          <circle cx="50" cy="18" r="3" fill="#111" />
          <line x1="50" y1="26" x2="50" y2="68" stroke="#111" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="25" y1="70" x2="75" y2="70" stroke="#111" strokeWidth="1" />
        </svg>
      );
    case 'using-lupyd':
      // Network nodes and interconnected grid lines
      return (
        <svg viewBox="0 0 100 80" className="book-art-svg" aria-hidden="true">
          <rect x="24" y="20" width="18" height="18" fill="none" stroke="#111" strokeWidth="1.5" />
          <rect x="58" y="20" width="18" height="18" fill="none" stroke="#111" strokeWidth="1.5" />
          <rect x="41" y="46" width="18" height="18" fill="none" stroke="#111" strokeWidth="1.5" />
          <line x1="33" y1="38" x2="41" y2="46" stroke="#111" strokeWidth="1.25" />
          <line x1="67" y1="38" x2="59" y2="46" stroke="#111" strokeWidth="1.25" />
          <line x1="42" y1="29" x2="58" y2="29" stroke="#111" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="55" r="2.5" fill="#111" />
        </svg>
      );
    case 'guides':
      // Minimalist compass & navigation quadrant
      return (
        <svg viewBox="0 0 100 80" className="book-art-svg" aria-hidden="true">
          <polygon points="50,15 57,40 50,37 43,40" fill="#111" />
          <polygon points="50,65 57,40 50,43 43,40" fill="none" stroke="#111" strokeWidth="1" />
          <circle cx="50" cy="40" r="26" fill="none" stroke="#111" strokeWidth="1.5" />
          <circle cx="50" cy="40" r="22" fill="none" stroke="#111" strokeWidth="0.75" strokeDasharray="1 3" />
          <line x1="16" y1="40" x2="84" y2="40" stroke="#111" strokeWidth="0.75" />
          <line x1="50" y1="8" x2="50" y2="72" stroke="#111" strokeWidth="0.75" />
        </svg>
      );
    case 'build':
      // Monospace code syntax `{ / }` & protocol terminal lines
      return (
        <svg viewBox="0 0 100 80" className="book-art-svg" aria-hidden="true">
          <text x="24" y="47" fontFamily="monospace" fontSize="22" fontWeight="700" fill="#111">&#123;</text>
          <text x="64" y="47" fontFamily="monospace" fontSize="22" fontWeight="700" fill="#111">&#125;</text>
          <line x1="43" y1="52" x2="57" y2="28" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <rect x="30" y="60" width="40" height="2" fill="#111" />
          <line x1="38" y1="18" x2="62" y2="18" stroke="#111" strokeWidth="1" strokeDasharray="2 3" />
        </svg>
      );
    case 'help':
      // Geometric shield & support emblem
      return (
        <svg viewBox="0 0 100 80" className="book-art-svg" aria-hidden="true">
          <path d="M50 16 L76 26 V44 C76 58 50 69 50 69 C50 69 24 58 24 44 V26 Z" fill="none" stroke="#111" strokeWidth="1.5" />
          <path d="M50 25 L68 32 V43 C68 52 50 60 50 60 C50 60 32 52 32 43 V32 Z" fill="none" stroke="#111" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="50" cy="40" r="4" fill="#111" />
          <line x1="50" y1="44" x2="50" y2="52" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

interface BookProps {
  section: DocSection;
  index: number;
}

const BookCard: React.FC<BookProps> = ({ section, index }) => {
  return (
    <div className="book-slot">
      <Link
        to={section.path}
        className="shelf-book"
        aria-label={`${section.title} - ${section.volume}`}
        id={`bookshelf-book-${section.id}`}
      >
        {/* Book Left Spine Crease & Stitch Line Art */}
        <div className="book-spine-line" aria-hidden="true">
          <div className="spine-stitch" />
          <div className="spine-stitch" />
          <div className="spine-stitch" />
          <div className="spine-stitch" />
        </div>

        {/* Paper leaves / top edge page lines simulation */}
        <div className="book-page-edges" aria-hidden="true" />

        {/* Book Cover Face */}
        <div className="book-cover">
          {/* Header area of cover: Lupyd logo + Volume pill */}
          <div className="book-header">
            <div className="book-brand">
              <img src="/favicon.svg" alt="Lupyd" className="book-lupyd-logo" />
              <span className="book-brand-name">LUPYD</span>
            </div>
            <span className="book-volume-badge">{section.volume}</span>
          </div>

          {/* Minimal Line Art Glyph */}
          <div className="book-glyph-container">
            <BookArtGlyph sectionId={section.id} />
          </div>

          {/* Main Book Title: ONLY the section title */}
          <div className="book-title-container">
            <h2 className="book-title">{section.title}</h2>
            <div className="book-title-rule" />
          </div>

          {/* Bottom metadata & hover prompt */}
          <div className="book-footer">
            <span className="book-category-tag">SECTION 0{index + 1}</span>
            <span className="book-action-cue">
              <span>Open</span>
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </Link>

      {/* Book Contact Shadow directly under book on the shelf */}
      <div className="book-shelf-shadow" aria-hidden="true" />
    </div>
  );
};

export const Bookshelf: React.FC = () => {
  const topRow = DOC_SECTIONS.slice(0, 3);
  const bottomRow = DOC_SECTIONS.slice(3, 6);

  return (
    <section className="bookshelf-viewport" aria-label="Lupyd Documentation Bookshelf">
      <div className="bookshelf-frame">
        {/* TOP ROW: [ INTRODUCTION ] [ GET STARTED ] [ USING LUPYD ] */}
        <div className="shelf-tier">
          <div className="shelf-books-row">
            {topRow.map((section, idx) => (
              <BookCard key={section.id} section={section} index={idx} />
            ))}
          </div>

          {/* Minimalist Line-Art Shelf Plank 1 */}
          <div className="shelf-plank" aria-hidden="true">
            <div className="shelf-top-surface" />
            <div className="shelf-front-face">
              <div className="shelf-accent-line" />
            </div>
            <div className="shelf-drop-shadow" />
            {/* Shelf Support Line Brackets */}
            <div className="shelf-bracket shelf-bracket-left" />
            <div className="shelf-bracket shelf-bracket-right" />
          </div>
        </div>

        {/* BOTTOM ROW: [ GUIDES ] [ BUILD WITH LUPYD ] [ HELP & SUPPORT ] */}
        <div className="shelf-tier">
          <div className="shelf-books-row">
            {bottomRow.map((section, idx) => (
              <BookCard key={section.id} section={section} index={idx + 3} />
            ))}
          </div>

          {/* Minimalist Line-Art Shelf Plank 2 */}
          <div className="shelf-plank" aria-hidden="true">
            <div className="shelf-top-surface" />
            <div className="shelf-front-face">
              <div className="shelf-accent-line" />
            </div>
            <div className="shelf-drop-shadow" />
            {/* Shelf Support Line Brackets */}
            <div className="shelf-bracket shelf-bracket-left" />
            <div className="shelf-bracket shelf-bracket-right" />
          </div>
        </div>
      </div>
    </section>
  );
};
