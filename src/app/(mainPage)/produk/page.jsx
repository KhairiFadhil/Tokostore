'use client'
import { Button } from "@/components/ui/button";
import { CiStar, CiHeart, CiShare1, CiShoppingCart } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegMessage } from "react-icons/fa6";
import ProductCard from "@/components/ui/productCard";
import Text from "@/lib/typography/Text";
import Link from "next/link";
import { IoIosResize } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
function Page() {
    const [amount , setAmount] = useState(1);
    const [cara, setCara] = useState(true)
    const [more, setMore] = useState(true);
    const moreHandler = () => {
        setMore(!more);
    }
    const caraHandler = () => {
        setCara(!cara);
    }
    const diskon = true
    const decrement = () => {
        if(amount > 1) {
            setAmount(amount - 1);
        }
    }
    const increment = () => {
        if(amount < 10) {
            setAmount(amount + 1);
        }
    }
  return (
    <main className="flex gap-10 flex-col items-center justify-between px-24 pt-20">

      <section className=" w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
        <div className="w-full h-full flex ">
            <div className="flex flex-col">
                <div className="flex w-full p-5 ">
                    <div className="flex h-full flex-col gap-5 ">
                    <div
                        className="relative rounded overflow-hidden group " 
                        style={{ width: "400px", height: "300px" }}
                    >
                        <div
                        className="cursor-pointer rounded group-hover:bg-opacity-50 transition-all bg-black w-full h-full flex justify-center items-center bg-opacity-0 absolute"
                        style={{ width: "400px", height: "300px" }}
                        ></div>
                        <div className="opacity-0 group-hover:opacity-100 transition-all absolute text-white right-[45%] top-[40%] text-5xl ">
                                <IoIosResize/>
                            </div>
                        <Image
                        width={400}
                        height={400}
                        className="object-cover h-full w-full"
                        src="/images.jpeg"
                        alt=""
                        />
                    </div>
                        <div className="bg-gray-50 flex gap-5 rounded overflow-hidden ">
                            <button className="overflow-hidden object-cover rounded-xl hover:border-2 border-orange-500" style={{ width: "75px", height: "75px" }}>
                                <Image
                                className="w-full h-full"
                                src='/Roblox_Logo_2022.jpg'
                                alt=""
                                height={75}
                                width={75}
                                />
                            </button>
                            <button className="overflow-hidden object-cover rounded" style={{ width: "75px", height: "75px" }}>
                                <Image
                                className="w-full h-full"
                                src='/Roblox_Logo_2022.jpg'
                                height={75}
                                alt=""
                                width={75}
                                />
                            </button>
                            <button className="overflow-hidden object-cover rounded" style={{ width: "75px", height: "75px" }}>
                                <Image
                                alt=""
                                className="w-full h-full"
                                src='/Roblox_Logo_2022.jpg'
                                height={75}
                                width={75}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="mx-5 w-full p-2 flex flex-col">
                    <div className="flex ">
                        <div className="flex flex-col mr-auto">
                        <h1 className="font-bold text-2xl w-full flex flex-col">NAMA PRODUK
                            <span className=" font-medium text-sm">
                                Terjual <span className="text-orange-400">123</span>
                            </span></h1>
                        <h1 className="font-medium text-lg w-full text-gray-400 ">
                            Game Name
                        </h1>
                        </div>
                        <div className="flex gap-5 text-3xl font-bold">
                        <button className=" hover:scale-110 hover:text-red-600 transition-all">
                            <CiHeart />
                        </button>
                        <button className=" hover:scale-110 hover:text-blue-600 transition-all">
                            <CiShare1 />
                        </button>
                        </div>
                    </div>
                    <div className="font-bold text-3xl text-orange-500 flex-grow">
                        Rp90999{" "}
                        <span className="text-gray-400 font-medium text-sm">
                        / Type
                        </span>
                    </div>

                        <div className=" border-y-[1px] py-4">
                        <div className=" font-semibold text-lg flex gap-2 items-center">
                            <Avatar className="scale-110">
                            <AvatarImage src="/C9QQBy8xJJJJPG.jpg" />
                            <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="text-sm">
                            <h1>Name</h1>
                            <h1 className="text-[12px] text-green-400">ONLINE</h1>
                            </div>
                        </div>
                        <div className="flex flex-col my-2">
                            <h1 className="text-sm text-gray-400 flex gap-2 items-center">
                            <span className="text-yellow-400 text-lg">
                                <CiStar />
                            </span>
                            Star Rating / 5
                            </h1>
                            <Button
                            variant="secondary"
                            className="w-full flex gap-2 items-center mt-2"
                            >
                            <FaRegMessage /> Hubungi Penjual
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
        <div className="border-2 rounded-lg m-4 p-6">
            <div className="mb-10">
                <h1 className="font-bold text-xl my-2">DESKRIPSI</h1>
                <p className={`  text-gray-400 mx-2${more ? " line-clamp-2" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button onClick={moreHandler} className={"text-blue-700 hover:text-orange-400 transition all font-semibold my-5 text-lg"}>{more ? 'Lihat Selengkapnya' : 'Lihat Lebih Sedikit'}</button>
            </div>
            <div className="">
                <h1 className="font-bold text-xl my-2">CARA PENGGUNAAN</h1>
                <p className={`  text-gray-400 mx-2${ cara ? " line-clamp-2" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button onClick={caraHandler} className={"text-blue-700 hover:text-orange-400 transition all font-semibold my-5 text-lg"}>{cara ? 'Lihat Selengkapnya' : 'Lihat Lebih Sedikit'}</button>
            </div>
            </div>
        </div>
            <div className=" sticky top-[100px]  h-fit bg-white flex flex-col ds-shadow-card-nohover rounded p-5">
                <div className="font-semibold text-lg text-center">
                        Catatan Dan Pembelian
                </div>
                <div className="w-full flex flex-col my-5 gap-5">
                    <div className="flex gap-2 justify-center">
                        <button type="button" className="rounded-full border-[1px] px-2" onClick={decrement} disabled={amount === 1} style={{ color: amount === 1 ? 'gray' : 'black' }}>
                            -
                        </button>
                        <input className="px-auto border-[1px] focus:border-orange-400 rounded w-[50px]" type="text" value={amount} style={{textAlign: 'center'}} />
                        <button className="rounded-full border-[1px] px-2" onClick={increment} disabled={amount === 10} style={{ color: amount === 10 ? 'gray' : 'black' }}>
                            +
                        </button>
                    </div>
                    <div className="text-sm">
                        Stok: <span className="text-orange-500 font-bold text-lg">20</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-sm text-gray-500 flex flex-col">
                        Catatan <span className="text-gray-300">(Optional)</span>
                    </h1>
                    <input type="text" className="border-[1px] w-full h-[35px] rounded px-2 focus:outline-none focus:border-orange-500 focus:border-[1px] transition-all active:border-orange-500"></input>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="flex justify-end ">
                    {diskon ? <h1 className="text-sm text-gray-200">Discount</h1> : null}
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Subtotal</h1>
                        <h1 className="text-orange-500 text-xl">Rp9.999.999</h1>
                    </div>
                    <div className="flex gap-2">
                        <Button className='flex gap-2 bold rounded border-2 w-full' variant='outline'><CiShoppingCart/>Cart</Button>
                        <Button className='flex gap-2 bold rounded border-2 w-full'><CiShoppingCart/>Beli Langsung</Button>
                    </div>

                </div>
        </div>
    </div>
</section>
    <section className="w-full max-w-[1440px]">
        <div className="text-xl font-bold">
            ULASAN PEMBELI
            <div className="justify-center text-4xl flex my-10">
                KAMING SUN
            </div>
        </div>
    </section>
    <section className="w-full h-full min-w-screen max-w-[1440px] flex flex-col gap-5 z-[2]">
    <div className="flex gap-1 items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src='beli-cepat.svg' alt='beli cepat' width={35} height={35}/>
           <Text variant="h4" className=' font-bold'>JELAJAHI PRODUK</Text>
          </div>
          <Link href='/' className="p-e3 text-orange-500 font-bold">
            Lihat Lain
          </Link>
        </div>
        <div className=" justify-start flex gap-10 p-2  scrolllist  w-full overflow-hidden overflow-y-hidden select-none h-full overflow-x-auto">
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
    </main>
  );
}
export default Page;