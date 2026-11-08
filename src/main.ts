import './styles/main.css';
import { MarathonRouter } from './router';
import { ChallengeApi } from './services/challengeApi';
import { renderYearGrid } from './components/YearGrid';
import { renderLanguageSelector } from './components/LanguageSelector';
import { renderFooter } from './components/Footer';
import { renderHomeView } from './views/HomeView';
import { renderDayDetailView, initMorpthCountdowns } from './views/DayDetailView';
import { I18nManager } from './utils/i18n';
import { SupportedLanguage } from './types/challenge';

(function () {
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('p');
  
  if (redirectPath) {
    const basePath = import.meta.env.BASE_URL;
    const fullPath = basePath === '/' 
      ? redirectPath 
      : basePath.replace(/\/$/, '') + redirectPath;
      
    globalThis.history.replaceState(null, '', fullPath);
  }
})();

const appElement = document.getElementById('app');

function renderApp(): void {
  if (!appElement) return;

  const currentLang = I18nManager.getCurrentLanguage();
  const route = MarathonRouter.parseCurrentPath();
  const basePath = MarathonRouter.getBasePath();

  if (route.isNotFound) {
    globalThis.location.href = `${basePath}404.html`;
    return;
  }

  const headerHtml = `
    <header class="app-header">
      <div>
        <h1 class="brand-title"><a href="${basePath}">${I18nManager.t('homeTitle', currentLang)}</a></h1>
        <p class="brand-subtitle">${I18nManager.t('homeSubtitle', currentLang)}</p>
      </div>
      ${renderLanguageSelector()}
    </header>
  `;

  let mainContentHtml = '';

  if (route.year && route.slug) {
    const day = ChallengeApi.findDay(route.year, route.slug);
    if (!day) {
      globalThis.location.href = `${basePath}404.html`;
      return;
    }
    mainContentHtml = renderDayDetailView(day);
  } else if (route.year) {
    const daysForYear = ChallengeApi.getByYear(route.year);
    mainContentHtml = `
      <nav class="year-selector" style="margin-bottom: 1.5rem;">
        <a href="${basePath}2026" class="year-btn ${route.year === 2026 ? 'active' : ''}">2026</a>
        <a href="${basePath}2027" class="year-btn ${route.year === 2027 ? 'active' : ''}">2027</a>
      </nav>
      ${renderYearGrid(daysForYear, currentLang)}
    `;
  } else {
    mainContentHtml = renderHomeView();
  }

  appElement.innerHTML = `
    ${headerHtml}
    <main style="min-height: 60vh;">
      ${mainContentHtml}
    </main>
    ${renderFooter()}
  `;

  bindLanguageEvents();
  initMorpthCountdowns(appElement)
}

function bindLanguageEvents(): void {
  const langButtons = document.querySelectorAll<HTMLButtonElement>('.lang-btn');
  langButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      const lang = target.getAttribute('data-lang') as SupportedLanguage;
      if (lang) {
        I18nManager.setLanguage(lang);
        renderApp();
      }
    });
  });
}

renderApp();
globalThis.addEventListener('popstate', renderApp);