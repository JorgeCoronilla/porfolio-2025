'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';

interface HeaderProps {
  viewHero: boolean;
  setViewHero: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ viewHero, setViewHero }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language as Locale;
  const [viewHeader, setViewHeader] = useState(false);
  const [isOverNav, seIsOverNav] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const [isCustomCursorActive, setIsCustomCursorActive] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    setCoordinates({ x: clientX - 40, y: clientY + scrollY });
  };
  const navHover = () => {
    seIsOverNav(true);
    console.log('Entra en el nav');
  };
  const navLeave = () => {
    seIsOverNav(false);
    console.log('Sale del nav');
  };
  const changeView = () => {
    setIsCustomCursorActive(false);
    setViewHeader(!viewHeader);
    setViewHero(!viewHero);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('scrollY', scrollY);
    if (scrollY >= 0.2459 * window.innerHeight && !viewHeader) {
      changeView();
    }
  }, [scrollY]);

  return (
    <>
      <header className={`${viewHeader ? styles.asHeader : styles.asHero}`}>
        <div className={styles.headerTitle}>
          <p>{t('Hero.title')} </p>
        </div>
        <nav
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsCustomCursorActive(false)}
          onMouseEnter={() => setIsCustomCursorActive(true)}
        >
          <Link
            href="#work"
            className={`${styles.link}  ${styles.work} ${isOverNav ? styles.overNav : ''}`}
            onMouseOver={() => navHover()}
            onMouseLeave={() => navLeave()}
          >
            <span className={styles[`${currentLocale}`]}>{t('Header.work')}</span>
          </Link>
          <div className={`${isOverNav ? styles.tooltip: styles.tooltipHidden}`}>Tooltip1</div>

          <Link
            href="#projects"
            className={`${styles.link}  ${styles.projects} ${isOverNav ? styles.overNav : ''}`}
            onMouseOver={() => navHover()}
            onMouseLeave={() => navLeave()}
          >
            <span className={styles[`${currentLocale}`]}>{t('Header.projects')}</span>
          </Link>
          {/* <div className={`${isOverNav ? styles.tooltip: styles.tooltipHidden}`}>Tooltip1</div> */}
          <Link
            href="#about"
            className={`${styles.link}  ${styles.about} ${isOverNav ? styles.overNav : ''}`}
            onMouseOver={() => navHover()}
            onMouseLeave={() => navLeave()}
          >
            <span className={styles[`${currentLocale}`]}>{t('Header.about')}</span>
          </Link>
          {/* <div className={`${isOverNav ? styles.tooltip: styles.tooltipHidden}`}>Tooltip1</div> */}

          <Link
            href="#contact"
            className={`${styles.link}  ${styles.contact} ${isOverNav ? styles.overNav : ''}`}
            onMouseOver={() => navHover()}
            onMouseLeave={() => navLeave()}
          >
            <span className={styles[`${currentLocale}`]}> {t('Header.contact')}</span>
          </Link>
          {/* <div className={`${isOverNav ? styles.tooltip: styles.tooltipHidden}`}>Tooltip1</div> */}

        </nav>
        <div className={styles.buttonsContainer}>
          <LanguageSwitcher />
        </div>
      </header>

      {!viewHeader && (
        <button
          className={styles.startButton}
          onClick={changeView}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsCustomCursorActive(false)}
          onMouseEnter={() => setIsCustomCursorActive(true)}
        >
          {/* {t('Hero.start')}{' '} */}
          Frontend Developer
        </button>
      )}
      {isCustomCursorActive && (
        <div
          className={styles['gg-arrow-top-right-o']}
          style={{ top: `${coordinates.y}px`, left: `${coordinates.x}px` }}
        ></div>
      )}
    </>
  );
}
