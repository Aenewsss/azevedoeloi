"use server"

import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath } from "next/cache"

export async function addTeam(prevState: any, form: FormData) {

    const result: { newTeam: string } | { error: string } = await (await fetch(`${API_URL}/api/team`, {
        method: "POST",
        body: form
    })).json()

    if ("error" in result) return {
        error: result.error,
        newTeam: ""
    }
    
    revalidatePath('/admin/nosso-time')
    
    return {
        error: "",
        newTeam: result.newTeam    
    }

}