import { Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

export const fontSans = Nanum_Gothic_Coding({
  weight: '400', 
  subsets: ["latin"],
  variable: "--font-sans",
}) 


export const metadata = {
  title: "Faareh Ahmed",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
