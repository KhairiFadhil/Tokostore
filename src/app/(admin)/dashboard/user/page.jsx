'use client'
import Tables from "./table/tables"

import {
    AiOutlineBell,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiTwotoneShop,
  } from "react-icons/ai";
import ModalUpdatedUser from "./ModalUpdateUser"
import userServices from "@/app/api/service/index";
import { useEffect, useState } from "react";

function Page(){
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isModalUpdated, setIsModalUpdated] = useState({});
    useEffect(() => {
    setIsLoading(true)
        const getAllUser = async () => {
            const { data } = await userServices.getAllUser()
            if(!data || data.length === 0){
                return setIsError(true)
            }
            setData(data.data)
        }
        getAllUser();
    setIsLoading(false)
    }, [])
    return(
        <>
        <div className="w-full h-full min-h-screen max-w-[1440px] mx-auto">
            
            <div className="flex flex-col m-2">
                <div className="w-full flex rounded-xl p-5 bg-gray-200 ">
                    <div className="font-semibold text-xl text-gray-600 flex-grow">
                        User
                    </div>
                    <div className="flex gap-5">
                        <button type="button" className="p-2 rounded hover:bg-gray-300 transition-all">
                            <AiOutlineBell/>
                        </button>
                        <button type="button" className="p-2 rounded hover:bg-gray-300 transition-all">
                            <AiOutlineMail/>
                        </button>
                    </div>
                </div>      
            </div>
            <div className="container mx-auto py-5 w-full">
                {data.length > 0 && <Tables data={data} setModal={setIsModalUpdated} />}
                
            </div>
        </div>
        {
           Object.keys(isModalUpdated).length
            && 
            (<ModalUpdatedUser className=' transition-all' setModal={setIsModalUpdated} data={isModalUpdated} />)
        }
        
    </>
    )
}
export default Page