import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
function ProductCard({href, name, game, price, seller, sold, className}) {
    return (
        <Link href={`/${href}`} style={{width:"200px", height:"300px"}} className={cn("ds-shadow-card rounded-xl flex flex-col overflow-hidden group transition-all ", className)}>
            <div className=" w-full h-[200px] overflow-hidden">
              <Image src='/images.jpeg' alt='Logo' width={200} height={100} className="w-full h-full object-cover transition-all group-hover:scale-110"/>
            </div>
            <div className="p-2 flex flex-col h-full" >
              <div className="grid grid-rows-4">
                <h1 className="text-bold text-lg font-semibold">
                {name}
                </h1>
                <p className=" text-gray-400 font-semibold text-sm">
                  {game}
                </p>
                <p className="font-bold text-orange-500">
                Rp{price}
                </p>
                <p className=" font-medium text-gray-300">
                {seller} <span>

               </span>
              </p>
              </div>
              <div className="flex mt-auto">
                <p>
                {sold} Sold
                </p>
              </div>
            </div>
        </Link>
    )
}
export default ProductCard