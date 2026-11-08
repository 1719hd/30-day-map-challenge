// src/data/days-2027.ts
import { MarathonDay } from '../types/challenge';

export const DAYS_2027: MarathonDay[] = Array.from({ length: 30 }, (_, index) => {
  const dayNum = index + 1;
  const formattedDay = String(dayNum).padStart(2, '0');
  
  return {
    year: 2027,
    dayNumber: dayNum,
    slug: `day-${formattedDay}`,
    category: 'map',
    releaseDate: `2027-11-${formattedDay}T00:00:00Z`,
    moodboardKeywords: ['Upcoming', '2027 Vision', 'Research'],
    suggestedStackOrTools: ['WebGPU', 'Shaders', 'TypeScript'],
    localization: {
      en: {
        theme: `Theme ${formattedDay}`,
        title: `2027 Challenge Day ${formattedDay}`,
        teaserDescription: 'Upcoming map visual experiment for the 2027 season.',
      },
      de: {
        theme: `Thema ${formattedDay}`,
        title: `2027 Challenge Tag ${formattedDay}`,
        teaserDescription: 'Kommendes kartografisches Experiment für die Saison 2027.',
      },
      ru: {
        theme: `Тема ${formattedDay}`,
        title: `2027 Челлендж День ${formattedDay}`,
        teaserDescription: 'Предстоящий картографический эксперимент сезона 2027.',
      },
      pl: {
        theme: `Temat ${formattedDay}`,
        title: `2027 Wyzwanie Dzień ${formattedDay}`,
        teaserDescription: 'Nadchodzący eksperyment kartograficzny na sezon 2027.',
      },
    },
  };
});