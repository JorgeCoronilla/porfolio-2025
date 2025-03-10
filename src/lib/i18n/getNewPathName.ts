import i18nConfig from '@i18nConfig';

export const getNewPathname = (code: Locale, currentLocale: Locale): string => {
  const currentPath = window.location.pathname;

  // Check if the current path starts with a locale
  const localeRegex = new RegExp(`^/(${i18nConfig.locales.join('|')})(/|$)`);
  const isLocalized = localeRegex.test(currentPath);

  // If we are at the root path of a language (like /zh-CN), just return the path with the new language
  if (isLocalized && currentPath === `/${currentLocale}`) {
    return `/${code}`;
  }

  // Otherwise, strip the current language and replace with the new one
  const strippedPath = isLocalized
    ? currentPath.replace(localeRegex, '/') // Remove existing locale prefix
    : currentPath; // No change for default locale paths

  return `/${code}${strippedPath}`;
};