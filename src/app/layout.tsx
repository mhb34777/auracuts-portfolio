import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamam Hamza Bhatti | Professional Video Editor",
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
    <html lang="en" className="h-full antialiased">
      <body className="grain-overlay min-h-full bg-[#0b0c10] text-gray-100">
        {children}
      </body>
    </html>
  );
}
