import { NextResponse } from "next/server";
import fs from "fs"
import { PathPublicImagesEnum } from "@/enums/path.enum";
import highlightsService from "./highlights.service";

export async function GET() {
    try {
        const highlightsHome = await highlightsService.getAllHighlightsHome()

        return NextResponse.json({ highlightsHome })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function POST(req: Request) {
    try {
        const highlight = await req.formData()

        const [icon, title, link] = [highlight.get('icon') as File, highlight.get('title') as string, highlight.get('link') as string]

        if (!icon || !title || !link) return NextResponse.json({ error: 'Insira todos os dados do formulário: icon, title e link' });

        const bufferIcon = Buffer.from(await icon.arrayBuffer())

        const largeImagePath = PathPublicImagesEnum.ICONS + icon.name

        fs.writeFile(largeImagePath, bufferIcon, (err) => { if (err) console.error(err) })

        const newHighlight = await highlightsService.createHighlightHome({
            icon: largeImagePath.replace("public", ""),
            title,
            link
        })

        return NextResponse.json({ newHighlight });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}