import { NextResponse } from "next/server"
import { Login } from "@/lib/firebase/service"
export async function POST(request) {
    const {email, password} = await request.json()
    const user = await Login({email, password})
    if(user){
        const passwordConfirm = await bcrypt.compare(password, user.password)
        if(passwordConfirm){
            return NextResponse.json({status: success, statusCode: 200, message: "Login success"})
        }
        else{
            return NextResponse.json({
                status: failed, statusCode:400, message: "Password is incorrect"
            })
        }
    }else{
        return NextResponse.json({status: failed, statusCode: 405, message: "wrong credential"})
    }
}