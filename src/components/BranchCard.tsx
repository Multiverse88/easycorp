import React from 'react';
import Image from 'next/image';

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
      className="ec-card-link"
      style={{ '--accent': branch.accent, '--glow': branch.glow } as React.CSSProperties}
    >
      <div className="ec-card">
        <div className="ec-card-shine"></div>
        <span className="ec-arrow">↗</span>
        <div className="ec-card-header">
          <div className="ec-card-logo-container">
            <Image
              src={branch.logo}
              alt={branch.name}
              className="ec-card-logo"
              width={110}
              height={50}
              loading="lazy"
            />
          </div>
        </div>
        <div className="ec-card-body">
          <div className="ec-card-name">{branch.name}</div>
          <div className="ec-card-desc">{branch.description}</div>
        </div>
        <div className="ec-accent-bar"></div>
      </div>
    </a>
  );
}
