import { updateHighlight } from "@/actions/update-highlight.action";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { IHighlightsHome } from "@/interfaces/highlights-home.interface";
import SaveChangesButton from "@/components/Buttons/SaveChangesButton";
import { revalidatePath, revalidateTag } from "next/cache";
import { API_URL } from "@/constants/api-url.constant";

export default function ListHighlightForm() {
    const [messageUpdate, updateHighlightAction] = useFormState(updateHighlight, { updated: "", error: "" })

    const [highlights, setHighlights] = useState<IHighlightsHome[]>([]);
    const [editing, setEditing] = useState<{ currentEditing: boolean, highlightId: string }>({ currentEditing: false, highlightId: "" });
    const [currentHighlightToEdit, setCurrentHighlightToEdit] = useState<IHighlightsHome | null>();

    useEffect(() => {
        async function getHighlights() {
            const { highlights }: { highlights: IHighlightsHome[] } = await (await fetch(`${API_URL}/api/home/highlights`, { next: { tags: ['highlights'] } })).json()
            setHighlights(highlights)
        }
        getHighlights()
    }, []);

    function changeEditing(highlightId: string) {
        setCurrentHighlightToEdit(highlights?.find(el => el.id == highlightId))
        setEditing({ currentEditing: true, highlightId: highlights?.find(el => el.id == highlightId)?.id! })
    }

    function changeImage(e: any) {
        let file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)
        setCurrentHighlightToEdit({ ...currentHighlightToEdit!, icon: imageSrc })
    }

    useEffect(() => {
        messageUpdate.updated && setEditing({ currentEditing: false, highlightId: "" })
    }, [messageUpdate]);

    function sameIdCurrentHighlight(highlightId: string) {
        return editing.currentEditing && currentHighlightToEdit && (currentHighlightToEdit.id == highlightId)
    }

    function canEditImage() {
        return currentHighlightToEdit ? false : true
    }

    if (highlights.length == 0) return <p>Nenhum destaque adicionado</p>

    return highlights.map((highlight => (
        <div key={highlight.id} className=" border-bottom border-black pb-5 mt-3">
            <form action={updateHighlightAction} key={highlight.id} className="text-start">
                <div className="d-flex flex-md-nowrap flex-wrap justify-content-between">
                    <input type="text" value={highlight.id} className="d-none" name="id" />
                    <div className="d-flex flex-column gap-2">
                        <label className="fw-medium fs-5">Ícone</label>
                        <div className="position-relative w-300 h-200 text-center" >
                            <Image width={100} height={100} src={sameIdCurrentHighlight(highlight.id!) ? currentHighlightToEdit!.icon : highlight.icon} alt={sameIdCurrentHighlight(highlight.id!) ? currentHighlightToEdit!.icon : highlight.icon} />
                            <label htmlFor="icon" onClick={() => changeEditing(highlight.id!)} className={`${!canEditImage() && 'pe-none'} opacity-0 icon-edit top-0 w-100 h-100 d-flex justify-content-center align-items-center position-absolute`}>
                                <p className="text-white z-1 fs-3 mb-0" >Trocar ícone</p>
                                <div className="position-absolute w-100 h-100 bg-black opacity-50"></div>
                            </label>
                            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="icon" id="icon" />
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <label className="fs-5 fw-medium" htmlFor={`formLink${highlight.id}`}>Título</label>
                        <input
                            disabled={!sameIdCurrentHighlight(highlight.id!)!}
                            type="text"
                            className="form-control w-100"
                            name={`title`}
                            value={currentHighlightToEdit && (currentHighlightToEdit.id == highlight.id) ? currentHighlightToEdit?.title || "" : highlight.title}
                            onChange={(e: any) => setCurrentHighlightToEdit({ ...currentHighlightToEdit!, title: e.target.value })}
                        />
                        <span onClick={() => changeEditing(highlight.id!)} role="button" className="text-primary">Clique aqui para editar o título</span>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <label className="fs-5 fw-medium" htmlFor={`formLink${highlight.id}`}>Link</label>
                        <span className="fs-14">Link que deve abrir ao clicar no destaque.</span>
                        <input
                            disabled={!sameIdCurrentHighlight(highlight.id!)!}
                            type="text"
                            className="form-control w-100"
                            name={`link`}
                            id={`formLink${highlight.id}`}
                            value={currentHighlightToEdit && (currentHighlightToEdit.id == highlight.id) ? currentHighlightToEdit?.link || "" : highlight.link}
                            onChange={(e: any) => setCurrentHighlightToEdit({ ...currentHighlightToEdit!, link: e.target.value })}
                        />
                        <span onClick={() => changeEditing(highlight.id!)} role="button" className="text-primary">Clique aqui para editar o link</span>
                    </div>
                </div>
                {editing.currentEditing && <SaveChangesButton />}
            </form>
            {!editing.currentEditing
                ? <DeleteHighlightButton highlightId={highlight.id!} />
                : <CancelHighlightButton setCurrentHighlightToEdit={setCurrentHighlightToEdit} setEditing={setEditing} />}
        </div>
    )))
}


function DeleteHighlightButton({ highlightId }: { highlightId: string }) {
    async function deleteHighlight() {
        const response = await (await fetch(`${API_URL}/api/home/highlights/${highlightId}`, { method: 'DELETE' })).json()
        response.highlight && revalidateTag('highlights')
    }

    return <button onClick={deleteHighlight} className="btn btn-danger align-self-end d-flex mt-4">Remover destaque</button>
}

function CancelHighlightButton({ setEditing, setCurrentHighlightToEdit }: { setEditing: any, setCurrentHighlightToEdit: any }) {
    return <button onClick={() => { setEditing({ currentEditing: false, highlightId: null }); setCurrentHighlightToEdit(null); }} className="btn btn-danger align-self-end d-flex mt-4">Cancelar alterações</button>
}