import HeroHeader from '@/features/ui/HeroHeader';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.section1}>
          <HeroHeader />
        </section>
        <section className={styles.section2}>
        </section>
      </main>
    </div>
  );
}
