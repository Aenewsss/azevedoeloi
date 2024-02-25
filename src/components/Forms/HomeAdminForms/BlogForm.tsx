import { changeHomeBlogAction } from "@/actions/change-home-blog.action";
import { IBlogHome } from "@/interfaces/blog-home.interface";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function BlogForm() {
    const [actionMessage, formAction] = useFormState(changeHomeBlogAction, { error: "", blogHomeUpdated: "" })

    const [blog, setBlog] = useState<IBlogHome>({ title: "", button_text: "" });
    const [editing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        getBlog()
    }, []);

    async function getBlog() {
        const { blog } = await (await fetch(`http://localhost:3000/api/home/blog`, { next: { tags: ['home-blog'] } })).json()
        setBlog(blog)
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
                        onChange={(e) => { setBlog({ ...blog, title: e.target.value }); setEditing(true); }}
                        value={blog.title}
                    />
                    <label htmlFor="formId1">Título</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="button_text"
                        id="formId1"
                        placeholder=""
                        onChange={(e) => { setBlog({ ...blog, button_text: e.target.value }); setEditing(true); }}
                        value={blog.button_text}
                    />
                    <label htmlFor="formId1">Texto do botão</label>
                </div>
                <SaveChangesButton editing={editing} />
            </form>
            {editing && <CancelButton getBlog={getBlog} setEditing={setEditing} />}
        </div>
    )

}

function CancelButton({ setEditing, getBlog }: { setEditing: any, getBlog: any }) {
    return (
        <button onClick={() => {
            setEditing(false);
            getBlog()
        }} className="btn btn-danger d-flex align-self-start mt-2">Cancelar Alterações</button>
    )
}

function SaveChangesButton({ editing }: { editing: boolean }) {
    const { pending } = useFormStatus()

    return (
        <button disabled={!editing || pending} type="submit" className="btn btn-primary d-flex align-self-start">{pending ? 'Salvando' : 'Salvar alterações'}</button>
    )

}