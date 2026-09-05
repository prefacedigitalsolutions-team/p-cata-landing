import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'; 
import Footer from './components/Footer/Footer'; 
import Preloader from './components/Preloder/Preloader';
import ScrollToTop from './components/Scroll-top/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container" style={{ display: 'flex', width: '100%', minHeight: '100vh', position: 'relative' }}>
      
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <Navbar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Home />
        <Footer />
      </div>

      <ScrollToTop />

    </div>
  );
}