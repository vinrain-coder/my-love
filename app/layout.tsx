import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const fairdisplay= Playfair_Display({
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
      <body className={`${fairdisplay.className} antialiased`}>{children}</body>
    </html>
  );
}
