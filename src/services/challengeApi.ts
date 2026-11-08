import { MarathonDay, ChallengeStatus } from '../types/challenge';

// Automatically import all files matching days-*.ts from the data folder
const dataModules = import.meta.glob<{ [key: string]: MarathonDay[] }>('../data/days-*.ts', { eager: true });

// Automatically extract and combine all days into a single array
export const ALL_DAYS: MarathonDay[] = Object.values(dataModules).flatMap((module) => {
  const exportKey = Object.keys(module).find((key) => key.startsWith('DAYS_'));
  return exportKey ? module[exportKey] : [];
});

export const ChallengeApi = {
  getByYear(year: number): MarathonDay[] {
    return ALL_DAYS.filter((d) => d.year === year);
  },

  findDay(year: number, slugOrAlias: string): MarathonDay | undefined {
    const days = this.getByYear(year);
    return days.find((d) => {
      const defaultSlug = `day-${String(d.dayNumber).padStart(2, '0')}`;
      return d.slug === slugOrAlias || defaultSlug === slugOrAlias;
    });
  },

  getSliderDays(options: { year?: number; status?: ChallengeStatus | 'ALL'; limit?: number } = {}): MarathonDay[] {
    const targetYear = options.year || 2026;
    const days = this.getByYear(targetYear);
    const now = new Date();
    let result = [...days];

    if (options.status && options.status !== 'ALL') {
      result = result.filter((d) => {
        const isUnlocked = new Date(d.releaseDate) <= now;
        return options.status === 'UNLOCKED' ? isUnlocked : !isUnlocked;
      });
    }

    if (options.limit) {
      result = result.slice(0, options.limit);
    }

    return result;
  },

  getDayStatus(day: MarathonDay): ChallengeStatus {
    const now = new Date();
    return new Date(day.releaseDate) <= now ? 'UNLOCKED' : 'LOCKED';
  },
};