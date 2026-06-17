import React from 'react';
import OfficeCard from './OfficeCard';

const offices = [
  {
    name: 'EasyCorp Bekasi',
    building: 'Emerald Commercial Summarecon',
    street: 'Blok UF No. 10',
    city: 'Bekasi 17142',
    isHQ: false,
    mapsUrl: 'https://maps.google.com/?q=Emerald+Commercial+Summarecon+Bekasi',
    directionsUrl: 'https://maps.google.com/dir/?api=1&destination=Emerald+Commercial+Summarecon+Bekasi+17142',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.269172137687!2d107.00120027475063!3d-6.228199493759927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d4e64780063%3A0xa83405a43bde4748!2sEasyLegal%20Bekasi%20(Summarecon)!5e0!3m2!1sid!2sid!4v1781668277658!5m2!1sid!2sid',
  },
  {
    name: 'EasyCorp Bandung',
    building: 'EasyBuilding',
    street: 'Jl. Cihampelas No. 201A',
    city: 'Bandung 40131',
    isHQ: true,
    mapsUrl: 'https://maps.google.com/?q=Jl.+Cihampelas+No.201A+Bandung',
    directionsUrl: 'https://maps.google.com/dir/?api=1&destination=Jl.+Cihampelas+No.201A,+Bandung+40131',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0279194030213!2d107.60121827475669!3d-6.887259193111769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68c738ee45166d1b%3A0x3acd56d214d5db51!2sEASYLEGAL%20-%20Jasa%20Pembuatan%20PT%2C%20CV%2C%20Yayasan%2C%20Perkumpulan%20%26%20Daftar%20Merek%20HAKI!5e0!3m2!1sid!2sid!4v1781668212971!5m2!1sid!2sid',
  },
  {
    name: 'EasyCorp Jakarta',
    building: 'Sovereign Plaza, Lantai 12',
    street: 'Jl. T.B. Simatupang No. 36',
    city: 'Jakarta Selatan 12430',
    isHQ: false,
    mapsUrl: 'https://maps.google.com/?q=Sovereign+Plaza+Jl+TB+Simatupang+Jakarta',
    directionsUrl: 'https://maps.google.com/dir/?api=1&destination=Sovereign+Plaza,+Jl.+TB+Simatupang+No.36,+Jakarta+Selatan',
    iframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.553285477968!2d106.80044697475118!3d-6.293058593695994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1003c057345%3A0x6e7585194680f931!2sEasyLegal%20Jakarta!5e0!3m2!1sid!2sid!4v1781668297253!5m2!1sid!2sid',
  },
];

export default function OfficeMaps() {
  return (
    <section className="ec-offices">
      <div className="offices-header">
        <p className="offices-eyebrow">Lokasi Kami</p>
        <h2 className="ec-offices-title">Our Offices</h2>
        <p className="ec-offices-subtitle">Kunjungi kami di salah satu kantor kami</p>
        <div className="offices-divider" />
      </div>

      <div className="ec-offices-grid">
        {offices.map((office) => (
          <OfficeCard key={office.name} office={office} />
        ))}
      </div>
    </section>
  );
}
