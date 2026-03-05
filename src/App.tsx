import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { I18nProvider } from './core/i18n/I18nContext';

export default function App() {
  return (
    <I18nProvider>
      <Layout>
        <HomePage />
      </Layout>
    </I18nProvider>
  );
}
