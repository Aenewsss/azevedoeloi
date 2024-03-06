import { PathEnum } from "@/enums/path.enum";
import Link from "next/link";

export default function SidebarAreas() {
    return (
        <div className="mw-300 d-flex flex-column gap-3">
            <h3 className="fs-4 fw-semibold mb-3">Áreas de atuação</h3>
            <ul className="d-flex flex-column gap-4 fs-5">
                <li className="border-0 border-bottom pb-2">
                    <Link href={PathEnum.AREA_DIREITO_FAMILIA}>Direito Sucessório</Link>
                </li>
                <li className="border-0 border-bottom pb-2">
                    <Link href={PathEnum.AREA_DIREITO_IMOBILIARIO}>Direito Imobiliário</Link>
                </li>
                <li className="border-0 border-bottom pb-2">
                    <Link href={PathEnum.AREA_DIREITO_PREVIDENCIARIO}>Direito Condominial</Link>
                </li>
                <li className="border-0 border-bottom pb-2">
                    <Link href={PathEnum.AREA_DIREITO_CONDOMINIAL}>Direito do Consumidor</Link>
                </li>
                <li className="border-0 border-bottom pb-2">
                    <Link href={PathEnum.AREA_DIREITO_DO_CONSUMIDOR}>Direito Previdenciário</Link>
                </li>
                <li className="border-0 border-bottom pb-2">
                    <Link href={PathEnum.AREA_DIREITO_BANCARIO}>Direito Bancário – Bancos<br />e financeiras</Link>
                </li>
                <li >
                    <Link className="btn btn-main text-white fs-5" href={PathEnum.AREAS}>VER TODOS</Link>
                </li>
            </ul>
        </div>
    )
}