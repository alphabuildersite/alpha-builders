import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Alpha Builders and Renovation Inc.";
const siteDescription =
  "Calgary exterior finishing and renovation contractor. Licensed, WCB insured, and backed by $5M liability insurance. Request a free quote from Alpha Builders and Renovation Inc.";

export const metadata: Metadata = {
  title: {
    default: "Alpha Builders | Calgary Exterior Finishing & Renovations",
    template: "%s | Alpha Builders Calgary",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Calgary exterior finishing",
    "Calgary renovations",
    "exterior contractor Calgary",
    "siding Calgary",
    "stucco Calgary",
    "Alpha Builders and Renovation",
    "Alberta contractor",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName,
    title: "Alpha Builders | Calgary Exterior Finishing & Renovations",
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: "Alpha Builders | Calgary Exterior Finishing & Renovations",
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
