import { NextResponse } from "next/server";
import bannerService from "./about-home.service";

export async function GET() {
    try {
        const about = await bannerService.getAboutHome()

        return NextResponse.json({ about })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function PUT(req: Request) {
    try {
        const banner = await req.formData()

        const [button_text, text, title] = [banner.get('button_text') as string, banner.get('text') as string, banner.get('title') as string]

        if (!button_text || !text || !title)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: button_text, text e title' });

        const aboutHomeUpdated = await bannerService.updateAboutHome({ button_text, text, title })

        return NextResponse.json({ aboutHomeUpdated });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}