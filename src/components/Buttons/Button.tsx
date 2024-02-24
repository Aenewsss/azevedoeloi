import Link from "next/link"

interface IProps {
    text: string
    link: string
}

export function Button(props: IProps) {
    return <Link href={props.link} className="btn btn-main text-white text-uppercase fw-semibold fs-5 px-4">{props.text}</Link>
}