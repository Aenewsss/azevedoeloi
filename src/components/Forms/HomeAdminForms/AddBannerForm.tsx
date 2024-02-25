import { addBanner } from "@/actions/add-banner.action";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import { IBanner } from "@/interfaces/banner.interface";
import SaveButton from "@/components/Buttons/SaveButton";
import { useRouter } from "next/navigation";

interface IProps {
    setAddingNewBanner: any
}

export default function AddBannerForm(props: IProps) {
    const [errorMessageAdd, addBannerAction] = useFormState(addBanner, { newBanner: "", error: "" })
    const [bannerToAdd, setBannerToAdd] = useState<IBanner>({ large_image: "", small_image: "", link: "" });

    function changeImage(e: any) {
        let file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)

        if (e.target.name == "large_image") setBannerToAdd({ ...bannerToAdd, large_image: imageSrc })
        else setBannerToAdd({ ...bannerToAdd, small_image: imageSrc })
    }

    if (errorMessageAdd.newBanner) props.setAddingNewBanner(false)

    return <form action={addBannerAction} className="text-start border-bottom border-black pb-5">
        <div className="d-flex flex-md-nowrap flex-wrap justify-content-between">
            <div className="d-flex flex-column gap-2">
                <label className="fw-medium fs-5">Imagem grande</label>
                <span className="fs-14">Imagem grande que aparece em telas maiores<br />(computadores, tablets).<br />Tamanho recomendado: 1600px/600px.</span>
                <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="large_image" id="large_image" />
                <label className="btn btn-black text-white mb-0 bg-black" htmlFor="large_image">Adicionar imagem</label>

                {bannerToAdd.large_image && <Image width={300} height={200} src={bannerToAdd.large_image} alt={bannerToAdd.large_image} />}
            </div>
            <div className="d-flex flex-column gap-2">
                <label className="fw-medium fs-5">Imagem pequena</label>
                <span className="fs-14">Imagem pequena que aparece em telas menores<br /> (celular).<br /> Tamanho recomendado: 800px/600px.</span>
                <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="small_image" id="small_image" />
                <label className="btn btn-black text-white mb-0 bg-black" htmlFor="small_image">Adicionar imagem</label>
                {bannerToAdd.small_image && <Image width={300} height={200} src={bannerToAdd.small_image} alt={bannerToAdd.small_image} />}
            </div>

            <div className="d-flex flex-column gap-2">
                <label className="fs-5 fw-medium" htmlFor={`formLinkAdd`}>Link</label>
                <span className="fs-14">Link que deve abrir ao clicar no banner.</span>
                <input
                    type="text"
                    className="form-control w-100"
                    name="link"
                />
            </div>
        </div>

        {errorMessageAdd?.error && <p className="mt-3 text-danger">{errorMessageAdd.error}</p>}

        <SaveButton />
    </form>
}