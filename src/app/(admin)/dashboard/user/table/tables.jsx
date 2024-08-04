import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Tables(props) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const { data, setModal } = props;
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const sortedData = data.slice().sort((a, b) => {
    if (sortColumn === "uid") {
      return sortDirection === "asc" ? a.uid - b.uid : b.uid - a.uid;
    } else if (sortColumn === "nama") {
      return sortDirection === "asc"
        ? a.fullname.localeCompare(b.fullname)
        : b.fullname.localeCompare(a.fullname);
    } else if (sortColumn === "email") {
      return sortDirection === "asc"
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    } else if (sortColumn === "lastCreated") {
      return sortDirection === "asc"
        ? a.created_at.localeCompare(b.created_at)
        : b.created_at.localeCompare(a.created_at);
    } else if (sortColumn === "lastUpdated") {
      return sortDirection === "asc"
        ? a.updated_at.localeCompare(b.updated_at)
        : b.updated_at.localeCompare(a.updated_at);
    } else if (sortColumn === "role") {
      return sortDirection === "asc"
        ? a.role.localeCompare(b.role)
        : b.role.localeCompare(a.role);
    }
    return 0;
  });

  return (
    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
      <table className="min-w-full">
        <thead className="">
          <tr className="">
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              UID
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              Nama
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              Email
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              Last Created
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              Last Updated
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
              Role
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => {
            return (
              <tr>
                <td className="px-6 hover:bg-gray-100 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  {data.id}
                </td>
                <td className="px-6 hover:bg-gray-100 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  {data.fullname}
                </td>
                <td className="px-6 hover:bg-gray-100 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  {data.email}
                </td>
                <td className="px-6 hover:bg-gray-100 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  {data.created_at}
                </td>
                <td className="px-6 hover:bg-gray-100 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  {data.updated_at}
                </td>
                <td className="px-6 hover:bg-gray-100 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  {data.role}
                </td>
                <td className="px-6 transition-all py-4 whitespace-no-wrap border-b border-gray-200">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        className="text-red-500"
                        onClick={() => {
                          setModal({
                            data: data,
                            action: "delete",
                          });
                        }}
                      >
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-blue-500"
                        onClick={() => {
                            setModal({
                            data: data,
                            action: "edit",
                          })}}
                      >
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Tables;
