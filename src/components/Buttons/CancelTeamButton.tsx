interface IProps {
    setEditing: any
    setCurrentTeamToEdit: any
}

export default function CancelTeamButton(props: IProps) {
    return <button onClick={() => { props.setEditing({currentEditing: false, teamId: null}); props.setCurrentTeamToEdit(null); }} className="btn btn-danger align-self-end d-flex mt-4">Cancelar alterações</button>
}