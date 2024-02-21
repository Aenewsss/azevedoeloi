import { NextResponse } from "next/server";
import blogHomeService from "./blog-home.service";

export async function GET() {
    try {
        const blogHome = await blogHomeService.getBlogHome()

        return NextResponse.json({ blogHome })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function PUT(req: Request) {
    try {
        const form = await req.formData()

        const [title, button_text] = [form.get('title') as string, form.get('button_text') as string]

        if (!title || !button_text)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: title e button_text' });

        const blogHomeUpdated = await blogHomeService.updateBlogHome({ title, button_text })

        return NextResponse.json({ blogHomeUpdated });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}