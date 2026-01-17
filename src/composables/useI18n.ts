import { ref, computed } from 'vue';
import en from '@/i18n/en.json';
import no from '@/i18n/no.json';

export type Locale = 'en' | 'no';

const translations = { en, no } as const;

// Global reactive state - shared across all components
const currentLocale = ref<Locale>('en');

type TranslationSchema = typeof en;

type PathValue<T, P extends string> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? PathValue<T[Key], Rest>
    : never
  : P extends keyof T
  ? T[P]
  : never;

function detectBrowserLanguage(): Locale {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  const lang = browserLang.split('-')[0].toLowerCase();
  
  return lang === 'no' || lang === 'nb' || lang === 'nn' ? 'no' : 'en';
}

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? path;
}

export function useI18n() {
  const initLocale = () => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale | null;
      if (saved && (saved === 'en' || saved === 'no')) {
        currentLocale.value = saved;
      } else {
        currentLocale.value = detectBrowserLanguage();
      }
      document.documentElement.setAttribute('lang', currentLocale.value);
    }
  };

  const setLocale = (locale: Locale) => {
    currentLocale.value = locale;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
    document.documentElement.setAttribute('lang', locale);
  };

  // Reactive translation function - returns computed for reactivity
  const t = <K extends string>(key: K): PathValue<TranslationSchema, K> => {
    // Access currentLocale.value to create reactive dependency
    return getNestedValue(translations[currentLocale.value], key);
  };

  const locale = computed(() => currentLocale.value);

  // Expose a reactive getter for current translations
  const messages = computed(() => translations[currentLocale.value]);

  return {
    locale,
    messages,
    t,
    setLocale,
    initLocale
  };
}
