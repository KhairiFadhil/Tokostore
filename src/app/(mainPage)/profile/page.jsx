'use client'
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosArrowDown } from "react-icons/io"
import { useSession } from "next-auth/react"
import Profile from "./profile"
function Page(){
    const [isOpen, setIsOpen] = useState(true)
    const {data : session } = useSession()
    console.log(session)
    return(
        <main className="gap-10 items-center justify-between px-24 pt-[100px]">
            <div className="flex gap-10 max-w-[1200px] mx-auto">
            <section className="flex flex-col h-[400px] gap-5 z-[2] border-[1px] py-5 px-2 rounded ds-shadow-card-nohover">
                <div className="flex flex-col ">
                    <div className="w-full flex gap-2 border-b-[1px] px-5 pb-2 items-center">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                        <div className="flex flex-col ">
                            <button type="button" style={{textAlign:'left'}}>
                                Username
                            </button>
                            <button type="button" style={{textAlign:'left'}}>
                                Ganti Avatar
                            </button>
            
                        </div>
                    </div>
                    <div className="flex flex-col my-2 mx-2">
                        <div>
                            <button type="button" className=" w-full flex text-left font-semibold hover:text-orange-400  my-2 items-center"><p className="flex-grow">Akun Saya</p></button>
                        </div>
                        <div>
                            <button type="button" onClick={() => setIsOpen(!isOpen)} className=" w-full flex text-left font-semibold hover:text-orange-400  my-2 items-center"><p className="flex-grow">Activity</p><span><IoIosArrowDown className={`transition-all ${isOpen? 'rotate-180': ''} `}/></span></button>
                            <div className={`flex flex-col gap-2 ${isOpen ? "max-h-[100%]": "max-h-0"} overflow-hidden`}>
                            <button className="text-left px-2 hover:bg-gray-100 rounded text-sm font-medium">Favorite</button>
                                <button className="text-left px-2 hover:bg-gray-100 rounded text-sm font-medium">My Order</button>
                                <button className="text-left px-2 hover:bg-gray-100 rounded text-sm font-medium">My Purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col gap-5 z-[2]  py-5 px-2 ">
                <div className=" text-xl font-bold text-gray-600 border-b-2 pb-5">
                    Profile Edit
                </div>
                <Profile session={session}/>
            </div>
            </div>

        
</main>
  
    )
}
export default Page