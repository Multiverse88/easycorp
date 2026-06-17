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
  title: "Easy Corp — Hub Website",
  description: "Pusat navigasi layanan Easy Corp: Easy Tax, Easy Office, Easy Legal, Easy Branding, Easy Accounting, Easy ISO, dan Easy Press.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
