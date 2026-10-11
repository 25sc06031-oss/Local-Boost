export type Screen = 'home' | 'features' | 'ai-marketing-studio' | 'pricing';

export interface ShopProfile {
  name: string;
  category: string;
  city: string;
  landmark: string;
  gstin: string;
  upiId: string;
  phone: string;
  voice: string;
}

export interface GeneratedCampaign {
  id: string;
  title: string;
  type: 'whatsapp' | 'instagram' | 'festive' | 'product' | 'calendar';
  content: string;
  date: string;
  metrics?: string;
  hashtags?: string[];
  product?: string;
  offer?: string;
}
