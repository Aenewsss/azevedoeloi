import { NextResponse } from "next/server"
import { PathPublicImagesEnum } from "@/enums/path.enum"
import fs from "fs"
import { promisify } from "util"
import highlightsService from "../highlights.service"
import { IHighlightsHome } from "@/interfaces/highlights-home.interface"

export async function GET(req: Request, context: any) {
    try {
        const { params } = context

        const highlightHome = await highlightsService.getHighlightHomeById(params.id)

        return NextResponse.json({ highlightHome })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function PUT(req: Request, context: any) {
    try {
        const { params } = context
        const form = await req.formData()

        const [icon, title, link] = [form.get('icon') as File, form.get('title') as string, form.get('link') as string]

        const bufferIcon = Buffer.from(await icon.arrayBuffer())

        // Remove os arquivos que já existem, para não poluir a memória
        const oldHighlight = await highlightsService.getHighlightHomeById(params.id)

        const isTheSameIcon = icon.name == 'undefined' ? true : false

        !isTheSameIcon && fs.rmSync("public" + oldHighlight.icon)

        // Adiciona os novos arquivos em suas devidas pastas
        const { id: lastBannerId } = await highlightsService.getLastAdded()
        
        const iconImagePath = PathPublicImagesEnum.ICONS + (Number(lastBannerId) + 1) + icon.name

        !isTheSameIcon && fs.writeFileSync(iconImagePath, bufferIcon)

        const highlightToUpdate: IHighlightsHome = {
            icon: isTheSameIcon ? oldHighlight.icon : iconImagePath.replace("public", ""),
            title,
            link
        }

        const highlightUpdated = await highlightsService.updateHighlightHome(params.id, highlightToUpdate)

        return NextResponse.json({ highlightUpdated })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function DELETE(req: Request, context: any) {
    try {
        const { params } = context

        // Remove os arquivos que já existem, para não poluir a memória
        const oldHighlight = await highlightsService.getHighlightHomeById(params.id)
        fs.rmSync("public" + oldHighlight.icon)

        const highlightRemoved = await highlightsService.deleteHighlightHome(params.id)

        return NextResponse.json({ highlightRemoved })
    } catch (error) {
        return NextResponse.json({ error })
    }
}