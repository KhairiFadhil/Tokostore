import { retrieveData } from "@/lib/firebase/service";
import { NextResponse } from "next/server";
import { updateData } from "@/lib/firebase/service";
export async function GET(request){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    const data = await retrieveData('users');
    if(!data){
        return NextResponse.json({status: false, statusCode: 404, message: "data not found"})
    }

    if(id){
        const detail = data.find((item) => item.id === id);
        console.log(detail)
        delete detail.password
        if (detail.created_at) {
            const timestamp = detail.created_at;
            const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
            detail.created_at = date.toLocaleString(); // or use toLocaleString() for a more readable format
          }
          if (detail.updated_at) {
            const timestamp = detail.updated_at;
            const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
            detail.updated_at = date.toLocaleString(); // or use toLocaleString() for a more readable format
          }
        return NextResponse.json({status: true, statusCode: 200, message: "success", data: detail});
    }
    const result = data.map((item) => {
        delete item.password
        if (item.created_at) {
            const timestamp = item.created_at;
            const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
            item.created_at = date.toLocaleString(); // or use toLocaleString() for a more readable format
          }
          if (item.updated_at) {
            const timestamp = item.updated_at;
            const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6);
            item.updated_at = date.toLocaleString(); // or use toLocaleString() for a more readable format
          }
        return item
    })
    return NextResponse.json({status: true, statusCode: 200, message: "success", data: result});
}

export async function PUT(request){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    const { data } = await request.body;
    await updateData('users', id, data, (respond) => {
        if(respond){
            return NextResponse.json({status: true, statusCode: 200, message: "success"})
        }
        return NextResponse.json({status: false, statusCode: 400, message: "failed"})
    })
}