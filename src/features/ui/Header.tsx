import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../i18n/LanguageSwitcher";
import styles from "./Header.module.css";
export default function Header() {
      const { t } = useTranslation();
  return (
    <header className={`${styles.container} ${styles.slideIn}`}>
      <nav>
      <h1 className={styles.heroTitle}>{t('Hero.title')}</h1>
      <p className={styles.heroSubtitle}>{t('Hero.description')}</p>
      
        <LanguageSwitcher />
      </nav>
    </header>
  );
}