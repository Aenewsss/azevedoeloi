import { useFormStatus } from "react-dom"


export default function SaveChangesButton() {
    const { pending } = useFormStatus()

    return <button disabled={pending} type="submit" className="btn btn-success align-self-end d-flex mt-4">{pending ? 'Salvando' : "Salvar alterações"}</button>
}