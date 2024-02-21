import { NextResponse } from "next/server"
import { PathPublicImagesEnum } from "@/enums/path.enum"
import fs from "fs"
import { promisify } from "util"
import blogService from "../blog.service"

export async function GET(req: Request, context: any) {
    try {
        const { params } = context

        const blog = await blogService.getBlogById(params.id)

        return NextResponse.json({ blog })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function PUT(req: Request, context: any) {
    try {
        const { params } = context
        const form = await req.formData()

        const [text, title, url_path] = [form.get('text') as string, form.get('title') as string, form.get('url_path') as string]

        const blogUpdated = await blogService.updateBlog(params.id, { text, title, url_path })

        return NextResponse.json({ blogUpdated })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function DELETE(req: Request, context: any) {
    try {
        const { params } = context

        const blog = await blogService.deleteBlog(params.id)

        return NextResponse.json({ blog })
    } catch (error) {
        return NextResponse.json({ error })
    }
}