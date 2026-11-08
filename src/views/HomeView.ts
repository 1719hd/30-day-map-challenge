// src/views/HomeView.ts
import { ChallengeApi } from '../services/challengeApi';
import { renderChallengeCard } from '../components/ChallengeCard';
import { I18nManager } from '../utils/i18n';
import { MarathonRouter } from '../router';

export function renderHomeView(): string {
  const currentLang = I18nManager.getCurrentLanguage();
  const basePath = MarathonRouter.getBasePath();
  const currentYear = 2026;

  // Get 3 latest unlocked days for the bottom section
  const recentUnlocked = ChallengeApi.getSliderDays({
    year: currentYear,
    status: 'UNLOCKED',
    limit: 3,
  });

  return `
    <section class="hero-section">
      <div class="hero-content">
        <span class="hero-badge">Active Marathon</span>
        <h1>#30DayMapChallenge ${currentYear}</h1>
        <p>${I18nManager.t('homeSubtitle', currentLang)}</p>
        <a href="${basePath}${currentYear}" class="btn-primary">Explore ${currentYear} Grid &rarr;</a>
      </div>
    </section>

    <section class="recent-unlocked-section">
      <div class="section-header">
        <h2>Latest Unlocked Challenges</h2>
        <a href="${basePath}${currentYear}" class="view-all-link">View All 30 Days &rarr;</a>
      </div>
      
      <div class="challenge-grid">
        ${
          recentUnlocked.length > 0
            ? recentUnlocked.map((day) => renderChallengeCard(day, currentLang)).join('')
            : `<p class="empty-msg">No challenges unlocked yet. Stay tuned!</p>`
        }
      </div>
    </section>
  `;
}