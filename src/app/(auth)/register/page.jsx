'use client'
import Image from "next/image";
import Text from "@/lib/typography/Text";
import Link from "next/link";
import { MdOutlineEmail, MdOutlineKey } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useToast } from "../../../components/ui/use-toast";
import { useState } from "react";
const Register = () => {
  const [isLoading, setIsloading] = useState(false);
    const { push } = useRouter();
    const { toast } = useToast()
const handleSubmit = async (e) => {
  setIsloading(true);
  const form = e.target;
  e.preventDefault();
  const data = {
    email: form.email.value,
    fullname: form.fullname.value,
    password: form.password.value,
    phone: form.phone.value,
  };

  // Basic form validation
  if (!data.email || !data.fullname || !data.password || !data.phone) {
    toast({
      title: "Please Fill Out All Fields",
    })
  }

  try {
    const result = await fetch("api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseJson = await result.json();
    setIsloading(false);
    console.log(responseJson)

    if (responseJson.statusCode === 200) {
      form.reset();
      push("/login")
      toast({
        title: "Register Success",
        description: "you can now use your account! just login!",
      })
    } else if (responseJson.statusCode === 400) {
      toast({
      title: "Failed to Register",
        description: "Oops! this account is already exist",
      })
    } else {
      toast({
        variant: "destructive",
        title: `Oops! something went wrong ${responseJson.statusCode}`,
          description: responseJson.message || "An unexpected error occurred please try again",
        })
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: `Failed to fetch`,
        description: error || "An unexpected error occurred please try again",
      })
  }
};
    return (
        <main className="flex gap-10 flex-col items-center px-24 ">
          {isLoading ? <div className='w-full h-full absolute opacity-50 bg-black z-[1000] transition-all'></div> : null}

            <section className="w-full h-full min-w-screen min-h-screen max-w-[1440px] flex pt-[150px] gap-5 z-[2] ">
                <div className="border-[1px] p-5 mx-auto h-[400px] overflow-hidden w-[400px] ds-shadow-card-nohover flex flex-col relative rounded-lg bg-white">
                   <div className="text-xl font-bold mx-auto mb-5">
                    Registrasi
                    </div>
                   <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                   <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="email"
                name="email"
                type="email"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="email"
              >
                Email address
              </label>
            </div>
                    <div className="relative">
              <input
                placeholder="fullname"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="fullname"
                name="fullname"
                type="text"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="fullname"
              >
                fullname
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Phone Number"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="phone"
                type="tel"
     inputMode="numeric"
    pattern="[0-9]*"
  />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="phone"
              >
                Phone Number
              </label>
            </div>
            <div className="relative">
              <input
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="password"
                name="password"
                type="text"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="password"
              >
                Password
              </label>
            </div>
                    <Button className='w-full rounded-md mt-2'>{!isLoading ? 'Register' : 'Loading...'}</Button>
                    <div className="mt-5">
                        Already registered? Sign in<span><Link href="/login" className="text-blue-500"> here</Link></span>
                    </div>
                   </form>  
                   {/* <form className="flex flex-col gap-2">
                   <div className="relative">
                    <MdOutlineEmail style={{position:"absolute", top:"8px", left:"10px", width:"25px", height:"25px"}}/>
                    <input name='email' id='email' type="email" className="rounded flex w-full h-[40px] border-[1px] pl-10 focus:outline-none focus:border-orange-500 focus:border-[1px] transition-all " placeholder="Email"></input>
                    </div>
                    <div className="relative">
                      <MdOutlineKey style={{position:"absolute", top:"8px", left:"10px", width:"25px", height:"25px"}}/>
                    <input name='password' id='password' type="password" className="rounded flex w-full h-[40px] border-[1px] pl-10 focus:outline-none focus:border-orange-500 focus:border-[1px] transition-all " placeholder="Password"></input>
                    </div>
                  </form>           */}
                </div>
                <div>
                </div>
            </section>
    </main>
    )
}
export default Register