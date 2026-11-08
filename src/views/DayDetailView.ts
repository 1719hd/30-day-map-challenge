// src/views/DayDetailView.ts
import { MarathonDay } from '../types/challenge';
import { I18nManager } from '../utils/i18n';
import { renderBreadcrumbs } from '../components/Breadcrumbs';
import { ChallengeApi } from '../services/challengeApi';
import { MorphCountdown } from '@htochko/morph-countdown';
import '@htochko/morph-countdown/morph-countdown.css';

export function renderDayDetailView(day: MarathonDay): string {

  const currentLang = I18nManager.getCurrentLanguage();
  const localized = day.localization[currentLang] || day.localization.en;
  const status = ChallengeApi.getDayStatus(day);
  const isLocked = status === 'LOCKED';

  return `
    <div class="day-detail-page">
      ${renderBreadcrumbs(day.year, day.dayNumber)}

      <article class="detail-card ${status.toLowerCase()}">
        <header class="detail-header">
          <span class="badge category">${day.category}</span>
          <span class="badge status ${status.toLowerCase()}">${status}</span>
          <h1>Day ${String(day.dayNumber).padStart(2, '0')}: ${localized.theme}</h1>
        </header>

        <div class="detail-body">
          ${
            isLocked
              ? `
                <div class="timer-box">
                  <h3 class="header-centered">Release in</h3>
                  <div id="countdown-root" data-target-date="${day.releaseDate}">Calculating time...</div>
                </div>
                <p class="teaser-text">${localized.teaserDescription}</p>
              `
              : `
                <div class="unlocked-content">
                  <p class="description">${localized.fullDescription || localized.teaserDescription}</p>
                </div>
              `
          }

          <div class="smart-preview-detail">
            <h4>Keywords & Stack</h4>
            <div class="tags">
              ${day.moodboardKeywords.map((k) => `<span class="tag">#${k}</span>`).join('')}
              ${day.suggestedStackOrTools.map((t) => `<span class="tag tool">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </article>
    </div>
  `;
}

// init morpth view components

export function initMorpthCountdowns(container: HTMLElement): Array<() => void> {
  const cleanups: Array<() => void> = [];
  
const timer = new MorphCountdown('#countdown-root', {
  showSeparators: true
});
cleanups.push(() => timer.stop());
  return cleanups;
  
}
