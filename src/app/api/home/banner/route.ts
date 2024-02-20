import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        return NextResponse.json({message: 'hello my friend'})
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function POST(req: Request) {
    try {
        const banner = await req.formData()
        console.log(banner.get('image'))
        const body = {name : banner.get('name'), image: banner.get('image')}
        return NextResponse.json({body})
    } catch (error) {
        return NextResponse.json({ error })
    }
}