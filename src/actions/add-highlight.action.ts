"use server"

import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath, revalidateTag } from "next/cache"

export async function addHighlightAction(prevState: any, form: FormData) {

    const result = await (await fetch(`${API_URL}/api/home/highlights`, {
        method: "POST",
        body: form
    })).json()

    if (result.bannerUpdated) {
        revalidateTag('highlights')
        revalidatePath('/')
        return { newHighlight: result.newHighlight, error: "" }
    }
    return { error: result.error, newHighlight: "" }

}