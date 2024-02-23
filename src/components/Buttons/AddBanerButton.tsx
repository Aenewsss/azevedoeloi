interface IProps {
    setAddingNewBanner: any
    addingNewBanner: boolean
}

export default function AddBannerButton(props: IProps) {
    return <button onClick={props.setAddingNewBanner} className={`btn ${props.addingNewBanner ? "btn-danger" : "btn-primary"} align-self-end d-flex mt-5`}>{props.addingNewBanner ? 'Cancelar novo' : 'Adicionar'} banner</button>
}