import { AppProps } from 'next/app';
import { GameProvider } from '../contexts/GameContext';
import Layout from '../layout/Layout';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GameProvider>
  );
}

export default MyApp;
