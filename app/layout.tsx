import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanchana — Portfolio",
  description: "Software Engineer — Frontend / Fullstack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
