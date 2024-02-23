interface IProps {
    setEditing: any
    setCurrentBannerToEdit: any
}

export default function CancelBannerButton(props: IProps) {
    return <button onClick={() => { props.setEditing({currentEditing: false, bannerId: null}); props.setCurrentBannerToEdit(null); }} className="btn btn-danger align-self-end d-flex mt-4">Cancelar alterações</button>
}