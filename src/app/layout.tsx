import type { Metadata } from "next";
import { Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://easycorp.id'),
  title: "Easy Corp — Hub Website",
  description:
    "Pusat navigasi layanan Easy Corp: Easy Tax, Easy Office, Easy Legal, Easy Branding, Easy Accounting, Easy ISO, dan Easy Press.",
  icons: {
    icon: "/logos/Logo EC (1).webp",
  },
  openGraph: {
    title: "Easy Corp — Business Navigation Hub",
    description:
      "Pusat navigasi layanan Easy Corp: Easy Tax, Easy Office, Easy Legal, Easy Branding, Easy Accounting, Easy ISO, dan Easy Press.",
    url: "https://easycorp.id",
    siteName: "Easy Corp",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logos/easy-corp.webp",
        width: 400,
        height: 400,
        alt: "Easy Corp Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Easy Corp — Business Navigation Hub",
    description:
      "Pusat navigasi layanan Easy Corp: Easy Tax, Easy Office, Easy Legal, Easy Branding, Easy Accounting, Easy ISO, dan Easy Press.",
    images: ["/logos/easy-corp.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Easy Corp",
  url: "https://easycorp.id",
  logo: "/logos/easy-corp.webp",
  description:
    "Pusat navigasi layanan Easy Corp: Easy Tax, Easy Office, Easy Legal, Easy Branding, Easy Accounting, Easy ISO, dan Easy Press.",
  subOrganization: [
    { "@type": "Organization", name: "Easy Tax", url: "https://www.easytax.id" },
    { "@type": "Organization", name: "Easy Office", url: "https://www.easyoffice.co.id" },
    { "@type": "Organization", name: "Easy Legal", url: "https://www.easylegal.id" },
    { "@type": "Organization", name: "Easy Branding", url: "https://www.easybranding.id" },
    { "@type": "Organization", name: "Easy Accounting", url: "https://www.easyaccounting.co.id" },
    { "@type": "Organization", name: "Easy ISO", url: "https://www.easyiso.id" },
    { "@type": "Organization", name: "Easy Press", url: "https://www.easypress.id" },
  ],
  location: [
    {
      "@type": "PostalAddress",
      streetAddress: "Jl. Cihampelas No. 201A",
      addressLocality: "Bandung",
      postalCode: "40131",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Sovereign Plaza, Lantai 12, Jl. T.B. Simatupang No. 36",
      addressLocality: "Jakarta Selatan",
      postalCode: "12430",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Emerald Commercial Summarecon, Blok UF No. 10",
      addressLocality: "Bekasi",
      postalCode: "17142",
      addressCountry: "ID",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
