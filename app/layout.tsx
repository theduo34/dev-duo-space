import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {MotionProvider} from "@/providers/motion-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "</>EMMSOM",
  description: "The official portfolio of Dev Duo, projects, expertise, and engineering craft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <MotionProvider>
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
