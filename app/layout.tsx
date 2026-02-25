import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { MainContextProvider } from "@/context/MainContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
        className={poppins.className}
      >
        <MainContextProvider>
          {children}
        </MainContextProvider>
      </body>
    </html>
  );
}
