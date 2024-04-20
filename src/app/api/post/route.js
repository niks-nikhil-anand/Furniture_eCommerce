import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(req){

    try {
        await connectDB()
        return NextResponse.json({
            "msg"   :"success"},
            {
                status:200
            }
        )
    } catch (error) {
        return NextResponse.json({
            "msg"   :"something went wrong"},
            {
                status:400
            }
        )
    }
}