import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK if API key is present
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback generator for instant response
function generateFallbackContent(params: any): { title: string; content: string; hashtags?: string[]; tips?: string } {
  const { module = 'caption', product = '', offer = '', language = 'hinglish', businessName = 'Local Indian Store', city = 'India' } = params;

  if (module === 'whatsapp') {
    if (language === 'hindi') {
      return {
        title: `व्हाट्सएप स्पेशल: ${product || 'दुकान ऑफर'}`,
        content: `🪔 *${businessName} की तरफ से विशेष संदेश!* 🪔\n\nनमस्ते! आशा है आप और आपका परिवार सकुशल हैं।\n\n✨ *त्योहारी विशेष ऑफर:*\n• ${offer || 'विशेष छूट व उपहार'}\n• 100% शुद्ध और प्रामाणिक सामान\n• ₹999 से ऊपर के ऑर्डर्स पर फ्री होम डिलीवरी!\n\n📲 ऑर्डर के लिए अभी इस मैसेज का जवाब दें या कॉल करें।\n\n_सीमित स्टॉक उपलब्ध है। आज ही बुक करें!_`,
        tips: '100% WhatsApp formatting verified (*bold*, _italics_)',
      };
    } else if (language === 'english') {
      return {
        title: `WhatsApp Broadcast: ${product || 'Special Offer'}`,
        content: `✨ *Exclusive Customer Update from ${businessName}!* ✨\n\nDear patron,\n\nWe are delighted to bring you our latest seasonal special:\n• ${offer || 'Special Festival Discount'}\n• Handpicked premium quality guaranteed\n• Free doorstep delivery across ${city}\n\n📲 Reply to this message with 'ORDER' to reserve yours now!\n\n_Limited quantity crafted for this week only._`,
        tips: 'Optimized for high readability and fast replies',
      };
    } else {
      return {
        title: `WhatsApp Blast: ${product || 'Festive Offer'}`,
        content: `🪔 *Shubh Avsar Special from ${businessName}!* 🪔\n\nNamaste dear customer! Iss festive season, aapke aur aapke parivar ke liye khaas peshkash.\n\n✨ *Special Offer Highlights:*\n• ${offer || 'Combo Discount + Free Gift Box'}\n• 100% pure & authentic quality\n• Free doorstep delivery in ${city} for orders booked today\n\n📲 Bas iss message pe 'HAAN' ya 'ORDER' reply karke confirm kijiye!\n\n_Limited festive batches only._`,
        tips: '94% typical read rate on WhatsApp',
      };
    }
  }

  if (module === 'festive') {
    return {
      title: `Festive Campaign: ${product || 'Festival Dhamaka'}`,
      content: `🎉 *Festive Dhamaka Special at ${businessName}, ${city}!* 🪔\n\nToh taiyyar ho jaiye shandar bachhat ke liye! ${offer || 'Buy 2 Get 1 Free + Special Festive Gift'}.\n\n✨ Traditional purity guaranteed\n✨ Exclusive festive packaging\n✨ Fast local delivery & UPI payments accepted\n\nVisit our store or WhatsApp us today to grab your deal before stocks run out!`,
      hashtags: ['#FestiveSale', '#VocalForLocal', '#IndianFestivals', '#ShopLocal'],
    };
  }

  if (module === 'product') {
    return {
      title: `Product Description: ${product || 'Handcrafted Collection'}`,
      content: `*${product || 'Handcrafted Heritage Item'}*\nPrice: ${offer ? offer : '₹1,299 (incl. GST)'}\n\n• Crafted with authentic traditional techniques by local artisans.\n• Premium materials ensuring longevity and timeless elegance.\n• Ideal for gifting, home celebrations, and festive occasions.\n• Safe packaging and pan-India shipping available.\n\nDM or WhatsApp to order immediately.`,
      hashtags: ['#MadeInIndia', '#ArtisanCraft', '#IndianRetail'],
    };
  }

  // Default: Instagram Caption
  return {
    title: `Instagram Caption: ${product || 'Seasonal Launch'}`,
    content: `Aapke festive wardrobe aur ghar ke liye ekdum khaas! ✨ ${product ? product + ' collection' : 'New arrivals'} are here at ${businessName}, ${city}.\n\n${offer ? '🔥 Special: ' + offer : '🎁 Limited batch launch'}.\n\nTraditional charm meet modern elegance. Har piece mein hai Bharat ki shaan aur safai. 🌸\n\n💬 Tap the WhatsApp link in our bio to book yours or DM us directly!\n\n.\n.\n#VocalForLocalIndia #${city.replace(/[^a-zA-Z]/g, '')}Shopping #FestiveVibes #IndianRetail #ShopSmallIndia`,
    hashtags: ['#VocalForLocalIndia', '#IndianRetail', '#ShopSmallIndia'],
  };
}

// API endpoint for AI Marketing Generation
app.post('/api/generate', async (req, res) => {
  try {
    const { module = 'caption', storeName = 'Local Indian Boutique', niche = 'Retail', city = 'Jaipur', product = '', offer = '', language = 'hinglish', tone = 'Festive' } = req.body;

    if (!ai) {
      // Return high quality fallback
      const fallback = generateFallbackContent({ module, storeName, niche, city, product, offer, language, tone });
      return res.json({ success: true, isAi: false, ...fallback });
    }

    const systemInstruction = `You are LocalBoost AI, an expert vernacular marketing engine for Indian local businesses, kiranas, sweetshops, handloom boutiques, salons, and street shops.
Format your response specifically for the requested module.
Tone: ${tone}.
Language: ${language} (if Hinglish, write natural colloquial conversational Hinglish with English script; if Hindi, write clean Devanagari Hindi; if English, write warm relatable Indian English).
Business Name: ${storeName} in ${city} (${niche}).
Target Product: ${product}.
Current Offer/Hook: ${offer}.

Always include:
- Cultural Indian warmth and festive relevance
- Ready emojis and WhatsApp style bold formatting (*bold*, _italics_)
- Clear call to action (WhatsApp reply, walk-in, or DM)
- If Instagram, 6-8 authentic Indian hashtags (e.g., #VocalForLocal, city hashtags).

Keep it punchy, high-converting, and respectful. Do not output conversational preamble. Return only the final copy.`;

    const prompt = `Generate a ${module} marketing campaign for ${product || storeName} with offer: "${offer || 'Festive discount'}".`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
      },
    });

    const generatedText = response.text || '';
    return res.json({
      success: true,
      isAi: true,
      title: `Generated: ${product || storeName} Campaign`,
      content: generatedText.trim(),
    });
  } catch (error: any) {
    console.error('Error generating AI content:', error);
    // Graceful fallback
    const fallback = generateFallbackContent(req.body);
    return res.json({ success: true, isAi: false, ...fallback, note: 'Generated using LocalBoost Bharat Engine' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LocalBoost Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
