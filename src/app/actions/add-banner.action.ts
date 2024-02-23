"use server"

import { revalidatePath } from "next/cache"

export async function addBanner(prevState: any, form: FormData) {

    console.log('form before add banner', form)

    const result: { newBanner: string } | { error: string } = await (await fetch(`http://localhost:3000/api/home/banner`, {
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