import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import UiProvider from "@/components/common/NextUiProvider";
import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeProvider } from "@/components/theme-provider";

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
  title: "HRMS SaaS",
  description:
    "A comprehensive Human Resource Management System for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UiProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </UiProvider>
      </body>
    </html>
  );
}
