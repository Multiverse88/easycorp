'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './OfficeCard.module.css';

type Office = {
  name: string;
  building?: string;
  street?: string;
  city?: string;
  isHQ?: boolean;
  mapsUrl?: string;
  directionsUrl?: string;
  iframeSrc: string;
};

export default function OfficeCard({ office }: { office: Office }) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsMapLoaded(true);
              if (observer) {
                observer.disconnect();
              }
            }
          });
        },
        { rootMargin: '150px' }
      );

      if (mapContainerRef.current) {
        observer.observe(mapContainerRef.current);
      }
    } else {
      setTimeout(() => {
        setIsMapLoaded(true);
      }, 0);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const cityCode = useMemo(() => {
    const cityMap: Record<string, string> = {
      bandung: 'BDG',
      jakarta: 'JKT',
      bekasi: 'BKS',
      surabaya: 'SBY',
      yogyakarta: 'YGY',
      semarang: 'SMG',
    };
    const city = (office.city ?? '').toLowerCase();
    for (const [key, code] of Object.entries(cityMap)) {
      if (city.includes(key)) return code;
    }
    return '';
  }, [office.city]);

  return (
    <div className={`${styles.officeCard} ${office.isHQ ? styles.isHq : ''}`} data-animate="office">
      <div ref={mapContainerRef} className={styles.mapContainer}>
        {isMapLoaded ? (
          <iframe
            src={office.iframeSrc}
            className={styles.mapIframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapGridOverlay}></div>
            <div className={styles.loadingShimmer}></div>
          </div>
        )}
        <div className={styles.mapGradientTop} />
        <div className={styles.mapGradientBottom} />

        <span className={`${styles.mapBadge} ${office.isHQ ? styles.mapBadgeHq : styles.mapBadgeBranch}`}>
          {office.isHQ && <span className={styles.badgeDot} />}
          {office.isHQ ? 'HQ' : 'Cabang'}
        </span>

        {office.mapsUrl && (
          <a
            href={office.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapsPill}
            title="Buka di Google Maps"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" />
              <line x1="9" y1="3" x2="9" y2="18" />
              <line x1="15" y1="6" x2="15" y2="21" />
            </svg>
            Maps
          </a>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cityRow}>
          <span className={styles.cityDot} />
          <span className={styles.cityName}>{office.name}</span>
        </div>

        <div className={styles.addressBlock}>
          <p className={styles.buildingName}>{office.building}</p>
          <p className={styles.streetLine}>{office.street}</p>
          <p className={styles.streetLineMuted}>{office.city}</p>
        </div>

        <div className={styles.cardFooter}>
          {office.directionsUrl && (
            <a
              href={office.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsLink}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12h18m0 0l-5-5m5 5l-5 5" />
              </svg>
              Petunjuk Arah
            </a>
          )}
          <span className={styles.footerSpacer} />
          <span className={styles.footerCityCode}>{cityCode}</span>
        </div>
      </div>
    </div>
  );
}
