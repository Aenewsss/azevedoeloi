import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main style={{ backgroundColor: "#f2f2f2" }} className="text-black py-5">
        <div className="container mt-5">

            <section>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 fs-5">
                        <p>O Direito se divide em diversos ramos, proporcionando um estudo aprofundado sobre cada tema. O escritório atua nas áreas de Direito de Família, Sucessões, Contratos, Direito imobiliário e Condominial, Direito Penal e Direito Previdenciário.</p>
                        <p>A participação de parceiros especialistas permite que o escritório exerça suas atividades em áreas variadas do Direito, com responsabilidade e compromisso.</p>
                        <p>Conheça um pouco sobre cada uma delas.</p>
                    </div>
                </div>
            </section>

            <section className="row mt-5">
                <div className="col-md-4 mt-md-0 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_familia.svg" alt="DIREITO DE FAMÍLIA" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO DE FAMÍLIA</h2>
                        <p className="fs-5 text-secondary text-center">O Direito de Família constitui um conjunto de normas-princípios e normas-regras jurídicas que regulam as relações pessoais e patrimoniais decorrentes do vínculo afetivo, podendo se…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mt-md-0 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_sucessorio.svg" alt="DIREITO SUCESSÓRIO" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO SUCESSÓRIO</h2>
                        <p className="fs-5 text-secondary text-center">O Direito sucessório trata das regras aplicáveis herança, testamentos, inventários e partilhas. Nosso escritório atua com uma equipe altamente especializada e preparada, com formação acadêmica…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mt-md-0 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_imobiliario.svg" alt="DIREITO IMOBILIÁRIO" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO IMOBILIÁRIO</h2>
                        <p className="fs-5 text-secondary text-center">O Direito Imobiliário é o ramo do Direito Privado que regulamenta as relações jurídicas decorrentes de bens imóveis. Nosso escritório presta assessoria jurídica especializada, buscando…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_condominal.svg" alt="DIREITO CONDOMINIAL" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO CONDOMINIAL</h2>
                        <p className="fs-5 text-secondary text-center">O Direito Condominial compreende administração, normas e penalidades existentes em um condomínio. Sendo assim, o direito condominial se inicia com a convenção do condomínio e…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_consumidor.svg" alt="DIREITO DO CONSUMIDOR" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO DO CONSUMIDOR</h2>
                        <p className="fs-5 text-secondary text-center">O Direito do Consumidor é o ramo do direito que estuda e regulamenta as relações de consumo, bem como protege os direitos do consumidor. Por…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_previdenciario.svg" alt="DIREITO PREVIDENCIÁRIO" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO PREVIDENCIÁRIO</h2>
                        <p className="fs-5 text-secondary text-center">Auxílio-doença, auxílio-acidente, salário-maternidade, aposentadoria rural, aposentadoria por invalidez, aposentadoria por idade… Esses são alguns benefícios previdenciários concedidos pelo INSS, dos quais todo mundo já ouviu…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mt-4">
                    <Link href={PathEnum.AREAS} className="justify-content-center h-areas-cards bg-white rounded px-5 py-4 d-flex flex-column gap-3 align-items-center">
                        <Image width={70} height={70} src="/icons/direito_bancario.svg" alt="DIREITO BANCÁRIO – BANCOS E FINANCEIRAS" />
                        <h2 className="text-uppercase fw-medium fs-4 text-center ">DIREITO BANCÁRIO – BANCOS E FINANCEIRAS</h2>
                        <p className="fs-5 text-secondary text-center">O Direito Bancário é o conjunto de regras que regem o funcionamento das instituições financeiras, ou bancos, e todos os participantes que compõem o sistema…</p>
                        <div className="text-main d-flex gap-2 align-items-center">
                            <Link className="fs-5" href="">Saiba mais </Link>
                            <span className="fs-2 mb-1">→</span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    </main>
}