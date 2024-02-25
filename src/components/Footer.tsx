import Image from "next/image";
import { Button } from "./Buttons/Button";
import Link from "next/link";
import { PathEnum } from "@/enums/path.enum";

export default function Footer() {
    return (
        <footer className="mt-5 pt-4">
            <div className="bg-footer py-5 position-relative">
                <div className="container position-relative z-2">
                    <div className="border border-white d-flex gap-3 flex-column align-items-center justify-content-center py-5">
                        <h2 className="fs-4 fw-semibold text-center">PRECISA DE AJUDA COM O SEU CASO? ENTRE<br />EM CONTATO CONOSCO</h2>
                        <span className="fs-5">Fale com nossa equipe e nos informe como podemos te ajudar.</span>
                        <Button link={PathEnum.CONTACT} text="FALE CONOSCO" />
                    </div>
                </div>
                <div className="position-absolute opacity-50 w-100 h-100 bg-dark top-0 z-1"></div>
            </div>
            <div className="py-5" style={{ backgroundColor: "#2E2E2D" }}>
                <div className="container d-flex flex-column gap-4">
                    <div className="d-flex justify-content-between flex-md-nowrap flex-wrap mb-md-0 mb-4">
                        <ul className="d-flex gap-3 flex-md-nowrap flex-wrap  mb-md-0 mb-4">
                            <li><Link className="fs-5" href="/sobre-o-escritorio-azevedo-eloi">O Escritório</Link></li>
                            <li><Link className="fs-5" href="/equipe">Sócias</Link></li>
                            <li><Link className="fs-5" href="/areas">Áreas de atuação</Link></li>
                            <li><Link className="fs-5" href="/blog">Blog</Link></li>
                            <li><Link className="fs-5" href="/contato">Contato</Link></li>
                            <li><Link className="fs-5" href="trabalhe-conosco">Trabalhe Conosco</Link></li>
                            <li><Link className="fs-5" href="seja-um-parceiro">Seja um parceiro</Link></li>
                        </ul>
                        <div className="d-flex gap-3">
                            <Link target="_blank" href="https://www.facebook.com/azevedoeloiadv/">
                                <Image width={20} height={20} src="/icons/facebook-footer.svg" alt="Logo Facebook" />
                            </Link>
                            <Link target="_blank" href="https://www.instagram.com/azevedoeloiadv/">
                                <Image width={20} height={20} src="/icons/instagram-footer.svg" alt="Logo Instagram" />
                            </Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/azevedo-e-eloi-advogados-associados-5140381a6/">
                                <Image width={20} height={20} src="/icons/linkedin-footer.svg" alt="Logo Linkedin" />
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between flex-md-nowrap flex-wrap">
                        <div className="d-flex flex-column">
                            <p className="fs-6">
                                <strong>Informações de contato:</strong><br />
                                <Link href="tel:(61) 3253-5513">(61) 3253-5513</Link> /
                                <Link href="tel:(61) 98131-2115">(61) 98131-2115</Link> /&nbsp;
                                <Link href="tel:(61) 98456-0075">(61) 98456-0075</Link>
                                <br />
                                <Link href="mailto:azevedoeloi@azevedoeloi.adv.br">azevedoeloi@azevedoeloi.adv.br</Link>
                            </p>
                        </div>
                        <p>Desenvolvido por <Link href="https://aenamartinelli.com.br">Aenã Martinelli</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}