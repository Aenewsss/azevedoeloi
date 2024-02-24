import { addHighlightAction } from "@/app/actions/add-highlight.action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IHighlightsHome } from "@/interfaces/highlights-home.interface";
import SaveButton from "@/components/Buttons/SaveButton";
import { useRouter } from "next/navigation";

interface IProps {
    setAddingNewHighlight: any
}

export default function AddHighlightForm(props: IProps) {
    const [actionMessage, formAction] = useFormState(addHighlightAction, { newHighlight: "", error: "" })
    const [highlightToAdd, setHighlightToAdd] = useState<IHighlightsHome>({ icon: "", link: "", title: "" });

    function changeImage(e: any) {
        let file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)

        setHighlightToAdd({ ...highlightToAdd, icon: imageSrc })
    }

    useEffect(() => {
        actionMessage.newHighlight && props.setAddingNewHighlight
    }, [actionMessage]);

    return <form action={formAction} className="text-start border-bottom border-black pb-5 d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-2">
            <label className="fs-5 fw-medium" htmlFor={`formLinkAdd`}>Título</label>
            <input
                type="text"
                className="form-control w-100"
                name="title"
            />
        </div>

        <div className="d-flex flex-column gap-2">
            <label className="fs-5 fw-medium" htmlFor={`formLinkAdd`}>Link</label>
            <span className="fs-14">Link que deve abrir ao clicar no destaque.</span>
            <input
                type="text"
                className="form-control w-100"
                name="link"
            />
        </div>

        <div className="d-flex flex-column gap-2 align-self-start">
            <label className="fw-medium fs-5">Ícone</label>
            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="icon" id="icon" />
            <label className="btn btn-black text-white mb-0 bg-black" htmlFor="icon">Adicionar imagem</label>

            {highlightToAdd.icon && <Image width={100} height={100} src={highlightToAdd.icon} alt={highlightToAdd.icon} />}
        </div>

        {actionMessage?.error && <p className="mt-3 text-danger">{actionMessage.error}</p>}

        <div className="d-flex">
            <SaveButton />
        </div>
    </form>
}