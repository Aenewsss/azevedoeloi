import { NextResponse } from "next/server";
import blogService from "./blog.service";

export async function GET() {
    try {
        const blogs = await blogService.getAllBlogs()

        return NextResponse.json({ blogs })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function POST(req: Request) {
    try {
        const form = await req.formData()

        const [text, title, url_path] = [form.get('text') as string, form.get('title') as string, form.get('url_path') as string]

        if (!text || !title || !url_path)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: email, image, info, name, text' });

        const newBlog = await blogService.createBlog({ text, title, url_path })

        return NextResponse.json({ newBlog });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}