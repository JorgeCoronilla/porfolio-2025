'use client';

import { useTranslation } from 'react-i18next';
import styles from './page.module.css';
import LanguageSwitcher from '@/features/i18n/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LanguageSwitcher />

        <h1>{t('Hero.title')}</h1>
        <p>{t('Hero.description')}</p>
      </main>
    </div>
  );
}
