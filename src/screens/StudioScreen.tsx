import React, { useState } from 'react';
import { Screen, ShopProfile, GeneratedCampaign } from '../types.ts';

interface StudioScreenProps {
  onNavigate: (screen: Screen, transition?: 'none' | 'push') => void;
}

export const StudioScreen: React.FC<StudioScreenProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'festive' | 'whatsapp' | 'instagram' | 'product' | 'calendar' | 'vault' | 'history'>('festive');

  // Shop Profile State
  const [profile, setProfile] = useState<ShopProfile>({
    name: 'Sri Lakshmi Handlooms & Soaps',
    category: 'Handicrafts & Heritage Retail',
    city: 'Bangalore, Karnataka',
    landmark: 'Near Jayanagar 4th Block Complex',
    gstin: '29AABCS1429K1Z5',
    upiId: 'srilakshmihandlooms@okhdfcbank',
    phone: '+91 98451 22390',
    voice: 'Traditional, Warm & Respectful',
  });

  // Generator inputs
  const [moduleType, setModuleType] = useState<string>('festive');
  const [productName, setProductName] = useState('Artisanal Mysore Sandalwood Soap Combo');
  const [offerDetail, setOfferDetail] = useState('Diwali Dhanteras Combo: Buy 2 get 1 festival gift box free + free doorstep delivery');
  const [language, setLanguage] = useState<'hinglish' | 'hindi' | 'english'>('hinglish');
  const [tone, setTone] = useState('Festive Blessing');
  const [selectedFestival, setSelectedFestival] = useState('Diwali');

  // Generation status
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputTitle, setOutputTitle] = useState('Generated: Diwali Dhanteras Combo Campaign');
  const [outputText, setOutputText] = useState(`🪔 *Shubh Deepavali Special Offer from Sri Lakshmi Handlooms & Soaps!* 🪔\n\nNamaste dear patron! Iss festive season, gift purity & nostalgia to your family with pure Mysore Sandalwood Soaps.\n\n✨ *Special Dhanteras Combo:*\n• Buy 2 Royal Sandal Packs, get 1 Festival Gift Box FREE\n• 100% pure cold-pressed natural sandalwood extract\n• Complimentary fragrant potli with every festive bag\n\n🚚 *Free Doorstep Delivery* for orders placed before Tuesday.\n📲 Reply *‘DIWALI’* to this message to reserve your gift box immediately!\n\n_Limited batches handcrafted for this festive week._`);
  const [copiedToast, setCopiedToast] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  // Saved campaigns
  const [savedCampaigns, setSavedCampaigns] = useState<GeneratedCampaign[]>([
    {
      id: 'c-1',
      title: 'Diwali Early Bird Hamper',
      type: 'whatsapp',
      content: '🪔 *Shubh Deepavali Special Offer!* Buy 2 get 1 gift box free + free doorstep delivery.',
      date: 'Nov 04, 2024',
      metrics: '142 Orders Attributed',
      product: 'Mysore Sandalwood Soap Box',
      offer: 'Buy 2 Get 1 Free',
    },
    {
      id: 'c-2',
      title: 'Monsoon Handloom Clearance',
      type: 'instagram',
      content: 'Chanderi sarees flat 25% discount. Pure weave, zero color bleeding guaranteed!',
      date: 'Aug 18, 2024',
      metrics: '4.8k Impressions',
      product: 'Chanderi Cotton Silk Sarees',
      offer: 'Flat 25% Off',
    },
    {
      id: 'c-3',
      title: 'Akshaya Tritiya Pre-Booking',
      type: 'festive',
      content: 'Book your puja silver gift boxes in advance with zero making charges!',
      date: 'May 08, 2024',
      metrics: 'Sold Out in 6 hrs',
      product: 'Puja Hampers',
      offer: 'Free Silver Coin',
    },
  ]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          module: moduleType,
          storeName: profile.name,
          niche: profile.category,
          city: profile.city,
          product: productName,
          offer: offerDetail,
          language,
          tone,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.content) {
          setOutputTitle(data.title || `Generated: ${productName} Campaign`);
          setOutputText(data.content);
        }
      } else {
        throw new Error('Fallback trigger');
      }
    } catch {
      // High-grade fallback
      if (language === 'hindi') {
        setOutputText(`🪔 *${profile.name} की ओर से ${selectedFestival} की हार्दिक शुभकामनाएं!* 🪔\n\nप्रिय ग्राहक,\nइस पावन अवसर पर आपके लिए विशेष पेशकश:\n• ${offerDetail}\n• 100% शुद्धता की गारंटी\n• ${profile.city} में तुरंत फ्री होम डिलीवरी\n\n📲 ऑर्डर के लिए अभी व्हाट्सएप पर रिप्लाई करें!\n\n_ऑफर सीमित समय के लिए मान्य है।_`);
      } else if (language === 'english') {
        setOutputText(`✨ *${selectedFestival} Celebration Special from ${profile.name}!* ✨\n\nNamaste dear customer,\nMake this festive season memorable with our authentic collection:\n\n🎁 *Exclusive Offer:*\n• ${offerDetail}\n• Direct artisan craft from ${profile.city}\n• Doorstep delivery on all early orders\n\n📲 WhatsApp us or DM to reserve your festive package today!`);
      } else {
        setOutputText(`🪔 *${selectedFestival} Mega Offer from ${profile.name}!* 🪔\n\nNamaste! Iss festive season apne ghar layein shuddhata aur parampara.\n\n✨ *Special Festive Dhamaka:*\n• ${offerDetail}\n• Pure authentic quality guaranteed\n• Doorstep express delivery across ${profile.city}\n\n📲 Bas iss message par 'HAAN' reply karein aur apna gift box book karein!\n\n_${profile.name} • ${profile.landmark}_`);
      }
      setOutputTitle(`Generated: ${selectedFestival} Special Campaign`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  const handleSaveToVault = () => {
    const newCamp: GeneratedCampaign = {
      id: `c-${Date.now()}`,
      title: outputTitle,
      type: (moduleType as any) || 'festive',
      content: outputText,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
      metrics: 'Draft Saved',
      product: productName,
      offer: offerDetail,
    };
    setSavedCampaigns([newCamp, ...savedCampaigns]);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleShareWhatsapp = () => {
    const encoded = encodeURIComponent(outputText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const applyQuickPreset = (pName: string, off: string, fest: string, mod: string) => {
    setProductName(pName);
    setOfferDetail(off);
    setSelectedFestival(fest);
    setModuleType(mod);
    handleGenerate();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Studio Top Navigation Header with exact required paths */}
      <header className="sticky top-0 z-40 w-full bg-surface-container-lowest border-b border-surface-container px-6 lg:px-10 h-16 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-6">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home', 'none')}
          >
            <img
              alt="LocalBoost Logo"
              className="h-7 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1U28i0I8H19MfUGK0dlhnxYfdUnx7mETDG5v9jLZYX0LrVFzr-EZGq7UJaQ7rWBWniqMcbY6t3qrPO-Br4izgd-tv3wWnJgaKDkY_sw0kMQ-xbqUZYfW72Pfpvv9-K-a2Zu7piw_dbwnwD9r9J9pvQcdmlqc1Ew9uGegEhEYa3Mhi2mrMgzoIFuMarzQHRMEq7tZQaNdylD7b3juGYnXv7Nf1m9IVPbaKF_rv4G8BXAIlEhLdbqkrne93F9"
            />
            <span className="font-headline-sm text-headline-sm text-primary font-bold">LocalBoost</span>
            <span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-md text-xs font-semibold">
              Studio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-body-sm text-on-surface-variant border-l border-surface-container pl-6">
            <span className="flex items-center gap-1.5 text-secondary font-medium">
              <span className="material-symbols-outlined text-sm">storefront</span>
              {profile.name}
            </span>
            <span>•</span>
            <span className="text-on-surface-variant font-mono text-xs">{profile.city}</span>
          </div>
        </div>

        {/* Required Links in header: data-path="home" and data-path="pricing" */}
        <div className="flex items-center gap-3">
          <a
            className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
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
            className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors cursor-pointer"
            data-path="pricing"
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('pricing', 'none');
            }}
          >
            Pricing
          </a>

          <div className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-md text-xs font-semibold">
            <span className="material-symbols-outlined text-sm text-secondary">bolt</span>
            <span>12 Free Credits Left</span>
          </div>

          <a
            className="px-4 py-1.5 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-all shadow-sm cursor-pointer"
            data-path="pricing"
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('pricing', 'none');
            }}
          >
            Upgrade Plan
          </a>
        </div>
      </header>

      {/* Main Studio Body: Aside Sidebar + Central Workbench */}
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
        {/* Studio Aside Navigation */}
        <aside className="w-full lg:w-72 bg-surface-container-low/60 border-r border-surface-container p-4 lg:p-6 flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div>
              <span className="font-label-md text-label-md text-outline font-bold uppercase tracking-wider text-xs block mb-3 px-2">
                Studio Modules
              </span>
              <nav className="space-y-1">
                {[
                  { id: 'festive', label: 'Festive Creative Studio', icon: 'celebration', sub: 'Diwali, Eid, Puja' },
                  { id: 'whatsapp', label: 'WhatsApp Blast Bot', icon: 'chat', sub: 'Khata, VIP & Offers' },
                  { id: 'instagram', label: 'Instagram Captions & Reels', icon: 'photo_camera', sub: 'Hooks & City Tags' },
                  { id: 'product', label: 'Product & ONDC Catalog', icon: 'shopping_bag', sub: 'Specs & Dimensions' },
                  { id: 'calendar', label: '30-Day Content Planner', icon: 'calendar_month', sub: 'Daily Retail Prompts' },
                  { id: 'vault', label: 'Shop Profile Vault', icon: 'store', sub: 'GSTIN, UPI & Voice' },
                  { id: 'history', label: 'Saved Campaigns', icon: 'folder_special', sub: '1-Click Re-run' },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-primary-container text-on-primary shadow-xs font-semibold'
                        : 'text-on-surface hover:bg-surface-container'
                    }`}
                    onClick={() => {
                      setActiveTab(item.id as any);
                      if (['festive', 'whatsapp', 'instagram', 'product'].includes(item.id)) {
                        setModuleType(item.id);
                      }
                    }}
                  >
                    <span className="material-symbols-outlined text-lg shrink-0">{item.icon}</span>
                    <div className="truncate">
                      <div className="text-body-sm font-semibold truncate leading-tight">{item.label}</div>
                      <div
                        className={`text-[11px] truncate ${
                          activeTab === item.id ? 'text-primary-fixed' : 'text-on-surface-variant'
                        }`}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Presets Section */}
            <div>
              <span className="font-label-md text-label-md text-outline font-bold uppercase tracking-wider text-xs block mb-2 px-2">
                Quick Indian Presets
              </span>
              <div className="space-y-1.5">
                {[
                  { name: 'Diwali Dhanteras BOGO', off: 'Buy 2 get 1 free gift box', fest: 'Diwali', mod: 'festive' },
                  { name: 'Khata Payment Ping', off: 'Pending ₹1,200 balance gentle reminder', fest: 'Regular', mod: 'whatsapp' },
                  { name: 'Monsoon Clearance 25%', off: 'Flat 25% on pure cotton & silk', fest: 'Monsoon', mod: 'instagram' },
                  { name: 'Brass Diya WhatsApp Catalog', off: '₹1,450 incl GST foam packed', fest: 'Puja', mod: 'product' },
                ].map((pr, pIdx) => (
                  <button
                    key={pIdx}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors flex items-center justify-between cursor-pointer"
                    onClick={() => applyQuickPreset(pr.name, pr.off, pr.fest, pr.mod)}
                  >
                    <span className="truncate">{pr.name}</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Aside Required Path: //aside//a[@data-path='pricing'] */}
          <div className="pt-6 border-t border-surface-container mt-6">
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-xs border border-surface-container">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary text-base">verified</span>
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  Vyapar Plan (₹499/mo)
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 leading-snug">
                Unlock 150 campaigns, WhatsApp blast templates, and official GST tax invoices.
              </p>
              <a
                className="cta-primary-btn w-full py-2.5 px-3 rounded-xl transition-all font-label-md text-label-md flex items-center justify-center gap-1.5 font-bold cursor-pointer shadow-md"
                data-path="pricing"
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('pricing', 'push');
                }}
              >
                <span>View Rupee Pricing</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Central Studio Workspace */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {/* Toast notifications */}
          {copiedToast && (
            <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container">check_circle</span>
              <span className="font-label-md">Campaign copy copied to clipboard!</span>
            </div>
          )}
          {saveToast && (
            <div className="fixed bottom-6 right-6 z-50 bg-secondary text-on-secondary px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined">bookmark_added</span>
              <span className="font-label-md">Saved to Campaign History!</span>
            </div>
          )}

          {/* TAB 1-4: The Generator Workspace */}
          {['festive', 'whatsapp', 'instagram', 'product'].includes(activeTab) && (
            <div className="space-y-6">
              {/* Header bar of generator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-container">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    {activeTab === 'festive' && 'Festive & Seasonal Campaign Creator'}
                    {activeTab === 'whatsapp' && 'WhatsApp Broadcast & Message Blaster'}
                    {activeTab === 'instagram' && 'Instagram Captions & Reels Hook Engine'}
                    {activeTab === 'product' && 'Product Spec & WhatsApp Catalog Generator'}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Autonomous Indian copywriting optimized for WhatsApp conversion and local retail sales.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-xs font-semibold">
                    Engineered for Bharat
                  </span>
                </div>
              </div>

              {/* Two Column Grid: Inputs on Left, Output Preview on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Form */}
                <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container space-y-4">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      Product, Service or Campaign Subject
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      Discount Offer / Incentive / Hook
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container resize-none"
                      rows={3}
                      value={offerDetail}
                      onChange={(e) => setOfferDetail(e.target.value)}
                    />
                  </div>

                  {activeTab === 'festive' && (
                    <div>
                      <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                        Upcoming Celebration / Occasion
                      </label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest cursor-pointer"
                        value={selectedFestival}
                        onChange={(e) => setSelectedFestival(e.target.value)}
                      >
                        <option value="Diwali">Diwali & Dhanteras Dhamaka</option>
                        <option value="Navratri">Navratri & Garba Festival</option>
                        <option value="Eid">Eid & Ramzan Bazaar</option>
                        <option value="Durga Puja">Durga Puja / Pandal Hopping</option>
                        <option value="Rakhi">Raksha Bandhan Gifting</option>
                        <option value="Pongal">Pongal & Makar Sankranti</option>
                        <option value="Wedding Season">Wedding & Shaadi Trousseau</option>
                        <option value="Monsoon Sale">Monsoon Flash Clearance</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1.5">
                      Target Language & Dialect
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'hinglish', label: 'Hinglish' },
                        { id: 'hindi', label: 'शुद्ध हिंदी' },
                        { id: 'english', label: 'Indian English' },
                      ].map((lg) => (
                        <button
                          key={lg.id}
                          className={`py-2 px-2 text-center rounded-lg font-label-md text-xs cursor-pointer transition-colors ${
                            language === lg.id
                              ? 'bg-secondary-container text-on-secondary-container font-bold'
                              : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                          }`}
                          type="button"
                          onClick={() => setLanguage(lg.id as any)}
                        >
                          {lg.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1.5">
                      Brand Tone
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Festive Blessing', 'Warm & Relatable', 'Urgent Flash Sale', 'Steal Deal'].map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-full text-xs font-label-md cursor-pointer transition-colors ${
                            tone === t
                              ? 'bg-primary-container text-on-primary'
                              : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                          }`}
                          onClick={() => setTone(t)}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="cta-primary-btn w-full py-3.5 rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-50"
                    disabled={isGenerating}
                    onClick={handleGenerate}
                  >
                    <span className={`material-symbols-outlined text-base ${isGenerating ? 'animate-spin' : ''}`}>
                      {isGenerating ? 'sync' : 'auto_awesome'}
                    </span>
                    <span>{isGenerating ? 'Crafting Vernacular Campaign...' : 'Generate Campaign Now'}</span>
                  </button>
                </div>

                {/* Right Output Preview */}
                <div className="lg:col-span-7 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between min-h-[460px]">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                        <span className="font-label-lg text-label-lg text-on-surface font-bold">
                          {outputTitle}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-md text-xs">
                        Verified for WhatsApp & Social
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="mt-4 p-5 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface whitespace-pre-line leading-relaxed border border-surface-container shadow-inner">
                      {outputText}
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-on-surface-variant font-label-md text-xs">
                      <span className="material-symbols-outlined text-sm text-secondary">verified</span>
                      <span>Formatted with WhatsApp *bold*, emojis, and high-readability paragraph breaks.</span>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-6 border-t border-surface-container mt-6 flex flex-wrap items-center justify-between gap-3">
                    <button
                      className="px-4 py-2 rounded-xl bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-all font-label-md text-label-md flex items-center gap-1.5 shadow-xs cursor-pointer font-semibold"
                      onClick={handleShareWhatsapp}
                    >
                      <span className="material-symbols-outlined text-base">send</span>
                      <span>Open in WhatsApp</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        className="px-4 py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-label-md text-label-md flex items-center gap-1.5 cursor-pointer"
                        onClick={handleSaveToVault}
                      >
                        <span className="material-symbols-outlined text-base">bookmark</span>
                        <span>Save</span>
                      </button>

                      <button
                        className="px-5 py-2 rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-all font-label-md text-label-md flex items-center gap-1.5 shadow-xs cursor-pointer"
                        onClick={handleCopy}
                      >
                        <span className="material-symbols-outlined text-base">content_copy</span>
                        <span>Copy Text</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: 30-Day Content Calendar */}
          {activeTab === 'calendar' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-container">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    30-Day Content Calendar & Weekly Cadence
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Rolling 4-week Indian retail plan so your shop never runs out of post ideas.
                  </p>
                </div>
                <button
                  className="px-4 py-2 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(`Monday: Behind the scenes karigar making\nTuesday: Customer review re-write\nWednesday: New Arrival Spotlight\nThursday: Care & storage tips\nFriday: Weekend walk-in offer code`);
                    setCopiedToast(true);
                    setTimeout(() => setCopiedToast(false), 2000);
                  }}
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Copy Full Month Schedule</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    week: 'Week 1: Heritage & Craft',
                    mon: '📸 Monday: Raw sandalwood preparation video',
                    wed: '👗 Wednesday: Signature Gift Box spotlight (₹1,450)',
                    fri: '🛍️ Friday: Weekend walk-in gift with every purchase',
                    sat: '💬 Saturday: WhatsApp reminder for Dhanteras delivery',
                  },
                  {
                    week: 'Week 2: Social Proof & Trust',
                    mon: '💬 Monday: Sharma Ji unboxing video testimonial',
                    wed: '📦 Wednesday: Behind-the-counter packing rush for Diwali',
                    fri: '🔥 Friday: 48-Hour Early Bird reservation cutoff',
                    sat: '🪔 Saturday: Free Silver Coin gift offer preview',
                  },
                  {
                    week: 'Week 3: Festive Surge',
                    mon: '🪔 Monday: Dhanteras puja gifting ready hampers',
                    wed: '🚚 Wednesday: Same-day delivery notification for local pin codes',
                    fri: '💥 Friday: Flash discount on last 15 festive boxes',
                    sat: '🙏 Saturday: Heartfelt Diwali greeting to VIP regulars',
                  },
                  {
                    week: 'Week 4: Post-Festival & Care',
                    mon: '🌿 Monday: How to preserve pure sandalwood fragrance',
                    wed: '✨ Wednesday: Winter collection sneak-peek announcement',
                    fri: '☕ Friday: Warm store invite for weekend shoppers',
                    sat: '📋 Saturday: Polite gentle khata balance follow-up',
                  },
                ].map((wk, wIdx) => (
                  <div key={wIdx} className="bg-surface-container-lowest p-5 rounded-2xl border border-surface-container shadow-xs space-y-3">
                    <span className="font-label-md text-label-md text-secondary font-bold block">
                      {wk.week}
                    </span>
                    <ul className="space-y-2 text-body-sm text-on-surface">
                      <li className="p-2 rounded-lg bg-surface-container-low">{wk.mon}</li>
                      <li className="p-2 rounded-lg bg-surface-container-low">{wk.wed}</li>
                      <li className="p-2 rounded-lg bg-surface-container-low">{wk.fri}</li>
                      <li className="p-2 rounded-lg bg-surface-container-low">{wk.sat}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: Shop Profile Vault */}
          {activeTab === 'vault' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-surface-container">
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Shop Profile Vault (Zero Hallucination Memory)
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Store your business facts once. LocalBoost automatically incorporates your official store name, GSTIN, UPI ID, and address in every campaign.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container shadow-sm max-w-2xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      Registered Shop Name
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      Business Category
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={profile.category}
                      onChange={(e) => setProfile({ ...profile, category: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      City & State
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={profile.city}
                      onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      Local Landmark / Market
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={profile.landmark}
                      onChange={(e) => setProfile({ ...profile, landmark: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      GSTIN (for tax compliance)
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm font-mono outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={profile.gstin}
                      onChange={(e) => setProfile({ ...profile, gstin: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                      Official UPI ID for Payment QR
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm font-mono outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                      type="text"
                      value={profile.upiId}
                      onChange={(e) => setProfile({ ...profile, upiId: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label-md text-label-md text-on-surface font-semibold block mb-1">
                    Store Phone / WhatsApp Business Line
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container"
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>

                <button
                  className="px-6 py-2.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm cursor-pointer"
                  onClick={() => {
                    setSaveToast(true);
                    setTimeout(() => setSaveToast(false), 2000);
                  }}
                >
                  Save Store Profile
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: Saved Campaigns History */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="pb-4 border-b border-surface-container">
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Saved Content History & Campaign Vault
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Re-run your past best performing campaigns in 1 click without re-typing.
                </p>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl border border-surface-container shadow-xs overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-surface-container bg-surface-container-low/50">
                      <th className="p-4 font-label-md text-label-md text-outline uppercase text-xs">Campaign Name</th>
                      <th className="p-4 font-label-md text-label-md text-outline uppercase text-xs">Channel</th>
                      <th className="p-4 font-label-md text-label-md text-outline uppercase text-xs">Date</th>
                      <th className="p-4 font-label-md text-label-md text-outline uppercase text-xs">Result / Status</th>
                      <th className="p-4 font-label-md text-label-md text-outline uppercase text-xs text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-sm">
                    {savedCampaigns.map((camp) => (
                      <tr key={camp.id} className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="p-4">
                          <span className="font-title-md text-body-md text-on-surface font-semibold block">
                            {camp.title}
                          </span>
                          <span className="text-xs text-on-surface-variant line-clamp-1">{camp.content}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-0.5 rounded-md bg-secondary-container text-on-secondary-container text-xs font-semibold uppercase">
                            {camp.type}
                          </span>
                        </td>
                        <td className="p-4 text-on-surface-variant">{camp.date}</td>
                        <td className="p-4 text-secondary font-medium">{camp.metrics}</td>
                        <td className="p-4 text-right">
                          <button
                            className="px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-all font-label-md text-xs cursor-pointer"
                            onClick={() => {
                              setOutputTitle(camp.title);
                              setOutputText(camp.content);
                              setActiveTab((camp.type as any) || 'festive');
                              setCopiedToast(true);
                              setTimeout(() => setCopiedToast(false), 2000);
                            }}
                          >
                            Re-Run in Studio
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
