import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { token } = await req.json()
        jwt.verify(token.replace("Bearer ", ""), process.env.NEXT_PUBLIC_AUTH_SECRET as string, (err: any, decoded: any) => {
            console.log(err)
            console.log(decoded)
        });

        

        return NextResponse.json({ validToken: 'decoded' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}