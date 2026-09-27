import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Krunal Dhote | Backend Software Engineer",
    template: "%s | Krunal Dhote",
  },
  description:
    "Backend Software Engineer building secure systems, scalable services, asynchronous workflows, and cloud infrastructure with Node.js, NestJS, TypeScript, and AWS.",
  applicationName: "Krunal Dhote Portfolio",
  authors: [{ name: "Krunal Dhote" }],
  creator: "Krunal Dhote",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Krunal Dhote",
    "Backend Software Engineer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "PostgreSQL",
  ],
  openGraph: {
    type: "website",
    title: "Krunal Dhote | Backend Software Engineer",
    description:
      "Secure backend systems, distributed workflows, and cloud infrastructure built with Node.js, NestJS, TypeScript, and AWS.",
    siteName: "Krunal Dhote",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krunal Dhote | Backend Software Engineer",
    description:
      "Secure backend systems, distributed workflows, and cloud infrastructure.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
