import { retrieveData } from "@/lib/firebase/service";
import { NextResponse } from "next/server";
export async function GET(request){
    const data = await retrieveData('users');
    if(!data){
        return NextResponse.json({status: false, statusCode: 404, message: "data not found"})
    }
    const result = data.map((item) => {
        delete item.password
        return item
    })
    return NextResponse.json({status: true, statusCode: 200, message: "success", data: result});
}