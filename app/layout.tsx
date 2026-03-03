import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { MainContextProvider } from "@/context/MainContext";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "An admin dashboard for an ecommerce website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body
        className={lato.className}
      >
        <MainContextProvider>
          {children}
        </MainContextProvider>
      </body>
    </html>
  );
}
