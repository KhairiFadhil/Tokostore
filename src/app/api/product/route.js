import { NextResponse } from "next/server";

const data = [{
    id : 1,
    name : "Diamond Locks",
    gameName: 'Grutopia',
    description : "Lock for growtopia",
    price: 10000
},
{
    id : 2,
    name : "Akunos",
    gameName: 'Menkrep',
    description : "gr",
    price: 1004400
},
{
    id : 3,
    name : "Skript",
    gameName: 'Tutupias',
    description : "grugrugr",
    price: 100003
}];
export async function GET(request){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    console.log(id)

    if(id){
        const detail = data.find((item) => item.id === Number(id));
        return NextResponse.json({status: true, statusCode: 200, message: "success", data: detail}); 
    }
    return NextResponse.json({status: true, statusCode: 200, message: "success", data: data});   
}