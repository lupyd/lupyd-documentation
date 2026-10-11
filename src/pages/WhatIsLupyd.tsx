import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Rocket } from 'lucide-react';

export function WhatIsLupyd() {
  return (
    <article style={{ maxWidth: '850px' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2, 
          marginBottom: '1.5rem', 
          color: '#000000' 
        }}>
          What Is Lupyd?
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
          <p style={{ fontSize: '1.15rem', color: '#111111', lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
            Lupyd is a modern <strong style={{ color: '#000000', fontWeight: 600 }}>chat and collaboration platform</strong> built around a simple idea: <strong style={{ color: '#000000', fontWeight: 600 }}>people should be able to communicate, collaborate, and share information in a space where privacy and security matter from the beginning.</strong>
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            Designed primarily for startups, growing businesses, software companies, and large organizations, Lupyd brings secure team communication and business collaboration together in a clean, lightweight, and professional environment. It recognizes that communication is more than exchanging messages. It is how teams share ideas, solve problems, make decisions, build products, and move businesses forward.
          </p>

          <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
            In today's digital workplace, organizations need more than a basic messaging application. They need a reliable business communication platform where teams can exchange information, coordinate projects, and work together while giving serious consideration to privacy and security. Lupyd aims to bring these priorities together through privacy-focused messaging, encrypted communication, and a professional collaboration experience.
          </p>
        </div>
      </header>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          Built for Startups and Growing Companies
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Startups operate in a fast-moving environment. Small teams often manage product development, customer relationships, marketing, sales, hiring, and business strategy simultaneously. People need to communicate quickly, exchange information, discuss problems, and make decisions without unnecessary delays.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          In the early stages of a startup, an idea can be one of its most valuable assets. Conversations may contain future product plans, technical architecture, unreleased features, business models, investor discussions, and competitive strategies. These discussions are not simply everyday messages; they can contain the thinking and work behind the company's future.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          As startups grow, their communication needs grow with them. More employees join, responsibilities become distributed, projects become larger, and collaboration across different teams becomes increasingly important.
        </p>

        <div style={{
          borderLeft: '4px solid #000000',
          backgroundColor: '#fafafa',
          borderRadius: '0 8px 8px 0',
          padding: '1.25rem 1.5rem',
          margin: '0.25rem 0'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#111111', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
            Lupyd is designed with these professional realities in mind. As a <strong style={{ color: '#000000', fontWeight: 600 }}>secure messaging platform for startups</strong>, it aims to provide a dedicated environment for team communication and collaboration that combines a clean, lightweight experience with a strong focus on chat privacy and information protection.
          </p>
        </div>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          The goal is to help teams spend less time dealing with unnecessary complexity and more time building, improving, and delivering their work.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          Designed for Large Organizations
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Large organizations face a different scale of communication challenges. They may have multiple departments, distributed teams, offices in different locations, complex projects, and thousands of conversations taking place every day.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Product teams discuss development plans. Engineering teams exchange technical information. Management communicates strategic decisions. Sales teams coordinate with customers. Human resources handles employee-related discussions. Security and operations teams share information that may be highly sensitive.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          These conversations often involve different levels of confidentiality. Some information can be shared widely across an organization, while other information should only be accessible to specific people or teams.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          When communication becomes scattered across multiple tools, keeping information organized and managing access can become more difficult. Organizations need to think carefully about where discussions happen, how information is protected, who can access it, and how communication fits into their wider security practices.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd aims to support these needs as a <strong style={{ color: '#000000', fontWeight: 600 }}>business chat and collaboration platform</strong> that places privacy and encryption at the centre of its approach to professional communication.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          For large organizations, the objective is not merely to provide another place to chat. It is to support a communication environment that takes the sensitivity and importance of business information seriously.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          Privacy and Encryption at the Centre
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          For an organization, privacy is not limited to protecting passwords or preventing outsiders from reading a message. It also concerns the confidentiality of internal discussions, the protection of intellectual property, and the responsible handling of information shared between employees and teams.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A single conversation might contain an unreleased product announcement, a security vulnerability, a customer's private information, or a decision that could affect the direction of an entire business.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          If sensitive information is exposed, the consequences can extend beyond the original conversation. A company may face operational disruption, financial losses, damaged relationships, reduced customer confidence, or the exposure of valuable intellectual property.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          This is why <strong style={{ color: '#000000', fontWeight: 600 }}>secure business messaging and encrypted team communication</strong> matter. Organizations should understand how their communication tools protect information and what level of privacy those tools actually provide.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Encryption helps protect information by transforming it into a form that cannot be understood without the appropriate cryptographic key. When implemented correctly, it can make it significantly harder for unauthorized parties to read protected information. End-to-end encryption provides a more specific form of protection in which message contents are designed to remain readable only by the communicating endpoints.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd places a strong emphasis on encrypted communication and chat privacy because professional conversations deserve careful protection. Its approach is centred on making privacy an integral consideration in the communication experience, rather than a concern that only becomes urgent after a security incident.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A secure collaboration platform must also consider responsible system design, account security, and how information is handled throughout the product. These elements work together to support a more trustworthy communication experience.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          A Safer Environment for Team Collaboration
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Security is important, but professional communication must also remain practical. Teams need to exchange information quickly, discuss ideas naturally, and keep their work moving.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A good team messaging platform should offer more than a place to send messages. It should create an environment where people can interact comfortably, collaborate effectively, and approach their daily work with greater confidence in how their information is protected.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd aims to bring privacy-conscious communication into everyday professional use. The idea is simple: security should not feel like an extra burden, and a professional communication experience should not require users to sacrifice simplicity.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          For startups, growing businesses, and established organizations, secure workplace communication is an important part of building responsible digital working practices. The tools people use every day should support productive conversations while treating the information exchanged through them with care.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          Collaboration Without Unnecessary Complexity
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Workplace communication is different from casual social interaction. Teams need to exchange information, coordinate tasks, discuss ideas, make decisions, and keep conversations moving without unnecessary distractions.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A platform that feels unnecessarily complicated can create friction in everyday collaboration. Employees may struggle with cluttered interfaces, confusing workflows, or tools that make simple conversations harder than they need to be.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd brings chat and collaboration together in a clean, professional environment designed to make communication feel straightforward. Its focus is on usability, clarity, and reducing unnecessary distractions so people can concentrate on their discussions and work.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          For software development teams, communication can be particularly important. Developers, designers, product managers, testers, and project coordinators need to exchange updates, clarify requirements, discuss technical problems, and work through decisions together.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A focused team collaboration platform can help make these interactions feel more natural. Lupyd aims to provide a professional communication experience that supports the everyday conversations behind software development, project coordination, and business operations.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          The goal is to bring together two priorities that should not be treated as opposites: a simple user experience and a serious approach to privacy.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          A Lightweight and Professional Experience
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Modern platforms can become crowded with features, complicated interfaces, and unnecessary visual elements. While functionality matters, the experience of using a product matters just as much.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd follows a <strong style={{ color: '#000000', fontWeight: 600 }}>lightweight collaboration platform</strong> design philosophy, with a professional visual style that prioritizes clarity and ease of use. Rather than making communication feel cluttered, the experience aims to provide a calm and focused environment suitable for business discussions and everyday teamwork.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A lightweight experience is about more than appearance. It means reducing unnecessary friction, keeping interactions understandable, and making everyday communication feel straightforward. A clean interface can help users follow conversations, find what they need, and move between tasks without feeling overwhelmed.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          This matters because employees may spend hours every day reading messages, following discussions, sharing information, and coordinating work. The communication environment should support their work, not compete for their attention.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd's approach brings together a professional interface and a privacy-conscious mindset, with the goal of making business communication feel comfortable, focused, and purposeful.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          One Platform for Meaningful Conversations
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Organizations do not operate through isolated messages. Work develops through ongoing discussions, shared context, questions, decisions, and collaboration between people with different responsibilities.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          A startup may use conversations to coordinate a product launch. An engineering team may discuss implementation details. A management team may review business priorities. A distributed organization may need to keep people connected across locations and time zones.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          In each case, communication is part of the organization's working environment.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd is focused on bringing chat and collaboration together in a platform that recognizes these professional needs. It is intended for teams that want a clear and practical communication experience while treating privacy and security as important considerations.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          As organizations become increasingly dependent on digital tools, their communication platforms become part of the infrastructure that supports everyday operations. Choosing a business messaging platform is therefore not just a matter of interface preferences; it is also a decision about how people exchange information and how that information is protected.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '1.5rem', marginBottom: '0.25rem', color: '#000000' }}>
          More Than Just Another Chat Platform
        </h2>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          The purpose of Lupyd is not simply to add another messaging option to an already crowded software landscape. Its direction is centred on the relationship between communication, collaboration, privacy, and professional work.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          For startups, that means recognizing the value of the ideas, technology, and strategies they are developing. For large organizations, it means acknowledging the sensitivity and scale of the information their teams exchange. For both, it means understanding that convenient communication and responsible information protection need to work together.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          Lupyd brings these priorities into one <strong style={{ color: '#000000', fontWeight: 600 }}>privacy-focused chat and collaboration platform</strong>, with an emphasis on encryption, chat privacy, a safer communication environment, and a clean, lightweight professional experience.
        </p>

        <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
          The goal is to help organizations create a communication environment where people can share ideas, solve problems, and work together without losing sight of the importance of protecting their information.
        </p>

        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #eaeaea',
          borderRadius: '8px',
          padding: '1.75rem',
          marginTop: '0.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '1.15rem', color: '#000000', lineHeight: 1.7, fontWeight: 700, margin: 0 }}>
            Because the conversations that move a company forward often contain the very things that make it valuable: its ideas, its people, its knowledge, and its future.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#333333', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
            Lupyd is built on the belief that privacy should be part of the communication experience from the beginning—not a concern that becomes important only after something goes wrong.
          </p>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '3.5rem 0' }} />

      <h2 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '1.5rem', color: '#000000' }}>
        Related Documentation
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Link to="/intro/privacy-security" className="doc-card">
          <Layers size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Privacy & Security</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Learn about zero-trust encryption principles and information protection.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
        
        <Link to="/get-started" className="doc-card">
          <Rocket size={24} className="doc-card-icon" />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Get Started</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
            Follow our onboarding and setup guides to start collaborating.
          </p>
          <div className="doc-card-arrow"><ArrowRight size={18} /></div>
        </Link>
      </div>
    </article>
  );
}
