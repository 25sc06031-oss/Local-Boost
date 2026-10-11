import React, { useState } from 'react';
import { Screen } from '../types.ts';

interface HomeScreenProps {
  onNavigate: (screen: Screen, transition?: 'none' | 'push') => void;
}

interface DemoPreset {
  product: string;
  offer: string;
  title: string;
  texts: {
    hinglish: string;
    hindi: string;
    english: string;
  };
}

const demoPresets: Record<string, DemoPreset> = {
  spice: {
    product: 'Malabar Organic Cardamom & Tellicherry Peppercorns',
    offer: 'Monsoon Aromas 25% Off + Free Recipe Booklet',
    title: 'Generated: Spice Monsoon Campaign',
    texts: {
      hinglish: `🌧️ *Baarish ka mausam aur taaza elaichi ki khushboo!* ☕✨\n\nMonsoon ki chai bina Kerala ki authentic green elaichi adhoori hai! Direct Wayanad plantation se fresh harvested peppercorns aur bold elaichi order kijiye.\n\n🔥 *Special Monsoon Flash Deal:*\n• Flat 25% OFF on 500g & 1Kg packs\n• FREE grandmother's traditional Kadha & Masala Chai recipe card\n• Vacuum sealed freshness locked for 12 months\n\nReply 'MASALA' to order immediately via WhatsApp! Shipping pan-India.\n\n#IndianSpices #MonsoonChai #VocalForLocal #KeralaSpices #ShuddhMasale`,
      hindi: `🌧️ *मानसून की पहली बारिश और शुद्ध इलायची की महक!* ☕✨\n\nवायनाड के बागानों से सीधे आपके घर—प्राकृतिक हरी इलायची और काली मिर्च।\n\nविशेष मानसून ऑफर:\n• 500 ग्राम व 1 किलो पैक पर सीधे 25% छूट\n• दादी माँ की स्पेशल कढ़ा और मसाला चाय रेसिपी बुक बिल्कुल मुफ्त!\n\nव्हाट्सएप पर 'मसाला' लिखकर भेजें और घर बैठे डिलीवरी पाएं।\n\n#भारतीयमसाले #शुद्धता #वोकलफॉरलोकल`,
      english: `🌧️ *Nothing beats authentic spices on a rainy morning!* ☕✨\n\nElevate your daily tea and biryanis with directly sourced Malabar green cardamom and sun-dried Tellicherry black peppercorns from Kerala.\n\n🔥 *Monsoon Season Special:*\n• 25% OFF on all 500g & 1kg bags\n• Complimentary Heritage Chai Recipe Booklet\n• Farm-sealed aroma and freshness guaranteed\n\nDM or WhatsApp 'SPICE' to receive yours at your doorstep within 48 hours!\n\n#VocalForLocal #DirectFromFarm #GourmetIndia #KeralaSpices`,
    },
  },
  kurti: {
    product: 'Bagru Hand-block Pure Cotton Kurtis',
    offer: 'Festive Collection Launch - Flat ₹200 off on first 50 orders',
    title: 'Generated: Handloom Kurti Launch',
    texts: {
      hinglish: `🌸 *Jaipur ka timeless Bagru prints ab aapke wardrobe mein!* 👗✨\n\nSummer & festive styling ke liye 100% breathable natural vegetable-dye cotton kurtis ready hain! Har kurti Jaipur ke master artisans ne hand-block stamp ki hai.\n\n🎉 *Exclusive Launch Offer:*\n• Flat ₹200 OFF on your first 50 orders (Use Code: BAGRU200)\n• Matching hand-block cotton dupatta included\n• Free exchanges within 7 days\n\nSizes 36 to 46 available. WhatsApp 'KURTI' for the full PDF catalogue!\n\n#HandloomIndia #JaipurKurti #VocalForLocal #SustainableFashion #BoutiqueIndia`,
      hindi: `🌸 *जयपुर के प्रसिद्ध बगरू हैंडब्लॉक प्रिंट्स का नया कलेक्शन!* 👗✨\n\nशुद्ध सूती कपड़े और प्राकृतिक रंगों से तैयार की गई मनमोहक कुर्तियां।\n\nविशेष लॉन्च ऑफर:\n• पहले 50 ऑर्डर्स पर तुरंत ₹200 की विशेष छूट!\n• 7 दिनों में आसान एक्सचेंज की सुविधा।\n\nकैटलॉग देखने के लिए अभी व्हाट्सएप पर 'कुर्ती' लिखकर भेजें।\n\n#हैंडलूम #जयपुरकुर्ती #स्वदेशीफैशन`,
      english: `🌸 *Celebrate the poetry of hand-block craftsmanship!* 👗✨\n\nPresenting our limited-batch Bagru Cotton Kurtis hand-stamped using traditional vegetable dyes by artisans in Rajasthan. Breathable, elegant, and timeless.\n\n🎉 *Launch Week Perk:*\n• Flat ₹200 OFF for the first 50 patrons\n• Free doorstep size trials in select pin codes\n• Standard matching stole with every set\n\nReply 'COLLECTION' to browse our curated WhatsApp catalog today!\n\n#BoutiqueIndia #HandmadeKurti #VocalForLocal #IndianArtisans`,
    },
  },
  mithai: {
    product: 'Pure Desi Ghee Kaju Katli & Dry Fruit Ladoos',
    offer: 'Raksha Bandhan Advance Booking - Complimentary Silver Coin on 2kg',
    title: 'Generated: Artisanal Mithai Box',
    texts: {
      hinglish: `🍬 *Bhai-Behen ke pyaar jaisi shuddh mithaas!* 💖🪔\n\nRakhi par chemical-free, 100% pure A2 Gir Cow Ghee se bani mithaiyon ka gift box reserve karein. No artificial essence, only pure cashew & organic jaggery.\n\n🎁 *Raksha Bandhan Pre-Booking Perk:*\n• Book 2 Kg & receive a 5g Silver coin complimentary\n• Beautiful festive gift packaging with Rakhi & Roli-Chawal included\n\nAdvance delivery booking closing soon! Reply 'MITHAI' to confirm.\n\n#RakhiSpecial #PureDesiGhee #MithaiIndia #RakshaBandhanGifts #VocalForLocal`,
      hindi: `🍬 *रक्षाबंधन के पावन पर्व पर शुद्ध देशी घी की मिठास!* 💖🪔\n\nशुद्ध काजू कतली और मेवे के लड्डू, जो बनाएं इस त्योहार को और भी खास।\n\nऑफर:\n• 2 किलो पर चांदी का सिक्का व राखी किट उपहार स्वरूप!\n• समय पर सुरक्षित होम डिलीवरी।\n\nऑर्डर करने के लिए व्हाट्सएप पर 'मिठाई' भेजें।\n\n#रक्षाबंधन #शुद्धमिठाई #काजुकतली`,
      english: `🍬 *Celebrate familial sweetness with pure tradition!* 💖🪔\n\nHandcrafted with A2 Desi Ghee and premium Goan cashews—our festive sweet boxes bring nostalgia to your Raksha Bandhan table.\n\n🎁 *Festival Pre-order Special:*\n• Book 2 Kg festive hampers and receive an embossed silver coin free\n• Includes sacred rakhi thread, roli, and chawal\n\nOrder via WhatsApp before stocks fill up for the festive batch!\n\n#ArtisanalMithai #FestiveIndia #RakhiGifting #PureGheeSweets`,
    },
  },
  salon: {
    product: 'Ayurvedic Ubtan & Bridal Glow Session',
    offer: 'Pre-Wedding Package - 30% Off on advance group appointments',
    title: 'Generated: Bridal Parlour Package',
    texts: {
      hinglish: `✨ *Shaadi season glow with 100% natural herbs!* 👰🌿\n\nChemical bleaches ko alvida kahiye! Hamara signature Chandan-Kesar Ubtan & Hydra Glow facial aapko dega naturally radiant bridal skin.\n\n💍 *Special Wedding Group Deal:*\n• 30% OFF on Bride + 3 Bridesmaids combo bookings\n• Complimentary organic mehendi styling consultation\n\nAppointments limited to 5 brides per weekend. WhatsApp 'GLOW' to check dates!\n\n#BridalGlowIndia #AyurvedicBeauty #ShaadiSeason #ParlourOffers #WeddingSkin`,
      hindi: `✨ *विवाह सीजन के लिए शुद्ध आयुर्वेदिक उबटन व ब्राइडल ग्लो!* 👰🌿\n\nकेसर और चंदन के प्राकृतिक गुणों से पाएं निखरी और चमकदार त्वचा।\n\nविशेष ब्राइडल पैकेज:\n• दुल्हन और सहेलियों के ग्रुप बुकिंग पर 30% तक की छूट!\n\nअपनी तारीख सुरक्षित करने के लिए तुरंत व्हाट्सएप करें।\n\n#ब्राइडलमेकअप #आयुर्वेदिकसौंदर्य #वेडिंगग्लो`,
      english: `✨ *Reveal that authentic bridal glow naturally!* 👰🌿\n\nSkip harsh salon chemicals with our therapeutic Kesar-Chandan ubtan treatment and herbal skin nourishment rituals.\n\n💍 *Bridal Party Advantage:*\n• 30% off group appointments (Bride + 3 guests)\n• Personalized skin analysis included\n\nWeekend slots fill fast! Reply 'GLOW' to reserve your personalized consultation.\n\n#BridalCareIndia #AyurvedicSkin #SalonOffers #IndianWeddings`,
    },
  },
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  // Hero preview state
  const [heroChannel, setHeroChannel] = useState<'whatsapp' | 'instagram'>('whatsapp');
  const [heroCopied, setHeroCopied] = useState(false);

  // Playground state
  const [currentPreset, setCurrentPreset] = useState<string>('spice');
  const [currentLang, setCurrentLang] = useState<'hinglish' | 'hindi' | 'english'>('hinglish');
  const [productInput, setProductInput] = useState<string>(demoPresets.spice.product);
  const [offerInput, setOfferInput] = useState<string>(demoPresets.spice.offer);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [playgroundCopied, setPlaygroundCopied] = useState(false);

  const heroWhatsappText = `🪔 *Shubh Deepavali Special Offer from Sri Lakshmi Handlooms & Soaps!* 🪔\n\nNamaste dear patron! Iss festive season, gift purity & nostalgia to your family with pure Mysore Sandalwood Soaps.\n\n✨ *Special Dhanteras Combo:*\n• Buy 2 Royal Sandal Packs, get 1 Festival Gift Box FREE\n• 100% pure cold-pressed natural sandalwood extract\n• Complimentary fragrant potli with every festive bag\n\n🚚 *Free Doorstep Delivery* for orders placed before Tuesday.\n📲 Reply *‘DIWALI’* to this message to reserve your gift box immediately!\n\n_Limited batches handcrafted for this festive week._`;

  const heroInstaText = `Bring the timeless fragrance of Karnataka temples to your Diwali puja home this year! ✨🪔\n\nThere’s nothing quite like the soothing, sacred aroma of authentic Mysore Sandalwood to welcome prosperity and guests.\n\n🎁 DIWALI CELEBRATION SPECIAL:\nBuy any 2 Luxury Mysore Sandal Bar Sets & receive an ornate festive gift box on us!\n\n🌿 100% Pure Sandalwood Essential Oil\n🌿 Hand-cured for 3 weeks\n🌿 Handloom packaging designed by local weavers\n\n📍 Available in-store at Jayanagar 4th Block or DM us ‘SANDAL’ for instant pan-India delivery before Dhanteras!\n\n.\n.\n#VocalForLocalIndia #MysoreSandalwood #DiwaliGiftHampers #BengaluruShopping #HandmadeInIndia #DiwaliGifting #TraditionalSelfCare #IndianFestivalSale`;

  const handleHeroCopy = () => {
    const textToCopy = heroChannel === 'whatsapp' ? heroWhatsappText : heroInstaText;
    navigator.clipboard.writeText(textToCopy);
    setHeroCopied(true);
    setTimeout(() => setHeroCopied(false), 2000);
  };

  const handleSelectPreset = (key: string) => {
    setCurrentPreset(key);
    setProductInput(demoPresets[key].product);
    setOfferInput(demoPresets[key].offer);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
    }, 400);
  };

  const handlePlaygroundCopy = () => {
    const textToCopy = demoPresets[currentPreset]?.texts[currentLang] || '';
    navigator.clipboard.writeText(textToCopy);
    setPlaygroundCopied(true);
    setTimeout(() => setPlaygroundCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-background to-surface pt-12 lg:pt-16 pb-20 px-6 lg:px-12">
        <div className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl" />

        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Top Badging & Micro Trust */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-md text-label-md text-primary tracking-wide uppercase font-semibold">
                🇮🇳 AI Built for Bharat MSMEs & Retail
              </span>
              <span className="text-outline-variant font-light">•</span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Hindi • Hinglish • English
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface tracking-tight font-bold">
              Big Marketing Ideas.<br className="hidden sm:inline" />
              <span className="text-primary-container">Made for Small Businesses.</span>
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Effortlessly create festive offers, Instagram captions, WhatsApp customer messages, and compelling product descriptions in seconds. Crafted specifically for Indian retail shops, cafes, boutiques, and homegrown brands in English, Hindi, and Hinglish.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                className="cta-primary-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-label-lg text-label-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                data-path="get-started"
                href="#get-started"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('ai-marketing-studio', 'push');
                }}
              >
                <span>Start Creating Free</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>

              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all cursor-pointer"
                data-path="features"
                href="#features-overview"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('features', 'none');
                }}
              >
                <span className="material-symbols-outlined text-lg text-secondary">explore</span>
                <span>Explore Features</span>
              </a>
            </div>

            {/* Micro-trust Badge Line */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-on-surface-variant font-label-md text-label-md pt-1">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-secondary">check_circle</span>
                No design skills needed
              </span>
              <span className="text-outline-variant">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-secondary">check_circle</span>
                ₹0 trial to test your first 15 posts
              </span>
              <span className="text-outline-variant">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base text-secondary">check_circle</span>
                Made for Indian retail
              </span>
            </div>
          </div>

          {/* Hero Interactive Mockup Showcase */}
          <div className="w-full max-w-5xl mx-auto bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
            {/* Window Chrome / Status Header */}
            <div className="bg-surface-container px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error/60" />
                  <span className="w-3 h-3 rounded-full bg-secondary-fixed-dim" />
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                  LocalBoost Studio • Live Generation Preview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">bolt</span> Auto-Optimized for Bharat
                </span>
              </div>
            </div>

            {/* Interactive Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 p-6 lg:p-8 gap-8 items-start">
              {/* Left: User Prompt & Retail Inputs */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary font-bold">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                      Sri Lakshmi Handlooms & Soaps
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Bangalore, Karnataka • Heritage Retail
                    </p>
                  </div>
                </div>

                {/* Visual Retail Card */}
                <div className="relative rounded-xl overflow-hidden h-40 bg-surface-container-high shadow-inner">
                  <img
                    alt="Artisanal Mysore Sandal Collection"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2oTOzovpQj7jygyJ7uzxKn6vMuqM3x0V9dF6sgKCLQuOZXFRlqtAvRG2hRWJIoWicB60plCcG3ZZFgDRVbCukXE34aF95FHAEZZ-iLsJm5qnDyVa-l-N0M09-cjfxzSu7cNl04ie7xxSdXvLqkBo6HQezLBr23sG0EjT_wmxPyMXqnASAxUvDkxQTcMN0Cf_dFY4mRi-InrZagGiaoXDmur16rUxpcmFAA73GNKzcKjQZlpWK7jWw4w"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent flex items-end p-3">
                    <span className="font-label-md text-label-md text-on-primary bg-primary-container/80 px-2.5 py-0.5 rounded-md">
                      Artisanal Mysore Sandal Collection
                    </span>
                  </div>
                </div>

                {/* Active Input Form Box */}
                <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-primary-container">psychology</span>
                      Current AI Marketing Prompt
                    </label>
                    <span className="font-label-md text-label-md text-on-surface-variant">Hinglish Tone</span>
                  </div>
                  <div className="bg-surface-container-lowest p-3 rounded-lg shadow-sm text-on-surface font-body-sm text-body-sm leading-relaxed">
                    "Diwali festive combo offer for Mysore Sandalwood Soaps. Buy 2 get 1 gift box free + free doorstep delivery before Dhanteras."
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                      #DiwaliOffer
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                      WhatsApp + Insta
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                      Kannada & English
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Generated Live Outputs (Tabbed View) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* Channel Switcher */}
                <div className="flex items-center justify-between pb-1">
                  <div className="inline-flex p-1 bg-surface-container rounded-xl gap-1">
                    <button
                      className={`channel-tab-btn px-4 py-1.5 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all ${
                        heroChannel === 'whatsapp'
                          ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                      onClick={() => setHeroChannel('whatsapp')}
                    >
                      <span className="material-symbols-outlined text-base text-secondary">chat</span>
                      WhatsApp Blast
                    </button>
                    <button
                      className={`channel-tab-btn px-4 py-1.5 rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-all ${
                        heroChannel === 'instagram'
                          ? 'bg-surface-container-lowest text-on-surface font-semibold shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                      onClick={() => setHeroChannel('instagram')}
                    >
                      <span className="material-symbols-outlined text-base text-tertiary-container">photo_camera</span>
                      Instagram Carousel
                    </button>
                  </div>
                  <button
                    className="inline-flex items-center gap-1 text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer"
                    onClick={handleHeroCopy}
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    <span>{heroCopied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>

                {/* WhatsApp Card Preview */}
                {heroChannel === 'whatsapp' && (
                  <div className="block bg-[#f0f7f3] rounded-xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 pb-2 text-secondary font-label-md text-label-md font-semibold">
                      <span className="material-symbols-outlined text-base">send</span>
                      Ready-to-Send WhatsApp Broadcast (With Emoji Formatting)
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm font-body-sm text-body-sm text-on-surface leading-relaxed whitespace-pre-line">
                      {heroWhatsappText}
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md pt-1">
                      <span>Optimized length: 98 words</span>
                      <span className="text-secondary font-medium">94% typical read rate on WhatsApp</span>
                    </div>
                  </div>
                )}

                {/* Instagram Card Preview */}
                {heroChannel === 'instagram' && (
                  <div className="bg-surface-container-low rounded-xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 pb-2 text-tertiary-container font-label-md text-label-md font-semibold">
                      <span className="material-symbols-outlined text-base">auto_awesome</span>
                      High-Conversion Instagram Caption + Local Hashtags
                    </div>
                    <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm font-body-sm text-body-sm text-on-surface leading-relaxed whitespace-pre-line">
                      {heroInstaText}
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md pt-1">
                      <span>Includes 8 verified high-reach Indian retail hashtags</span>
                      <span className="text-primary font-medium">Ready for IG Reels & Post Carousels</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION / FEATURE GRID */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface" id="features-overview">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider font-semibold mb-3">
              End-to-End Capabilities
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight">
              Everything your shop needs to sell more every festival, season & week.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              No generic Western agency templates. LocalBoost understands the pulse of weekly bazaar cycles, regional Indian festivities, customer manners, and WhatsApp commerce.
            </p>
          </div>

          {/* 6 Key Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. AI Instagram Caption Generator */}
            <div
              className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate('features', 'none')}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">auto_stories</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  AI Instagram Caption Generator
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Stop stressing over captions. Get witty, culturally relevant hooks, regional slang, call-to-actions, and curated high-traction hashtags like <span className="text-primary font-medium font-mono text-body-sm">#VocalForLocal</span> and <span className="text-primary font-medium font-mono text-body-sm">#BoutiqueIndia</span>.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-3 text-on-surface-variant font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Example:</span> "Navratri Chaniya Choli drop with 3 styling tips in Hindi & Gujarati."
              </div>
            </div>

            {/* 2. Promotional Offer & Festival Generator */}
            <div
              className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate('features', 'none')}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">celebration</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  Festive & Flash Offer Generator
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Tap immediately into high-spending Indian seasons: monsoon sales, Rakhi discounts, Durga Puja specials, Onam packages, or Diwali mega hampers without delays.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-3 text-on-surface-variant font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Example:</span> "Ganesh Utsav Modak boxes with Buy 1 Kg Get 250g Free offer card."
              </div>
            </div>

            {/* 3. Social Media Post Ideas */}
            <div
              className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate('features', 'none')}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">calendar_month</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  Weekly Post Ideas & Calendar
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Never wonder what to post on Monday morning. Get a complete 7-day content schedule mapped to Indian retail patterns, store walkthrough reels, and customer spotlights.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-3 text-on-surface-variant font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Example:</span> "Behind-the-counter brewing reel for artisanal Jaipur tea cafes."
              </div>
            </div>

            {/* 4. Product Description Generator */}
            <div
              className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate('features', 'none')}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  Product Description Generator
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  E-commerce catalog listings and WhatsApp PDF catalogs made effortless. Highlight artisan origin, organic pure ingredients, care guidelines, and gifting appeal.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-3 text-on-surface-variant font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Example:</span> "Pure Chanderi Silk Saree with zari border handwoven by MP weavers."
              </div>
            </div>

            {/* 5. WhatsApp Customer Message Generator */}
            <div
              className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate('features', 'none')}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">forum</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  WhatsApp Customer Message Generator
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Draft courteous, high-converting broadcast blasts for order confirmations, wedding trousseau appointments, new arrivals, and VIP repeat customer discounts.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-3 text-on-surface-variant font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Example:</span> "Friendly restock notification for Kashmiri saffron & dry fruit tins."
              </div>
            </div>

            {/* 6. Content History & Campaign Tracker */}
            <div
              className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group cursor-pointer"
              onClick={() => onNavigate('features', 'none')}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">folder_special</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface font-bold mb-2">
                  Content History & Festival Organizer
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                  Keep your best-performing copy and graphics organized by year and festival. Quickly replicate winning Diwali campaigns for Pongal or Makar Sankranti.
                </p>
              </div>
              <div className="bg-surface-container-low rounded-xl p-3 text-on-surface-variant font-body-sm text-body-sm">
                <span className="font-semibold text-on-surface">Example:</span> "Saved tags: #Diwali2024 (12 posts), #AkshayaTritiya (8 posts)."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE QUICK DEMO SECTION */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                Live Playground
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface font-bold tracking-tight mt-1">
                Try it now without signing in
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                Select a real Indian business preset below or click generate to see how LocalBoost adapts dialect, tone, and conversion hooks in real time.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="font-label-md text-label-md text-on-surface-variant">
                Instant AI Simulation • No Credit Card
              </span>
            </div>
          </div>

          {/* Presets Selector Buttons */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'spice', label: 'Spice Store Monsoon Sale', icon: 'local_fire_department' },
              { id: 'kurti', label: 'Handloom Kurti Launch', icon: 'styler' },
              { id: 'mithai', label: 'Artisanal Mithai Box', icon: 'bakery_dining' },
              { id: 'salon', label: 'Bridal Glow Parlour Package', icon: 'spa' },
            ].map((preset) => (
              <button
                key={preset.id}
                className={`demo-preset-btn px-4 py-2 rounded-xl font-label-lg text-label-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer ${
                  currentPreset === preset.id
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
                }`}
                onClick={() => handleSelectPreset(preset.id)}
              >
                <span className="material-symbols-outlined text-base">{preset.icon}</span>
                {preset.label}
              </button>
            ))}
          </div>

          {/* Main Live Simulation Card */}
          <div className="bg-surface-container-lowest rounded-2xl shadow-lg p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Configuration Parameters */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                  Store / Product Focus
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all border border-transparent focus:border-outline-variant"
                  type="text"
                  value={productInput}
                  onChange={(e) => setProductInput(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                  Current Offer / Campaign Theme
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all border border-transparent focus:border-outline-variant"
                  type="text"
                  value={offerInput}
                  onChange={(e) => setOfferInput(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                  Preferred Language & Dialect
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    className={`lang-btn py-2 px-3 text-center rounded-lg font-label-md text-label-md cursor-pointer transition-colors ${
                      currentLang === 'hinglish'
                        ? 'bg-secondary-container text-on-secondary-container font-semibold'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                    onClick={() => setCurrentLang('hinglish')}
                    type="button"
                  >
                    Hinglish
                  </button>
                  <button
                    className={`lang-btn py-2 px-3 text-center rounded-lg font-label-md text-label-md cursor-pointer transition-colors ${
                      currentLang === 'hindi'
                        ? 'bg-secondary-container text-on-secondary-container font-semibold'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                    onClick={() => setCurrentLang('hindi')}
                    type="button"
                  >
                    शुद्ध हिंदी
                  </button>
                  <button
                    className={`lang-btn py-2 px-3 text-center rounded-lg font-label-md text-label-md cursor-pointer transition-colors ${
                      currentLang === 'english'
                        ? 'bg-secondary-container text-on-secondary-container font-semibold'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                    onClick={() => setCurrentLang('english')}
                    type="button"
                  >
                    Indian English
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-lg text-label-lg text-on-surface font-semibold">Tone</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                    Warm & Homely
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                    Urgent Flash Sale
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md">
                    Festive Blessing
                  </span>
                </div>
              </div>

              <button
                className="w-full py-3.5 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-md mt-2 cursor-pointer"
                onClick={handleRegenerate}
              >
                <span className={`material-symbols-outlined text-lg ${isRegenerating ? 'animate-spin' : ''}`}>
                  sync
                </span>
                <span>Regenerate Copy Variations</span>
              </button>
            </div>

            {/* Right: Generated Output Box */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container-low rounded-xl p-6 shadow-inner">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">
                      {demoPresets[currentPreset]?.title || 'Generated Campaign'}
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-secondary bg-secondary-container px-2.5 py-1 rounded-md">
                    AI Generated • 0.8s
                  </span>
                </div>

                {/* Dynamic Output Preview Box */}
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm">
                  <p
                    className={`font-body-md text-body-md text-on-surface whitespace-pre-line leading-relaxed transition-opacity duration-300 ${
                      isRegenerating ? 'opacity-30' : 'opacity-100'
                    }`}
                  >
                    {demoPresets[currentPreset]?.texts[currentLang]}
                  </p>
                </div>
              </div>

              {/* Output Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
                <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-base text-secondary">verified</span>
                  <span>100% WhatsApp formatting verified (*bold*, _italics_)</span>
                </div>
                <button
                  className="px-5 py-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-label-md text-label-md flex items-center gap-1.5 shadow-sm cursor-pointer"
                  onClick={handlePlaygroundCopy}
                >
                  <span className="material-symbols-outlined text-base">copy_all</span>
                  <span>{playgroundCopied ? 'Copied to Clipboard!' : 'Copy to Clipboard'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="w-full py-16 px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-primary-container text-on-primary rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
            {/* Ambient Decorative Motif */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -top-20 w-80 h-80 rounded-full bg-tertiary-container/30 blur-3xl" />

            <div className="relative z-10 max-w-3xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary-fixed font-label-md text-label-md uppercase tracking-wider font-semibold w-fit">
                Ready for your next festival rush?
              </div>

              <h2 className="font-display-hero text-display-hero-mobile lg:text-display-hero font-bold tracking-tight text-on-primary">
                Supercharge your local business marketing today.
              </h2>

              <p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
                Join thousands of Indian retailers, sweets shops, boutiques, and homegrown creators crafting high-converting social campaigns, WhatsApp sales broadcasts, and vernacular offers in seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  className="cta-tertiary-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-label-lg text-label-lg font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  data-path="get-started"
                  href="#get-started"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('ai-marketing-studio', 'push');
                  }}
                >
                  <span>Start Your Free 15-Post Trial</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </a>

                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-surface-container-lowest/20 border border-primary-fixed/30 text-on-primary hover:bg-surface-container-lowest/30 font-label-lg text-label-lg transition-all cursor-pointer shadow-sm"
                  data-path="pricing"
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing', 'push');
                  }}
                >
                  <span>View Rupee Pricing (from ₹499/mo)</span>
                  <span className="material-symbols-outlined text-base">payments</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-primary-fixed/80 font-body-sm text-body-sm pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary-fixed">bolt</span>
                  Takes less than 60 seconds to set up
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary-fixed">credit_card_off</span>
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary-fixed">translate</span>
                  Hindi, Hinglish, Tamil, Telugu & English
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
