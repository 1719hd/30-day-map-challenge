// src/components/Footer.ts
import { I18nManager } from '../utils/i18n';

export function renderFooter(): string {
  const currentYear = new Date().getFullYear();
  const currentLang = I18nManager.getCurrentLanguage();

  return `
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>&copy; ${currentYear} Helen Tochko. Spatial Software Engineer & Urbanist.</p>
        </div>
        <div class="footer-right">
          <a href="https://github.com/htochko/monthmarathone-template" target="_blank" rel="noopener noreferrer">Template Repo</a>
          <span class="footer-lang-hint">Lang: ${currentLang.toUpperCase()}</span>
        </div>
      </div>
    </footer>
  `;
}