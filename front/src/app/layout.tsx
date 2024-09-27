import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets:["latin"],
  variable:"--font-sans",
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Clashing Chat",
  description: "Get the chat done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
   <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-slate-50 font-sans",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
