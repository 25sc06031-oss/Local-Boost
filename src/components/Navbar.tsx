import React, { useState } from 'react';
import { Screen } from '../types.ts';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen, transition?: 'none' | 'push') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(27,67,50,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          className="flex items-center gap-space-sm cursor-pointer"
          onClick={() => onNavigate('home', 'none')}
        >
          <img
            alt="LocalBoost Brand Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1U28i0I8H19MfUGK0dlhnxYfdUnx7mETDG5v9jLZYX0LrVFzr-EZGq7UJaQ7rWBWniqMcbY6t3qrPO-Br4izgd-tv3wWnJgaKDkY_sw0kMQ-xbqUZYfW72Pfpvv9-K-a2Zu7piw_dbwnwD9r9J9pvQcdmlqc1Ew9uGegEhEYa3Mhi2mrMgzoIFuMarzQHRMEq7tZQaNdylD7b3juGYnXv7Nf1m9IVPbaKF_rv4G8BXAIlEhLdbqkrne93F9"
          />
          <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight">
            LocalBoost
          </span>
          <span className="hidden sm:inline-flex items-center px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
            India AI
          </span>
        </div>

        {/* Primary Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-space-sm"
          data-active-classes="bg-secondary-container text-on-secondary-container font-label-lg rounded-xl"
        >
          <a
            aria-current={currentScreen === 'home' ? 'page' : undefined}
            className={`px-space-md py-space-sm transition-all rounded-xl cursor-pointer ${
              currentScreen === 'home'
                ? 'bg-secondary-container text-on-secondary-container font-label-lg'
                : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            data-path="home"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home', 'none');
            }}
          >
            Home
          </a>
          <a
            aria-current={currentScreen === 'ai-marketing-studio' ? 'page' : undefined}
            className={`px-space-md py-space-sm transition-all rounded-xl cursor-pointer ${
              currentScreen === 'ai-marketing-studio'
                ? 'bg-secondary-container text-on-secondary-container font-label-lg'
                : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            data-path="ai-marketing-studio"
            href="#ai-marketing-studio"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('ai-marketing-studio', 'none');
            }}
          >
            AI Marketing Studio
          </a>
          <a
            aria-current={currentScreen === 'features' ? 'page' : undefined}
            className={`px-space-md py-space-sm transition-all rounded-xl cursor-pointer ${
              currentScreen === 'features'
                ? 'bg-secondary-container text-on-secondary-container font-label-lg'
                : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            data-path="features"
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('features', 'none');
            }}
          >
            Features
          </a>
          <a
            aria-current={currentScreen === 'pricing' ? 'page' : undefined}
            className={`px-space-md py-space-sm transition-all rounded-xl cursor-pointer ${
              currentScreen === 'pricing'
                ? 'bg-secondary-container text-on-secondary-container font-label-lg'
                : 'font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
            }`}
            data-path="pricing"
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('pricing', 'none');
            }}
          >
            Pricing
          </a>
          <a
            className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all rounded-xl cursor-pointer"
            data-path="dashboard"
            href="#dashboard"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('ai-marketing-studio', 'none');
            }}
          >
            Dashboard
          </a>
        </nav>

        {/* Right Action Icons / CTAs */}
        <div className="flex items-center gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
            <span>🇮🇳 EN / INR ₹</span>
          </div>

          <a
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            data-path="sign-in"
            href="#sign-in"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('ai-marketing-studio', 'none');
            }}
          >
            Sign In
          </a>

          <a
            className="cta-primary-btn hidden md:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-label-lg text-label-lg ring-2 ring-primary-fixed/30 cursor-pointer shadow-md hover:shadow-lg transition-all"
            data-path="get-started"
            href="#get-started"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('ai-marketing-studio', 'push');
            }}
          >
            <span>Start Free</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>

          <div
            className="flex items-center gap-space-xs pl-space-xs cursor-pointer"
            onClick={() => onNavigate('ai-marketing-studio', 'none')}
            title="User Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe03bcvD5x9nxND9nbX5NJNAtUY69kIkMgQPhrW7rCr0SAEEfuGI6IY6ak1IgTxnqkOc3WQn-uwLPvBVmeYto4-SHTJjiW7kJY3qjmHFkD6gRWgMk3ZBa-C-LbCgwwVmVsqBREg0SpUaScTrYU1gb162pBpvKdvYpoMQgsO4AghNofYjh_9YjAfD0zjFPUZRUdHARVTOzfbWntY1-D3JmYdK4XmrJuamPjb93Wm0PJ8JoVAOC0C73_gA"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container px-6 py-4 flex flex-col gap-3 shadow-lg">
          <a
            className="py-2 px-3 rounded-lg text-on-surface font-label-lg hover:bg-surface-container"
            data-path="home"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onNavigate('home', 'none');
            }}
          >
            Home
          </a>
          <a
            className="py-2 px-3 rounded-lg text-on-surface font-label-lg hover:bg-surface-container"
            data-path="ai-marketing-studio"
            href="#ai-marketing-studio"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onNavigate('ai-marketing-studio', 'none');
            }}
          >
            AI Marketing Studio
          </a>
          <a
            className="py-2 px-3 rounded-lg text-on-surface font-label-lg hover:bg-surface-container"
            data-path="features"
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onNavigate('features', 'none');
            }}
          >
            Features
          </a>
          <a
            className="py-2 px-3 rounded-lg text-on-surface font-label-lg hover:bg-surface-container"
            data-path="pricing"
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onNavigate('pricing', 'none');
            }}
          >
            Pricing
          </a>
          <div className="pt-2 border-t border-surface-container flex flex-col gap-2">
            <a
              className="cta-primary-btn w-full text-center py-3 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 cursor-pointer shadow-md"
              data-path="get-started"
              href="#get-started"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate('ai-marketing-studio', 'push');
              }}
            >
              <span>Start Free Trial</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
