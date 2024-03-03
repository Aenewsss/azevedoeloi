import { addTeam } from "@/actions/add-team.action";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import { ITeam } from "@/interfaces/team.interface";
import SaveButton from "@/components/Buttons/SaveButton";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { formatsReactQuill, modulesReactQuill } from "@/constants/react-quill.constant";

interface IProps {
    setAddingNewTeam: any
}

export default function AddTeamForm(props: IProps) {
    const [errorMessageAdd, addTeamAction] = useFormState(addTeam, { newTeam: "", error: "" })
    const [teamToAdd, setTeamToAdd] = useState<ITeam>({ email: "", image: "", info: "", name: "", text: "" });

    function changeImage(e: any) {
        let file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)

        setTeamToAdd({ ...teamToAdd, image: imageSrc })
    }

    if (errorMessageAdd.newTeam) props.setAddingNewTeam(false)

    return <form action={addTeamAction} className="text-start border-bottom border-black pb-5 d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-2">
            <label className="fw-medium fs-5">Imagem</label>
            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="image" id="image" />
            <label className="btn btn-black text-white mb-0 bg-black d-flex align-self-start" htmlFor="image">Adicionar imagem</label>
            {teamToAdd.image && <Image className="border border-black p-2" width={200} height={100} src={teamToAdd.image} alt={teamToAdd.image} />}
        </div>
        <div className="d-flex gap-5 flex-wrap">
            <div className="d-flex flex-column gap-2 w-md-30">
                <label className="fs-5 fw-medium" >Nome</label>
                <input required
                    type="text"
                    className="form-control w-100"
                    name="name"
                    placeholder="Nome do novo membro da equipe"
                />
            </div>
            <div className="d-flex flex-column gap-2 w-md-30">
                <label className="fs-5 fw-medium" >E-mail</label>
                <input required
                    type="text"
                    className="form-control w-100"
                    name="email"
                />
            </div>
            <div className="d-flex flex-column gap-2 w-md-30">
                <label className="fs-5 fw-medium" >Informações</label>
                <input required
                    type="text"
                    className="form-control w-100"
                    name="info"
                    placeholder="Informação curta que aparece abaixo do e-mail."
                />
            </div>
        </div>
        <div className="d-flex flex-column gap-2">
            <label className="fs-5 fw-medium" >Texto</label>
            <ReactQuill  formats={formatsReactQuill} modules={modulesReactQuill} theme="snow" value={teamToAdd.text} onChange={(value) => setTeamToAdd({ ...teamToAdd, text: value })} />
            <input type="text" value={teamToAdd.text} name="text" className="d-none" />
        </div>

        {errorMessageAdd?.error && <p className="mt-3 text-danger">{errorMessageAdd.error}</p>}

        <SaveButton />
    </form>
}