import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import styles from './Header.module.css';
import Link from 'next/link';
export default function Header() {
  const { t } = useTranslation();
  return (
    <header className={`${styles.container} ${styles.slideIn}`}>
      <div className={styles.headerTitle}>
        <p>{t('Hero.title')}</p>
      </div>
      <nav>
        <Link href="#about" className={styles.link}>
          <span>Work</span>
          <svg
            className={styles.link__graphic + " " + styles.link__graphic__slide}
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </Link>
        <Link href="#about" className={styles.link}>
          <span>Projects</span>
          <svg
            className={styles.link__graphic + " " + styles.link__graphic__slide}
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </Link>
        <Link href="#about" className={styles.link}>
          <span>About me</span>
          <svg
            className={styles.link__graphic + " " + styles.link__graphic__slide}
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </Link>
        <Link href="#about" className={styles.link}>
          <span>Contact</span>
          <svg
            className={styles.link__graphic + " " + styles.link__graphic__slide}
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
          </svg>
        </Link>
      </nav>
      <div className={styles.buttonsContainer}>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
