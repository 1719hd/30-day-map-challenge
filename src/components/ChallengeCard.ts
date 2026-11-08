import { MarathonDay, SupportedLanguage } from '../types/challenge';
import { ChallengeApi } from '../services/challengeApi';

export function renderChallengeCard(day: MarathonDay, lang: SupportedLanguage = 'en'): string {
  const status = ChallengeApi.getDayStatus(day);
  const localized = day.localization[lang] || day.localization.en;
  const basePath = import.meta.env.BASE_URL || '/';
  
  // 1. Personal link for each day rspectively
  const detailUrl = `${basePath}${day.year}/${day.slug}`;
  const isLocked = status === 'LOCKED';

  return `
    <!-- 2. Whole card wrapped in tag <a>, to be clickable -->
    <a href="${detailUrl}" class="challenge-card ${status.toLowerCase()}" data-category="${day.category}">
      <div class="card-header">
        <span class="badge category">${day.category}</span>
        <span class="badge status ${status.toLowerCase()}">${status}</span>
      </div>
      
      <div class="card-body">
        <h3>${localized.title}</h3>
        <p>${isLocked ? localized.teaserDescription : (localized.fullDescription || localized.teaserDescription)}</p>
        
        <div class="smart-preview">
          <div class="smart-preview-title">${isLocked ? 'Moodboard & Planned Stack' : 'Tech Stack & Keywords'}</div>
          <div class="tags">
            ${day.moodboardKeywords.map((kw) => `<span class="tag">#${kw}</span>`).join('')}
            ${day.suggestedStackOrTools.map((tool) => `<span class="tag tool">${tool}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="card-footer">
        <span class="date">${new Date(day.releaseDate).toLocaleDateString()}</span>
        <span class="card-link">${isLocked ? 'View Countdown &rarr;' : 'View Details &rarr;'}</span>
      </div>
    </a>
  `;
}