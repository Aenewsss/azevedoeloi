import { revalidatePath } from "next/cache"

interface IProps {  
    bannerId:string
}

export default function DeleteBannerButton(props: IProps){

    async function deleteBanner(){
        const response = await(await fetch(`http://localhost:3000/api/home/banner/${props.bannerId}`)).json()

        response.banner && revalidatePath('/admin/pagina-inicial')
    }
    
    return <button onClick={deleteBanner} className="btn btn-danger align-self-end d-flex mt-4">Remover banner</button>
}