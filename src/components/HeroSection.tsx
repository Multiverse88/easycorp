import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="ec-hero">
      <div className="ec-plane">
        <Image
          src="/logos/easy-corp.webp"
          alt="Easy Corp"
          className="ec-logo-img"
          width={200}
          height={200}
          priority
        />
      </div>
      <h1 className="ec-title">It's Easy To Grow Your Business</h1>
      <div className="ec-tagline">Business Navigation Hub</div>
    </header>
  );
}
