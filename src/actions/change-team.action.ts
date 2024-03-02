import { API_URL } from "@/constants/api-url.constant"
import { revalidateTag } from "next/cache"

export async function changeTeamAction(prevState: any, form: FormData) {

    const result = await (await fetch(`${API_URL}/api/team/`, {
        method: "PUT",
        body: form,
    })).json()

    if (result.teamUpdated) {
        revalidateTag('team')
        return { teamUpdated: result.teamUpdated, error: "" }
    }
    return { error: result.error, teamUpdated: "" }
}