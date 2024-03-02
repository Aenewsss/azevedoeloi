"use server"

import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath, revalidateTag } from "next/cache"

export async function updateTeam(prevState: any, form: FormData) {

    const teamId = form.get('id')

    const result = await (await fetch(`${API_URL}/api/team/${teamId}`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.teamUpdated) {
        revalidateTag('teams')
        return { updated: result.teamUpdated,error :"" }
    }
    return { error: result.error, updated:"" }
}