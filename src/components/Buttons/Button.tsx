interface IProps {
    text: string
}

export function Button(props: IProps) {
    return <button className="btn btn-main text-white text-uppercase fw-semibold fs-5 px-4">{props.text}</button>
}