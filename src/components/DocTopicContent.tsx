import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowLeft, CheckCircle2, 
  Terminal, Key, Cpu
} from 'lucide-react';
import { DOC_SECTIONS } from '../data/docsData';
import { Home } from '../pages/Home';
import { Installation } from '../pages/Installation';
import { Features } from '../pages/Features';
import { GroupChats } from '../pages/GroupChats';
import { Settings } from '../pages/Settings';
import { PlatformGuides } from '../pages/PlatformGuides';
import { UseCases } from '../pages/UseCases';
import { FireflyApi } from '../pages/FireflyApi';
import { LupydServerApi } from '../pages/LupydServerApi';
import { DocsSupport } from '../pages/DocsSupport';

interface DocTopicContentProps {
  sectionId: string;
  subtopicId: string;
}

export const DocTopicContent: React.FC<DocTopicContentProps> = ({ sectionId, subtopicId }) => {
  // Find current subtopic and its section
  const section = DOC_SECTIONS.find(s => s.id === sectionId);
  const subtopicIndex = section?.subtopics.findIndex(sub => sub.id === subtopicId) ?? -1;
  const subtopic = section?.subtopics[subtopicIndex];

  // Calculate Previous and Next subtopics for sequential reading
  const prevSubtopic = subtopicIndex > 0 ? section?.subtopics[subtopicIndex - 1] : null;
  const nextSubtopic = subtopicIndex >= 0 && subtopicIndex < (section?.subtopics.length ?? 0) - 1 
    ? section?.subtopics[subtopicIndex + 1] 
    : null;

  // Render subtopic-specific content
  const renderTopicBody = () => {
    // 1. INTRODUCTION
    if (sectionId === 'intro') {
      if (subtopicId === 'introduction') {
        return <Home />;
      }

      if (subtopicId === 'what-is-lupyd') {
        return (
          <div style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '2rem', color: '#000000' }}>
              What is Lupyd?
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                <strong style={{ color: '#000000', fontWeight: 600 }}>Lupyd</strong> is a unified digital platform designed to serve both individuals and businesses through a seamless combination of communication, content, and cloud-driven services. It bridges the gap between social interaction and professional engagement, enabling users to create, connect, and collaborate within a secure environment.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                With a focus on simplicity and performance, Lupyd delivers an intuitive user experience that feels natural, responsive, and accessible to all. Whether for communication, entertainment, or business growth, the platform is designed to adapt to modern digital needs without sacrificing security.
              </p>
            </div>
          </div>
        );
      }

      if (subtopicId === 'why-lupyd') {
        return (
          <div style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '2rem', color: '#000000' }}>
              Why Lupyd?
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                Unlike traditional platforms that rely on user data monetization, Lupyd is built on a different philosophy—prioritizing user control, transparency, and ethical data practices. Personal information is never sold, and content integrity is maintained without compromise.
              </p>
              <div style={{
                backgroundColor: '#fafafa',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                padding: '1.5rem',
                marginTop: '0.5rem'
              }}>
                <p style={{ fontSize: '1.1rem', color: '#000000', lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
                  Lupyd is not just another social platform—it is a secure digital infrastructure where privacy, innovation, and user empowerment come together to shape the future of online interaction.
                </p>
              </div>
            </div>
          </div>
        );
      }

      if (subtopicId === 'platform-overview') {
        return (
          <div style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '2rem', color: '#000000' }}>
              Platform Overview
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                The platform empowers users to discover and share content while engaging with emerging voices, trends, and communities shaped by the evolving Gen Z digital culture. At the same time, businesses gain access to a dynamic ecosystem where they can showcase their services, connect with audiences, and grow organically.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                With a focus on simplicity and performance, Lupyd delivers an intuitive user experience that feels natural, responsive, and accessible to all. Whether for communication, entertainment, or business growth, the platform is designed to adapt to modern digital needs without sacrificing security.
              </p>
            </div>
          </div>
        );
      }

      if (subtopicId === 'privacy-security') {
        return (
          <div style={{ maxWidth: '850px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '2rem', color: '#000000' }}>
              Privacy & Security
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{
                borderLeft: '4px solid #eaeaea',
                paddingLeft: '1.25rem',
                margin: '0.75rem 0'
              }}>
                <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                  At its core, Lupyd redefines social media by placing privacy and trust at the forefront. Every interaction is built with strong encryption principles, ensuring that user data remains protected and conversations stay strictly between intended participants.
                </p>
              </div>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                Unlike traditional platforms that rely on user data monetization, Lupyd is built on a different philosophy—prioritizing user control, transparency, and ethical data practices. Personal information is never sold, and content integrity is maintained without compromise.
              </p>
            </div>
          </div>
        );
      }
    }

    // 2. GET STARTED
    if (sectionId === 'get-started') {
      if (subtopicId === 'installation') {
        return <Installation />;
      }
      if (subtopicId === 'getting-started') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Getting Started with Lupyd</h1>
            <p className="doc-lead-paragraph">
              Welcome! Getting set up on Lupyd takes less than two minutes. Follow this guide to prepare your environment and launch your first account.
            </p>

            <div className="doc-steps-list">
              <div className="doc-step-item">
                <div className="doc-step-num">1</div>
                <div>
                  <h3>Download the Lupyd App</h3>
                  <p>Available on the Apple App Store, Google Play Store, and direct desktop installers.</p>
                  <Link to="/get-started/installation" className="doc-inline-link">View download links →</Link>
                </div>
              </div>
              <div className="doc-step-item">
                <div className="doc-step-num">2</div>
                <div>
                  <h3>Initialize Your Identity</h3>
                  <p>Choose your unique handle, configure two-factor authentication, and verify your account keys.</p>
                  <Link to="/get-started/account-setup" className="doc-inline-link">Learn about account setup →</Link>
                </div>
              </div>
              <div className="doc-step-item">
                <div className="doc-step-num">3</div>
                <div>
                  <h3>Explore Communities & Channels</h3>
                  <p>Discover creator channels, join encrypted groups, or set up your business profile.</p>
                  <Link to="/get-started/quick-start" className="doc-inline-link">Follow the Quick Start roadmap →</Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
      if (subtopicId === 'quick-start') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Quick Start Guide</h1>
            <p className="doc-lead-paragraph">
              Follow this 5-minute checklist to customize your presence and unlock Lupyd’s core tools immediately.
            </p>

            <section className="doc-section-block">
              <h2>Onboarding Checklist</h2>
              <ul className="doc-checklist">
                <li><CheckCircle2 size={18} /> <strong>Set Up Your Profile:</strong> Add a high-resolution avatar and concise bio.</li>
                <li><CheckCircle2 size={18} /> <strong>Publish Your First Post:</strong> Share an update, image, or introductory notice.</li>
                <li><CheckCircle2 size={18} /> <strong>Connect Your Audience:</strong> Add verified social or business URLs to your bio.</li>
                <li><CheckCircle2 size={18} /> <strong>Join or Create a Group:</strong> Start an end-to-end encrypted group chat.</li>
              </ul>
            </section>
          </div>
        );
      }
      if (subtopicId === 'account-setup') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Account Setup & Security</h1>
            <p className="doc-lead-paragraph">
              Learn how to manage your login credentials, enable biometric protection, and back up your recovery keys safely.
            </p>

            <section className="doc-section-block">
              <h2>Security Best Practices</h2>
              <div className="doc-callout">
                <Key size={20} className="doc-callout-icon" />
                <div>
                  <h4>Recovery Keys</h4>
                  <p>Because Lupyd uses zero-trust encryption, we cannot recover your private message keys if you lose access. Always store your recovery phrase securely offline.</p>
                </div>
              </div>
            </section>
          </div>
        );
      }
    }

    // 3. USING LUPYD
    if (sectionId === 'using-lupyd') {
      if (subtopicId === 'core-features') return <Features />;
      if (subtopicId === 'group-chats') return <GroupChats />;
      if (subtopicId === 'settings') return <Settings />;
      if (subtopicId === 'connections') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Connections & Social Graph</h1>
            <p className="doc-lead-paragraph">
              Manage your followers, mutual contacts, and privacy boundaries with Lupyd’s granular relation controls.
            </p>
            <section className="doc-section-block">
              <h2>Managing Relations</h2>
              <p>Lupyd allows you to define distinct connection levels: Public Followers, Mutual Contacts, and Verified Channels.</p>
            </section>
          </div>
        );
      }
      if (subtopicId === 'communication') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Communication Tools</h1>
            <p className="doc-lead-paragraph">
              Explore 1:1 direct messaging, crystal-clear voice calling, and encrypted video conferences with low-latency delivery.
            </p>
          </div>
        );
      }
      if (subtopicId === 'collaboration') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Collaboration & Business Tools</h1>
            <p className="doc-lead-paragraph">
              Leverage team channels, paywalled creator tiers, and direct appointment scheduling to build commercial relationships.
            </p>
          </div>
        );
      }
    }

    // 4. GUIDES
    if (sectionId === 'guides') {
      if (subtopicId === 'platform-guides') return <PlatformGuides />;
      if (subtopicId === 'use-cases') return <UseCases />;
      if (subtopicId === 'business') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Business Guide</h1>
            <p className="doc-lead-paragraph">
              Transform your Lupyd presence into an active digital storefront with verified business tags, direct leads, and catalog displays.
            </p>
          </div>
        );
      }
      if (subtopicId === 'advanced-guides') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Advanced Growth & Scaling Guides</h1>
            <p className="doc-lead-paragraph">
              Master algorithm discovery, scale your community, and leverage organic reach strategies to build an engaged following.
            </p>
          </div>
        );
      }
    }

    // 5. BUILD WITH LUPYD
    if (sectionId === 'build') {
      if (subtopicId === 'firefly-endpoints') return <FireflyApi />;
      if (subtopicId === 'social-graph-api') return <LupydServerApi />;
      if (subtopicId === 'developer-docs') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Developer Documentation</h1>
            <p className="doc-lead-paragraph">
              The Lupyd developer ecosystem provides typed Protobuf schemas, REST endpoints, and WebSocket channels for building custom integrations, bots, and analytics tools.
            </p>

            <div className="doc-api-cards-grid">
              <Link to="/build/firefly-endpoints" className="doc-api-card">
                <Terminal size={24} />
                <h3>Firefly Endpoints</h3>
                <p>Encrypted messaging protocol, device prekey bundles, and group commit management.</p>
                <span className="api-card-link">View Firefly API →</span>
              </Link>
              <Link to="/build/social-graph-api" className="doc-api-card">
                <Cpu size={24} />
                <h3>Social Graph API</h3>
                <p>Rust server endpoints for posts, user profiles, followers, votes, and timeline feeds.</p>
                <span className="api-card-link">View Rust Server API →</span>
              </Link>
            </div>
          </div>
        );
      }
      if (subtopicId === 'firefly') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Firefly Protocol Deep Dive</h1>
            <p className="doc-lead-paragraph">
              Firefly is Lupyd’s native messaging protocol implementing MLS (Messaging Layer Security) RFC 9420 principles for asynchronous group key agreement.
            </p>
          </div>
        );
      }
    }

    // 6. HELP & SUPPORT
    if (sectionId === 'help') {
      if (subtopicId === 'faq') return <DocsSupport />;
      if (subtopicId === 'troubleshooting') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">System Troubleshooting</h1>
            <p className="doc-lead-paragraph">
              Diagnostics and step-by-step solutions for login discrepancies, notification interruptions, and sync errors.
            </p>
          </div>
        );
      }
      if (subtopicId === 'common-issues') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Common Issues & Resolutions</h1>
            <p className="doc-lead-paragraph">
              Quick answers for device key mismatches, media upload size limits, and password recovery procedures.
            </p>
          </div>
        );
      }
      if (subtopicId === 'contact-support') {
        return (
          <div className="doc-article">
            <h1 className="doc-article-title">Contact Support</h1>
            <p className="doc-lead-paragraph">
              Our 24/7 technical team is available to assist enterprise partners and individual users with account safety, bug reports, and integrations.
            </p>
          </div>
        );
      }
    }

    // Fallback default article
    return (
      <div className="doc-article">
        <h1 className="doc-article-title">{subtopic?.title || 'Documentation Topic'}</h1>
        <p className="doc-lead-paragraph">{subtopic?.description || 'Documentation topic overview.'}</p>
      </div>
    );
  };

  return (
    <div className="doc-topic-container">
      {/* Topic Content */}
      {renderTopicBody()}

      {/* Sequential Next / Previous Navigation Bar */}
      <hr className="doc-bottom-divider" />
      <div className="doc-pagination-nav">
        {prevSubtopic ? (
          <Link to={prevSubtopic.path} className="pagination-link pagination-prev">
            <ArrowLeft size={16} className="pagination-icon" />
            <div className="pagination-text">
              <span className="pagination-direction">Previous</span>
              <span className="pagination-title">{prevSubtopic.title}</span>
            </div>
          </Link>
        ) : (
          <div className="pagination-placeholder" />
        )}

        {nextSubtopic ? (
          <Link to={nextSubtopic.path} className="pagination-link pagination-next">
            <div className="pagination-text">
              <span className="pagination-direction">Next</span>
              <span className="pagination-title">{nextSubtopic.title}</span>
            </div>
            <ArrowRight size={16} className="pagination-icon" />
          </Link>
        ) : (
          <div className="pagination-placeholder" />
        )}
      </div>
    </div>
  );
};
