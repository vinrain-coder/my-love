import type { Metadata } from "next";
import { Love_Light } from "next/font/google";
import "./globals.css";

const loveLight = Love_Light({
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
      <body className={`${loveLight.className} antialiased`}>{children}</body>
    </html>
  );
}
