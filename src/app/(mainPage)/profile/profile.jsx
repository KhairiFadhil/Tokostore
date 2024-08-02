import { Button } from "@/components/ui/button"
import Image from "next/image"
function Profile({session}){
    return(
        <div className="flex">
             <form className=" border-r-[1px] pr-[80px]">
                <table className="w-[600px]">
                    <label className="text-xl font-semibold text-gray-500 mx-2 ">Biodata</label>
                        <tr className="">
                            <td className="text-right pr-[30px] pb-[80px] overflow-hidden text-gray-500 pt-[30px]">Username</td>
                            <td className=" pb-[30px] pt-[30px]">
                                <input type="text"  className="border-2 w-full px-2 py-2 " placeholder={session?.user?.name} defaultValue={session?.user?.name}></input>                          
                                <label className="text-gray-500">Kamu hanya dapat mengubah nama 1 kali lagi. Pastikan nama sudah benar.</label>
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right pr-[30px] pb-[30px] overflow-hidden text-gray-500 ">Fullname</td>
                            <td className=" pb-[30px]">
                                <input type="text"  className="border-2 w-full px-2 py-2" placeholder={session?.user?.fullname} defaultValue={session?.user?.fullname}></input>                          
                            </td>
                        </tr>
                        <tr className="">
                            <td className="text-right pr-[30px] pb-[30px] overflow-hidden text-gray-500">Tanggal Lahir</td>
                            <td className=" pb-[30px]">
                                <input type="text"  className="border-2 w-full px-2 py-2" placeholder="Username" defaultValue=''></input>                          
                            </td>
                        </tr>
                    </table>
                    <table className="w-[600px]">
                        <label className="text-xl font-semibold text-gray-500 mx-2">Account</label>
                        <tr className="">
                            <td className="text-right pr-[30px] pb-[30px] pt-[30px] overflow-hidden text-gray-500">Email</td>
                            <label className="flex gap-5 pt-[30px]">{session?.user?.email}</label>
                            {session?.user?.type === 'google' ? <button type="button" className="hover:text-orange-400 text-green-500">Edit</button> : null}
                        </tr>
                        <tr className="">
                            <td className="text-right pr-[30px] pb-[30px] overflow-hidden text-gray-500 ">Phone Number</td>
                            <label className="flex gap-5 pt-[10px]">
                            0858 0000 0000 
                            </label>
                            <button type="button" className="hover:text-orange-400 text-green-500">Edit</button>
                        </tr>

                        </table>
                    </form>
                    <div className=" mx-[50px] flex flex-col  p-[50px] rounded gap-5 h-[400px]">
                        <div className="rounded overflow-hidden" style={{width: '200px', height: '200px'}}>
                            <Image
                            src='/Roblox_Logo_2022.jpg'
                            width={200}
                            height={200}
                            className="w-full h-full"
                            alt='Profile Logo'
                            />
                        </div>
                        <div className="w-full">
                            <Button className="w-full rounded font-medium" variant='outline'>
                                Pick Images
                            </Button>
                        </div>
                        <div>
                            Filename
                        </div>
                       
                    </div>
        </div>
       
    )
}
export default Profile