'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import i18nConfig from '@i18nConfig';

export default function NotFound() {
  const [locale, setLocale] = useState(i18nConfig.defaultLocale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Try to extract locale from URL
    const pathSegments = pathname.split('/');
    if (pathSegments.length > 1 && i18nConfig.locales.includes(pathSegments[1])) {
      setLocale(pathSegments[1]);
    } else {
      // If no locale in URL, check cookies or localStorage
      const savedLocale = localStorage.getItem('NEXT_LOCALE') || i18nConfig.defaultLocale;
      setLocale(savedLocale);
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
    // Add other languages as needed
  };

  return (
    <html lang={locale}>
      <body>
        <div>
          <h2>{messages[locale]?.title || messages[i18nConfig.defaultLocale].title}</h2>
          <p>{messages[locale]?.message || messages[i18nConfig.defaultLocale].message}</p>
        </div>
      </body>
    </html>
  );
}
