/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Screen } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomeScreen } from './screens/HomeScreen.tsx';
import { FeaturesScreen } from './screens/FeaturesScreen.tsx';
import { PricingScreen } from './screens/PricingScreen.tsx';
import { StudioScreen } from './screens/StudioScreen.tsx';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [transitionClass, setTransitionClass] = useState<string>('');

  // Handle URL hash changes or browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'features', 'ai-marketing-studio', 'pricing'].includes(hash)) {
        setCurrentScreen(hash as Screen);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    const initialHash = window.location.hash.replace('#', '');
    if (['home', 'features', 'ai-marketing-studio', 'pricing'].includes(initialHash)) {
      setCurrentScreen(initialHash as Screen);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (screen: Screen, transitionType: 'none' | 'push' = 'none') => {
    if (transitionType === 'push') {
      setTransitionClass('screen-push-transition');
    } else {
      setTransitionClass('');
    }

    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Reset transition class after animation completes
    if (transitionType === 'push') {
      setTimeout(() => setTransitionClass(''), 400);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-background ${transitionClass}`}>
      {/* Persistent Navigation Bar Component on ALL screens */}
      <Navbar currentScreen={currentScreen} onNavigate={handleNavigate} />

      <main className="w-full flex-1 pt-20">
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
        {currentScreen === 'features' && <FeaturesScreen onNavigate={handleNavigate} />}
        {currentScreen === 'pricing' && <PricingScreen onNavigate={handleNavigate} />}
        {currentScreen === 'ai-marketing-studio' && <StudioScreen onNavigate={handleNavigate} />}
      </main>

      {/* Persistent Footer Component on ALL screens */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
