'use client';
import Header from '@/features/ui/Header';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [viewHeader, setViewHeader] = useState(false);

  const changeView = () => {
    setViewHeader(!viewHeader);
  };
  return (
    <div className={styles.page}>
      <Header viewHeader={viewHeader} />
      <main className={styles.main}>
        <section className={styles.section1}>
          <button className={styles.startButton} onClick={changeView}>Start</button>
        </section>
        <section className={styles.section2}></section>
      </main>
    </div>
  );
}
