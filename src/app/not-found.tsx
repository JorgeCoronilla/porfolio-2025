
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import i18nConfig from '@i18nConfig';

// Import or recreate the Locale type
type Locale = 'en' | 'es';

export default function NotFound() {
  const [locale, setLocale] = useState<Locale>(i18nConfig.defaultLocale);
  const pathname = usePathname();
  
  useEffect(() => {
    // Try to extract locale from URL
    const pathSegments = pathname.split('/');
    // Type check to ensure pathSegments[1] is a valid Locale
    if (pathSegments.length > 1 && i18nConfig.locales.includes(pathSegments[1] as Locale)) {
      setLocale(pathSegments[1] as Locale);
    } else {
      // If no locale in URL, check localStorage
      const savedLocale = localStorage.getItem('NEXT_LOCALE');
      // Make sure savedLocale is a valid Locale before setting it
      if (savedLocale && i18nConfig.locales.includes(savedLocale as Locale)) {
        setLocale(savedLocale as Locale);
      } else {
        setLocale(i18nConfig.defaultLocale);
      }
    }
  }, [pathname]);

  // Manually load translations for this page
  const messages = {
    en: {
      title: 'Page Not Found',
      message: 'Sorry, the page you are looking for does not exist.',
    },
    es: {
      title: 'Página No Encontrada',
      message: 'Lo sentimos, la página que estás buscando no existe.',
    },
  };
  
  return (
    <html lang={locale}>
      <body>
        <div>
          <h2>{messages[locale].title}</h2>
          <p>{messages[locale].message}</p>
        </div>
      </body>
    </html>
  );
}
