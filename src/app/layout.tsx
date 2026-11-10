import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const signatureFont = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Hamza Bhatti | Professional Video Editor",
  description:
    "Professional video editor with 5 years of experience creating cinematic, branded, and social-first content.",
  keywords: [
    "video editor",
    "professional video editor",
    "cinematic editing",
    "motion graphics",
    "color grading",
    "portfolio",
    "Hamza Bhatti",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${displayFont.variable} ${signatureFont.variable}`}
    >
      <body className="grain-overlay min-h-full bg-[#0b0c10] text-gray-100">
        {children}
      </body>
    </html>
  );
}
