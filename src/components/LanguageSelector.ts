import { SupportedLanguage } from '../types/challenge';
import { I18nManager } from '../utils/i18n';

export function renderLanguageSelector(): string {
  const currentLang = I18nManager.getCurrentLanguage();
  const languages: { code: SupportedLanguage; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'ru', label: 'RU' },
    { code: 'pl', label: 'PL' },
  ];

  return `
    <div class="language-selector" style="display: flex; gap: 0.5rem; align-items: center;">
      ${languages
        .map(
          (l) => `
        <button 
          class="lang-btn ${l.code === currentLang ? 'active' : ''}" 
          data-lang="${l.code}"
          style="padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; border-radius: 4px; border: 1px solid ${l.code === currentLang ? '#2563eb' : '#cbd5e1'}; background: ${l.code === currentLang ? '#2563eb' : '#ffffff'}; color: ${l.code === currentLang ? '#ffffff' : '#334155'};"
        >
          ${l.label}
        </button>
      `
        )
        .join('')}
    </div>
  `;
}
