import '../styles/globals.css';
import { MovieProvider } from '../context/context.js';

function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp;
