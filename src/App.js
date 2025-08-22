import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  // Mobile-specific optimizations
  useEffect(() => {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    const handleTouchEnd = (event) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', handleTouchEnd, false);

    // Add mobile-specific CSS classes
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.classList.add('mobile-device');
    }

    // Optimize for mobile performance
    if ('serviceWorker' in navigator) {
      // Service worker registration for PWA capabilities
      navigator.serviceWorker.register('/sw.js').catch(console.log);
    }

    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
