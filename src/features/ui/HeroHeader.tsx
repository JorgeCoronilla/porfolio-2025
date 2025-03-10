'use client';
import { useTranslation } from 'react-i18next';
import styles from './HeroHeader.module.css';
import { useEffect, useState } from 'react';
import Header from './Header';
export default function HeroHeader() {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    const scrolledHeight = window.pageYOffset;
    const totalHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercentage = (scrolledHeight / totalHeight) * 100;
    console.log(window.scrollY);
    console.log('innerHeight', window.innerHeight);
    console.log('offsetHeight', document.body.offsetHeight);
    console.log('scrolledHeight', scrolledHeight);
    console.log('totalHeight', totalHeight);
    console.log('scrollPercentage', scrollPercentage);
    if (scrollPercentage >= 30) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { t } = useTranslation();
  

  return (
    <>
      {showHeader && <Header />}
      <Header />
        <div  className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{!showHeader ? t('Hero.title'):" "}</h1>
            <p className={styles.heroSubtitle}>{!showHeader ? t('Hero.description'): ' '}</p>
          </div>
        </div>
    </>
  );
}
