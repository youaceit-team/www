import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const poppins = localFont({
  src: [
    {
      path: "../../public/assets/font/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/font/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/font/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YouAceIt!",
  description: "Smater Schedule. Better Results. Backed By Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
