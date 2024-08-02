"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useToast } from "../../../components/ui/use-toast";
function Login({searchParams}) {
  const url = searchParams?.callbackUrl || '/'
  const { toast } = useToast()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const { data : session, status } = useSession()
  const {push} = useRouter()
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: url
      });
      if (!result?.error) {
        push('/')
        toast({
            title: "Login Success",
            description: 'Welcome Back' + ' ' + result?.user?.fullname
          })
      } else{
        if (result?.status === 401){
        toast({
            title: 'Email or Password Invalid',
            description: "Please try again",
          })
      }}
    } catch (error) {
      setIsError(true);
      console.log(error)
    }
    setIsLoading(false)
  };

  return (
    <div className="w-full h-full min-w-screen min-h-screen">
     {isLoading ? <div className='w-full h-full absolute opacity-50 bg-black z-[1000] transition-all'></div> : null}
      <div className="w-full h-full flex flex-col gap-5 justify-center items-center pt-[100px] ">
        <div className=" relative max-w-md w-full rounded-lg overflow-hidden p-8 space-y-8 border-[1px] border-gray-300 ds-shadow-card-nohover">
         {isError && <h2
            className="text-center font-semibold text-red-500" 
            style={{ animation: "appear 2s ease-out" }}
          >An unexpected error occurred, please contact our support</h2>}
          <p
            className="text-center text-gray-800 text-2xl font-bold"
            style={{ animation: "appear 3s ease-out" }}
          >
            LOGIN
          </p>
          <form
            method="POST"
            action="#"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-800 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-800 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-800">
                <input
                  className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                  type="checkbox"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a className="text-sm text-purple-600 hover:underline" href="#">
                Forgot your password?
              </a>
            </div>
            <button
              className="w-full py-2 px-4 bg-black hover:bg-gray-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
              type="submit"
              disabled={isLoading}
            >
              {isLoading? 'Loading...' : 'Sign In'}
            </button>
          </form>
          <div className="text-center text-gray-800 flex gap-2 justify-center">
            Don't have an account?
            <Link href="/register" className="text-purple-600 hover:underline">
              Sign up
            </Link>
          </div>
          <section className=" border-t-[1px] pt-5">    
              <Button
                href="/"
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/", redirect : false})}
                variant="outline"
                className="py-3  flex gap-2 w-full h-full"
              >
                <FcGoogle />
                Google
              </Button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
