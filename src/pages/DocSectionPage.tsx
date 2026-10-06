import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { DOC_SECTIONS, getSectionById } from '../data/docsData';

interface DocSectionPageProps {
  sectionId?: string;
}

export const DocSectionPage: React.FC<DocSectionPageProps> = ({ sectionId: propSectionId }) => {
  const params = useParams();
  const targetId = propSectionId || params.sectionId || 'intro';
  const section = getSectionById(targetId) || DOC_SECTIONS[0];

  return (
    <div className="section-overview-page">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-volume-pill">
          <BookOpen size={14} />
          <span>{section.volume} · DOCUMENTATION SECTION</span>
        </div>
        <h1 className="section-page-title">{section.title}</h1>
        <p className="section-page-description">{section.description}</p>
      </div>

      <hr className="section-rule" />

      {/* Subtopics Index Section */}
      <div className="section-subtopics-wrapper">
        <div className="subtopics-list-header">
          <h2 className="subtopics-heading">Section Contents</h2>
          <span className="subtopics-count">{section.subtopics.length} Subtopics</span>
        </div>

        <div className="subtopics-cards-grid">
          {section.subtopics.map((sub, idx) => (
            <Link key={sub.id} to={sub.path} className="subtopic-doc-card">
              <div className="subtopic-card-top">
                <span className="subtopic-number">0{idx + 1}</span>
                <span className="subtopic-badge">Read Document</span>
              </div>
              <h3 className="subtopic-card-title">{sub.title}</h3>
              <p className="subtopic-card-desc">{sub.description}</p>
              <div className="subtopic-card-arrow">
                <span>View document</span>
                <ArrowRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Next Section Recommendation */}
      <div className="section-footer-callout">
        <div className="footer-callout-icon">
          <Layers size={22} />
        </div>
        <div className="footer-callout-content">
          <h4>Looking for another documentation volume?</h4>
          <p>You can return to the bookshelf anytime or use the sidebar navigation on the left to switch between sections.</p>
        </div>
        <Link to="/" className="footer-callout-btn">
          View Bookshelf
        </Link>
      </div>
    </div>
  );
};
