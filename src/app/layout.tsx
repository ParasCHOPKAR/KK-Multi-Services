import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KK Multi Services | Professional AC Services",
  description: "Expert AC Repair, Installation, and Maintenance services. Reliable, fast, and affordable solutions for your home and business.",
  openGraph: {
    title: "KK Multi Services | Professional AC Services",
    description: "Expert AC Repair, Installation, and Maintenance services.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
