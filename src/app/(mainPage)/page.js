import Image from "next/image";
import Carousel from "@/components/carousel";
import Card from "@/components/board";
import Text from "@/lib/typography/Text";
import Card2 from "@/components/ui/card2";
import ProductCard from "@/components/ui/productCard";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex gap-10 flex-col items-center justify-between px-24 pt-[60px]">
      <section className="w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
        <div className="h-[400px] w-full rounded-xl flex mt-14 overflow-hidden">
          <Carousel/>
        </div>
        <Card title={"🧭 TOP UP CEPAT"} className='mx-5 h-full'>
        </Card>
      </section>
      <section className="w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
        <div className="flex gap-1 items-center">
          <Image src='beli-cepat.svg' alt='beli cepat' width={35} height={35}/>
        <Text variant="h4" className=' font-bold'>KATEGORI POPULER</Text>
        </div>
        <div className=" justify-start scrolllist flex gap-10 w-full overflow-hidden overflow-y-hidden select-none h-full overflow-x-auto scrollbar-hide">
          <div className="grid grid-col-1 gap-y-4 ">
              <Card2 href="#" className='' img='Roblox_player_icon_black.svg'>
                  Roblox
              </Card2>
              <Card2 href="#" className='' img='images.jpeg'>
                  GrowtopiaSsss
              </Card2>
          </div>
          <div className="grid grid-col-1 gap-y-4 ">
              <Card2 href="#" className='' img='Roblox_player_icon_black.svg'>
                  Mobile Legends
              </Card2>
              <Card2 href="#" className='' img='images.jpeg'>
                  GrowtopiaSsss
              </Card2>
          </div>
        </div>
      </section>
      <section className="w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
        <div className="flex gap-1 items-center">
          <Image src='beli-cepat.svg' alt='beli cepat' width={35} height={35}/>
        <Text variant="h4" className=' font-bold'>BARU</Text>
        </div>
        <div className=" justify-start flex gap-10 p-2  scrolllist  w-full overflow-hidden overflow-y-hidden select-none h-full overflow-x-scroll">
          <div className="flex gap-10 mb-5">
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='#' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
          </div>
        </div>
      </section>
      <section className="w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
        <div className="flex gap-1 items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src='beli-cepat.svg' alt='beli cepat' width={35} height={35}/>
           <Text variant="h4" className=' font-bold'>JELAJAHI PRODUK</Text>
          </div>
          <Link href='/' className="px-3 text-orange-500 font-bold">
            Lihat Lain
          </Link>
        </div>
        <div className="justify-start flex gap-10 p-2   w-full overflow-hidden select-none">
          <div className="grid grid-cols-6 gap-10 flex-wrap relative">
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
              <ProductCard href='produk' price={2000} name='Robussy' game='Roblox' seller='Growtopia' sold={200}/>
          </div>
        </div>
      </section>

    </main>
  )
}
