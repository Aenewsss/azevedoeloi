import { useFormStatus } from "react-dom"

export default function SaveButton() {
    const { pending } = useFormStatus()
    return <button disabled={pending} type="submit" className={`btn btn-primary align-self-end d-flex mt-5`}>{pending ? 'Salvando' : 'Salvar'} </button>
}