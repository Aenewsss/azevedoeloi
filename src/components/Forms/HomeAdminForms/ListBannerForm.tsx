import CancelBannerButton from "@/components/Buttons/CancelBannerButton";
import DeleteBannerButton from "@/components/Buttons/DeleteBannerButton";
import SaveChanges from "@/components/Buttons/SaveChangesButton";
import { updateBanner } from "@/actions/update-banner.action";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { IBanner } from "@/interfaces/banner.interface";
import Image from "next/image";
import { API_URL } from "@/constants/api-url.constant";

export default function ListBannerForm() {
    const [messageUpdate, updateBannerAction] = useFormState(updateBanner, { updated: "", error: "" })

    const [banners, setBanners] = useState<IBanner[]>([]);
    const [editing, setEditing] = useState<{ currentEditing: boolean, bannerId: string | null }>({ currentEditing: false, bannerId: null });
    const [currentBannerToEdit, setCurrentBannerToEdit] = useState<IBanner | null>();

    useEffect(() => {
        async function getBanners() {
            const { banners }: { banners: IBanner[] } = await (await fetch(`${API_URL}/api/home/banner`, { next: { tags: ['banners'] } })).json()
            setBanners(banners)
        }
        getBanners()
    }, []);

    function changeEditing(bannerId: string) {
        setCurrentBannerToEdit(banners?.find(el => el.id == bannerId))
        setEditing({ currentEditing: true, bannerId: banners?.find(el => el.id == bannerId)?.id! })
    }

    function changeImage(e: any) {
        let file = e.target.files[0]
        const imageSrc = URL.createObjectURL(file)

        if (e.target.name == "large_image") setCurrentBannerToEdit({ ...currentBannerToEdit!, large_image: imageSrc })
        else setCurrentBannerToEdit({ ...currentBannerToEdit!, small_image: imageSrc })
    }

    useEffect(() => {
        messageUpdate.updated && setEditing({ currentEditing: false, bannerId: null })
    }, [messageUpdate]);

    function sameIdCurrentBanner(bannerId: string) {
        return (currentBannerToEdit && currentBannerToEdit.id == bannerId)
    }

    if (banners.length == 0) return <p>Nenhum banner adicionado</p>

    return banners.map((banner => (
        <div className=" border-bottom border-black pb-5 mt-3">
            <form action={updateBannerAction} key={banner.id} className="text-start">
                <div className="d-flex flex-md-nowrap flex-wrap justify-content-between">
                    <input type="text" value={banner.id} className="d-none" name="id" />
                    <div className="d-flex flex-column gap-2">
                        <label className="fw-medium fs-5">Imagem grande</label>
                        <span className="fs-14">Imagem grande que aparece em telas maiores<br />(computadores, tablets).<br />Tamanho recomendado: 1600px/600px.</span>
                        <div className="position-relative w-300 h-200" >
                            <Image width={300} height={200} src={sameIdCurrentBanner(banner.id!) ? currentBannerToEdit!.large_image : banner.large_image} alt={sameIdCurrentBanner(banner.id!) ? currentBannerToEdit!.large_image : banner.large_image} />
                            <div onClick={() => changeEditing(banner.id!)} className={`${!sameIdCurrentBanner(banner.id!) && 'pe-none'} opacity-0 large-image-edit top-0 w-100 h-100 d-flex justify-content-center align-items-center position-absolute`}>
                                <label className="text-white z-1 fs-3 mb-0" htmlFor="large_image">Trocar imagem</label>
                                <div className="position-absolute w-100 h-100 bg-black opacity-50"></div>
                            </div>
                            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="large_image" id="large_image" />
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <label className="fw-medium fs-5">Imagem pequena</label>
                        <span className="fs-14">Imagem pequena que aparece em telas menores<br /> (celular).<br /> Tamanho recomendado: 800px/600px.</span>
                        <div onClick={() => changeEditing(banner.id!)} className="position-relative w-300 h-200" >
                            <Image width={300} height={200} src={sameIdCurrentBanner(banner.id!) ? currentBannerToEdit!.small_image : banner.small_image} alt={sameIdCurrentBanner(banner.id!) ? currentBannerToEdit!.small_image : banner.small_image} />
                            <div className={`${!sameIdCurrentBanner(banner.id!) && 'pe-none'} opacity-0 small-image-edit top-0 w-100 h-100 d-flex justify-content-center align-items-center position-absolute`}>
                                <label className="text-white z-1 fs-3 mb-0" htmlFor="small_image">Trocar imagem</label>
                                <div className="position-absolute w-100 h-100 bg-black opacity-50"></div>
                            </div>
                            <input onChange={changeImage} className="d-none" accept="image/*" type="file" name="small_image" id="small_image" />
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <label className="fs-5 fw-medium" htmlFor={`formLink${banner.id}`}>Link</label>
                        <span className="fs-14">Link que deve abrir ao clicar no banner.</span>
                        <input
                        disabled={!sameIdCurrentBanner(banner.id!)!}
                            type="text"
                            className="form-control w-100"
                            name={`link`}
                            id={`formLink${banner.id}`}
                            value={currentBannerToEdit && (currentBannerToEdit.id == banner.id) ? currentBannerToEdit?.link || "" : banner.link}
                            onChange={(e: any) => setCurrentBannerToEdit({ ...currentBannerToEdit!, link: e.target.value })}
                        />
                        <span onClick={() => changeEditing(banner.id!)} role="button" className="text-primary">Click aqui para editar o link</span>
                    </div>
                </div>
                {editing.currentEditing && <SaveChanges />}
            </form>
            {!editing.currentEditing
                ? <DeleteBannerButton bannerId={banner.id!} />
                : <CancelBannerButton setCurrentBannerToEdit={setCurrentBannerToEdit} setEditing={setEditing} />}
        </div>
    )))
}