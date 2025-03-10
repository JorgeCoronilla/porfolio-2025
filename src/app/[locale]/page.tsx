
import HeroHeader from '@/features/ui/HeroHeader';
import styles from './page.module.css';
import Header from '@/features/ui/Header';

export default function Home() {

  return (
    <div className={styles.page}>
    
      <main className={styles.main}>
      <HeroHeader />
      </main>
    </div>
  );
}
