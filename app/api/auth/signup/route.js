import { connect } from "@/lib/connectDB";
import { NextResponse } from "next/server";
export async function POST(req){
const data=await req.json()
const  client= await connect()
const db= client.db('portfolio')
db.collection('auth').insertOne({email:data.email,password:data.password})

return new NextResponse(JSON.stringify("success"))
}