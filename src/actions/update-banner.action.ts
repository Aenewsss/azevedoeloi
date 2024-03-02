"use server"

import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath, revalidateTag } from "next/cache"

export async function updateBanner(prevState: any, form: FormData) {

    const bannerId = form.get('id')

    const result = await (await fetch(`${API_URL}/api/home/banner/${bannerId}`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.bannerUpdated) {
        revalidateTag('banners')
        return { updated: result.bannerUpdated,error :"" }
    }
    return { error: result.error, updated:"" }
}