import { Routes, Route, useParams } from 'react-router-dom';
import { BookshelfLanding } from './pages/BookshelfLanding';
import { DocLayout } from './components/DocLayout';
import { DocSectionPage } from './pages/DocSectionPage';
import { DocTopicContent } from './components/DocTopicContent';

// Helper component to resolve subtopic from URL params
function SubtopicParamRoute({ sectionId }: { sectionId: string }) {
  const { subtopicId } = useParams<{ subtopicId: string }>();
  return <DocTopicContent sectionId={sectionId} subtopicId={subtopicId || ''} />;
}

export function AppContent() {
  return (
    <Routes>
      {/* 1. Root Landing Page: The Six-Book Bookshelf Library */}
      <Route path="/" element={<BookshelfLanding />} />

      {/* 2. Modern SaaS Documentation Sections & Subtopics */}
      <Route element={<DocLayout />}>
        {/* Section 1: INTRODUCTION */}
        <Route path="intro" element={<DocSectionPage sectionId="intro" />} />
        <Route path="intro/:subtopicId" element={<SubtopicParamRoute sectionId="intro" />} />

        {/* Section 2: GET STARTED */}
        <Route path="get-started" element={<DocSectionPage sectionId="get-started" />} />
        <Route path="get-started/:subtopicId" element={<SubtopicParamRoute sectionId="get-started" />} />

        {/* Section 3: USING LUPYD */}
        <Route path="using-lupyd" element={<DocSectionPage sectionId="using-lupyd" />} />
        <Route path="using-lupyd/:subtopicId" element={<SubtopicParamRoute sectionId="using-lupyd" />} />

        {/* Section 4: GUIDES */}
        <Route path="guides" element={<DocSectionPage sectionId="guides" />} />
        <Route path="guides/:subtopicId" element={<SubtopicParamRoute sectionId="guides" />} />

        {/* Section 5: BUILD WITH LUPYD */}
        <Route path="build" element={<DocSectionPage sectionId="build" />} />
        <Route path="build/:subtopicId" element={<SubtopicParamRoute sectionId="build" />} />

        {/* Section 6: HELP & SUPPORT */}
        <Route path="help" element={<DocSectionPage sectionId="help" />} />
        <Route path="help/:subtopicId" element={<SubtopicParamRoute sectionId="help" />} />

        {/* 3. Backward Compatibility Routes for Existing Permalinks */}
        <Route path="installation" element={<DocTopicContent sectionId="get-started" subtopicId="installation" />} />
        <Route path="guide" element={<DocTopicContent sectionId="build" subtopicId="developer-docs" />} />
        <Route path="features" element={<DocTopicContent sectionId="using-lupyd" subtopicId="core-features" />} />
        <Route path="start-fast" element={<DocTopicContent sectionId="guides" subtopicId="advanced-guides" />} />
        <Route path="cases" element={<DocTopicContent sectionId="guides" subtopicId="use-cases" />} />
        <Route path="settings" element={<DocTopicContent sectionId="using-lupyd" subtopicId="settings" />} />
        <Route path="groups" element={<DocTopicContent sectionId="using-lupyd" subtopicId="group-chats" />} />
        <Route path="firefly" element={<DocTopicContent sectionId="build" subtopicId="firefly-endpoints" />} />
        <Route path="server-api" element={<DocTopicContent sectionId="build" subtopicId="social-graph-api" />} />
        <Route path="docs-support" element={<DocTopicContent sectionId="help" subtopicId="faq" />} />
      </Route>
    </Routes>
  );
}
