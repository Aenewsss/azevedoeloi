import { revalidateTag } from "next/cache"

export async function changeHomeBlogAction(prevState: any, form: FormData) {

    const result = await (await fetch(`http://localhost:3000/api/home/blog/`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.bannerUpdated) {
        revalidateTag('blog-home')
        return { blogHomeUpdated: result.blogHomeUpdated, error: "" }
    }
    return { error: result.error, blogHomeUpdated: "" }
}