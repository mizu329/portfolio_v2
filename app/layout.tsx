import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionary-mate.vercel.app"),
  title: {
    default: "Visionary Mate",
    template: "%s | Visionary Mate",
  },
  description:
    "デザイナー兼エンジニアとして、WEBサイト開発やアプリ開発を行っています。実務や個人開発を通して得た学びや気づきを整理し、記録・発信しています。",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Visionary Mate",
    description:
      "デザイナー兼エンジニアとして、WEBサイト開発やアプリ開発を行っています。実務や個人開発を通して得た学びや気づきを整理し、記録・発信しています。",
    url: "https://visionary-mate.vercel.app",
    siteName: "Visionary Mate",
    images: [
      {
        url: "/image/ogp.png",
        width: 1200,
        height: 630,
        alt: "Visionary Mate OGP",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionary Mate",
    description:
      "デザイナー兼エンジニアとして、WEBサイト開発やアプリ開発を行っています。",
    images: ["https://visionary-mate.vercel.app/image/ogp.png"],
  },
  alternates: {
    canonical: "https://visionary-mate.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
