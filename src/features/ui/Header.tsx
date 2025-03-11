'use client'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import styles from './Header.module.css';
import Link from 'next/link';

interface HeaderProps {
    viewHeader: boolean;
}
export default function Header({viewHeader}:HeaderProps) {
  const { t } = useTranslation();
  console.log(viewHeader);
  return (
    <header className={`${viewHeader ? styles.asHeader : styles.asHero}`}>
      <div className={styles.headerTitle}>
        <p>{t('Hero.title')}</p>
      </div>
      <nav>
        <Link href="#about" className={styles.link}>
          <span>Work</span>
       
        </Link>
        <Link href="#about" className={styles.link}>
          <span>Projects</span>
       
        </Link>
        <Link href="#about" className={styles.link}>
          <span>About me</span>
       
        </Link>
        <Link href="#about" className={styles.link}>
          <span>Contact</span>
       
        </Link>
      </nav>
      <div className={styles.buttonsContainer}>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
