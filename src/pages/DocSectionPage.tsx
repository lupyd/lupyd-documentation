import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { DOC_SECTIONS, getSectionById } from '../data/docsData';

interface DocSectionPageProps {
  sectionId?: string;
}

export const DocSectionPage: React.FC<DocSectionPageProps> = ({ sectionId: propSectionId }) => {
  const params = useParams();
  const targetId = propSectionId || params.sectionId || 'intro';
  const section = getSectionById(targetId) || DOC_SECTIONS[0];
  const firstSubtopicPath = section?.subtopics[0]?.path || '/intro/introduction';

  return <Navigate to={firstSubtopicPath} replace />;
};
