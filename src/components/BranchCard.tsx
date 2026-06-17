import React from 'react';
import Image from 'next/image';
import styles from './BranchCard.module.css';

type BranchProps = {
  branch: {
    name: string;
    description: string;
    url: string;
    logo: string;
    accent: string;
    glow: string;
  };
};

export default function BranchCard({ branch }: BranchProps) {
  return (
    <a
      href={branch.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ecCardLink}
      style={{ '--accent': branch.accent, '--glow': branch.glow } as React.CSSProperties}
    >
      <div className={styles.ecCard} data-animate="card">
        <div className={styles.ecCardShine}></div>
        <span className={styles.ecArrow}>↗</span>
        <div className={styles.ecCardHeader}>
          <div className={styles.ecCardLogoContainer}>
            <Image
              src={branch.logo}
              alt={branch.name}
              className={styles.ecCardLogo}
              width={110}
              height={50}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.ecCardBody}>
          <div className={styles.ecCardName}>{branch.name}</div>
          <div className={styles.ecCardDesc}>{branch.description}</div>
        </div>
        <div className={styles.ecAccentBar}></div>
      </div>
    </a>
  );
}
