import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
import { Header } from "@/components";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ukr Coins",
  description: "Collection of Ukrainian coins by years",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
