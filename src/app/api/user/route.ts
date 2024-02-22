import { IUser } from "@/interfaces/user.interface"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import userService from "./user.service"

export async function POST(req: Request) {
    try {

        const form = await req.formData()
        const user: IUser = {
            email: form.get('email') as string,
            password: form.get('password') as string
        }

        if (!user.email || !user.password) return NextResponse.json({ message: "Usuário ou senha em branco" })
        if (user.password.length < 8) return NextResponse.json({ message: "Sua senha deve conter mais de 8 caracteres" })

        const hashPassword = await bcrypt.hash(user.password, 10)

        const newUser = await userService.createUser(user.email, hashPassword)

        return NextResponse.json({ message: "Usuário criado com sucesso", newUser })
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }

}