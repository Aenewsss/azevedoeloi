"use server"

import { API_URL } from "@/constants/api-url.constant"

export async function uploadImage(prevState: any, form: FormData) {
    
    // await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('form bef upload', form)
    
    const result: { imageSrc: string } = await (await fetch(`${API_URL}/api/home/banner`, {
        method: "POST",
        body: form
    })).json()
    
    return result.imageSrc
}