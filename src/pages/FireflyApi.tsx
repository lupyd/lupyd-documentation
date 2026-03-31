import { Terminal, Key, Users, MessageSquare, Compass, Shield, Lock, FileCode2 } from 'lucide-react';

export function FireflyApi() {
  const categories = [
    {
      title: "User Configuration & Auth",
      icon: Shield,
      endpoints: [
        {
          method: "POST",
          path: "/sign",
          args: "?device_id=<u8>&address_id=<u64>",
          body: "Credential Blob (4096b max)",
          returns: "firefly.SignedToken"
        },
        {
          method: "GET",
          path: "/jwks.json",
          args: "None",
          body: "None",
          returns: "JSON Web Key Set (JWKS)"
        },
        {
          method: "POST",
          path: "/user/device",
          args: "None",
          body: "firefly.Address (Proto)",
          returns: "firefly.Address (with new ID)"
        },
        {
          method: "GET",
          path: "/user/devices",
          args: "None",
          body: "None",
          returns: "firefly.UserDevices"
        },
        {
          method: "DELETE",
          path: "/user/device",
          args: "?id=<u64>",
          body: "None",
          returns: "Empty (200 OK)"
        }
      ]
    },
    {
      title: "Key Management Foundation",
      icon: Key,
      endpoints: [
        {
          method: "POST",
          path: "/user/preKeyBundles",
          args: "None",
          body: "firefly.PreKeyBundleEntries",
          returns: "Empty (200 OK)"
        },
        {
          method: "GET",
          path: "/user/preKeyBundles",
          args: "?ids=<i64...>&other=<string>",
          body: "None",
          returns: "firefly.PreKeyBundleEntries"
        },
        {
          method: "GET",
          path: "/group/keyPackages",
          args: "?other=<uname>&address=<u64> | ?all=true",
          body: "None",
          returns: "firefly.GroupKeyPackage(s)"
        },
        {
          method: "POST",
          path: "/group/keyPackages",
          args: "?address=<u64>",
          body: "firefly.GroupKeyPackages",
          returns: "Empty (200 OK)"
        }
      ]
    },
    {
      title: "Encrypted Group Actions",
      icon: Users,
      endpoints: [
        {
          method: "POST",
          path: "/group",
          args: "None",
          body: "firefly.Group (Name, Desc, State)",
          returns: "firefly.GroupId"
        },
        {
          method: "GET",
          path: "/group",
          args: "?id=<u64>",
          body: "None",
          returns: "firefly.Group"
        },
        {
          method: "GET",
          path: "/groups",
          args: "None",
          body: "None",
          returns: "firefly.Groups (List)"
        },
        {
          method: "POST",
          path: "/group/commit",
          args: "None",
          body: "firefly.GroupMessage (Commit)",
          returns: "firefly.GroupMessage (Updated)"
        },
        {
          method: "POST",
          path: "/group/commitAndWelcome",
          args: "None",
          body: "firefly.GroupCommitAndWelcome",
          returns: "firefly.GroupMessage"
        },
        {
          method: "POST",
          path: "/group/sync",
          args: "?address=<u64>&limit=<u32>",
          body: "firefly.GroupSyncRequests",
          returns: "firefly.GroupMessages"
        },
        {
          method: "GET",
          path: "/group/commits",
          args: "?startAfter=<u64>&limit=<u32>&groupId(s)=<u64 / i64...>",
          body: "None",
          returns: "firefly.GroupMessages"
        }
      ]
    },
    {
      title: "Direct Conversations",
      icon: MessageSquare,
      endpoints: [
        {
          method: "POST",
          path: "/user/conversation",
          args: "?other=<username>&settings=<u32>",
          body: "None",
          returns: "Empty (200 OK)"
        },
        {
          method: "GET",
          path: "/user/conversations",
          args: "None",
          body: "None",
          returns: "firefly.Conversations"
        },
        {
          method: "DELETE",
          path: "/user/conversations",
          args: "?ids=<i64...>",
          body: "None",
          returns: "Empty (200 OK)"
        },
        {
          method: "DELETE",
          path: "/user/message",
          args: "?conversationId=<u64>&messageId=<u64>",
          body: "None",
          returns: "Empty (200 OK)"
        }
      ]
    },
    {
      title: "WebSocket & Integrations",
      icon: Terminal,
      endpoints: [
        {
          method: "GET (WS)",
          path: "/ (Upgrade)",
          args: "?device_id=<u8>&uid=<u64>&last_synced_upto=<u64>&token=<JWT>",
          body: "None",
          returns: "Live WebSocket Connection"
        },
        {
          method: "POST",
          path: "/notifyFollower",
          args: "?from=<string>&to=<string>",
          body: "Headers: AUTHORIZE_ADMIN",
          returns: "Triggers Firebase FCM internally"
        },
        {
          method: "GET",
          path: "/webrtcConfig",
          args: "None",
          body: "None",
          returns: "WebRTC Config JSON"
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
          ⚡ Firefly Detailed API
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
            Firefly uses Hyper in Rust to deliver endpoints that almost exclusively return and accept <strong>Protocol Buffers (.proto)</strong>. Below is the detailed structural format with exact query arguments and payload types for every encrypted messaging endpoint.
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
          <Lock size={24} color="#ffffff" /> Zero-Trust Note
        </h3>
        <p style={{ fontSize: '1.05rem', color: '#bbbbbb', lineHeight: 1.6, margin: 0 }}>
          Notice how the request and response bodies almost exclusively use `.proto` structures matching `firefly.GroupMessage` or bundles. The server operates as a completely blind relayer mathematical epochs padding to verify sequences natively!
        </p>
      </div>

    </div>
  );
}
