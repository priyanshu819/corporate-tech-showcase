import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuraCloud | Enterprise Tech Infrastructure Showcase",
  description: "Sub-second edge compute, zero-trust security, and scalable cloud solutions.",
  openGraph: {
    title: "AuraCloud | Corporate Tech Showcase",
    description: "Enterprise-grade UI with dynamic products and case studies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AuraCloud",
    applicationCategory: "DeveloperApplication",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#090D16] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}