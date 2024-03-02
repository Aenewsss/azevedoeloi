import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath } from "next/cache"

interface IProps {
    teamId: string
}

export default function DeleteTeamButton(props: IProps) {
    async function deleteTeam() {
        const response = await (await fetch(`${API_URL}/api/home/team/${props.teamId}`, { method: 'DELETE' })).json()
        response.team && revalidatePath('/admin/nosso-time')
    }

    return <button onClick={deleteTeam} className="btn btn-danger align-self-end d-flex mt-4">Remover team</button>
}