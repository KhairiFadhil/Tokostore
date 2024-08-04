
'use client'
import userServices from "@/app/api/service";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import Select from "@/components/ui/select";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
function ModalUpdatedUser(props) {
  const { data, setModal, className } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleUser = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      const userData = {
          fullname: e.target.fullname.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          role: e.target.role.value
      }
      console.log(userData)
      const result = await userServices.updateUser(data.data.id, userData)
      console.log(result)
      if(result.statusCode === 200){
          alert('Success')
      }
  }
  if (data.action === "delete") {
    return (
      <Modal className={className} onClose={() => setModal({})}>
        <div className="flex relative">
          <div className="right-0 absolute top-0">
            <X
              onClick={() => setModal({})}
              className="hover:text-red-500 transition-all hover:bg-gray-100"
            />
          </div>
          <div className="text-center mx-10 my-5 flex flex-col">
            Are you sure want to delete this user?
            <div className="font-bold m-2">Action cannot be undo</div>
          </div>
        </div>

        <Button className="w-full" variant="destructive">
          Delete
        </Button>
      </Modal>
    );
  } else if (data.action === "edit") {
    return (
      <Modal onClose={() => setModal({})}>
        <div className="flex relative">
          <div className="right-0 absolute top-0">
            <X
              onClick={() => setModal({})}
              className="hover:text-red-500 transition-all hover:bg-gray-100"
            />
          </div>
          <div className=" mx-10 my-5 flex flex-col relative">
            <h1 className="mb-5 text-xl font-semibold text-start">
              Update User
            </h1>
            <div className="flex gap-10">
              <div className="flex w-[250px] items-center flex-col gap-5 bg-gray-100 p-5 rounded">
                <div className="w-[200px] h-[200px] object-cover overflow-hidden rounded-md ds-shadow-card-none">
                  <Image
                    width={100}
                    height={100}
                    src="/images.jpeg"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button className="w-full overflow-hidden" variant="outline">
                  Upload Image
                  <input
                    name="text"
                    type="file"
                    className="absolute opacity-0 cursor-pointer"
                  />
                </Button>
                <div className=" text-sm text-gray-600 w-full">
                  <h1>Besar file: maksimum 10.000.000 bytes (10 Megabytes).</h1>
                </div>
              </div>
              <form className="flex flex-col gap-5" onSubmit={handleUser}>
                <div className="flex-col flex">
                  Nama
                  <input
                    type="text"
                    id="fullname"
                    className="transition-all focus:outline-none focus:border-orange-500 focus:border-[1px] w-full border-2 rounded h-10 my-1 border-gray-300 px-2"
                    placeholder={data.data.fullname}
                    defaultValue={data.data.fullname}
                  />
                </div>
                <div className="flex-col flex">
                  Email
                  <input
                    type="email"
                    className="transition-all focus:outline-none focus:border-orange-500 focus:border-[1px] w-full border-2 rounded h-10 my-1 border-gray-300 px-2"
                    placeholder={data.data.email}
                    defaultValue={data.data.email}
                    id="email"
                  />
                </div>
                <div className="flex-col flex">
                  Phone Number
                  <input
                    required
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="transition-all focus:outline-none focus:border-orange-500 focus:border-[1px] w-full border-2 rounded h-10 my-1 border-gray-300 px-2"
                    placeholder={data.data.phone || "Nomor belum ada"}
                    defaultValue={data.data.phone || "Nomor belum ada"}
                  />
                </div>
                <Select label="Role" name="role" defaultValue={data.data.role} options={[
                    {value : 'admin', label : 'Admin'}, 
                    {value : 'member', label : 'Member'}]}/>
                <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-10 rounded-xl mx-10 my-2 transition-all">
                Edit Profile
                </button>
              </form>
            </div>
          </div>
        </div>

        
      </Modal>
    );
  }
}
export default ModalUpdatedUser;
