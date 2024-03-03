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
const ReactQuill = dynamic(import('react-quill'), {ssr: false});
import { formatsReactQuill, modulesReactQuill } from "@/constants/react-quill.constant";
import dynamic from "next/dynamic";

export default function ListTeamForm() {
    const [messageUpdate, updateTeamAction] = useFormState(updateTeam, { updated: "", error: "" })

    const [teams, setTeams] = useState<ITeam[]>([]);
    const [editing, setEditing] = useState<{ currentEditing: boolean, teamId: string | null }>({ currentEditing: false, teamId: null });
    const [currentTeamToEdit, setCurrentTeamToEdit] = useState<ITeam | null>();

    async function getTeams() {
        const { teams }: { teams: ITeam[] } = await (await fetch(`${API_URL}/api/team`, { next: { tags: ['teams'] } })).json()
        setTeams(teams)
    }

    getTeams()

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
        if (messageUpdate.updated) {
            setEditing({ currentEditing: false, teamId: null })
        }

    }, [messageUpdate]);

    function sameIdCurrentTeam(teamId: string) {
        return (currentTeamToEdit && currentTeamToEdit.id == teamId)
    }

    if (!teams || teams.length == 0) return <p>Nenhum membro de equipe adicionado</p>

    return teams.map((team => (
        <div className=" border-bottom border-black pb-5 mt-3">
            <form action={updateTeamAction} key={team.id} className="text-start">
                <div className="d-flex flex-md-nowrap flex-wrap justify-content-between">
                    <input type="text" value={team.id} className="d-none" name="id" />
                    <div className="d-flex flex-column gap-2">
                        <label className="fw-medium fs-5">Imagem</label>
                        <div className="position-relative w-300 h-200" >
                            <Image className="border border-black p-2" width={200} height={100} src={sameIdCurrentTeam(team.id!) ? currentTeamToEdit!.image : team.image} alt={sameIdCurrentTeam(team.id!) ? currentTeamToEdit!.image : team.image} />
                            <div onClick={() => changeEditing(team.id!)} className={`${!sameIdCurrentTeam(team.id!) && 'pe-none'} opacity-0 large-image-edit top-0 w-100 h-100 d-flex justify-content-center align-items-center position-absolute`}>
                                <label className="text-white z-1 fs-3 mb-0" htmlFor="image">Trocar imagem</label>
                                <div className="position-absolute w-100 h-100 bg-black opacity-50"></div>
                            </div>
                            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="image" id="image" />
                        </div>
                    </div>
                    <div className="w-100">
                        <div className="d-flex gap-3 ">
                            <div className="d-flex flex-column gap-2 w-50">
                                <label className="fs-5 fw-medium" htmlFor={`formName${team.id}`}>Nome</label>
                                <input
                                    disabled={!sameIdCurrentTeam(team.id!)!}
                                    type="text"
                                    className="form-control w-100"
                                    name='name'
                                    id={`formName${team.id}`}
                                    value={currentTeamToEdit && (currentTeamToEdit.id == team.id) ? currentTeamToEdit?.name || "" : team.name}
                                    onChange={(e: any) => setCurrentTeamToEdit({ ...currentTeamToEdit!, name: e.target.value })}
                                />
                                <span onClick={() => changeEditing(team.id!)} role="button" className="text-primary">Clique aqui para editar o nome</span>
                            </div>
                            <div className="d-flex flex-column gap-2  w-50">
                                <label className="fs-5 fw-medium" htmlFor={`formEmail${team.id}`}>E-mail</label>
                                <input
                                    disabled={!sameIdCurrentTeam(team.id!)!}
                                    type="text"
                                    className="form-control w-100"
                                    name='email'
                                    id={`formEmail${team.id}`}
                                    value={currentTeamToEdit && (currentTeamToEdit.id == team.id) ? currentTeamToEdit?.email || "" : team.email}
                                    onChange={(e: any) => setCurrentTeamToEdit({ ...currentTeamToEdit!, email: e.target.value })}
                                />
                                <span onClick={() => changeEditing(team.id!)} role="button" className="text-primary">Clique aqui para editar o e-mail</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <label className="fs-5 fw-medium" htmlFor={`formInfo${team.id}`}>Informações</label>
                            <input
                                disabled={!sameIdCurrentTeam(team.id!)!}
                                type="text"
                                className="form-control w-100"
                                name='info'
                                id={`formInfo${team.id}`}
                                value={currentTeamToEdit && (currentTeamToEdit.id == team.id) ? currentTeamToEdit?.info || "" : team.info}
                                onChange={(e: any) => setCurrentTeamToEdit({ ...currentTeamToEdit!, info: e.target.value })}
                            />
                            <span onClick={() => changeEditing(team.id!)} role="button" className="text-primary">Clique aqui para editar</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <label className="fs-5 fw-medium" >Texto</label>
                            <ReactQuill className={`${!sameIdCurrentTeam(team.id!)! ? 'opacity-50 pe-none' : 'opacity-100 pe-auto'}`} readOnly={!sameIdCurrentTeam(team.id!)!} formats={formatsReactQuill} modules={modulesReactQuill} theme="snow" value={currentTeamToEdit && (currentTeamToEdit.id == team.id) ? currentTeamToEdit?.text || "" : team.text} onChange={(value) => setCurrentTeamToEdit({ ...currentTeamToEdit!, text: value })} />
                            <input type="text" value={currentTeamToEdit && (currentTeamToEdit.id == team.id) ? currentTeamToEdit?.text || "" : team.text} name="text" className="d-none" />
                        </div>
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

