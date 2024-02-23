interface IProps {
    setEditing: any
    setCurrentBannerToEdit: any
}

export default function CancelBannerButton(props: IProps) {
    return <button onClick={() => { props.setEditing; props.setCurrentBannerToEdit }} className="btn btn-primary align-self-end d-flex mt-4">Cancelar alterações</button>
}