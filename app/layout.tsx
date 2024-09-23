import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "./globals.css";


import Navbar from "@/component/Navbar/page";
import Footer from "@/component/footer/page";

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "ECHO",
  description: "ECHO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </body>
    </html>
  );
}
