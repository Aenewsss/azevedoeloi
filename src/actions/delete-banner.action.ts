"use server"

import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath, revalidateTag } from "next/cache"

export async function deleteBanner(id: string ) {
    const response = await (await fetch(`${API_URL}/api/home/banner/${id}`, { method: 'DELETE' })).json()
    response.banner && revalidatePath('/admin/pagina-inicial')
}
