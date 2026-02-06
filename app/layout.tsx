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
  title: "Rohan Sen - Portfolio",
  description: "Portfolio of Rohan Sen, Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
