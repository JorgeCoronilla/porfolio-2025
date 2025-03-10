
import i18nConfig from '@i18nConfig';
import initTranslations from '@/lib/i18n/i18n';
import TranslationsProvider from '@/features/i18n/TranslationsProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Jorge Coronilla - Full Stack Developer',
  description: 'Personal porfolio of Jorge Coronilla',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nConfig.spaces);

  return (
    <html lang={locale}>
      <body  className={`${geistSans.variable} ${geistMono.variable}`}>
        <TranslationsProvider 
          namespaces={i18nConfig.spaces} 
          locale={locale} 
          resources={resources}
        >
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}