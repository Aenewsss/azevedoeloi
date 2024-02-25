"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export async function updateBanner(prevState: any, form: FormData) {

    const bannerId = form.get('id')

    const result = await (await fetch(`http://localhost:3000/api/home/banner/${bannerId}`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.bannerUpdated) {
        revalidateTag('banners')
        return { updated: result.bannerUpdated,error :"" }
    }
    return { error: result.error, updated:"" }
}