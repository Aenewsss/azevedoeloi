"use server"

import { revalidatePath, revalidateTag } from "next/cache"

export async function updateHighlight(prevState: any, form: FormData) {

    const highlightId = form.get('id')


    const result = await (await fetch(`http://localhost:3000/api/home/highlights/${highlightId}`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.highlightUpdated) {
        revalidateTag('highlights')
        return { updated: result.highlightUpdated,error :"" }
    }
    return { error: result.error, updated:"" }
}