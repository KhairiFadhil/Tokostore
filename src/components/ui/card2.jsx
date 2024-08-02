'use client'
import { truncateText } from "@/lib/typography/truncate"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"

function Card2({ children, className, href , img}) {

    return (
        <Link href={href} className={cn("btn flex justify-center items-center overflow-hidden gap-1 p-2 group transition-all flex-col text-center", className)} style={{width:"130px", height:"170px"}}>
          <div className='shaper bg-red-500 absolute group-hover:translate-x-[10px] group-hover:translate-y-[-20px] translate-y-[-25px] transition-all group-hover:scale-105' style={{width:'100px', height:'100px'}}></div>
          <div className=' shaper bg-slate-600 relative flex items-center justify-center' style={{width:'100px', height:'100px'}}>
            <Image src={`/${img}`} alt='Logo' width={70} height={70} className="  inner object-cover w-full h-full  group-hover:scale-110 transition-all"/>
          </div>
             <h4 className='btn text-base text-center break-words leading-4.5 mt-1 w-18 line-clamp-2 group-hover:scale-110'>
               {children}
             </h4>
           
        </Link>
    )
}
export default Card2