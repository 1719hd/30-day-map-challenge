// Supported interface languages for the marathon template
export type SupportedLanguage = 'en' | 'de' | 'ru' | 'pl';

// Universal category for maps, architecture, sketches, or code
export type ChallengeCategory = 'map' | 'architecture' | 'sketch' | 'code';

export type ChallengeStatus = 'LOCKED' | 'UNLOCKED';

// Localized text structure for multi-language support
export interface LocalizedContent {
  title: string;
  theme: string;
  teaserDescription: string;
  fullDescription?: string;
}

// Universal marathon day definition
export interface MarathonDay {
  year: number;
  dayNumber: number; // 1 to 30
  slug: string;      // Unique slug / URL alias (e.g., "01-points", "urban-core")
  category: ChallengeCategory;
  releaseDate: string; // ISO 8601 UTC string for the countdown timer
  
  // Multilingual content dictionary (en, de, ru, pl)
  localization: Record<SupportedLanguage, LocalizedContent>;
  
  // SEO, moodboard, and tech stack metadata
  moodboardKeywords: string[];
  suggestedStackOrTools: string[]; // e.g. ["Cesium.js", "Leaflet", "TypeScript", "Ink"]
  
  // Payload loaded only when unlocked
  content?: {
    contentType: 'interactive-map' | 'image-gallery' | 'model-viewer' | 'article';
    primaryAssetUrl?: string;
    repoUrl?: string;
    datasetSource?: string;
  };
}