import { deleteTeam } from "@/actions/delete-team.action"
interface IProps {
    teamId: string
}

export default function DeleteTeamButton(props: IProps) {
    return <button onClick={() => deleteTeam(props.teamId)} className="btn btn-danger align-self-end d-flex mt-4">Remover team</button>
}