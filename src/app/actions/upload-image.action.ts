"use server"

export async function uploadImage(prevState: any, form: FormData) {
    
    // await new Promise(resolve => setTimeout(resolve, 2000))
    
    const result: { imageSrc: string } = await (await fetch("http://localhost:3000/api/home/banner", {
        method: "POST",
        body: form
    })).json()
    
    return result.imageSrc
}