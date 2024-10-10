import { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/Footer';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className="p-8 min-h-screen bg-darkGray text-white">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
