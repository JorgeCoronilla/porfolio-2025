import i18nConfig from '@i18nConfig';
import initTranslations from '@/lib/i18n';
import TranslationsProvider from '@/features/i18n/TranslationsProvider';

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface RootLayoutParams {
  locale: Locale;
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: RootLayoutParams;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nConfig.spaces);

  return (
    <html lang={locale}>
      <body>
        <TranslationsProvider namespaces={i18nConfig.spaces} locale={locale} resources={resources}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
