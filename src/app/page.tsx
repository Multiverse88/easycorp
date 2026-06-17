import HeroSection from '@/components/HeroSection';
import BranchCard from '@/components/BranchCard';
import OfficeMaps from '@/components/OfficeMaps';
import ClientProviders from '@/components/ClientProviders';
import { branches } from '@/data/branches';
import styles from './page.module.css';

export default function Home() {
  return (
    <ClientProviders>
      <div className={styles.ecLayout}>
        <div className={styles.ecContainer}>
          <div className={styles.ecHomepage}>
            <HeroSection />

            <main className={styles.ecGridContainer}>
              <div className={styles.ecGrid}>
                {branches.map((branch) => (
                  <BranchCard key={branch.name} branch={branch} />
                ))}
              </div>
            </main>

            <OfficeMaps />
          </div>
        </div>
        <footer className={styles.ecFooter}>
          <p>&copy; 2026 Easy Corp. All rights reserved.</p>
        </footer>
      </div>
    </ClientProviders>
  );
}
