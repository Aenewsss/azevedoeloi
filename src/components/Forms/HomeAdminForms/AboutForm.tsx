"use client"

import { changeHomeAboutAction } from "@/actions/change-home-about.action";
import { apiUrl } from "@/constants/api-url.constant";
import { IAboutHome } from "@/interfaces/about-home.interface"
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function AboutForm() {

    const [actionMessage, formAction] = useFormState(changeHomeAboutAction, { error: "", aboutHomeUpdated: "" })

    const [about, setAbout] = useState<IAboutHome>({ button_text: "", text: "", title: "" });
    const [editing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        getAbout()
    }, []);

    async function getAbout() {
        const { about } = await (await fetch(`${apiUrl}/api/home/about`, { next: { tags: ['home-about'] } })).json()
        setAbout(about)
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
                        onChange={(e) => { setAbout({ ...about, title: e.target.value }); setEditing(true); }}
                        value={about.title}
                    />
                    <label htmlFor="formId1">Título</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="text"
                        id="formId1"
                        placeholder=""
                        onChange={(e) => { setAbout({ ...about, text: e.target.value }); setEditing(true); }}
                        value={about.text}
                    />
                    <label htmlFor="formId1">Texto</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="button_text"
                        id="formId1"
                        placeholder=""
                        onChange={(e) => { setAbout({ ...about, button_text: e.target.value }); setEditing(true); }}
                        value={about.button_text}
                    />
                    <label htmlFor="formId1">Texto do botão</label>
                </div>
                <SaveChangesButton editing={editing} />
            </form>
            {editing && <CancelButton getAbout={getAbout} setEditing={setEditing} />}
        </div>
    )
}

function CancelButton({ setEditing, getAbout }: { setEditing: any, getAbout: any }) {
    return (
        <button onClick={() => {
            setEditing(false);
            getAbout()
        }} className="btn btn-danger d-flex align-self-start mt-2">Cancelar Alterações</button>
    )
}

function SaveChangesButton({ editing }: { editing: boolean }) {
    const { pending } = useFormStatus()

    return (
        <button disabled={!editing || pending} type="submit" className="btn btn-primary d-flex align-self-start">{pending ? 'Salvando' : 'Salvar alterações'}</button>
    )

}