import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.creocreators.in"),
  title: {
    default: "CREO CREATORS",
    template: "%s | CREO",
  },
  description: "AI-Powered Creative Advertising Agency",
  keywords: [
    "CREO Creators",
    "CREO",
    "Advertising Agency Bengaluru",
    "Creative Agency Bangalore",
    "Marketing Agency Bengaluru",
    "Branding Agency Bangalore",
    "AI Advertising Agency",
    "Digital Marketing Agency Bengaluru",
  ],
  authors: [
    {
      name: "Mohith D L",
    },
  ],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "CREO",
    description: "AI-Powered Creative Advertising Agency",
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <Script
          id="creo-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AdvertisingAgency",
              name: "CREO Creators",
              url: "https://www.creocreators.in",
              logo: "https://www.creocreators.in/icon.png",
              image: "https://www.creocreators.in/preview.png",
              description:
                "AI-Powered Creative Advertising Agency in Bengaluru specializing in branding, marketing, advertising, production, and design.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              areaServed: "Bengaluru",
              serviceType: [
                "Advertising",
                "Branding",
                "Marketing",
                "Content Production",
                "Creative Design",
              ],
            }),
          }}
        />
        <SmoothScroll />
        {children}
        <CustomCursor />
        <SpeedInsights />
      </body>
    </html>
  );
}
