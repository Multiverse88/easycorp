import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <header className={styles.ecHero}>
      <div className={styles.ecPlane}>
        <Image
          src="/logos/easy-corp.webp"
          alt="Easy Corp"
          className={styles.ecLogoImg}
          width={215}
          height={215}
          priority
        />
      </div>
      <h1 className={styles.ecTitle}>It&apos;s Easy To Grow Your Business</h1>
      <div className={styles.ecTagline}>Business Navigation Hub</div>
    </header>
  );
}
