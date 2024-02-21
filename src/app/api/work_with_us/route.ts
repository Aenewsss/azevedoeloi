import { NextResponse } from "next/server";
import workWithUsService from "./work-with-us.service";

export async function GET() {
    try {
        const workWithUs = await workWithUsService.getWorkWithUs()

        return NextResponse.json({ workWithUs })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function PUT(req: Request) {
    try {
        const form = await req.formData()

        const [page_title, page_description] = [form.get('page_title') as string, form.get('page_descriptionF') as string]

        if (!page_title || !page_description)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: page_title e page_description' });

        const workWithUsUpdated = await workWithUsService.updateWorkWithUs({ page_title, page_description })

        return NextResponse.json({ workWithUsUpdated });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}