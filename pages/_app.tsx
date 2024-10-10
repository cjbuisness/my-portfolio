import { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/Footer';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col bg-darkGray text-white">
      <Header />
      <main className="flex-1 p-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
