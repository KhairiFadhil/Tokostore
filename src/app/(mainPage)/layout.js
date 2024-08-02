
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./header/navbar";
import Link from "next/link";
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
          <Navbar />
            {children}
            <footer className=" w-full h-full min-w-screen max-w-[1440px] flex flex-col z-[2] py-5 mx-auto px-5 my-5">
            <section className="w-full h-full  flex justify-between py-5 border-t-[1px]">
              <div className="flex gap-[10em]">
              <div className="flex gap-5 flex-col">
                <div className="flex gap-2 flex-col">
                    <h1 className=" font-bold text-lg">
                      BANTUAN
                    </h1>
                    <Link href={'#'} className=" transition-all hover:text-orange-600">
                      Pusat Bantuan
                    </Link>
                </div>
                <div className="flex gap-2 flex-col">
                  <h1 className=" font-bold text-lg">
                        Nama Website
                  </h1>
                  <Link href={'#'} className="transition-all hover:text-orange-600">
                      Tentang Kami
                  </Link>
                  <Link href={'#'} className="transition-all hover:text-orange-600">
                      Hubungi Kami
                  </Link>

                  
                </div>
              </div>
              <div className="flex gap-5 flex-col">
                <div className="flex gap-2 flex-col">
                    <h1 className=" font-bold text-lg">
                      INFORMASI PEMBELI
                    </h1>
                    <Link href={'#'} className=" transition-all hover:text-orange-600">
                      Tata Cara Membeli
                    </Link>
                    <Link href={'#'} className=" transition-all hover:text-orange-600">
                      Tata Cara Trading
                    </Link>
                    <Link href={'#'} className=" transition-all hover:text-orange-600">
                      Tata Cara Pembayaran
                    </Link>
                </div>
                <div className="flex gap-2 flex-col">
                  <h1 className=" font-bold text-lg">
                        INFORMASI PENJUAL
                  </h1>
                  <Link href={'#'} className="transition-all hover:text-orange-600">
                      Tata Cara Menjual
                  </Link>
                  <Link href={'#'} className="transition-all hover:text-orange-600">
                      Tata Cara Pencairan Dana
                  </Link>

                  
                </div>
              </div>
              </div>
            <div>
              Social Media
            </div>
            </section>
            <section className="w-full h-full flex items-center flex-col py-5 border-t-[1px]">
              <h1>
                Website Name v.0.0.1  © 2014 - 2023 
              </h1>
              <p>
                Made By Kalri
              </p>

            </section>
          </footer>
          <Toaster/>
      </SessionWrapper>
        </body>
    </html>
  );
}
