'use client'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { usePathname } from "next/navigation";
function Navigation({ lists }) {
  const URL = usePathname()
  return (
      <div className="w-[250px] h-full min-h-screen border-r-[1px] flex flex-col">
        <div className="text-2xl mx-2 my-[20px] font-semibold p-2 ">
          Dashboard
        </div>
        <div className="flex flex-grow flex-col px-2">
        {lists?.map((item, index) => {
          return (
            <div key={`sidebar-${index}`} className="flex flex-col">
              <div className=" font-semibold text-gray-600">
                {item?.category}
              </div>
              {item?.insideList?.map((item, index) => {
                return (
                  <Link key={`side-list-index-${index}`} href={item?.link} className={`${ URL === item?.link ? "bg-gray-200" : ""} text-semibold px-2 py-2 rounded hover:bg-gray-200 cursor-pointer flex gap-2 items-center`}>
                    <Image src="" width={20} height={20} alt="dashboard" />
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
        <div className="gap-2 bg-gray-100 py-4 px-2 flex items-center">
          <div className="flex flex-grow">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">Username</h1>
              <h1 className="text-sm text-gray-500">Admin</h1>
            </div>
          </div>
          <button type="button" className="rounded hover:bg-gray-200 cursor-pointer p-2 ">
            <IoIosLogOut/>
          </button>
          
        </div>
        
      </div>
  );
}

export default Navigation;
