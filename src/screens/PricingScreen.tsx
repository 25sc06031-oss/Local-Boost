import React, { useState } from 'react';
import { Screen } from '../types.ts';

interface PricingScreenProps {
  onNavigate: (screen: Screen, transition?: 'none' | 'push') => void;
}

export const PricingScreen: React.FC<PricingScreenProps> = ({ onNavigate }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tiers = [
    {
      name: 'Dukaan Free Trial',
      subtitle: 'Zero risk to test on your own shop',
      badge: 'Free Forever Test',
      price: '₹0',
      period: 'first 15 posts',
      description: 'Ideal for testing out local captions and WhatsApp blasts for your next weekly bazaar.',
      cta: 'Start 15-Post Trial',
      ctaPath: 'get-started',
      isPopular: false,
      features: [
        '15 high-converting campaigns',
        'Hindi, Hinglish & English',
        'Ready WhatsApp emoji copy',
        'Instagram local hashtags',
        'Community support',
      ],
      missing: [
        'Custom Shop Profile Vault',
        '30-Day Automated Calendar',
        'ONDC & WhatsApp Catalogs',
        'GST Compliant Invoicing',
      ],
    },
    {
      name: 'Vyapar Starter',
      subtitle: 'The everyday essential for 1 retail shop',
      badge: 'Most Popular for Bharat MSMEs',
      price: billingCycle === 'monthly' ? '₹499' : '₹399',
      period: billingCycle === 'monthly' ? 'per month + GST' : 'per month (billed annually)',
      description: 'Everything a standalone boutique, kirana, or sweets shop needs to stay visible every week.',
      cta: 'Activate Vyapar Plan',
      ctaPath: 'get-started',
      isPopular: true,
      features: [
        '150 AI campaigns per month',
        'All 12 Indian languages & dialects',
        'Shop Profile Vault (Auto-inject GST & UPI)',
        'WhatsApp Blast Templates (Khata & VIP)',
        'Diwali, Eid & regional festival blueprints',
        'Official GST Tax Invoice (claim 18% ITC)',
        'Priority email & ticket support',
      ],
      missing: [
        'ONDC Catalog XML & PDF bulk exports',
        'Multi-outlet branch management',
      ],
    },
    {
      name: 'Bazaar Pro',
      subtitle: 'For high-growth stores & artisanal brands',
      badge: 'Full Automation',
      price: billingCycle === 'monthly' ? '₹1,299' : '₹1,049',
      period: billingCycle === 'monthly' ? 'per month + GST' : 'per month (billed annually)',
      description: 'Unlimited campaigns, 30-day calendar planning, and verified ONDC / Dukaan catalog generators.',
      cta: 'Upgrade to Bazaar Pro',
      ctaPath: 'ai-marketing-studio',
      isPopular: false,
      features: [
        'Unlimited AI campaigns & variations',
        'All 12 Indian languages & regional slang',
        'Automated 30-Day Content Calendar & PDF export',
        'WhatsApp & ONDC Catalog Generator',
        'Past Campaign ROI & Re-run tracking',
        '2 Store Profiles (e.g. Retail + Online)',
        'Direct WhatsApp support from our team',
        'GST tax invoicing included',
      ],
      missing: [],
    },
    {
      name: 'Retail Chain / Agency',
      subtitle: 'For multi-branch brands & marketers',
      badge: 'Multi-Location',
      price: billingCycle === 'monthly' ? '₹2,999' : '₹2,399',
      period: billingCycle === 'monthly' ? 'per month + GST' : 'per month (billed annually)',
      description: 'Manage marketing across 5 city branches or client retail stores with white-labeled outputs.',
      cta: 'Contact Retail Sales',
      ctaPath: 'ai-marketing-studio',
      isPopular: false,
      features: [
        'Everything in Bazaar Pro',
        'Up to 5 Shop Profile Vaults',
        'Team access (3 staff member logins)',
        'White-labeled PDF calendar exports',
        'Dedicated account manager (+91 phone)',
        'Custom vernacular prompt engineering',
      ],
      missing: [],
    },
  ];

  const faqs = [
    {
      q: 'Can I pay using Google Pay, PhonePe, or Paytm UPI?',
      a: 'Yes, absolutely! We support instant UPI scan-and-pay via Google Pay, PhonePe, Paytm, BHIM, plus all major Indian RuPay/Visa cards and Netbanking. Your account activates in under 10 seconds.',
    },
    {
      q: 'Can I claim GST input tax credit for my business?',
      a: 'Yes. Every invoice comes with a valid GSTIN breakdown (18% GST). Enter your business GSTIN in your Shop Profile Vault, and monthly tax invoices will be automatically generated with your registered business name.',
    },
    {
      q: 'Do my shop employees need English fluency or design skills?',
      a: 'No English fluency is required. LocalBoost is designed with intuitive tap buttons in Hindi, Hinglish, and simple terms. Simply pick your festival, choose your discount offer, and tap Generate.',
    },
    {
      q: 'What happens after my 15 free trial posts are used?',
      a: 'There are no automatic charges. You can upgrade to the Vyapar Starter plan starting at just ₹499/month, or keep your saved templates and past generated drafts forever.',
    },
    {
      q: 'How does LocalBoost know about local Indian festivals and tithis?',
      a: 'LocalBoost is trained on the Indian calendar cycle with 50+ central and regional festivals including Chhath Puja, Dhanteras, Karwa Chauth, Pongal, Durga Puja, Eid-ul-Fitr, Rakhi, and Guru Nanak Jayanti.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Hero Section */}
      <section className="w-full py-16 px-6 lg:px-12 bg-gradient-to-b from-surface-container-low via-background to-surface text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider font-semibold">
            🇮🇳 Simple Rupee Pricing • No Hidden Agency Fees
          </div>

          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight font-bold">
            Affordable Plans for <span className="text-primary-container">Every Indian Shopkeeper</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Agencies charge ₹15,000 to ₹30,000/month for slow templates. LocalBoost gives you instant, culturally tuned marketing in Hindi & Hinglish starting at less than ₹17 a day.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center gap-3 mt-4 bg-surface-container p-1.5 rounded-2xl shadow-inner">
            <button
              className={`px-5 py-2 rounded-xl font-label-md text-label-md transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`px-5 py-2 rounded-xl font-label-md text-label-md transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              <span>Yearly (Save 20%)</span>
              <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                2 Mo Free
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="w-full py-12 px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-surface-container-lowest border-2 border-secondary shadow-xl -translate-y-1'
                    : 'bg-surface-container-lowest border border-surface-container shadow-sm hover:shadow-md'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-md text-label-md font-bold shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant min-h-[36px] mb-4">
                    {tier.subtitle}
                  </p>

                  <div className="mb-4 pb-4 border-b border-surface-container">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display-hero text-headline-lg lg:text-display-hero text-primary font-bold">
                        {tier.price}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-outline">
                      {tier.period}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="font-label-md text-label-md text-on-surface font-semibold uppercase tracking-wider text-xs">
                      Included Capabilities:
                    </div>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-on-surface font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}

                    {tier.missing && tier.missing.length > 0 && (
                      <div className="pt-2 space-y-2">
                        {tier.missing.map((miss, mIdx) => (
                          <div key={mIdx} className="flex items-start gap-2 text-outline font-body-sm text-body-sm opacity-60">
                            <span className="material-symbols-outlined text-base shrink-0 mt-0.5">
                              remove
                            </span>
                            <span>{miss}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-container">
                  <a
                    className={`w-full py-3.5 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 transition-all cursor-pointer font-bold ${
                      tier.isPopular
                        ? 'cta-primary-btn shadow-lg ring-2 ring-primary-fixed/40'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high border border-surface-container shadow-xs hover:shadow-md'
                    }`}
                    data-path={tier.ctaPath}
                    href={`#${tier.ctaPath}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('ai-marketing-studio', 'push');
                    }}
                  >
                    <span>{tier.cta}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Assurances Badge Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-surface-container-low border border-surface-container flex flex-wrap items-center justify-around gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">qr_code_2</span>
              </div>
              <div>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                  Instant UPI Activation
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Google Pay, PhonePe, Paytm, BHIM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                  Official GST Invoices
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Claim 18% input credit for your firm
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center">
                <span className="material-symbols-outlined">headset_mic</span>
              </div>
              <div>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold block">
                  +91 WhatsApp Helpline
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Fast support in Hindi and English
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-6 lg:px-12 bg-surface-container-low">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-1">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Everything you need to know about plans, payments, and regional Indian language capabilities.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container transition-all"
              >
                <button
                  className="w-full flex items-center justify-between text-left gap-4 font-title-md text-title-md text-on-surface font-semibold cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-secondary transition-transform">
                    {openFaq === idx ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  </span>
                </button>

                {openFaq === idx && (
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3 pt-3 border-t border-surface-container leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Quick link to studio */}
          <div className="text-center pt-4">
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Want to see the AI generate for your shop first?
            </p>
            <a
              className="cta-primary-btn inline-flex items-center gap-2 px-9 py-4 rounded-xl font-label-lg text-label-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              data-path="ai-marketing-studio"
              href="#ai-marketing-studio"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('ai-marketing-studio', 'push');
              }}
            >
              <span>Go to AI Marketing Studio</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
