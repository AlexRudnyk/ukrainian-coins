import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { GlobalContextProvider } from "@/context/store";

const raleway = Raleway({ subsets: ["cyrillic"] });

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
      <body className={raleway.className}>
        <GlobalContextProvider>
          <Header />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
