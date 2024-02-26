"use server"

import { apiUrl } from "@/constants/api-url.constant"
import { revalidatePath } from "next/cache"

export async function addBanner(prevState: any, form: FormData) {

    const result: { newBanner: string } | { error: string } = await (await fetch(`${apiUrl}/api/home/banner`, {
        method: "POST",
        body: form
    })).json()

    if ("error" in result) return {
        error: result.error,
        newBanner: ""
    }
    
    revalidatePath('/admin/pagina-inicial')
    
    return {
        error: "",
        newBanner: result.newBanner    
    }

}