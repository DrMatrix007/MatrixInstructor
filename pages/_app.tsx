import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getApp, getApps, initializeApp } from 'firebase/app'
function MyApp({ Component, pageProps }: AppProps) {
  try {
    getApp();
  } catch {
    const firebaseConfig = {
      apiKey: "AIzaSyBRTTcyHtLei6VQvuc0rLnh3VF9Nfw5osQ",
      authDomain: "matrix-instructer.firebaseapp.com",
      projectId: "matrix-instructer",
      storageBucket: "matrix-instructer.appspot.com",
      messagingSenderId: "1030411202900",
      appId: "1:1030411202900:web:cdd6e55af8350d6aef58c1",
      measurementId: "G-W04QZ461SV",
    };

    const app = initializeApp(firebaseConfig);
  }
  return <div style={{
    position: "absolute",
    minHeight: "100%",
    width: "100%",
  }}>
    <Component {...pageProps} />
  </div>
}

export default MyApp
