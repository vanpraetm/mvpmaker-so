import type { Metadata } from "next";
import { Inter, Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mvpmaker.so"),
  title: "Michiel Van Praet | Product Builder",
  description:
    "Venture builder & PM. Currently at o2o bicycle leasing, previously at bundl. I build apps like RISKY and PUNCH.",
  openGraph: {
    title: "Michiel Van Praet | Product Builder",
    description:
      "Venture builder & PM. I build apps like RISKY and PUNCH.",
    url: "https://mvpmaker.so",
    siteName: "mvpmaker.so",
    images: [
      {
        url: "/michiel.jpg",
        width: 449,
        height: 480,
        alt: "Michiel Van Praet",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Michiel Van Praet | Product Builder",
    description:
      "Venture builder & PM. I build apps like RISKY and PUNCH.",
    images: ["/michiel.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
