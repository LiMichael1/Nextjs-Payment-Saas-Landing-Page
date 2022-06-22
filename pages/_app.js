import NavBar from './../components/layout/NavBar';
import Footer from './../components/layout/Footer';
import BodyContainer from '../components/layout/BodyContainer';

import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <NavBar />
      <BodyContainer>
        <Component {...pageProps} />
      </BodyContainer>
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
