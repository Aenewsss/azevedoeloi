import { NextResponse } from "next/server"
import { PathPublicImagesEnum } from "@/enums/path.enum"
import fs from "fs"
import { promisify } from "util"
import teamService from "../team.service"

export async function GET(req: Request, context: any) {
    try {
        const { params } = context

        const team = await teamService.getTeamById(params.id)

        return NextResponse.json({ team })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function PUT(req: Request, context: any) {
    try {
        const { params } = context
        const form = await req.formData()

        const [email, image, info, name, text] = [form.get('email') as string, form.get('image') as File, form.get('info') as string, form.get('name') as string, form.get('text') as string]

        // Remove os arquivos que já existem, para não poluir a memória
        const oldTeam = await teamService.getTeamById(params.id)
        
        await promisify(fs.rm)("public" + oldTeam.image)
        
        // Adiciona os novos arquivos em suas devidas pastas
        const bufferImage = Buffer.from(await image.arrayBuffer())
        const imagePath = PathPublicImagesEnum.TEAM + image.name

        fs.writeFile(imagePath, bufferImage, (err) => { if (err) console.error(err) })

        const teamToUpdate = await teamService.createTeam({
            image: imagePath.replace("public", ""),
            email,
            info,
            name,
            text
        })

        const teamUpdated = await teamService.updateTeam(params.id, teamToUpdate)

        return NextResponse.json({ teamUpdated })
    } catch (error) {
        return NextResponse.json({ error })
    }
}
export async function DELETE(req: Request, context: any) {
    try {
        const { params } = context

        // Remove os arquivos que já existem, para não poluir a memória
        const oldTeam = await teamService.getTeamById(params.id)

        await promisify(fs.rm)("public" + oldTeam.image)

        const team = await teamService.deleteTeam(params.id)

        return NextResponse.json({ team })
    } catch (error) {
        return NextResponse.json({ error })
    }
}