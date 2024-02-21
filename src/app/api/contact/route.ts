import { NextResponse } from "next/server";
import contactService from "./contact.service";

export async function GET() {
    try {
        const contact = await contactService.getContact()

        return NextResponse.json({ contact })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function PUT(req: Request) {
    try {
        const form = await req.formData()

        const [page_title,
            page_description,
            contact_info_text,
            phone_mail_text,
            work_with_us_text
        ] = [
                form.get('page_title') as string,
                form.get('page_description') as string,
                form.get('contact_info_text') as string,
                form.get('phone_mail_text') as string,
                form.get('work_with_us_text') as string
            ]

        if (!page_title || !page_description)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: page_title, page_description,contact_info_text,phone_mail_text,work_with_us_text' });

        const contactUpdated = await contactService.updateContact({ page_title, page_description, contact_info_text, phone_mail_text, work_with_us_text })

        return NextResponse.json({ contactUpdated });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}