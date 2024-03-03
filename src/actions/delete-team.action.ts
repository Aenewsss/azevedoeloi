"use server"

import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath, revalidateTag } from "next/cache"

export async function deleteTeam(id: string) {
    const response = await (await fetch(`${API_URL}/api/team/${id}`, { method: 'DELETE' })).json()
    if (response.team) revalidatePath('/admin/nosso-time')

}