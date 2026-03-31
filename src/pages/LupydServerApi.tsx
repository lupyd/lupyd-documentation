import { Server, MessageSquareHeart, UserCheck, Bell, Compass, Database, FileCode2, Activity, Globe } from 'lucide-react';

export function LupydServerApi() {
  const categories = [
    {
      title: "Posts & Social Feed",
      icon: MessageSquareHeart,
      endpoints: [
        {
          method: "POST",
          path: "/post",
          args: "None",
          body: "lupyd.post.CreatePostDetails",
          returns: "Post UUID (Plaintext)"
        },
        {
          method: "GET",
          path: "/post",
          args: "?type=<u32>&users=<csv>&start=<ULID>&search=<str>&hashtag=<str>",
          body: "None",
          returns: "lupyd.post.FullPosts"
        },
        {
          method: "GET",
          path: "/post/<post_id>",
          args: "ULID strictly in Path URL",
          body: "None",
          returns: "lupyd.post.FullPost"
        },
        {
          method: "DELETE",
          path: "/post/<uuid1>/<uuid2>...",
          args: "UUIDs strictly in Path URL",
          body: "None",
          returns: "Plaintext (# deleted)"
        }
      ]
    },
    {
      title: "User Profiles & Social Graph",
      icon: UserCheck,
      endpoints: [
        {
          method: "POST",
          path: "/user",
          args: "None",
          body: "lupyd.user.FullUser",
          returns: "Empty (201 Created) | 409 Conflict"
        },
        {
          method: "PUT",
          path: "/user",
          args: "None",
          body: "lupyd.user.UpdateUserInfo",
          returns: "Empty (200 OK)"
        },
        {
          method: "GET",
          path: "/user/<username>",
          args: "?users=<username1%2Cusername2>&offset=<u32>",
          body: "None",
          returns: "lupyd.user.User / lupyd.user.Users"
        },
        {
          method: "PUT",
          path: "/relation",
          args: "?uname=<string>&relation=<Follow|Block>",
          body: "None",
          returns: "Empty (200 OK)"
        },
        {
          method: "GET",
          path: "/relations",
          args: "?start_after=<ULID>",
          body: "None",
          returns: "lupyd.user.Relations"
        },
        {
          method: "DELETE",
          path: "/user",
          args: "None",
          body: "None",
          returns: "Plaintext (Deletion Confirmed)"
        }
      ]
    },
    {
      title: "Interactions & Engagement",
      icon: Activity,
      endpoints: [
        {
          method: "PUT",
          path: "/vote",
          args: "None",
          body: "lupyd.post.Votes",
          returns: "Plaintext (# rows updated)"
        },
        {
          method: "PUT",
          path: "/savepost",
          args: "?id=<ULID>",
          body: "None",
          returns: "Empty (200 OK)"
        },
        {
          method: "GET",
          path: "/saved_posts",
          args: "None",
          body: "None",
          returns: "List of UUIDs (content-type: uuids)"
        },
        {
          method: "GET",
          path: "/hashtags",
          args: "None",
          body: "None",
          returns: "lupyd.post.PostHashtags"
        },
        {
          method: "POST",
          path: "/report",
          args: "None",
          body: "lupyd.post.PostReport",
          returns: "Empty (200 OK)"
        }
      ]
    },
    {
      title: "Chat Connectivity Bridges",
      icon: Server,
      endpoints: [
        {
          method: "GET",
          path: "/chatkey/<username>",
          args: "None",
          body: "None",
          returns: "lupyd.chats.ChatKeys"
        },
        {
          method: "PUT",
          path: "/chatkey",
          args: "None",
          body: "lupyd.chats.ChatKeys",
          returns: "Plaintext (# updated)"
        },
        {
          method: "DELETE",
          path: "/chatkey",
          args: "None",
          body: "lupyd.chats.ChatKeys",
          returns: "Plaintext (# deleted)"
        },
        {
          method: "GET",
          path: "/chats",
          args: "None",
          body: "None",
          returns: "lupyd.chats.ChatSessions"
        },
        {
          method: "PUT",
          path: "/chat",
          args: "None",
          body: "lupyd.chats.ChatSession",
          returns: "Plaintext (# updated)"
        },
        {
          method: "DELETE",
          path: "/chat",
          args: "None",
          body: "lupyd.chats.ChatSession",
          returns: "Plaintext (# deleted)"
        }
      ]
    },
    {
      title: "Real-time Notifications",
      icon: Bell,
      endpoints: [
        {
          method: "GET",
          path: "/notifications",
          args: "None",
          body: "None",
          returns: "lupyd.notification.Notifications"
        }
      ]
    }
  ];

  const getMethodColor = (method: string) => {
    if (method.includes('GET')) return '#10b981'; // Emerald
    if (method.includes('POST')) return '#3b82f6'; // Blue
    if (method.includes('PUT')) return '#f59e0b'; // Amber
    if (method.includes('DELETE')) return '#ef4444'; // Red
    return '#6b7280'; // Gray
  };

  return (
    <div style={{ maxWidth: '950px' }}>
      {/* Header Section */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          letterSpacing: '-0.02em', 
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          🌍 Lupyd Rust Server Api
        </h1>
        
        <div style={{
          backgroundColor: '#fafafa',
          borderLeft: '4px solid #eaeaea',
          padding: '1.5rem',
          borderRadius: '0 8px 8px 0',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000000' }}>
            <Compass size={20} color="#000000" /> Structure Overview
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.7, margin: 0, marginBottom: '1rem' }}>
            The Lupyd Rust Server serves as the foundational **Social Graph** API. Unlike Firefly, which protects conversational tunnels, this backend drives your interactions, followers array, and rich-text timelines. 
          </p>
          <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.7, margin: 0 }}>
            Below is the structured, exact mapping of all internal endpoints directly translated from its Hyper request handler architecture. It relies intensely on Protobuf serialization and JWT token structures.
          </p>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '3rem 0' }} />

      {/* Advanced Capabilities and Endpoints List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
        {categories.map((category, idx) => {
           const Icon = category.icon;
           return (
            <div key={idx} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #eaeaea',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 2px 12px rgba(0,0,0,0.02)'
             }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid #eaeaea', paddingBottom: '1rem' }}>
                  <div style={{ 
                    width: '42px', height: '42px', 
                    backgroundColor: '#fafafa', border: '1px solid #eaeaea',
                    borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}>
                    <Icon size={22} color="#000000" />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#000000', margin: 0 }}>
                    {category.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {category.endpoints.map((ep, i) => (
                    <div key={i} style={{ 
                      backgroundColor: '#fafafa', 
                      borderRadius: '8px', 
                      border: '1px solid #f0f0f0',
                      padding: '1.25rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ 
                          backgroundColor: getMethodColor(ep.method) + '15', 
                          color: getMethodColor(ep.method), 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '6px', 
                          fontWeight: 700, 
                          fontSize: '0.85rem',
                          fontFamily: 'monospace'
                        }}>
                          {ep.method}
                        </span>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#000', fontFamily: 'monospace', wordBreak: 'break-word' }}>
                          {ep.path}
                        </span>
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ minWidth: 0 }}>
                          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 600 }}>Arguments (Query)</p>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#333', fontFamily: 'monospace', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px', border: '1px solid #eaeaea', wordBreak: 'break-all' }}>
                            {ep.args}
                          </p>
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 600 }}>Request Body</p>
                          <div style={{ margin: 0, fontSize: '0.95rem', color: '#333', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', wordBreak: 'break-word' }}>
                            {ep.body !== 'None' && <FileCode2 size={16} color="#555" style={{ flexShrink: 0, marginTop: '2px' }} />}
                            <span style={{ wordBreak: 'break-word' }}>{ep.body}</span>
                          </div>
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#888', margin: '0 0 0.5rem 0', fontWeight: 600 }}>Returns</p>
                          <div style={{ margin: 0, fontSize: '0.95rem', color: '#10b981', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', wordBreak: 'break-word' }}>
                            {ep.returns !== 'None' && <FileCode2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />}
                            <span style={{ wordBreak: 'break-word' }}>{ep.returns}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
           );
        })}
      </div>

      {/* Security Principles */}
      <div style={{
          backgroundColor: '#111111',
          color: '#ffffff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '-0.01em' }}>
          <Globe size={24} color="#ffffff" /> Authorization Matrix
        </h3>
        <p style={{ fontSize: '1.05rem', color: '#bbbbbb', lineHeight: 1.6, margin: 0 }}>
          The entire backend handles access via the <code>AuthenticatedToken</code> struct. Certain routes like `/vote` or `/user` perform hard checks for permissions dynamically decoded from JWT arrays, avoiding latency checks entirely from the connected Auth0 pool.
        </p>
      </div>

    </div>
  );
}
