import type { Metadata } from "next";
import { Allura } from "next/font/google";
import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Love",
  description: "Will you be my Valentine?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${allura.className} antialiased`}>{children}</body>
    </html>
  );
}
