import CancelBannerButton from "@/components/Buttons/CancelBannerButton";
import SaveChanges from "@/components/Buttons/SaveChangesButton";
import { updateTeam } from "@/actions/update-team.action";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { ITeam } from "@/interfaces/team.interface";
import Image from "next/image";
import { API_URL } from "@/constants/api-url.constant";
import DeleteTeamButton from "@/components/Buttons/DeleteTeamButton";
import CancelTeamButton from "@/components/Buttons/CancelTeamButton";

export default function ListTeamForm() {
    const [messageUpdate, updateTeamAction] = useFormState(updateTeam, { updated: "", error: "" })

    const [teams, setTeams] = useState<ITeam[]>([]);
    const [editing, setEditing] = useState<{ currentEditing: boolean, teamId: string | null }>({ currentEditing: false, teamId: null });
    const [currentTeamToEdit, setCurrentTeamToEdit] = useState<ITeam | null>();

    useEffect(() => {
        async function getTeams() {
            const { teams }: { teams: ITeam[] } = await (await fetch(`${API_URL}/api/team`, { next: { tags: ['teams'] } })).json()
            setTeams(teams)
        }
        getTeams()
    }, []);

    function changeEditing(teamId: string) {
        setCurrentTeamToEdit(teams?.find(el => el.id == teamId))
        setEditing({ currentEditing: true, teamId: teams?.find(el => el.id == teamId)?.id! })
    }

    function changeImage(e: any) {
        let file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)

        setCurrentTeamToEdit({ ...currentTeamToEdit!, image: imageSrc })
    }

    useEffect(() => {
        messageUpdate.updated && setEditing({ currentEditing: false, teamId: null })
    }, [messageUpdate]);

    function sameIdCurrentTeam(teamId: string) {
        return (currentTeamToEdit && currentTeamToEdit.id == teamId)
    }

    if (teams.length == 0) return <p>Nenhum membro de equipe adicionado</p>

    return teams.map((team => (
        <div className=" border-bottom border-black pb-5 mt-3">
            <form action={updateTeamAction} key={team.id} className="text-start">
                <div className="d-flex flex-md-nowrap flex-wrap justify-content-between">
                    <input type="text" value={team.id} className="d-none" name="id" />
                    <div className="d-flex flex-column gap-2">
                        <label className="fw-medium fs-5">Imagem grande</label>
                        <span className="fs-14">Imagem grande que aparece em telas maiores<br />(computadores, tablets).<br />Tamanho recomendado: 1600px/600px.</span>
                        <div className="position-relative w-300 h-200" >
                            <Image width={300} height={200} src={sameIdCurrentTeam(team.id!) ? currentTeamToEdit!.image : team.image} alt={sameIdCurrentTeam(team.id!) ? currentTeamToEdit!.image : team.image} />
                            <div onClick={() => changeEditing(team.id!)} className={`${!sameIdCurrentTeam(team.id!) && 'pe-none'} opacity-0 large-image-edit top-0 w-100 h-100 d-flex justify-content-center align-items-center position-absolute`}>
                                <label className="text-white z-1 fs-3 mb-0" htmlFor="image">Trocar imagem</label>
                                <div className="position-absolute w-100 h-100 bg-black opacity-50"></div>
                            </div>
                            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="image" id="image" />
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <label className="fs-5 fw-medium" htmlFor={`formName${team.id}`}>Nome</label>
                        <span className="fs-14">Link que deve abrir ao clicar no team.</span>
                        <input
                            disabled={!sameIdCurrentTeam(team.id!)!}
                            type="text"
                            className="form-control w-100"
                            name='name'
                            id={`formName${team.id}`}
                            value={currentTeamToEdit && (currentTeamToEdit.id == team.id) ? currentTeamToEdit?.name || "" : team.name}
                            onChange={(e: any) => setCurrentTeamToEdit({ ...currentTeamToEdit!, name: e.target.value })}
                        />
                        <span onClick={() => changeEditing(team.id!)} role="button" className="text-primary">Click aqui para editar o name</span>
                    </div>
                </div>
                {editing.currentEditing && <SaveChanges />}
            </form>
            {!editing.currentEditing
                ? <DeleteTeamButton teamId={team.id!} />
                : <CancelTeamButton setCurrentTeamToEdit={setCurrentTeamToEdit} setEditing={setEditing} />}
        </div>
    )))
}

