import React from 'react';
import OfficeCard from './OfficeCard';
import { offices } from '@/data/offices';
import styles from './OfficeMaps.module.css';

export default function OfficeMaps() {
  return (
    <section className={styles.ecOffices}>
      <div className={styles.officesHeader}>
        <p className={styles.officesEyebrow}>Lokasi Kami</p>
        <h2 className={styles.ecOfficesTitle}>Our Offices</h2>
        <p className={styles.ecOfficesSubtitle}>Kunjungi kami di salah satu kantor kami</p>
        <div className={styles.officesDivider} />
      </div>

      <div className={styles.ecOfficesGrid}>
        {offices.map((office) => (
          <OfficeCard key={office.name} office={office} />
        ))}
      </div>
    </section>
  );
}
