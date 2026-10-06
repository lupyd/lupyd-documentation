export interface SubTopic {
  id: string;
  title: string;
  path: string;
  description: string;
}

export interface DocSection {
  id: string;
  title: string;
  volume: string;
  path: string;
  description: string;
  iconName: string;
  subtopics: SubTopic[];
}

export const DOC_SECTIONS: DocSection[] = [
  {
    id: 'intro',
    title: 'INTRODUCTION',
    volume: 'VOL. 01',
    path: '/intro',
    description: 'Discover the foundations of Lupyd, our privacy philosophy, and unified ecosystem architecture.',
    iconName: 'Sparkles',
    subtopics: [
      {
        id: 'introduction',
        title: 'Introduction',
        path: '/intro/introduction',
        description: 'Welcome to Lupyd — a secure digital infrastructure unifying communications, content, and cloud services.'
      },
      {
        id: 'what-is-lupyd',
        title: 'What is Lupyd?',
        path: '/intro/what-is-lupyd',
        description: 'Understand Lupyd’s dual role as a high-trust social platform and enterprise collaboration engine.'
      },
      {
        id: 'why-lupyd',
        title: 'Why Lupyd?',
        path: '/intro/why-lupyd',
        description: 'Explore our ethical stance against data monetization and how we protect digital expression.'
      },
      {
        id: 'platform-overview',
        title: 'Platform Overview',
        path: '/intro/platform-overview',
        description: 'A structural overview of the Lupyd client-server topology, social graph, and relay network.'
      },
      {
        id: 'privacy-security',
        title: 'Privacy & Security',
        path: '/intro/privacy-security',
        description: 'Zero-trust architecture, multi-party computation, and our cryptographic guarantees.'
      }
    ]
  },
  {
    id: 'get-started',
    title: 'GET STARTED',
    volume: 'VOL. 02',
    path: '/get-started',
    description: 'Step-by-step onboarding, client installation across platforms, and first-time account setup.',
    iconName: 'Rocket',
    subtopics: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        path: '/get-started/getting-started',
        description: 'Everything you need to kick off your Lupyd journey across mobile and desktop devices.'
      },
      {
        id: 'installation',
        title: 'Installation',
        path: '/get-started/installation',
        description: 'Official download links and installation instructions for Android, iOS, Windows, macOS, and Linux.'
      },
      {
        id: 'quick-start',
        title: 'Quick Start',
        path: '/get-started/quick-start',
        description: 'Follow our 5-minute setup guide to create your handle, customize your presence, and start connecting.'
      },
      {
        id: 'account-setup',
        title: 'Account Setup',
        path: '/get-started/account-setup',
        description: 'Secure registration, key pair generation, two-factor authentication, and profile verification.'
      }
    ]
  },
  {
    id: 'using-lupyd',
    title: 'USING LUPYD',
    volume: 'VOL. 03',
    path: '/using-lupyd',
    description: 'Explore core messaging tools, encrypted group chats, social connections, and system preferences.',
    iconName: 'Layers',
    subtopics: [
      {
        id: 'core-features',
        title: 'Core Features',
        path: '/using-lupyd/core-features',
        description: 'Detailed walkthrough of Lupyd’s 9 core pillars from secure messaging to cloud storage.'
      },
      {
        id: 'group-chats',
        title: 'Group Chats',
        path: '/using-lupyd/group-chats',
        description: 'Manage encrypted groups, voice/video calls, smart scheduling, and granular administrator privileges.'
      },
      {
        id: 'connections',
        title: 'Connections',
        path: '/using-lupyd/connections',
        description: 'Build your network, manage mutual connections, and maintain complete contact privacy.'
      },
      {
        id: 'communication',
        title: 'Communication',
        path: '/using-lupyd/communication',
        description: 'Direct messaging, media transfer fidelity, push notifications, and live calling features.'
      },
      {
        id: 'collaboration',
        title: 'Collaboration',
        path: '/using-lupyd/collaboration',
        description: 'Team channels, creator paywalls, business interactions, and community moderation tools.'
      },
      {
        id: 'settings',
        title: 'Settings',
        path: '/using-lupyd/settings',
        description: 'Account settings, notification preferences, privacy toggles, themes, and session management.'
      }
    ]
  },
  {
    id: 'guides',
    title: 'GUIDES',
    volume: 'VOL. 04',
    path: '/guides',
    description: 'Comprehensive tutorials for platform navigation, creator growth, and business operations.',
    iconName: 'Compass',
    subtopics: [
      {
        id: 'platform-guides',
        title: 'Platform Guides',
        path: '/guides/platform-guides',
        description: 'Navigating mobile and desktop environments, sync across devices, and performance optimization.'
      },
      {
        id: 'use-cases',
        title: 'Use Cases',
        path: '/guides/use-cases',
        description: 'Real-world case studies for businesses, creators, freelancers, and community organizers.'
      },
      {
        id: 'business',
        title: 'Business',
        path: '/guides/business',
        description: 'Launch your digital storefront, showcase services, and connect directly with targeted customers.'
      },
      {
        id: 'advanced-guides',
        title: 'Advanced Guides',
        path: '/guides/advanced-guides',
        description: 'Growth strategies, organic reach tactics, content optimization, and avoiding common pitfalls.'
      }
    ]
  },
  {
    id: 'build',
    title: 'BUILD WITH LUPYD',
    volume: 'VOL. 05',
    path: '/build',
    description: 'Developer documentation, native protocol schemas, Firefly relayer, and Rust server APIs.',
    iconName: 'Terminal',
    subtopics: [
      {
        id: 'developer-docs',
        title: 'Developer Docs',
        path: '/build/developer-docs',
        description: 'Overview of the Lupyd developer ecosystem, protobuf contracts, and integration workflows.'
      },
      {
        id: 'firefly',
        title: 'Firefly',
        path: '/build/firefly',
        description: 'Deep-dive into Firefly’s zero-trust MLS messaging protocol and blind relayer architecture.'
      },
      {
        id: 'firefly-endpoints',
        title: 'Firefly Endpoints',
        path: '/build/firefly-endpoints',
        description: 'Complete API reference for auth, PreKey bundles, group commits, and WebSocket subscriptions.'
      },
      {
        id: 'social-graph-api',
        title: 'Social Graph API',
        path: '/build/social-graph-api',
        description: 'Reference for the Lupyd Rust server powering posts, relations, votes, hashtags, and chat keys.'
      }
    ]
  },
  {
    id: 'help',
    title: 'HELP & SUPPORT',
    volume: 'VOL. 06',
    path: '/help',
    description: 'Frequently asked questions, system troubleshooting, common issue resolutions, and live support.',
    iconName: 'HelpCircle',
    subtopics: [
      {
        id: 'faq',
        title: 'FAQ',
        path: '/help/faq',
        description: 'Answers to top questions regarding accounts, encryption, billing, and platform capabilities.'
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        path: '/help/troubleshooting',
        description: 'Quick diagnostics and solutions for connectivity, authentication, and sync hurdles.'
      },
      {
        id: 'common-issues',
        title: 'Common Issues',
        path: '/help/common-issues',
        description: 'Step-by-step resolution guides for device permission conflicts, media limits, and key renewal.'
      },
      {
        id: 'contact-support',
        title: 'Contact Support',
        path: '/help/contact-support',
        description: 'Direct contact channels for dedicated technical support, bug bounties, and enterprise queries.'
      }
    ]
  }
];

// Helper to look up a section by ID or path prefix
export function getSectionById(id: string): DocSection | undefined {
  return DOC_SECTIONS.find(s => s.id === id);
}

export function getSectionByPath(path: string): DocSection | undefined {
  return DOC_SECTIONS.find(s => path.startsWith(s.path));
}

// Flat search index for all sections and subtopics
export const ALL_SEARCH_ITEMS = DOC_SECTIONS.flatMap(section => [
  {
    title: section.title,
    section: section.title,
    path: section.path,
    description: section.description,
    type: 'section' as const,
    volume: section.volume
  },
  ...section.subtopics.map(sub => ({
    title: sub.title,
    section: section.title,
    path: sub.path,
    description: sub.description,
    type: 'subtopic' as const,
    volume: section.volume
  }))
]);
