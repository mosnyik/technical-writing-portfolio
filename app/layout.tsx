import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moses Nyikwagh | Technical Writer & Developer Educator",
  description:
    "Technical writer specializing in Web3, APIs, and backend systems. I create hands-on tutorials that help developers build real applications.",
  metadataBase: new URL("https://mosnyik.com"),
  openGraph: {
    title: "Moses Nyikwagh | Technical Writer & Developer Educator",
    description:
      "Hands-on technical tutorials for Web3, APIs, and backend development.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
      },
      {
        url: "/favicon",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
