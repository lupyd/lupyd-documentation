export interface PageSeo {
  title: string;
  description: string;
  schemas: Record<string, unknown>[];
}

export const seoData: Record<string, PageSeo> = {
  "/": {
    title: "Introduction to Lupyd - Privacy-First Digital Platform",
    description: "Welcome to Lupyd, a secure digital platform combining communications, social interaction, and business connectivity under zero-trust encryption.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Introduction to Lupyd",
        "description": "Lupyd is a secure platform that combines social interaction, content creation, and business connectivity with a strong focus on privacy and encryption.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          }
        ]
      }
    ]
  },
  "/installation": {
    title: "Install Lupyd on Mobile & Desktop - Lupyd Developer Docs",
    description: "Learn how to install Lupyd on Windows, Linux, Android, and iOS devices with our unified onboarding experience. Get started.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Install Lupyd",
        "description": "Step-by-step instructions to install and configure Lupyd across all devices.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Open App Store",
            "text": "Open your device's app store."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Search for Lupyd",
            "text": "Search for “Lupyd”."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Tap Install",
            "text": "Tap Install."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Launch Lupyd",
            "text": "Launch the application."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Sign In",
            "text": "Create your account or sign in."
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Installation",
            "item": "https://docs.lupyd.com/installation"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Getting Started",
        "description": "Lupyd is designed to be instantly accessible across all major platforms, including Windows, Linux, Android, and Apple devices with a unified onboarding experience.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/installation"
      }
    ]
  },
  "/guide": {
    title: "Developer Guides & Core Modules - Lupyd Docs",
    description: "Access comprehensive developer guides for the Lupyd ecosystem. Learn about messaging, group setups, creator tools, and troubleshooting.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Developer Docs Overview",
        "description": "Welcome to the Lupyd ecosystem. Below you will find comprehensive guides to help you maximize your social media and business experience securely.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/guide"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Developer Docs",
            "item": "https://docs.lupyd.com/guide"
          }
        ]
      }
    ]
  },
  "/features": {
    title: "Lupyd Core Features - Privacy, Messaging & Monetization",
    description: "Discover Lupyd's core features including group chats, advanced monetization for creators, zero-trust security, and cross-platform synchronization.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Lupyd Core Features",
        "description": "Explore Lupyd's core features including group chats, advanced monetization for creators, zero-trust security, and cross-platform synchronization.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/features"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Core Features",
            "item": "https://docs.lupyd.com/features"
          }
        ]
      }
    ]
  },
  "/start-fast": {
    title: "Start Fast & Go Viral Guide - Lupyd Documentation",
    description: "Get growth hacks and step-by-step strategies to launch your business profile, post with purpose, build an audience, and go viral on Lupyd.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build & Launch Your Lupyd Business Profile Fast",
        "description": "A step-by-step launch checklist to get your business profile active and discovered on Lupyd.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Quick Start",
            "text": "Create your business profile with essential details like name, category, and contact info. Your profile becomes your digital storefront on Lupyd."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Set Up Your Identity",
            "text": "Add a clear profile photo, write a short bio, and choose the right category. A strong identity helps users understand what you offer instantly."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Publish Your First Content",
            "text": "Share your first post to introduce your business, product, or service. Keep it simple, clear, and visually engaging."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Customize Your Presence",
            "text": "Adjust your profile layout, visuals, and branding to match your style. Consistent design builds trust and recognition."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Create Your Offer",
            "text": "Highlight what you provide — products, services, or experiences. Make it easy for users to understand and take action."
          },
          {
            "@type": "HowToStep",
            "position": 6,
            "name": "Go Live",
            "text": "Once everything is set, your profile is ready to be discovered. Users can now explore, engage, and connect with your business."
          },
          {
            "@type": "HowToStep",
            "position": 7,
            "name": "Connect & Expand",
            "text": "Add external links and contact options so users can reach you easily beyond Lupyd."
          },
          {
            "@type": "HowToStep",
            "position": 8,
            "name": "Track Early Activity",
            "text": "Monitor how people interact with your profile and content. Use insights to improve your next steps."
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Start Fast & Go Viral Overview",
        "description": "Start building your presence on Lupyd in minutes. Set up, publish, and go live without friction while exploring highly effective growth hacks.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/start-fast"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Start Fast",
            "item": "https://docs.lupyd.com/start-fast"
          }
        ]
      }
    ]
  },
  "/cases": {
    title: "Lupyd Use Cases - Secure B2B, B2C & Creator Solutions",
    description: "Explore real-world use cases for Lupyd. Learn how businesses, content creators, and privacy-conscious users leverage secure communication pipelines.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Lupyd Use Cases",
        "description": "Explore real-world use cases for Lupyd. Learn how businesses, content creators, and privacy-conscious users leverage secure communication pipelines.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/cases"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Use Cases",
            "item": "https://docs.lupyd.com/cases"
          }
        ]
      }
    ]
  },
  "/settings": {
    title: "Lupyd Settings & Customization Guide - Docs",
    description: "Learn how to configure your Lupyd account, manage advanced privacy settings, manage secure devices, and customize client preferences.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Settings & Security Configuration",
        "description": "Learn how to configure your Lupyd account, manage advanced privacy settings, manage secure devices, and customize client preferences.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/settings"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Settings",
            "item": "https://docs.lupyd.com/settings"
          }
        ]
      }
    ]
  },
  "/guides": {
    title: "Lupyd Platform Guides - Step-by-Step Tutorials",
    description: "Read comprehensive tutorials and how-to guides for using Lupyd across desktop and mobile platforms with ease. Read now.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Lupyd Platform Guides",
        "description": "Read comprehensive tutorials and how-to guides for using Lupyd across desktop and mobile platforms with ease.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/guides"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Platform Guides",
            "item": "https://docs.lupyd.com/guides"
          }
        ]
      }
    ]
  },
  "/groups": {
    title: "E2EE Group Chats & Administration - Lupyd Docs",
    description: "Understand how to configure and administer end-to-end encrypted group chats, manage user privileges, and establish secure communications.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Group Chats Dashboard & Setup",
        "description": "Understand how to configure and administer end-to-end encrypted group chats, manage user privileges, and establish secure communications.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/groups"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Group Chats",
            "item": "https://docs.lupyd.com/groups"
          }
        ]
      }
    ]
  },
  "/firefly": {
    title: "Firefly API Reference - Detailed Endpoint Guides",
    description: "Explore the Firefly API reference with detailed endpoints for authentication, key management, group actions, and WebSocket connections. Read the docs.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Firefly Detailed API Reference",
        "description": "Firefly messaging endpoints using Protocol Buffers (.proto) built using Hyper in Rust.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/firefly"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Firefly API",
            "item": "https://docs.lupyd.com/firefly"
          }
        ]
      }
    ]
  },
  "/server-api": {
    title: "Social Graph Rust Server API Reference - Lupyd Docs",
    description: "Read the backend API documentation for Lupyd's Social Graph server built in Rust. Explore endpoints for post feeds, votes, and follows.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Social Graph Rust Server API",
        "description": "Read the backend API documentation for Lupyd's Social Graph server built in Rust. Explore endpoints for post feeds, votes, and follows.",
        "inLanguage": "en",
        "mainEntityOfPage": "https://docs.lupyd.com/server-api"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Social Graph API",
            "item": "https://docs.lupyd.com/server-api"
          }
        ]
      }
    ]
  },
  "/docs-support": {
    title: "Lupyd Docs & Support - Frequently Asked Questions",
    description: "Find answers to frequently asked questions about Lupyd account setup, messaging security, privacy settings, and feature configurations. Get support now.",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Lupyd?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lupyd is a secure platform that combines social interaction, content creation, and business connectivity with a strong focus on privacy and encryption."
            }
          },
          {
            "@type": "Question",
            "name": "Is Lupyd free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lupyd offers free access with optional premium features depending on usage."
            }
          },
          {
            "@type": "Question",
            "name": "How do I create an account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can sign up globally via email, phone, or secure SSO tokens directly on Lupyd's registration page or mobile application."
            }
          },
          {
            "@type": "Question",
            "name": "Does Lupyd sell user data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Lupyd does not sell or share user data with third parties."
            }
          },
          {
            "@type": "Question",
            "name": "Are my messages secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All communications are protected with end-to-end encryption protocols to ensure your privacy."
            }
          },
          {
            "@type": "Question",
            "name": "Can I retrieve deleted messages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, deleted messages are completely wiped from our encrypted servers permanently."
            }
          },
          {
            "@type": "Question",
            "name": "Who can see my profile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You have complete control over your visibility settings under Privacy Controls. It ranges from public discovery to strictly invite-only networks."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Lupyd for business purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Lupyd supports both individual users and businesses (B2B & B2C)."
            }
          },
          {
            "@type": "Question",
            "name": "Is Lupyd available on all devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Lupyd works seamlessly across mobile (iOS/Android) and desktop platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Does Lupyd compress my uploaded media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lupyd utilizes intelligent compression to guarantee fast delivery speeds but provides high-fidelity options within Chat Settings for professional creators."
            }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://docs.lupyd.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Docs & Support",
            "item": "https://docs.lupyd.com/docs-support"
          }
        ]
      }
    ]
  }
};
