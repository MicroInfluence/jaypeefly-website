import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DumbbellGateIntro } from "@/components/ui/DumbbellGateIntro";
import { siteConfig } from "@/content/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [
    "JAYPEEFLY",
    "Patrick Jeremy",
    "personal fitness trainer",
    "fat loss coaching",
    "fitness coaching",
    "lifestyle modification",
    "online personal training",
    "body transformation",
    "mindset and accountability coach",
  ],
  authors: [{ name: siteConfig.founderName, url: siteConfig.siteUrl }],
  creator: siteConfig.founderName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.brandName,
        description: siteConfig.defaultDescription,
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/#patrick-jeremy`,
        name: siteConfig.founderName,
        alternateName: siteConfig.brandName,
        jobTitle: siteConfig.positioning,
        url: siteConfig.siteUrl,
        sameAs: siteConfig.socialProfiles.map((profile) => profile.url),
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#08090B] text-white antialiased flex flex-col"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F2A0C0] focus:text-[#08090B] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>

        <DumbbellGateIntro />

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
