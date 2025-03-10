type Locale = 'en' | 'es';
type NameSpace = 'translation'

interface LanguageConfig {
  code: Locale;
  label: string;
  labelShort: string;
}

interface I18nConfig {
  locales: Locale[];
  defaultLocale: Locale;
  languages: LanguageConfig[];
  spaces: string[];
}
