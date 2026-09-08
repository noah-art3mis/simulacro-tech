import { en } from './en';
import { pt } from './pt';
import { es } from './es';

export const languages = { en: 'English', pt: 'Português', es: 'Español' } as const;
export const defaultLang = 'en';
export type Lang = keyof typeof languages;
export const ui = { en, pt, es } as const;
export type UIKey = keyof typeof en;
