interface IProps {
    setAddingNewHighlight: any
    addingNewHighlight: boolean
}

export default function AddHighlightButton(props: IProps) {
    return <button onClick={props.setAddingNewHighlight} className={`btn ${props.addingNewHighlight ? "btn-danger" : "btn-primary"} align-self-end d-flex mt-5`}>{props.addingNewHighlight ? 'Cancelar novo' : 'Adicionar'} destaque</button>
}