import { deleteBanner } from "@/actions/delete-banner.action"
import { API_URL } from "@/constants/api-url.constant"
import { revalidatePath } from "next/cache"

interface IProps {
    bannerId: string
}

export default function DeleteBannerButton(props: IProps) {

    return <button onClick={() => deleteBanner(props.bannerId)} className="btn btn-danger align-self-end d-flex mt-4">Remover banner</button>
}