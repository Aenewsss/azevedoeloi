import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
    return <main className="container text-black mt-5 pt-4">
        <div className="row" id="team1">
            <div className="col-md-6">
                <Image className="rounded" src="/team1.webp" width={500} height={500} alt="ALESSANDRA ELOI" />
            </div>
            <div className="col-md-6">
                <div className="d-flex flex-column">
                    <h2 className="fw-semibold fs-4">ALESSANDRA ELOI MARTINS RIBEIRO</h2>
                    <div className="d-flex flex-column text-secondary text-uppercase">
                        <Link href="mailto:alessandraeloi@azevedoeloi.adv.br">alessandraeloi@azevedoeloi.adv.br</Link>
                        <span>OAB/DF - 54.020</span>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3 fs-5">
                        <p className="text-start">Advogada, especialista nas áreas de Direito Civil, com ênfase em Direito de Família, Direito Sucessório e Contratos.</p>
                        <p className="text-start">Possui experiência nos ramos cível, imobiliário, penal e previdenciário.</p>
                        <p className="text-start">Pós-graduanda em Ciência Política, presta serviço de consultoria jurídica e legislativa na execução de proposições: projetos de lei, projetos de lei complementar, propostas de emenda à constituição e decretos legislativos.</p>
                        <p><Link href="http://lattes.cnpq.br/5928660128544231">Currículo Lattes</Link></p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-5"/>
        <div className="row d-flex mt-5 flex-row-reverse" id="team2">
            <div className="col-md-6 d-flex justify-content-end">
                <Image className="rounded" src="/team2.webp" width={500} height={500} alt="CINTYA AZEVEDO" />
            </div>
            <div className="col-md-6 d-flex">
                <div className="d-flex flex-column">
                    <h2 className="fw-semibold fs-4">CINTYA AZEVEDO GONÇALVES</h2>
                    <div className="d-flex flex-column text-secondary text-uppercase">
                        <Link href="mailto:cintyaazevedo@azevedoeloi.adv.br">CINTYAAZEVEDO@AZEVEDOELOI.ADV.BR</Link>
                        <span>OAB/DF - 55.833</span>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3 fs-5">
                        <p className="text-start">Graduada pelo Centro Universitário UniProcessus. Pós-graduada em Direito Civil e Processo Civil pela Escola da Magistratura do Distrito Federal – ESMA/DF. Pós-Graduada em Direito Processual e Material da Família: À luz do Novo CPC e do Entendimento do STF e STJ. Pós-graduanda em Direito Previdenciário. Foi Membra da Comissão de Direito Imobiliário e Condominial da OAB/DF (2019-2021).</p>
                        <p className="text-start">Tem atuação profissional focada na área Civil, Condominial, Imobiliário, Violência Doméstica e Familiar, e, previdenciário.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-5"/>
        <div className="row" id="team3">
            <div className="col-md-6">
                <Image className="rounded" src="/team3.webp" width={500} height={500} alt="AZEVEDO & ELOI ADVOGADOS ASSOCIADOS" />
            </div>
            <div className="col-md-6">
                <div className="d-flex flex-column">
                    <h2 className="fw-semibold fs-4">AZEVEDO & ELOI ADVOGADOS ASSOCIADOS</h2>
                    <div className="d-flex flex-column text-secondary text-uppercase">
                        <Link href="mailto:azevedoeloi@azevedoeloi.adv.br">AZEVEDOELOI@AZEVEDOELOI.ADV.BR</Link>
                        <span>PARCEIROS COM ATUAÇÃO EM OUTRAS ÁREAS.</span>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-3 fs-5">
                        <p className="text-start">Os parceiros da Azevedo & Eloi Advogados Associados tem a expertise necessária para atender nossos clientes, buscando alcançar o êxito de suas demandas.</p>
                        <p className="text-start">Sob a supervisão e acompanhamento do escritório, os parceiros chegam para somar, oferecendo atendimento em outras áreas, fazendo com que o serviço prestado seja ainda mais amplo e de qualidade.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
}