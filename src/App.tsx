import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntroScreen } from './components/IntroScreen';
import { AppContent } from './AppContent';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished && <IntroScreen onComplete={() => setIntroFinished(true)} />}
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App;
