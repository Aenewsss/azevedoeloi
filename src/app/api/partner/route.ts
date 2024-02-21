import { NextResponse } from "next/server";
import partnerService from "./partner.service";

export async function GET() {
    try {
        const partner = await partnerService.getPartner()

        return NextResponse.json({ partner })
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

        const partnerUpdated = await partnerService.updatePartner({ page_title, page_description })

        return NextResponse.json({ partnerUpdated });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}