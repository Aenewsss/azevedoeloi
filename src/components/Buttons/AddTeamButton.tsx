interface IProps {
    setAddingNewTeam: any
    addingNewTeam: boolean
}

export default function AddTeamButton(props: IProps) {
    return <button onClick={props.setAddingNewTeam} className={`btn ${props.addingNewTeam ? "btn-danger" : "btn-primary"} align-self-end d-flex mt-5`}>{props.addingNewTeam ? 'Cancelar novo' : 'Adicionar'} membro</button>
}