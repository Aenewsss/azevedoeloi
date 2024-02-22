import { NextResponse } from "next/server"
import userService from "../user/user.service"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
    try {
        const form = await req.formData()
        const authentication = {
            email: form.get("email") as string,
            password: form.get("password") as string
        }

        const user = await userService.getUserByEmail(authentication.email)
        if (!user) return NextResponse.json({ error: "Usuário não encontrado" })

        const passwordsMatch = await bcrypt.compare(authentication.password, user.password)
        if (!passwordsMatch) return NextResponse.json({ error: "Senha ou usuário incorretos" })

        const payload = {
            id: user.id,
            email: user.email
        }

        const token = await new Promise((resolve) => {
            jwt.sign(payload, process.env.NEXT_PUBLIC_AUTH_SECRET as string, { expiresIn: 1000 * 60 * 3 }, (err, token) => {
                if (err) return NextResponse.json({ error: err })
                resolve(token)
            })
        })

        const bearer = `Bearer ${token}`

        return NextResponse.json({ token: bearer })
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}