import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; // eslint-disable-line @typescript-eslint/no-unused-vars
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushpatel-coral.vercel.app"),
  title: {
    default: "Ayush Patel - Portfolio",
    template: "%s | Ayush Patel"
  },
  description: "Portfolio of Ayush Patel, a Full-Stack Software Developer specializing in Next.js, React, and Android development.",
  keywords: ["Ayush Patel", "Software Developer", "Full Stack Developer", "Android Developer", "Next.js", "React", "Open Source", "Portfolio"],
  authors: [{ name: "Ayush Patel", url: "https://github.com/Ayush-Patel-56" }],
  creator: "Ayush Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushpatel-coral.vercel.app",
    title: "Ayush Patel - Software Developer",
    description: "Portfolio of Ayush Patel, a Full-Stack Software Developer specializing in Next.js, React, and Android development.",
    images: [
      {
        url: "/ayush-photo.png",
        width: 1200,
        height: 630,
        alt: "Ayush Patel - Software Developer",
      },
    ],
    siteName: "Ayush Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Patel - Software Developer",
    description: "Portfolio of Ayush Patel, a Full-Stack Software Developer specializing in Next.js, React, and Android development.",
    images: ["/ayush-photo.png"],
    creator: "@AyushPatel19592",
  },
  icons: {
    icon: "/bear-logo.png",
  },
  verification: {
    google: "00O476Gj35vrO5Mv2HX6NqN4O-KH6PF__No3G7GNuog",
  },
  alternates: {
    canonical: "https://ayushpatel-coral.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Patel",
    "url": "https://ayushpatel-coral.vercel.app",
    "image": "https://ayushpatel-coral.vercel.app/ayush-photo.png",
    "sameAs": [
      "https://github.com/Ayush-Patel-56",
      "https://www.linkedin.com/in/ayush-patel-15429b359",
      "https://x.com/AyushPatel19592"
    ],
    "jobTitle": "Software Developer",
    "description": "Full-Stack Software Developer specializing in Next.js, React, and Android development."
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
