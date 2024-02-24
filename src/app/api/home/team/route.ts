import { NextResponse } from "next/server";
import teamHomeService from "./team-home.service";

export async function GET() {
    try {
        const team = await teamHomeService.getTeamHome()

        return NextResponse.json({ team })
    } catch (error) {
        return NextResponse.json({ error })
    }
}

export async function PUT(req: Request) {
    try {
        const form = await req.formData()

        const title =  form.get('title') as string

        if (!title)
            return NextResponse.json({ error: 'Insira todos os dados do formulário: title' });

        const teamHomeUpdated = await teamHomeService.updateTeamHome({ title })

        return NextResponse.json({ teamHomeUpdated });
    } catch (error) {
        return NextResponse.json({ error: 'Dados incompletos' })
    }
}