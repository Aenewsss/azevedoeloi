import { changeHomeTeamAction } from "@/actions/change-home-team.action";
import { API_URL } from "@/constants/api-url.constant";
import { ITeamHome } from "@/interfaces/team-home.interface";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function TeamForm() {
    const [actionMessage, formAction] = useFormState(changeHomeTeamAction, { error: "", teamHomeUpdated: "" })

    const [team, setTeam] = useState<ITeamHome>({ title: "" });
    const [editing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        getTeam()
    }, []);

    async function getTeam() {
        const { team } = await (await fetch(`${API_URL}/api/home/team`, { next: { tags: ['home-team'] } })).json()
        setTeam(team)
    }

    useEffect(() => {
        !actionMessage.error && setEditing(false)
    }, [actionMessage]);

    return (
        <div>
            <form action={formAction}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="formId1"
                        placeholder=""
                        onChange={(e) => { setTeam({ ...team, title: e.target.value }); setEditing(true); }}
                        value={team.title}
                    />
                    <label htmlFor="formId1">Título</label>
                </div>
                <SaveChangesButton editing={editing} />
            </form>
            {editing && <CancelButton getTeam={getTeam} setEditing={setEditing} />}
        </div>
    )

}

function CancelButton({ setEditing, getTeam }: { setEditing: any, getTeam: any }) {
    return (
        <button onClick={() => {
            setEditing(false);
            getTeam()
        }} className="btn btn-danger d-flex align-self-start mt-2">Cancelar Alterações</button>
    )
}

function SaveChangesButton({ editing }: { editing: boolean }) {
    const { pending } = useFormStatus()

    return (
        <button disabled={!editing || pending} type="submit" className="btn btn-primary d-flex align-self-start">{pending ? 'Salvando' : 'Salvar alterações'}</button>
    )

}