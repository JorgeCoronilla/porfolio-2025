import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useTranslation } from 'react-i18next';
import i18nConfig from '@i18nConfig';

import { setLocaleCookie } from '@/lib/setLocalCookie';
import { getNewPathname } from '@/lib/getNewPathName';


export default function useLanguageSwitcher() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const router = useRouter();

  const { i18n } = useTranslation();
  const currentLocale = i18n.language as Locale;
  const allLanguages = i18nConfig.languages
  const languageCodesWithoutCurrent = allLanguages.filter((l) => l.code !== currentLocale);
  const currentLanguage = allLanguages.find((l) => l.code === currentLocale);
  const saveLocale = (newLocale: Locale) => {
    setLocaleCookie(newLocale);
  };

  
  const handleSwitch = (code: Locale) => {
    saveLocale(code);
    router.push(getNewPathname(code, currentLocale));
  };
  return {
    currentLocale,
    saveLocale,
    getNewPathname,
    languages: languageCodesWithoutCurrent,
    currentLanguage,
    handleSwitch,
    isDropdownVisible,
    toggleDropdown
  };
}
