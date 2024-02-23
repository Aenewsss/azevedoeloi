import { HomeAdmFormShowEnum } from "@/enums/home-admin-form-show.enum"

interface IProps {
    setFormToShow: any
    formToShow: HomeAdmFormShowEnum
}

export default function HomeAdminButtons(props: IProps) {
    return (
        <div className="start-0 position-absolute top-n40 d-flex gap-3">
            <button style={props.formToShow == HomeAdmFormShowEnum.BANNER ? {backgroundColor:"black", color: "white"}: {backgroundColor:'white', color:'black'}} onClick={() => props.setFormToShow(HomeAdmFormShowEnum.BANNER)} className="btn btn-default p-2 rounded border">
                <h2 className="fs-4">Banners</h2>
            </button>
            <button style={props.formToShow == HomeAdmFormShowEnum.ABOUT ? {backgroundColor:"black", color: "white"}: {backgroundColor:'white', color:'black'}} onClick={() => props.setFormToShow(HomeAdmFormShowEnum.ABOUT)} className="btn btn-default p-2 rounded border">
                <h2 className="fs-4">Sobre</h2>
            </button>
            <button style={props.formToShow == HomeAdmFormShowEnum.HIGHLIGHTS ? {backgroundColor:"black", color: "white"}: {backgroundColor:'white', color:'black'}} onClick={() => props.setFormToShow(HomeAdmFormShowEnum.HIGHLIGHTS)} className="btn btn-default p-2 rounded border">
                <h2 className="fs-4">Destaques</h2>
            </button>
            <button style={props.formToShow == HomeAdmFormShowEnum.TEAM ? {backgroundColor:"black", color: "white"}: {backgroundColor:'white', color:'black'}} onClick={() => props.setFormToShow(HomeAdmFormShowEnum.TEAM)} className="btn btn-default p-2 rounded border">
                <h2 className="fs-4">Equipe</h2>
            </button>
            <button style={props.formToShow == HomeAdmFormShowEnum.BLOG ? {backgroundColor:"black", color: "white"}: {backgroundColor:'white', color:'black'}} onClick={() => props.setFormToShow(HomeAdmFormShowEnum.BLOG)} className="btn btn-default p-2 rounded border">
                <h2 className="fs-4">Blog</h2>
            </button>
        </div>
    )
}