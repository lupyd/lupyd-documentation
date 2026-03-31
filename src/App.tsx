import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// Import pages (to be created)
import { Home } from './pages/Home';
import { Installation } from './pages/Installation';
import { UserGuide } from './pages/UserGuide';
import { Features } from './pages/Features';
import { StartFast } from './pages/StartFast';
import { UseCases } from './pages/UseCases';
import { Settings } from './pages/Settings';
import { PlatformGuides } from './pages/PlatformGuides';
import { GroupChats } from './pages/GroupChats';
import { DocsSupport } from './pages/DocsSupport';
import { FireflyApi } from './pages/FireflyApi';
import { LupydServerApi } from './pages/LupydServerApi';
import { IntroScreen } from './components/IntroScreen';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && <IntroScreen onComplete={() => setIntroFinished(true)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="installation" element={<Installation />} />
            <Route path="guide" element={<UserGuide />} />
            <Route path="features" element={<Features />} />
            <Route path="start-fast" element={<StartFast />} />
            <Route path="cases" element={<UseCases />} />
            <Route path="settings" element={<Settings />} />
            <Route path="guides" element={<PlatformGuides />} />
            <Route path="groups" element={<GroupChats />} />
            <Route path="firefly" element={<FireflyApi />} />
            <Route path="server-api" element={<LupydServerApi />} />
            <Route path="docs-support" element={<DocsSupport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
