import { apiUrl } from "@/constants/api-url.constant"
import { revalidateTag } from "next/cache"

export async function changeHomeAboutAction(prevState: any, form: FormData) {

    const result = await (await fetch(`${apiUrl}/api/home/about/`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.bannerUpdated) {
        revalidateTag('about-home')
        return { aboutHomeUpdated: result.aboutHomeUpdated, error: "" }
    }
    return { error: result.error, aboutHomeUpdated: "" }
}