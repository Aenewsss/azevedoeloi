import { NextResponse } from "next/server";
import fs from "fs"
import { PathPublicImagesEnum } from "@/enums/path.enum";
import teamService from "./team.service";

export async function GET() {
    try {
        const teams = await teamService.getAllTeams()

        return NextResponse.json({ teams })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function POST(req: Request) {
    try {
        const form = await req.formData()

        const [email, image, info, name, text] = [form.get('email') as string, form.get('image') as File, form.get('info') as string, form.get('name') as string, form.get('text') as string]

        if (!email || !image || !info || !name || !text)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: email, image, info, name, text' });

        const bufferImage = Buffer.from(await image.arrayBuffer())
        const imagePath = PathPublicImagesEnum.TEAM + image.name

        fs.writeFile(imagePath, bufferImage, (err) => { if (err) console.error(err) })

        const newTeam = await teamService.createTeam({
            image: imagePath.replace("public", ""),
            email,
            info,
            name,
            text
        })

        return NextResponse.json({ newTeam });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}