import { MarathonDay, SupportedLanguage } from '../types/challenge';
import { renderChallengeCard } from './ChallengeCard';

export function renderYearGrid(days: MarathonDay[], lang: SupportedLanguage = 'en'): string {
  if (days.length === 0) {
    return `<div class="empty-state"><p>No challenges available for this selection.</p></div>`;
  }

  const cardsHtml = days.map((day) => renderChallengeCard(day, lang)).join('');

  return `
    <div class="year-grid-container">
      <div class="challenge-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}
