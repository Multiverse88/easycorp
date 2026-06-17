# Desain Optimasi Performa Mobile EasyCorp Hub
Tanggal: 2026-06-17

## 1. Analisis Masalah Core Web Vitals
- **LCP (Largest Contentful Paint)**: Loading `easy-corp.webp` di hero dan background image `bg-city.webp` tanpa optimalisasi layout sizing.
- **CLS (Cumulative Layout Shift)**: Logo kantor dan peta memicu pergeseran layout saat dimuat.
- **FID/INP (First Input Delay / Interaction to Next Paint)**: Animasi GSAP berat dan smooth scrolling Lenis membebani UI thread di mobile. `backdrop-filter: blur(10px)` pada `ec-card` dan `office-card` memicu overhead rendering di device low-end.

## 2. Rencana Solusi (Tampilan Tidak Berubah)

### A. Animasi & Interaksi
- Batasi inisialisasi GSAP entrance animation di mobile (< 768px) menggunakan `gsap.matchMedia()`.
- Tetap aktifkan Lenis smooth scroll di mobile dengan parameter yang lebih ringan (`touchMultiplier: 1.5` atau biarkan default).
- Nonaktifkan `backdrop-filter` di mobile jika performa drop, namun diprioritaskan mengoptimalkan `will-change`.

### B. Optimasi Gambar
- Ganti semua tag `<img>` di `BranchCard.tsx` dengan komponen `<Image>` Next.js.
- Berikan dimensi `width` dan `height` yang eksplisit pada logo-logo untuk menghindari CLS.
- Prioritaskan LCP image (logo Easy Corp) dengan attribute `priority`.

### C. Optimasi Google Maps Iframe
- `OfficeCard.tsx` sudah menggunakan lazy loading. Pastikan placeholder statis tidak memicu layout shift dan iframe ter-render hanya setelah masuk viewport.

### D. CSS Optimasi
- Matikan `background-attachment: fixed` di mobile (saat ini sudah, pastikan tidak rusak).
- Kurangi intensitas animasi keyframe CSS (`pulseGlow`, `shimmerLine`, `titleShimmer`) di device mobile.
