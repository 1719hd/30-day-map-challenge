import { SupportedLanguage, LocalizedContent, MarathonDay } from '../types/challenge';

// UI Dictionary for interface elements across supported languages
export const UI_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    homeTitle: 'Dariusz Ochman\'s 30 map challenge',
    homeSubtitle: 'Open-source map pool for daily challenges accepting sponsorship.',
    selectYear: 'Select Challenge Year:',
    backToHome: '← Back to Home',
    locked: 'Locked',
    viewDetails: 'View Details →',
    moodboard: 'Moodboard & Planned Stack',
    techStack: 'Tech Stack & Keywords',
  },
  de: {
    homeTitle: '30-Karten-Challenge von Daro Ochman',
    homeSubtitle: 'Open-Source-Karten-Pool für tägliche Challenges mit Sponsoring-Option.',
    selectYear: 'Challenge-Jahr auswählen:',
    backToHome: '← Zurück zur Startseite',
    locked: 'Gesperrt',
    viewDetails: 'Details anzeigen →',
    moodboard: 'Moodboard & Geplanter Stack',
    techStack: 'Tech-Stack & Keywords',
  },
  ru: {
    homeTitle: '30-дневный картографический челлендж: Дариуш Охман',
    homeSubtitle: 'Открытый пул карт для ежедневных челленджей с поддержкой спонсоров',
    selectYear: 'Выберите год марафона:',
    backToHome: '← На главную',
    locked: 'Заблокировано',
    viewDetails: 'Подробнее →',
    moodboard: 'Мудборд и стек',
    techStack: 'Стек и ключевые слова',
  },
  pl: {
    homeTitle: '30 dniowe wyzwanie kartograficzne Dariusza Ochmana',
    homeSubtitle: 'Otwarta pula map dla codziennych wyzwań z opcją wsparcia',
    selectYear: 'Wybierz rok wyzwania:',
    backToHome: '← Powrót do strony głównej',
    locked: 'Zablokowane',
    viewDetails: 'Zobacz szczegóły →',
    moodboard: 'Moodboard i stos technologiczny',
    techStack: 'Stos i słowa kluczowe',
  },
};

const DEFAULT_LANG: SupportedLanguage = 'en';

export class I18nManager {
  // Get active language from global storage or default to English
  public static getCurrentLanguage(): SupportedLanguage {
    try {
      const stored = globalThis.localStorage?.getItem('marathon_lang');
      if (stored && ['en', 'de', 'ru', 'pl'].includes(stored)) {
        return stored as SupportedLanguage;
      }
    } catch {
      // Fallback if localStorage is restricted
    }
    return DEFAULT_LANG;
  }

  // Set and persist active language
  public static setLanguage(lang: SupportedLanguage): void {
    try {
      globalThis.localStorage?.setItem('marathon_lang', lang);
    } catch {
      // Ignore storage errors
    }
  }

  // Retrieve localized content for a specific day with automatic fallback to English
  public static getLocalizedDayContent(day: MarathonDay, lang: SupportedLanguage): LocalizedContent {
    return day.localization[lang] || day.localization[DEFAULT_LANG] || {
      title: `Day ${day.dayNumber}`,
      theme: 'Challenge',
      teaserDescription: 'No description available.',
    };
  }

  // Retrieve UI text with fallback to English
  public static t(key: string, lang: SupportedLanguage = I18nManager.getCurrentLanguage()): string {
    const langDict = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS[DEFAULT_LANG];
    return langDict[key] || UI_TRANSLATIONS[DEFAULT_LANG][key] || key;
  }
}

// Fallback to English if translation is missing
export function getLocalizedData(day: MarathonDay, lang: SupportedLanguage): LocalizedContent {
  return day.localization[lang] || day.localization['en'];
}
