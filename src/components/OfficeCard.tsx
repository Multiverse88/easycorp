'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';

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
      setIsMapLoaded(true);
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
    <div className={`office-card ${office.isHQ ? 'is-hq' : ''}`}>
      <div ref={mapContainerRef} className="map-container">
        {isMapLoaded ? (
          <iframe
            src={office.iframeSrc}
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="map-placeholder">
            <div className="map-grid-overlay"></div>
            <div className="loading-shimmer"></div>
          </div>
        )}
        <div className="map-gradient-top" />
        <div className="map-gradient-bottom" />

        <span className={`map-badge ${office.isHQ ? 'map-badge--hq' : 'map-badge--branch'}`}>
          {office.isHQ && <span className="badge-dot" />}
          {office.isHQ ? 'HQ' : 'Cabang'}
        </span>

        {office.mapsUrl && (
          <a
            href={office.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-pill"
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

      <div className="card-body">
        <div className="city-row">
          <span className="city-dot" />
          <span className="city-name">{office.name}</span>
        </div>

        <div className="address-block">
          <p className="building-name">{office.building}</p>
          <p className="street-line">{office.street}</p>
          <p className="street-line muted">{office.city}</p>
        </div>

        <div className="card-footer">
          {office.directionsUrl && (
            <a
              href={office.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="directions-link"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12h18m0 0l-5-5m5 5l-5 5" />
              </svg>
              Petunjuk Arah
            </a>
          )}
          <span className="footer-spacer" />
          <span className="footer-city-code">{cityCode}</span>
        </div>
      </div>
    </div>
  );
}
