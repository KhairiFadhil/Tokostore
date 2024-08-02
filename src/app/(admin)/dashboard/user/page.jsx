import {
    AiOutlineBell,
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiTwotoneShop,
  } from "react-icons/ai";
import { Payment, columns } from "./columns"
import DataTable from "./data-table"

async function getData() {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        name: "pending",
        email: "m@example.com",
      },
      // ...
    ];
  }
async function Page(){
    const data = await getData();
    return(
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
                        <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}
export default Page