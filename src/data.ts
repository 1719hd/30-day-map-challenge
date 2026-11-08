import { MarathonDay } from './types/challenge';
import { DAYS_2026 } from './data/days-2026';
import { DAYS_2027 } from './data/days-2027';

// Combined dataset for all marathon years
export const ALL_DAYS: MarathonDay[] = [
  ...DAYS_2026,
  ...DAYS_2027,
];

// Helper function to find a specific day by year and slug or standard day format (e.g. "day-01" or "points")
export function findDayByRoute(year: number, slugOrAlias: string): MarathonDay | undefined {
  return ALL_DAYS.find((d) => {
    if (d.year !== year) return false;
    const formattedDay = `day-${String(d.dayNumber).padStart(2, '0')}`;
    return d.slug === slugOrAlias || formattedDay === slugOrAlias;
  });
}