import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './AppContent';

export { seoData } from './seoData';

export function render(url: string) {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}
