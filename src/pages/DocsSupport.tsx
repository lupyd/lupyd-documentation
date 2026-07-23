import { RefreshCw, HelpCircle, MessageSquare, Scale, CheckCircle2 } from 'lucide-react';

export function DocsSupport() {
  const faqs = [
    {
      category: "General",
      items: [
        { q: "What is Lupyd?", a: "Lupyd is a secure platform that combines social interaction, content creation, and business connectivity with a strong focus on privacy and encryption." },
        { q: "Is Lupyd free to use?", a: "Lupyd offers free access with optional premium features depending on usage." },
        { q: "How do I create an account?", a: "You can sign up globally via email, phone, or secure SSO tokens directly on Lupyd's registration page or mobile application." }
      ]
    },
    {
      category: "Privacy & Security",
      items: [
        { q: "Does Lupyd sell user data?", a: "No. Lupyd does not sell or share user data with third parties." },
        { q: "Are my messages secure?", a: "Yes. All communications are protected with end-to-end encryption protocols to ensure your privacy." },
        { q: "Can I retrieve deleted messages?", a: "No, deleted messages are completely wiped from our encrypted servers permanently." },
        { q: "Who can see my profile?", a: "You have complete control over your visibility settings under Privacy Controls. It ranges from public discovery to strictly invite-only networks." }
      ]
    },
    {
      category: "Features & Usage",
      items: [
        { q: "Can I use Lupyd for business purposes?", a: "Yes. Lupyd supports both individual users and businesses (B2B & B2C)." },
        { q: "Is Lupyd available on all devices?", a: "Yes. Lupyd works seamlessly across mobile (iOS/Android) and desktop platforms." },
        { q: "Does Lupyd compress my uploaded media?", a: "Lupyd utilizes intelligent compression to guarantee fast delivery speeds but provides high-fidelity options within Chat Settings for professional creators." }
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '850px' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1rem',
          color: '#000000'
        }}>
          Docs & Support
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, margin: 0 }}>
          Everything you need to know about Lupyd's updates, common inquiries, support channels, and legal documentation.
        </p>
      </div>

      {/* 🔄 Changelog */}
      <section>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#000000' }}>
          <RefreshCw size={24} color="#000000" /> Changelog
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#555555', marginBottom: '2rem' }}>
          Stay updated with the latest improvements, features, and fixes.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#000000', marginBottom: '1.25rem' }}>Latest Updates</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#444444', lineHeight: 1.6 }}>
              <li style={{ marginBottom: '0.5rem' }}>Improved messaging performance for faster delivery</li>
              <li style={{ marginBottom: '0.5rem' }}>Enhanced group call stability and quality</li>
              <li style={{ marginBottom: '0.5rem' }}>Updated user interface for a cleaner experience</li>
              <li>Security enhancements for stronger data protection</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '12px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#000000', marginBottom: '1.25rem' }}>Previous Updates</h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#555555', lineHeight: 1.6 }}>
              <li style={{ marginBottom: '0.5rem' }}>Initial release of group chats</li>
              <li style={{ marginBottom: '0.5rem' }}>Added business discovery features</li>
              <li>Introduced cross-platform synchronization</li>
            </ul>
          </div>
        </div>
        
        <p style={{ fontSize: '1.05rem', color: '#000000', fontWeight: 500, backgroundColor: '#f9f9f9', padding: '1.25rem 1.5rem', borderRadius: '8px', borderLeft: '3px solid #000' }}>
          👉 We continuously improve Lupyd to deliver a better and more secure experience.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', margin: '4rem 0' }} />

      {/* ❓ FAQ */}
      <section>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', color: '#000000' }}>
          <HelpCircle size={24} color="#000000" /> Frequently Asked Questions (FAQ)
        </h2>

        {faqs.map((group, idx) => (
          <div key={idx} style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#111111', fontWeight: 600, marginBottom: '1.5rem', borderBottom: '1px solid #eaeaea', paddingBottom: '0.5rem' }}>
              {group.category}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {group.items.map((item, i) => (
                <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#000000', margin: '0 0 0.5rem 0' }}>{item.q}</h4>
                  <p style={{ fontSize: '1.05rem', color: '#555555', margin: 0, lineHeight: 1.6 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', margin: '4rem 0' }} />

      {/* 💬 Support */}
      <section>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#000000' }}>
          <MessageSquare size={24} color="#000000" /> Support
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#555555', marginBottom: '2rem' }}>
          Need help? We’re here to assist you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#000000', marginBottom: '1.25rem' }}>Contact Support</h3>
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#444' }}>
                <CheckCircle2 size={18} color="#000" /> Reach out for technical issues or account help
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#444' }}>
                <CheckCircle2 size={18} color="#000" /> Get assistance with features and usage
              </li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#fafafa', border: '1px solid #eaeaea', borderRadius: '12px', padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#000000', marginBottom: '1.25rem' }}>Help Topics</h3>
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#555' }}>
                <CheckCircle2 size={18} color="#666" /> Account setup and login issues
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#555' }}>
                <CheckCircle2 size={18} color="#666" /> Messaging and group chat support
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555' }}>
                <CheckCircle2 size={18} color="#666" /> App performance and troubleshooting
              </li>
            </ul>
          </div>
        </div>

        <p style={{ fontSize: '1.05rem', color: '#000000', fontWeight: 500, backgroundColor: '#f9f9f9', padding: '1.25rem 1.5rem', borderRadius: '8px', borderLeft: '3px solid #000' }}>
          👉 Our support team is committed to resolving issues quickly and efficiently.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', margin: '4rem 0' }} />

      {/* 📜 Legal */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#000000' }}>
          <Scale size={24} color="#000000" /> Legal
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#555555', marginBottom: '2rem' }}>
          Understand your rights and how your data is handled.
        </p>

        <div style={{ backgroundColor: '#111111', color: '#ffffff', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>Terms & Conditions</h3>
            <p style={{ fontSize: '1.05rem', color: '#bbbbbb', margin: 0 }}>Defines the rules and guidelines for using Lupyd.</p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>Privacy Policy</h3>
            <p style={{ fontSize: '1.05rem', color: '#bbbbbb', margin: 0 }}>Explains how user data is protected and managed.</p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>Data Protection</h3>
            <p style={{ fontSize: '1.05rem', color: '#bbbbbb', margin: 0 }}>Outlines encryption practices and security measures.</p>
          </div>
        </div>

        <p style={{ fontSize: '1.1rem', color: '#111111', fontWeight: 600, padding: '1.5rem', borderRadius: '8px', border: '1px solid #eaeaea', textAlign: 'center', backgroundColor: '#ffffff' }}>
          👉 Transparency and trust are central to Lupyd’s approach.
        </p>
      </section>

    </div>
  );
}
