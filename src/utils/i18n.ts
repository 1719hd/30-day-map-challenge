import { SupportedLanguage, LocalizedContent, MarathonDay } from '../types/challenge';

// UI Dictionary for interface elements across supported languages
export const UI_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    homeTitle: 'Month Marathon Template',
    homeSubtitle: 'Universal workspace for monthly challenges, maps, and architectural sketches.',
    selectYear: 'Select Challenge Year:',
    backToHome: '← Back to Home',
    locked: 'Locked',
    viewDetails: 'View Details →',
    moodboard: 'Moodboard & Planned Stack',
    techStack: 'Tech Stack & Keywords',
  },
  de: {
    homeTitle: 'Monats-Marathon-Vorlage',
    homeSubtitle: 'Universeller Arbeitsbereich für monatliche Challenges, Karten und Architekturskizzen.',
    selectYear: 'Challenge-Jahr auswählen:',
    backToHome: '← Zurück zur Startseite',
    locked: 'Gesperrt',
    viewDetails: 'Details anzeigen →',
    moodboard: 'Moodboard & Geplanter Stack',
    techStack: 'Tech-Stack & Keywords',
  },
  ru: {
    homeTitle: 'Шаблон месячного марафона',
    homeSubtitle: 'Универсальный репозиторий для ежемесячных челленджей, карт и архитектурных скетчей.',
    selectYear: 'Выберите год марафона:',
    backToHome: '← На главную',
    locked: 'Заблокировано',
    viewDetails: 'Подробнее →',
    moodboard: 'Мудборд и стек',
    techStack: 'Стек и ключевые слова',
  },
  pl: {
    homeTitle: 'Szablon Maratonu Miesięcznego',
    homeSubtitle: 'Uniwersalna baza dla miesięcznych wyzwań, map i szkiców architektonicznych.',
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
