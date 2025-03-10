export const setLocaleCookie = (newLocale: Locale) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `STAMP_LOCALE=${newLocale};expires=${expires};path=/`;
  }
};