"use client";
import { useState, useEffect } from "react";
import {
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiTwotoneShop,
} from "react-icons/ai";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  const { data: session, status } = useSession();
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full max-h-[80px] flex items-center min-h-[80px] py-2 bg-white ${
        scroll ? "bg-opacity-100 drop-shadow-md" : "bg-opacity-0"
      } fixed z-[100]`}
    >
      <div className="w-full h-full max-w-[1440px] mx-auto flex  flex-col">
        <div className="flex items-center justify-center gap-1">
          <Link href={"/"} className="flex justify-center items-center">
            <Image src="/e5b8438b.svg" alt="logo" width={250} height={250} />
          </Link>
          {/* Search Input */}
          <div className="w-full h-full flex items-center gap-4 px-1">
            <div className="w-full h-full flex relative">
              <input
                type="text"
                className=" border-[1px] rounded flex w-full h-[40px] px-10 focus:outline-none focus:border-orange-500 focus:border-[1px] transition-all"
                placeholder="Search"
              ></input>
              <FaMagnifyingGlass className="absolute left-4 top-3" />
            </div>
            <div className="flex gap-1 text">
              <div className="rounded hover:bg-slate-300 w-[40px] h-[40px] transition-all flex justify-center items-center relative">
                <div
                  className="rounded-full absolute bg-red-600 text-white text-[15px] font-bold flex items-center pt-1 justify-center top-0 left-0"
                  style={{ width: "20px", height: "20px" }}
                >
                  2
                </div>
                <AiOutlineMail style={{ width: "20px", height: "20px" }} />
              </div>
              <div className="relative rounded hover:bg-slate-300 w-[40px] h-[40px] transition-all flex justify-center items-center">
                <AiOutlineBell style={{ width: "20px", height: "20px" }} />
                <div
                  className="rounded-full absolute bg-red-600 text-white text-[15px] font-bold flex items-center justify-center pt-1 top-0 left-0"
                  style={{ width: "20px", height: "20px" }}
                >
                  2
                </div>
              </div>
              <div className="relative rounded hover:bg-slate-300 w-[40px] h-[40px] transition-all flex justify-center items-center">
                <AiOutlineShoppingCart
                  style={{ width: "20px", height: "20px" }}
                />
                <div
                  className="rounded-full absolute bg-red-600 text-white text-[15px] font-bold flex items-center justify-center pt-1 top-0 left-0"
                  style={{ width: "20px", height: "20px" }}
                >
                  2
                </div>
              </div>
            </div>
          </div>
          <div className="gapper"></div>
          <div className="flex">
            {/* TOKO BUTTON */}
            {status === "authenticated" && session?.user?.role === "admin" && (
              <Link
                href={"/dashboard"}
                className="flex justify-center items-center gap-1  p-2 rounded hover:bg-slate-300 transition-all"
              >
                <AiTwotoneShop style={{ width: "30px", height: "30px" }} />
                <span className="">Dashboard</span>
              </Link>
            )}
            {/* LOGIN/REGISTER */}
            {status === "unauthenticated" ? (
              <div className="flex justify-center items-center gap-1 ml-4">
                <Link
                  href=""
                  className="w-full h-full flex items-center text-white"
                >
                  <Button onClick={() => signIn()} className="w-full rounded">
                    Login
                  </Button>
                </Link>
                <div className="flex justify-center items-center gap-1 ">
                  <Link
                    href="/register"
                    className="w-full h-full flex items-center text-white"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded text-black"
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              // USER AVATAR
              <button onClick={signOut}>
                <div className="flex justify-center items-center gap-1 p-2 rounded hover:bg-slate-300 transition-all">
                  <Avatar>
                    <AvatarImage src={session?.user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="">{session?.user.fullname.split(' ')[0]}</span>
                </div>
              </button>
            )}
          </div>
        </div>
        {/* more stuff */}
      </div>
    </div>
  );
}
export default Navbar;
