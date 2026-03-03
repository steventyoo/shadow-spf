import type { Metadata } from "next";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SHADOW — Seoul Performance SPF",
  description:
    "High-performance Korean-formulated sunscreen stick for runners and hybrid athletes. SPF 50+ PA++++. No white cast. No drip. No sting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
