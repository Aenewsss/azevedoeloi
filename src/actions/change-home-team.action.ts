import { revalidateTag } from "next/cache"

export async function changeHomeTeamAction(prevState: any, form: FormData) {

    const result = await (await fetch(`http://localhost:3000/api/home/team/`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.bannerUpdated) {
        revalidateTag('team-home')
        return { teamHomeUpdated: result.teamHomeUpdated, error: "" }
    }
    return { error: result.error, teamHomeUpdated: "" }
}