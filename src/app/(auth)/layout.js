import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "../../components/ui/toaster";
import SessionWrapper from "@/lib/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TokoHitam - Toko Online",
  description: "Toko Hitam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {children}
         <Toaster/>
        </SessionWrapper>
        </body>
        
    </html>
  );
}
