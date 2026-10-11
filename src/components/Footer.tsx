import React from 'react';
import { Screen } from '../types.ts';

interface FooterProps {
  onNavigate: (screen: Screen, transition?: 'none' | 'push') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(27,67,50,0.03)] mt-space-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-gutter mb-space-xl">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <div
              className="flex items-center gap-space-sm cursor-pointer"
              onClick={() => onNavigate('home', 'none')}
            >
              <img
                alt="LocalBoost Brand Logo"
                className="h-7 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1U28i0I8H19MfUGK0dlhnxYfdUnx7mETDG5v9jLZYX0LrVFzr-EZGq7UJaQ7rWBWniqMcbY6t3qrPO-Br4izgd-tv3wWnJgaKDkY_sw0kMQ-xbqUZYfW72Pfpvv9-K-a2Zu7piw_dbwnwD9r9J9pvQcdmlqc1Ew9uGegEhEYa3Mhi2mrMgzoIFuMarzQHRMEq7tZQaNdylD7b3juGYnXv7Nf1m9IVPbaKF_rv4G8BXAIlEhLdbqkrne93F9"
              />
              <span className="font-headline-sm text-headline-sm text-primary-container">
                LocalBoost
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Empowering local Indian business owners, artisans, and retailers with autonomous vernacular AI marketing, localized creative designs, and instant omnichannel campaigns.
            </p>
            <div className="flex items-center gap-space-xs font-label-md text-label-md text-secondary">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>Trusted across 500+ Indian towns & cities</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md">
              Categories Supported
            </h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>Kirana & Retail Stores</li>
              <li>Cafes, Bakeries & Mithai</li>
              <li>Boutiques & Apparel</li>
              <li>Salons & Wellness Parlours</li>
              <li>Handcrafted & Artisans</li>
            </ul>
          </div>

          {/* Product & AI Tools */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md">
              Product & AI Tools
            </h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="ai-marketing-studio"
                  href="#ai-marketing-studio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('ai-marketing-studio', 'push');
                  }}
                >
                  Festive Creative Studio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="ai-marketing-studio"
                  href="#ai-marketing-studio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('ai-marketing-studio', 'push');
                  }}
                >
                  WhatsApp Campaign Bot
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="features"
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('features', 'none');
                  }}
                >
                  Vernacular Copywriting
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="pricing"
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing', 'push');
                  }}
                >
                  Rupee Plans (+ GST)
                </a>
              </li>
            </ul>
          </div>

          {/* Entrepreneurs & Guides */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md">
              Entrepreneurs
            </h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="features"
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('features', 'none');
                  }}
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="features"
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('features', 'none');
                  }}
                >
                  Bharat MSME Guide
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="pricing"
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing', 'push');
                  }}
                >
                  Support: +91 Helpdesk
                </a>
              </li>
              <li>
                <a
                  className="hover:text-on-surface transition-colors cursor-pointer"
                  data-path="pricing"
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing', 'push');
                  }}
                >
                  Partner Network
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Subline */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span>Made with care for India's local entrepreneurs</span>
            <span className="text-tertiary-container">♥</span>
            <span>BHARAT</span>
          </div>
          <div className="flex items-center gap-space-lg flex-wrap">
            <a className="hover:text-on-surface transition-colors" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-on-surface transition-colors" href="#terms">
              Terms of Service
            </a>
            <a className="hover:text-on-surface transition-colors" href="#gst">
              GST Compliance
            </a>
            <span>© 2025 LocalBoost India Technologies Pvt. Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
