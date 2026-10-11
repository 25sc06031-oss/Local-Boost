import React, { useState } from 'react';
import { Screen } from '../types.ts';

interface FeaturesScreenProps {
  onNavigate: (screen: Screen, transition?: 'none' | 'push') => void;
}

export const FeaturesScreen: React.FC<FeaturesScreenProps> = ({ onNavigate }) => {
  const [selectedHook, setSelectedHook] = useState<'fomo' | 'craft' | 'clearance' | 'wedding'>('fomo');
  const [selectedTone, setSelectedTone] = useState<string>('Warm & Relatable');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const hooksContent = {
    fomo: {
      generic: `"Upgrade your wardrobe this holiday season! Check out our fabulous collection of ethnic dresses. Perfect for any gathering. Contact us today to buy your favorite piece!"`,
      local: `"Khaas Jaipur ke Bapu Bazar ki handblock prints! ✨ Ye Diwali, shaadi ya puja—apne festive look ko banaiye royalty-level. Pure cotton, zero color bleeding guaranteed. 🪔\n\n💬 Tap on WhatsApp button to check live sizes. Stock sirf 18 kurtas bacha hai!"`,
      hashtags: '#JaipurBoutique #BapuBazarShopping #HandloomKurti #JaipurVocalForLocal #DiwaliOOTDIndia',
    },
    craft: {
      generic: `"Our artisans have worked hard to create handmade fashion. Buy now to support local weavers."`,
      local: `"Peeche 3 hafton se Bagru ke master weavers ne natural vegetable dye se stamp kiya hai har ek gota! 🌸 Ye kurta sirf ek kapda nahi, Rajasthan ki dharohar hai.\n\n📲 WhatsApp pe 'KARIGAR' likhein aur matching mulmul dupatta saath mein free paayein!"`,
      hashtags: '#HandblockJaipur #BagruCraft #SutaLove #VocalForLocal #HandmadeIndia',
    },
    clearance: {
      generic: `"Big clearance sale today! 40% discount on all selected stock. Hurry up before everything is sold out."`,
      local: `"🚨 SAAL KA SABSE BADA STOCK CLEARANCE! 🚨\nSirf 48 ghante ke liye—pure Chanderi & Kota Doria kurtis flat ₹699 se shuru!\n\n📍 Visit store at Shop #14 Bapu Bazar or DM to book size immediately before stock khatam ho jaye!"`,
      hashtags: '#ClearanceSaleIndia #LootOffer #JaipurShopping #BudgetFashionIndia #JaipurDeals',
    },
    wedding: {
      generic: `"Get your wedding outfit today! Beautiful designer lehengas and ethnic wear available."`,
      local: `"Shaadi season mein dulhan ki behen ya best friend ka royal look! 💖 Pure Banarasi zari borders aur breathable lining taaki poori sangeet raat dance kar sakein.\n\n✨ Exclusive matching potli free on orders before Sunday. WhatsApp 'WEDDING' for video call preview!"`,
      hashtags: '#ShaadiSeasonIndia #BridesmaidOutfit #JaipurEthnic #WeddingShopping #DesiWeddings',
    },
  };

  const showCopyToast = (msg: string) => {
    setCopiedNotification(msg);
    setTimeout(() => setCopiedNotification(null), 2000);
  };

  const handleUseTemplate = (templateName: string) => {
    onNavigate('ai-marketing-studio', 'push');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-secondary-container">check_circle</span>
          <span className="font-label-md">{copiedNotification}</span>
        </div>
      )}

      {/* Interactive Navigation Utility Anchor & Notification Ribbon */}
      <div className="w-full bg-surface-container py-space-xs px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-md text-label-md text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary font-semibold">Festive Update 2025:</span>
            <span>Now featuring over 42+ regional micro-dialects and ONDC catalog exports</span>
          </div>
          <div className="hidden md:flex items-center gap-space-md">
            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() => onNavigate('ai-marketing-studio', 'push')}
            >
              Quick Guides: Kirana
            </span>
            <span>•</span>
            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() => onNavigate('ai-marketing-studio', 'push')}
            >
              Boutique
            </span>
            <span>•</span>
            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() => onNavigate('ai-marketing-studio', 'push')}
            >
              Sweets & Mithai
            </span>
            <span>•</span>
            <span
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={() => onNavigate('ai-marketing-studio', 'push')}
            >
              Salons
            </span>
          </div>
        </div>
      </div>

      {/* Header & Executive Overview */}
      <section className="w-full py-space-xl px-6 lg:px-12 relative overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
            <div className="max-w-3xl flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md w-fit">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>Suite of 7 Proprietary Engine Tools</span>
              </div>
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                Purpose-Built Marketing Tools for Indian Small Businesses
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Say goodbye to writer's block. Everything a local store owner needs to reach more customers on WhatsApp, Instagram, and local search without hiring expensive agencies.
              </p>
            </div>

            {/* Metric Tile Pill Group */}
            <div className="flex flex-wrap lg:flex-nowrap gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-center min-w-[140px]">
                <span className="font-headline-md text-headline-md text-primary font-bold">100%</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Indian Vernacular</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-center min-w-[140px]">
                <span className="font-headline-md text-headline-md text-secondary font-bold">15 Sec</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Per Campaign Ready</span>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-center min-w-[140px]">
                <span className="font-headline-md text-headline-md text-on-surface font-bold">₹0</span>
                <span className="font-label-md text-label-md text-on-surface-variant">To Test & Draft</span>
              </div>
            </div>
          </div>

          {/* Quick Feature Anchor Tabs */}
          <div className="flex items-center gap-space-xs overflow-x-auto pb-2 scrollbar-none">
            <a
              className="px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm hover:opacity-95 transition-opacity"
              href="#feature-instagram"
            >
              1. Instagram Captions
            </a>
            <a
              className="px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-md text-label-md whitespace-nowrap shadow-sm transition-all"
              href="#feature-festivals"
            >
              2. Festive Promotions
            </a>
            <a
              className="px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-md text-label-md whitespace-nowrap shadow-sm transition-all"
              href="#feature-calendar"
            >
              3. 30-Day Calendar
            </a>
            <a
              className="px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-md text-label-md whitespace-nowrap shadow-sm transition-all"
              href="#feature-products"
            >
              4. Product Descriptions
            </a>
            <a
              className="px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-md text-label-md whitespace-nowrap shadow-sm transition-all"
              href="#feature-whatsapp"
            >
              5. WhatsApp Blasts
            </a>
            <a
              className="px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-md text-label-md whitespace-nowrap shadow-sm transition-all"
              href="#feature-profile"
            >
              6. Shop Profile Vault
            </a>
            <a
              className="px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary font-label-md text-label-md whitespace-nowrap shadow-sm transition-all"
              href="#feature-tracking"
            >
              7. History & Re-run
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE 1: AI Instagram Caption Generator */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low" id="feature-instagram">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Module 01
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                AI Instagram Caption Generator
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-1">
                Engineered with proven Indian retail psychological hooks, localized festival tie-ins, and geo-targeted hashtag matrixes that connect with real local buyers.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="px-space-sm py-space-xs rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-medium">
                Hinglish + 12 Languages
              </span>
              <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md font-medium">
                Location Hashtags
              </span>
            </div>
          </div>

          {/* Comparison Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            {/* Interactive Left Sandbox */}
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary">tune</span> Engine Parameters
                  </span>
                  <span className="font-label-md text-label-md text-secondary bg-secondary-container/50 px-space-xs py-0.5 rounded">
                    Real-Time Mock
                  </span>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface">Your Business Niche & City</label>
                  <div className="p-space-sm bg-surface-container rounded-xl font-body-sm text-body-sm text-on-surface flex items-center justify-between">
                    <span>Handloom Kurtis & Sarees • Jaipur (Bapu Bazar)</span>
                    <span className="material-symbols-outlined text-sm text-outline">verified</span>
                  </div>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface">Target Emotion / Hook Formula</label>
                  <div className="grid grid-cols-2 gap-space-xs">
                    {[
                      { id: 'fomo', label: 'FOMO Festival Craze' },
                      { id: 'craft', label: 'Heritage Craft Story' },
                      { id: 'clearance', label: 'Steal Deal / Clearance' },
                      { id: 'wedding', label: 'Wedding Trousseau' },
                    ].map((hk) => (
                      <div
                        key={hk.id}
                        className={`p-space-xs rounded-lg text-center font-label-md text-label-md cursor-pointer transition-colors ${
                          selectedHook === hk.id
                            ? 'bg-primary-container text-on-primary font-medium'
                            : 'bg-surface-container text-on-surface hover:bg-surface-variant'
                        }`}
                        onClick={() => setSelectedHook(hk.id as any)}
                      >
                        {hk.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface">Selected Tone Matrix</label>
                  <div className="flex items-center gap-space-xs flex-wrap">
                    {['Warm & Relatable (दोस्ताना)', 'Festive Buzz', 'Urgent Stock Call'].map((tone) => (
                      <span
                        key={tone}
                        className={`px-space-sm py-1 rounded-full font-label-md text-label-md cursor-pointer transition-colors ${
                          selectedTone.startsWith(tone.slice(0, 4))
                            ? 'bg-primary-container text-on-primary'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                        onClick={() => setSelectedTone(tone)}
                      >
                        {tone}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-space-md pt-space-md bg-surface-container/60 p-space-md rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-base text-secondary">bolt</span>
                  <span>Output: Tailored for Indian shopping habits</span>
                </div>
                <button
                  className="px-space-md py-space-xs rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm cursor-pointer"
                  onClick={() => showCopyToast('Refreshed Indian retail variations!')}
                >
                  Re-Generate
                </button>
              </div>
            </div>

            {/* Comparative Output Window */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {/* Generic AI Box */}
              <div className="bg-surface-container-high rounded-2xl p-space-lg flex flex-col justify-between opacity-80">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase font-bold text-outline">
                      Generic Western AI Output
                    </span>
                    <span className="material-symbols-outlined text-error">cancel</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant italic">
                    {hooksContent[selectedHook].generic}
                  </p>
                  <div className="p-space-sm bg-surface-container rounded-lg font-body-sm text-body-sm text-outline font-mono">
                    #dresses #fashion #ethnic #style #shopnow #ootd
                  </div>
                </div>
                <div className="pt-space-md">
                  <div className="text-error font-label-md text-label-md flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-sm">warning</span>
                    <span>Cold tone, zero city hashtags, generic terms, misses Indian shopping triggers</span>
                  </div>
                </div>
              </div>

              {/* LocalBoost India-Specific Output */}
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary px-space-md py-1 rounded-bl-xl text-on-secondary font-label-md text-label-md font-bold">
                  LocalBoost AI
                </div>
                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase font-bold text-secondary">
                      Engineered For Bharat
                    </span>
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface font-medium leading-relaxed whitespace-pre-line">
                    {hooksContent[selectedHook].local}
                  </p>
                  <div className="p-space-sm bg-secondary-container/40 rounded-lg font-body-sm text-body-sm text-primary font-mono leading-relaxed">
                    {hooksContent[selectedHook].hashtags}
                  </div>
                </div>
                <div className="pt-space-md flex items-center justify-between">
                  <span className="font-label-md text-label-md text-secondary font-semibold">
                    Includes DM/WhatsApp CTA
                  </span>
                  <button
                    className="font-label-md text-label-md text-on-surface-variant hover:text-primary cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(hooksContent[selectedHook].local);
                      showCopyToast('Caption copied to clipboard!');
                    }}
                  >
                    Ready to Paste 📋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: Promotional & Festival Offer Generator */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface" id="feature-festivals">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Module 02
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                Promotional & Festival Offer Generator
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">
                Build festive sales packages in under 30 seconds for Diwali, Eid, Durga Puja, Onam, Pongal, Rakhi, and Republic Day—with automatically computed incentive bundles.
              </p>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-secondary">calendar_month</span>
              <span>50+ Pre-Configured Regional Festival Blueprints</span>
            </div>
          </div>

          {/* Grid of Festival Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Festive Card 1: Diwali Dhamaka */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="px-space-sm py-space-xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-semibold">
                    Diwali Dhamaka
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">Oct - Nov</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-space-xs">
                  Tiered Mithai & Dry Fruit Gifting
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Generates bundle structures: "Order 3 Luxury Gift Boxes, get silver coin engraving free + Same Day Doorstep Delivery across Pin Codes 110001-110092."
                </p>
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs mb-space-md">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Incentive Logic Auto-Checked:
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-xs text-secondary">check</span> Zero legal clutter, clear GST inclusion note
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-xs text-secondary">check</span> Advance booking cutoff trigger
                  </span>
                </div>
              </div>
              <button
                className="w-full py-space-xs rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md cursor-pointer"
                onClick={() => onNavigate('ai-marketing-studio', 'push')}
              >
                Load Diwali Preset
              </button>
            </div>

            {/* Festive Card 2: Eid Mubarak Special */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-semibold">
                    Eid & Ramzan Bazaar
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">Seasonal</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-space-xs">
                  Evening Special & Family Combos
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Automates Iftar hampers and ethnic wear festive announcements with warm cultural greetings and pre-order slots via WhatsApp Business.
                </p>
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs mb-space-md">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Incentive Logic Auto-Checked:
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-xs text-secondary">check</span> Group discounts for family bookings
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-xs text-secondary">check</span> Midnight shopping hours highlight
                  </span>
                </div>
              </div>
              <button
                className="w-full py-space-xs rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md cursor-pointer"
                onClick={() => onNavigate('ai-marketing-studio', 'push')}
              >
                Load Eid Preset
              </button>
            </div>

            {/* Festive Card 3: Durga Puja / Onam / Pongal */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md font-semibold">
                    Regional Mahotsavs
                  </span>
                  <span className="font-body-sm text-body-sm text-outline">State Targeted</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-space-xs">
                  Pandal Hopping & Harvest Specials
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Drafts state-specific vocabulary in Bangla, Malayalam, Tamil, or Kannada. "Pujor Special Offer" with easy UPI scan-and-pay cashback callouts.
                </p>
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs mb-space-md">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Incentive Logic Auto-Checked:
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-xs text-secondary">check</span> Vernacular blessings without robotic tone
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-xs text-secondary">check</span> Immediate store walk-in incentives
                  </span>
                </div>
              </div>
              <button
                className="w-full py-space-xs rounded-xl bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md cursor-pointer"
                onClick={() => onNavigate('ai-marketing-studio', 'push')}
              >
                Load Regional Preset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: Social Media Post Ideas & 30-Day Content Calendar */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low" id="feature-calendar">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Module 03
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                Social Media Post Ideas & 30-Day Content Calendar
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">
                Never stare at a blank screen again. A rolling 4-week cadence combining behind-the-scenes karigar craft, happy customer reviews, weekly arrivals, and festive build-ups.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container-lowest px-space-md py-space-xs rounded-xl shadow-sm">
                5 Categories • Zero Repetition Guarantee
              </span>
            </div>
          </div>

          {/* Weekly Pillar Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-secondary font-bold uppercase">Weekdays</span>
                <span className="material-symbols-outlined text-sm text-outline">handyman</span>
              </div>
              <h4 className="font-title-md text-title-md text-on-surface">Behind-The-Scenes</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Showcase your kitchen prep, karigari stitching, morning fresh stock unpacking, or shop cleaning ritual.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                  High Authenticity
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-bold uppercase">Customer Day</span>
                <span className="material-symbols-outlined text-sm text-outline">favorite</span>
              </div>
              <h4 className="font-title-md text-title-md text-on-surface">Customer Spotlight</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                A real Sharma ji or Gupta ji smiling with their purchase. Ready review re-write in conversational Hindi/English.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                  Social Proof
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-tertiary-container font-bold uppercase">Midweek Drop</span>
                <span className="material-symbols-outlined text-sm text-outline">sell</span>
              </div>
              <h4 className="font-title-md text-title-md text-on-surface">New Arrivals Feature</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Spotlight 1 high-margin product with clear pricing, dimensions, and reasons why it sells out so fast.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                  Direct Sales
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-secondary font-bold uppercase">Education</span>
                <span className="material-symbols-outlined text-sm text-outline">tips_and_updates</span>
              </div>
              <h4 className="font-title-md text-title-md text-on-surface">Care Tips & Hacks</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                "How to care for pure Kanjeevaram silk" or "How to store homemade namkeen crunchy in monsoon humidity."
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                  Saves & Shares
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary font-bold uppercase">Weekend Rush</span>
                <span className="material-symbols-outlined text-sm text-outline">storefront</span>
              </div>
              <h4 className="font-title-md text-title-md text-on-surface">Weekend Walk-in Call</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Store visit prompt with free parking notes, chai invitation, and weekend-only special discount codes.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                  Footfall Driver
                </span>
              </div>
            </div>
          </div>

          {/* Calendar Preview Interactive Tray */}
          <div className="bg-surface-container rounded-2xl p-space-lg flex flex-col lg:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">
                30
              </div>
              <div>
                <h4 className="font-title-md text-title-md text-on-surface">Automated 1-Click Calendar Sync</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Export directly into your Google Calendar or download as a simple WhatsApp PDF schedule for your staff.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                className="px-space-lg py-space-sm rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors shadow-sm cursor-pointer"
                onClick={() => showCopyToast('Sample PDF Schedule downloaded!')}
              >
                Download Sample PDF
              </button>
              <button
                className="px-space-lg py-space-sm rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm cursor-pointer"
                onClick={() => onNavigate('ai-marketing-studio', 'push')}
              >
                Generate My Month
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: Product Description Generator (WhatsApp & ONDC Optimized) */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface" id="feature-products">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
              Module 04
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Product Description Generator</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Optimized for WhatsApp Business Catalogs, ONDC buyer apps, and Dukaan or Shopify stores. We highlight genuine Indian craftsmanship, certified materials, exact local dimensions, and realistic care guidelines.
            </p>
            <div className="flex flex-col gap-space-sm mt-space-sm">
              <div className="flex items-start gap-space-sm p-space-md bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary mt-0.5">verified_user</span>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface">Craft & Origin Highlighting</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mentions authentic weave traditions, brass purity grades, or organic certifications automatically.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-md bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary mt-0.5">format_list_bulleted</span>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface">WhatsApp Catalog Ready Formatting</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Includes bullet points with emojis that render cleanly on low-bandwidth mobile screens without awkward cutoffs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-md bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary mt-0.5">currency_rupee</span>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface">Clear Pricing & GST Details</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero hidden surprises. Shows MRP, offer price, and inclusive tax line items cleanly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Specimen Card */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary">inventory_2</span>
                  <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                    Live WhatsApp Catalog Mockup
                  </span>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                  ONDC Compatible
                </span>
              </div>

              <div className="w-full h-48 rounded-xl overflow-hidden bg-surface-container relative">
                <img
                  alt="Hand-Carved Brass Urli Bowl with Bells"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBurGVpK4KRSB_V-he2_muUa7Vc7wrTsKkdI0Q2gup7uIs3pPkK6H6OSnZngm6VSkFb0ol0jGAaA15qD8hDBUKnIB1GhPDAFb0nZluwm7mKdeky9JzpbLxhhKm9ySUCFAD99_LAuIKSMOlSmDLYTNtPDp1QDu-zNUYL49rxy6KJa0GO9EXqm2hkeIk6oRmEp2Q0fn3_ADZgxt7dJzNAeSUCPKMEzKXrHQhRvrRGA5KeOLnpO4_RvniPmQ"
                />
                <div className="absolute bottom-2 left-2 px-space-xs py-1 rounded bg-surface/90 font-label-md text-label-md text-on-surface">
                  Item SKU #LB-BR-402
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Hand-Carved Brass Urli Bowl with Bells
                  </h3>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    ₹1,450 <span className="font-body-sm text-body-sm text-outline font-normal">incl. GST</span>
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Made by traditional Moradabad artisans using virgin brass sheet. Perfect for floating flowers & tea lights during poojas or welcoming guests at the foyer.
                </p>
              </div>

              <div className="bg-surface-container-low p-space-md rounded-xl font-body-sm text-body-sm text-on-surface flex flex-col gap-1">
                <div>• <strong>Material:</strong> 100% Solid Brass (Lacquer Coated - No Tarnishing)</div>
                <div>• <strong>Size / Diameter:</strong> 10 inches (approx. 850 grams)</div>
                <div>• <strong>Care:</strong> Wipe with dry soft microfiber cloth; avoid acid cleaners</div>
                <div>• <strong>Shipping:</strong> Safe foam boxed dispatch within 24 hours across India</div>
              </div>

              <div className="flex items-center justify-between pt-space-xs">
                <span className="font-label-md text-label-md text-secondary font-semibold">
                  ✓ 1-Click Copy to WhatsApp Catalog
                </span>
                <button
                  className="px-space-md py-space-xs rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(`*Hand-Carved Brass Urli Bowl with Bells* - ₹1,450 incl. GST\nMade by traditional Moradabad artisans using virgin brass sheet.\n• Material: 100% Solid Brass\n• Size: 10 inches\n• Safe foam boxed dispatch across India.`);
                    showCopyToast('WhatsApp Catalog spec copied!');
                  }}
                >
                  Copy Description
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: Customer Message & WhatsApp Blast Generator */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low" id="feature-whatsapp">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Module 05
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                Customer Message & WhatsApp Blast Generator
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">
                Communicate with warmth and courtesy. Polite payment reminders, order tracking alerts, VIP greetings, and heartfelt festival greetings that build lifetime trust without sounding like spam.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="px-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
                Anti-Spam Formatted
              </span>
            </div>
          </div>

          {/* 4 Quick Scenario Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase font-bold text-secondary">Udhaar / Payment</span>
                  <span className="material-symbols-outlined text-outline">account_balance_wallet</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface">Gentle Khata Reminder</h4>
                <div className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  "Namaste Priya ji 🙏 Asha hai aap theek hain. Aapka order #341 ka balance ₹1,200 pending hai. Asani ke liye humara UPI QR code neeche attach hai. Shukriya!"
                </div>
              </div>
              <div className="pt-space-md flex items-center justify-between text-outline font-label-md text-label-md">
                <span>Dignified & respectful</span>
                <span
                  className="text-secondary font-semibold cursor-pointer hover:underline"
                  onClick={() => handleUseTemplate('Khata Reminder')}
                >
                  Use Template →
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase font-bold text-primary">Logistics</span>
                  <span className="material-symbols-outlined text-outline">local_shipping</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface">Dispatch & Courier Update</h4>
                <div className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  "Aapka parcel dispatch ho chuka hai! 📦 Delhivery AWB: 98412948. Expected delivery: Kal shaam tak. Agar koi madad chahiye toh isi number pe ping karein."
                </div>
              </div>
              <div className="pt-space-md flex items-center justify-between text-outline font-label-md text-label-md">
                <span>Reduces customer calls</span>
                <span
                  className="text-secondary font-semibold cursor-pointer hover:underline"
                  onClick={() => handleUseTemplate('Courier Update')}
                >
                  Use Template →
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase font-bold text-tertiary-container">VIP Privileges</span>
                  <span className="material-symbols-outlined text-outline">star</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface">Secret First-Look Access</h4>
                <div className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  "Aap humare premium customer hain ✨ Kal se public sale shuru hogi, par aapke liye 24 ghante pehle exclusive reservation link open kiya hai. Check here..."
                </div>
              </div>
              <div className="pt-space-md flex items-center justify-between text-outline font-label-md text-label-md">
                <span>Drives 4x conversions</span>
                <span
                  className="text-secondary font-semibold cursor-pointer hover:underline"
                  onClick={() => handleUseTemplate('VIP Access')}
                >
                  Use Template →
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase font-bold text-secondary">Personal Touch</span>
                  <span className="material-symbols-outlined text-outline">celebration</span>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface">Heartfelt Subhkamnayein</h4>
                <div className="p-space-md bg-surface-container-low rounded-xl font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  "Aapko aur aapke poore parivar ko Navratri ki hardik badhaiyan! 🌸 Mata Rani aapke ghar sukh aur samriddhi layein. Humari taraf se ek chhota shagun coupon..."
                </div>
              </div>
              <div className="pt-space-md flex items-center justify-between text-outline font-label-md text-label-md">
                <span>Warm relation builder</span>
                <span
                  className="text-secondary font-semibold cursor-pointer hover:underline"
                  onClick={() => handleUseTemplate('Festival Greeting')}
                >
                  Use Template →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: Business Profile & Saved Content Dashboard */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface" id="feature-profile">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary">store</span>
                  <h3 className="font-title-md text-title-md text-on-surface">Shop Profile Vault</h3>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                  Auto-Inject Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm">
                <div className="p-space-sm bg-surface-container rounded-xl">
                  <span className="font-label-md text-label-md text-outline block">Registered Shop Name</span>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">Ananya Handloom House</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-xl">
                  <span className="font-label-md text-label-md text-outline block">GSTIN Number</span>
                  <span className="font-body-md text-body-md text-on-surface font-semibold">08AAACA1234F1Z8</span>
                </div>
              </div>
              <div className="p-space-sm bg-surface-container rounded-xl">
                <span className="font-label-md text-label-md text-outline block">Store Address & Landmarks</span>
                <span className="font-body-sm text-body-sm text-on-surface">Shop 14, Main Market, Near Clock Tower, Jodhpur, Rajasthan 342001</span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm">
                <div className="p-space-sm bg-surface-container rounded-xl">
                  <span className="font-label-md text-label-md text-outline block">Official UPI ID for QR</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-mono">ananyahandloom@okaxis</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-xl">
                  <span className="font-label-md text-label-md text-outline block">Primary Brand Voice</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">Traditional & Welcoming</span>
                </div>
              </div>
              <div className="p-space-sm bg-secondary-container/30 rounded-xl flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-sm">info</span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Every generation automatically incorporates your real address, UPI, and tax info without retyping.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-space-md">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
              Module 06
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Business Profile & Saved Content Dashboard
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Fill your business facts once. LocalBoost commits your registered store name, landmark, GSTIN, UPI ID, preferred tone, and primary keywords to memory so you never copy-paste again.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs font-title-md text-title-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-base">task_alt</span>
                  <span>Zero Hallucinations</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The AI adheres to your confirmed store addresses and payment methods strictly.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs font-title-md text-title-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-base">task_alt</span>
                  <span>Regional Custom Tags</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Store specific terms like 'Pure Zari', 'Shuddh Ghee', or 'Free Alteration'.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 7: Content History & Campaign Tracking */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low" id="feature-tracking">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Module 07
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                Content History & Basic Campaign Tracking
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">
                Re-run what already made money. Archive seasonal promos, track copy engagement tags, and re-launch last year's highest grossing campaign in 1 click.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-md text-label-md text-secondary bg-secondary-container px-space-md py-space-xs rounded-xl font-semibold">
                1-Click Campaign Re-run
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-container">
                  <th className="pb-space-sm font-label-md text-label-md text-outline uppercase">Campaign Name</th>
                  <th className="pb-space-sm font-label-md text-label-md text-outline uppercase">Channel</th>
                  <th className="pb-space-sm font-label-md text-label-md text-outline uppercase">Date Run</th>
                  <th className="pb-space-sm font-label-md text-label-md text-outline uppercase">Status / Result</th>
                  <th className="pb-space-sm font-label-md text-label-md text-outline uppercase text-right">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                <tr>
                  <td className="py-space-md">
                    <div className="font-title-md text-title-md text-on-surface">Diwali Early Bird Hamper</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Dry fruit mix & pure silver diya bundle</div>
                  </td>
                  <td className="py-space-md">
                    <span className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                      WhatsApp Blast
                    </span>
                  </td>
                  <td className="py-space-md font-body-sm text-body-sm text-on-surface">Nov 04, 2024</td>
                  <td className="py-space-md">
                    <span className="font-label-md text-label-md text-secondary font-semibold">142 Orders Attributed</span>
                  </td>
                  <td className="py-space-md text-right">
                    <button
                      className="px-space-md py-1 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all cursor-pointer"
                      onClick={() => onNavigate('ai-marketing-studio', 'push')}
                    >
                      Re-Run Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-space-md">
                    <div className="font-title-md text-title-md text-on-surface">Monsoon Handloom Clearance</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Chanderi sarees flat 25% discount</div>
                  </td>
                  <td className="py-space-md">
                    <span className="px-space-xs py-1 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                      Instagram Reel + Post
                    </span>
                  </td>
                  <td className="py-space-md font-body-sm text-body-sm text-on-surface">Aug 18, 2024</td>
                  <td className="py-space-md">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">4.8k Impressions</span>
                  </td>
                  <td className="py-space-md text-right">
                    <button
                      className="px-space-md py-1 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all cursor-pointer"
                      onClick={() => onNavigate('ai-marketing-studio', 'push')}
                    >
                      Re-Run Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-space-md">
                    <div className="font-title-md text-title-md text-on-surface">Akshaya Tritiya Pre-Booking</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">Zero making charges on coin booking</div>
                  </td>
                  <td className="py-space-md">
                    <span className="px-space-xs py-1 rounded bg-surface-container text-on-surface font-label-md text-label-md">
                      SMS & WhatsApp
                    </span>
                  </td>
                  <td className="py-space-md font-body-sm text-body-sm text-on-surface">May 08, 2024</td>
                  <td className="py-space-md">
                    <span className="font-label-md text-label-md text-secondary font-semibold">Sold Out in 6 hrs</span>
                  </td>
                  <td className="py-space-md text-right">
                    <button
                      className="px-space-md py-1 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all cursor-pointer"
                      onClick={() => onNavigate('ai-marketing-studio', 'push')}
                    >
                      Re-Run Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION: Why LocalBoost vs Generic AI */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
              Unmatched Context
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Why LocalBoost vs Generic Western AI</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Tools like ChatGPT or generic copy generators were trained on Silicon Valley marketing and English idioms. Here is what happens when you run Indian retail campaigns through them:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Generic AI Column */}
            <div className="bg-surface-container-high rounded-2xl p-space-lg flex flex-col gap-space-md opacity-90">
              <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-dim">
                <span className="material-symbols-outlined text-error">cancel</span>
                <h3 className="font-title-md text-title-md text-on-surface">Generic Western AI Tools</h3>
              </div>
              <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface-variant">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error mt-0.5 text-base">close</span>
                  <div>
                    <strong className="text-on-surface block">Translates English literally</strong>
                    Phrases sound awkward and synthetic when translated to Hindi or regional dialects (e.g. "Grab this deal" becomes unnatural bookish text).
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error mt-0.5 text-base">close</span>
                  <div>
                    <strong className="text-on-surface block">Ignorant of Regional Dates & Festivals</strong>
                    Assumes Black Friday and Halloween; completely misses Chhath Puja, Dhanteras timing, or Ganesh Chaturthi nuances.
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error mt-0.5 text-base">close</span>
                  <div>
                    <strong className="text-on-surface block">Unusable WhatsApp Formatting</strong>
                    Generates 500-word essays that fail on mobile devices and triggers WhatsApp spam filters.
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-error mt-0.5 text-base">close</span>
                  <div>
                    <strong className="text-on-surface block">Requires Prompt Engineering Skills</strong>
                    Forces store owners to type complex 200-word prompt commands each time they want a simple discount post.
                  </div>
                </div>
              </div>
            </div>

            {/* LocalBoost Column */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary">verified</span>
                  <h3 className="font-title-md text-title-md text-primary">LocalBoost Bharat Engine</h3>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                  Tuned for India
                </span>
              </div>
              <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-base">check</span>
                  <div>
                    <strong className="text-primary block">Native Hinglish & Colloquial Warmth</strong>
                    Uses genuine retail dialogue—"Shubh Aagman", "Loot Offer", "Pure Desi Ghee", "Kapda Faad Discount"—that drives immediate buying action.
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-base">check</span>
                  <div>
                    <strong className="text-primary block">Tithi & Muhurat Aware Timing</strong>
                    Pre-loaded with accurate Indian calendar timings for 50+ central and state-specific celebrations and holidays.
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-base">check</span>
                  <div>
                    <strong className="text-primary block">WhatsApp-Native Formatting</strong>
                    Brevity-focused, clean emojis, UPI QR placeholders, and clickable phone call-to-actions that respect user attention.
                  </div>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-base">check</span>
                  <div>
                    <strong className="text-primary block">Zero Setup & Form-Free Prompts</strong>
                    Simple tap buttons: select your festival, select discount percentage, and generate. Any shop staff member can operate it easily.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof Showcase / Merchant Mosaic */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Proof From The Field
              </span>
              <h3 className="font-headline-md text-headline-md text-primary">
                Loved by Local Retailers Across 500+ Towns
              </h3>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-secondary text-sm">storefront</span>
              <span>From Chandni Chowk to Commercial Street</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container">
                <img
                  alt="Rajesh Aggarwal - Aggarwal Sweets"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn9agmTmd9fdAjroClk2tUio2xfD6FQZxj9A-OwB8iW7kU2NyDjn_zjA0RU8IAPB4efzPH1gD2pDNWuC8Eiae16k2unZdYl6rp8Mw5Ltb2LD_5s8MuU9lhsbJjtDtP9wD1gkJSPXtV7Hz-EkJXfgi7JhMp4I8aRtafDVuoszTnJfbyh8GRROIHsj0k8FzoG5K60U05aEH6HySi8qDQGP-GGTGgD5etbfwBM2bN-HJOLMURcX6_mjo5iA"
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface italic">
                "Pehle festive campaign agency se karwate the jo 2 hafte leti thi. LocalBoost se humne Raksha Bandhan offer 5 minute mein banaya aur ₹1.4 lakh ke orders WhatsApp par book kiye."
              </p>
              <div className="mt-auto">
                <span className="font-title-md text-title-md text-on-surface block font-semibold">Rajesh Aggarwal</span>
                <span className="font-label-md text-label-md text-outline">Aggarwal Sweets & Dry Fruits, Bareilly</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container">
                <img
                  alt="Tanvi Kulkarni - Ethnic Boutique"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNV_iWXifcRYjSQw3bPwx2DRKNskRClqVCU6C3kFzaoT9JpOef9EbxgRfYp7BWER0xvQ9FkCJypyQy7OumV-OsSieHTYVhFww7Y0v4gQXpNi9iEUFhflUiFs11NCC9yb-htmHBTxqsTlFjrLZ-KUNBRAW0p_aXfPHdPkbgmKTGksneHaY4G0RS7T91tvoLulXK2dClOl1RmEowulhOE74v6BOVb-pdbhBV5BotktH6eZGq8m0LJCnXZw"
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface italic">
                "The Instagram captions with local Pune hashtags brought 40+ new walk-ins within our first month. And the customer WhatsApp reminders feel completely polite and personal."
              </p>
              <div className="mt-auto">
                <span className="font-title-md text-title-md text-on-surface block font-semibold">Tanvi Kulkarni</span>
                <span className="font-label-md text-label-md text-outline">Tanvi Ethnic Couture, FC Road, Pune</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
              <div className="h-44 w-full rounded-xl overflow-hidden bg-surface-container">
                <img
                  alt="Karthik & Deepa - Salon"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0dHzGtZt92lfzizaS_CebZ1Hub3W91JwWG4bcoDRHSKlJBQSvkVdl0SgMdYnPWJwFx7TfnSkT7gpFCZyLrLOXvc9SqAurH_MK0LujncI-8vS9_-tcp_OmJZsQWPdYWxMSW4GUXGiDb6W44L1CtWJlTmho-KB7_kn3_fzfvF9UbRdjaz9e7m3GzN7IhNfHhhOERG-AaiGpW6NnJfWagVB7_FFIRD84SrndzaY5CFj5pLvPHHTlnoJ1Aw"
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface italic">
                "The 30-day calendar solved our biggest headache: knowing what to post. Our salon bookings for bridal packages jumped 35% before wedding season."
              </p>
              <div className="mt-auto">
                <span className="font-title-md text-title-md text-on-surface block font-semibold">Karthik & Deepa</span>
                <span className="font-label-md text-label-md text-outline">GlowCraft Hair Studio, Coimbatore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION: Zero Setup Friction */}
      <section className="w-full py-space-xl px-6 lg:px-12 bg-primary text-on-primary">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-space-md">
          <span className="px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
            Zero Credit Card Required • Instant Free Start
          </span>
          <h2 className="font-display-hero text-display-hero text-on-primary max-w-3xl leading-tight">
            Give Your Store the Marketing Voice It Deserves Today
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl">
            Join over 12,000+ Indian kiranas, sweetshops, boutiques, and artisans creating authentic marketing on WhatsApp and Instagram in under 30 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-md mt-space-sm">
            <a
              className="cta-tertiary-btn px-8 py-4 rounded-xl font-title-md text-title-md shadow-xl hover:shadow-2xl transition-all flex items-center gap-space-xs cursor-pointer"
              data-path="get-started"
              href="#get-started"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('ai-marketing-studio', 'push');
              }}
            >
              <span>Start Free Campaign Generator</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>

            <a
              className="px-space-lg py-space-md rounded-xl bg-surface-container-lowest/10 text-on-primary hover:bg-surface-container-lowest/20 font-label-lg text-label-lg transition-colors cursor-pointer"
              href="#feature-instagram"
            >
              Explore Demo Outputs
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-space-lg text-on-primary-container font-label-md text-label-md mt-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-sm text-secondary-container">check_circle</span>
              <span>No English fluency required</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-sm text-secondary-container">check_circle</span>
              <span>Takes 1 minute to setup shop profile</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-sm text-secondary-container">check_circle</span>
              <span>GST invoicing ready</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
