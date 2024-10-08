import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/SharedComponent/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevStream",
  description: "An online coding learning platform",
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
