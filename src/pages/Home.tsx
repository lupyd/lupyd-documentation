import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export function Home() {
  return (
    <div style={{ maxWidth: '850px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2, 
          marginBottom: '2rem', 
          color: '#000000' 
        }}>
          Introduction
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            The internet has become an essential part of everyday life. We use it to communicate with people, share our thoughts and experiences, stay connected with friends and family, attend meetings, work with teams, study, make decisions, share files, and build businesses. Conversations that once happened only in person can now happen instantly from anywhere in the world.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Communication has become easier than ever. A message can reach someone on the other side of the world within seconds. A team can work together without being in the same place. Businesses can discuss projects, customers, strategies, finances, and internal decisions online. Students can collaborate, families can stay connected, and communities can form around shared interests.
          </p>

          <div style={{
            borderLeft: '4px solid #000000',
            backgroundColor: '#fafafa',
            borderRadius: '0 8px 8px 0',
            padding: '1.25rem 1.5rem',
            margin: '0.5rem 0'
          }}>
            <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.6, margin: '0 0 0.35rem 0' }}>
              But as our dependence on the internet has grown, another question has become increasingly important:
            </p>
            <p style={{ fontSize: '1.2rem', color: '#000000', fontWeight: 600, margin: 0 }}>
              How safe is the information we share?
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Every day, people share an enormous amount of personal and professional information through digital platforms. Private conversations, photographs, documents, opinions, business discussions, customer information, project details, financial information, and countless other forms of data are constantly moving through the internet.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Yet privacy and security are often things people think about only after something goes wrong.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Many people use communication and collaboration platforms without thinking deeply about what happens to the information they share. We accept privacy policies, terms and conditions, and security statements, often without knowing what they actually mean for our conversations and data.
          </p>

          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            padding: '1.5rem',
            margin: '0.5rem 0'
          }}>
            <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#000000', marginBottom: '0.75rem' }}>
              We may not ask:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#444444', fontSize: '1.05rem', lineHeight: 1.6 }}>
              <li>How is our information protected?</li>
              <li>Is our communication encrypted?</li>
              <li>Who can access our conversations?</li>
              <li>Where is our information stored?</li>
              <li>Can someone else access or use our data?</li>
              <li>How long is our information retained?</li>
              <li>How much control do we actually have over what we share?</li>
            </ul>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            These questions become even more important when we look at businesses and technology companies.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '0.5rem', color: '#000000' }}>
            When Data Becomes the Foundation of a Company
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            For modern software startups and large technology companies, data is deeply connected to almost every part of the organization.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Teams communicate about products, source code, customers, employees, finances, partnerships, product roadmaps, internal decisions, research, security issues, and future plans. Developers share technical information. Product teams discuss upcoming features. Sales teams communicate with customers. Management discusses business strategies and company decisions.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            A large amount of this information exists digitally.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            A company may have thousands of conversations, documents, files, customer interactions, credentials, project discussions, and internal records spread across different systems and communication platforms.
          </p>

          <div style={{
            borderLeft: '4px solid #000000',
            backgroundColor: '#fafafa',
            borderRadius: '0 8px 8px 0',
            padding: '1.25rem 1.5rem',
            margin: '0.5rem 0'
          }}>
            <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.6, margin: '0 0 0.35rem 0' }}>
              This creates another important risk:
            </p>
            <p style={{ fontSize: '1.2rem', color: '#000000', fontWeight: 600, margin: 0 }}>
              What happens when an organization loses control of its data?
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Data loss does not always mean that an entire database suddenly disappears. It can happen in many ways.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            An employee account can be compromised. A private conversation can be accessed by an unauthorized person. A confidential document can be exposed. A phishing attack can give attackers access to internal systems. A misconfigured service can accidentally expose information. A security vulnerability can allow unauthorized access. An employee can accidentally share something with the wrong person. Even a simple mistake can sometimes create a serious security incident.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            For a small startup, losing important information can be devastating.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            A startup may spend months or years developing an idea, building technology, communicating with customers, creating internal processes, and developing intellectual property. If sensitive information is exposed or lost, the company may lose more than files.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#000000', lineHeight: 1.75, fontWeight: 600, margin: 0 }}>
            It can lose time, trust, money, intellectual property, customers, opportunities, and sometimes even the ability to continue operating.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            For larger companies, the scale of the problem can become much greater.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            A company may hold information belonging to thousands or millions of users. It may manage customer conversations, employee information, business records, financial information, technical documentation, and proprietary technology. A single security incident can therefore affect not just the company, but an entire ecosystem of people and businesses connected to it.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            The consequences can extend far beyond the initial incident.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Customers may lose trust. Employees may be affected. Business relationships can be damaged. Confidential strategies can become public. Competitors may gain access to sensitive information. Intellectual property may be exposed. Companies may face financial losses, operational disruption, legal consequences, and long-term reputational damage.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            And sometimes, the most dangerous part is that organizations may not immediately know that information has been compromised.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '0.5rem', color: '#000000' }}>
            The Cost of Losing Digital Trust
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Data is difficult to replace once it is lost, exposed, or copied.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            A deleted file may sometimes be recovered. A compromised password may be changed. But once confidential information has been exposed to an unauthorized person, it may no longer be possible to completely take it back.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            paddingLeft: '1.25rem',
            borderLeft: '2px solid #eaeaea',
            margin: '0.5rem 0'
          }}>
            <p style={{ fontSize: '1.05rem', color: '#222222', margin: 0, fontWeight: 500 }}>A private conversation can be copied.</p>
            <p style={{ fontSize: '1.05rem', color: '#222222', margin: 0, fontWeight: 500 }}>A document can be downloaded.</p>
            <p style={{ fontSize: '1.05rem', color: '#222222', margin: 0, fontWeight: 500 }}>A screenshot can be taken.</p>
            <p style={{ fontSize: '1.05rem', color: '#222222', margin: 0, fontWeight: 500 }}>Information can be forwarded.</p>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Once sensitive information leaves the control of the people who were supposed to have access to it, recovering that control can become extremely difficult.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            This is why security cannot be considered only as a technical problem for developers or IT departments. It is also a matter of trust between people, organizations, and the digital platforms they depend on.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '2.5rem', marginBottom: '0.5rem', color: '#000000' }}>
            Security Should Come Before the Problem
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            People should not have to wait for a breach, leak, hacked account, or major data loss before asking whether their communication was secure.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Privacy should not be something hidden inside a long policy document.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Encryption should not be something that only security professionals understand.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            And protecting sensitive information should not be treated as an afterthought when communication and collaboration are already deeply dependent on digital platforms.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            The internet has made it possible for people and organizations to work together faster than ever before. But the more we depend on digital communication, the more important it becomes to protect the information moving through it.
          </p>

          <div style={{
            backgroundColor: '#fafafa',
            border: '1px solid #eaeaea',
            borderRadius: '8px',
            padding: '1.75rem',
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <p style={{ fontSize: '1.1rem', color: '#000000', lineHeight: 1.7, fontWeight: 600, margin: 0 }}>
              Because behind every message, document, conversation, and interaction is something more important than data.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#333333', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
              There are people, ideas, relationships, decisions, businesses, intellectual property, and lives behind it.
            </p>
            <p style={{ fontSize: '1.15rem', color: '#000000', lineHeight: 1.7, fontWeight: 700, margin: 0 }}>
              And protecting those things begins with taking privacy, encryption, and security seriously.
            </p>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '4rem 0' }} />

      <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: '#000000' }}>
        Next in Introduction
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Link to="/intro/what-is-lupyd" className="doc-card">
          <ShieldCheck size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>What is Lupyd?</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Discover Lupyd's unified platform for communication and collaboration.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
        
        <Link to="/intro/privacy-security" className="doc-card">
          <Lock size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Privacy & Security</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Learn about our zero-trust encryption principles and security architecture.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
      </div>
    </div>
  );
}
