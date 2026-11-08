export type TimeUnit = 'years' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds';

export type PluralForms = [string, string, string];

export interface TimeUnitDefinition {
  short: string;
  forms: PluralForms;
}

export type I18nDictionary = Record<TimeUnit, TimeUnitDefinition>;

export interface GlyphMatrix {
  top: string;
  bottom: string;
}

export interface CountdownTheme {
  name: string;
  glyphs: Record<string, GlyphMatrix>;
}

export interface CountdownOptions {
  targetDate: string | Date;
  i18n?: I18nDictionary;
  theme?: CountdownTheme;
  showYears?: boolean;
  showSeparators?: boolean;
}