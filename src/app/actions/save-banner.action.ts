"use server"

export async function saveBanner(prevState: any, form: FormData) {

    const bannerId = form.get('id')

    const result = await (await fetch(`http://localhost:3000/api/home/banner/${bannerId}`, {
        method: "PUT",
        body: form
    })).json()

}