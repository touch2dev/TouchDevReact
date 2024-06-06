'use client';
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import useThemeStore from "@/lib/store/ThemeStore";

const roboto = Roboto_Condensed({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "TouchDev app",
//   description: "Generated at CogAI Lab @ Caldwell University",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useThemeStore((state: any) => state.theme);
  return (
    <html lang="en">
      <head>
        <title>TouchDev</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://lh3.googleusercontent.com/a/ACg8ocJ7AOyVZY17XDTdIS2R1ulbvtFn-rFHmTxEGE49oqc-WtTi1do=s720-c-no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <div className={` ${theme ? "bg-gray-800 text-white " : ""}`}>
      <body className={roboto.className}>
        {children}</body>
      </div>
    </html>
  );
}
