import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
                <article className="mw-670 fs-18">
                    <p>O Direito sucessório trata das regras aplicáveis herança, testamentos, inventários e partilhas. </p>
                    <p className="mt-5">Nosso escritório atua com uma equipe altamente especializada e preparada, com formação acadêmica e larga experiência, para ofertar soluções para prevenir futuros desgastes emocionais familares, com vistas a economizar tempo e preservar o patrimônio de nossos clientes.</p>
                    <p className="mt-5">Oferecemos suporte e orientação jurídica para:</p>
                    <ul className="mt-5 d-flex flex-column gap-3" ><li>• Organização Patrimônial e Planejamento Sucessório;</li><li>• Inventários judiciais e Extrajudiciais;</li><li>• Arrolamentos de bens;</li><li>• Composição entre os herdeiros e condução de partilha;</li><li>• Elaboração, registro, cumprimento e anulação de testamentos;</li><li>• Destituição de Inventariante;</li><li>• Exclusão de herdeiro por indignidade.</li></ul>
                    <p className="has-text-align-center has-small-font-size"></p>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <SidebarAreas />
            </div>
        </div>
    </main>
}