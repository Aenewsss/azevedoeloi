import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
                <article className="mw-670 fs-18">
                    <p className="has-text-align-left">
                        O Direito de Família constitui um conjunto de normas-princípios e normas-regras jurídicas que regulam as relações pessoais e patrimoniais decorrentes do vínculo afetivo, podendo se originar através do casamento, da união estável, das relações de filiação e parentesco.</p>
                    <div className="d-flex justify-content-between flex-row-reverse gap-4">
                        <figure>
                            <img
                                className="rounded-pill"
                                src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/analise-benevides-2uRmUPEq22k-unsplash-1024x683.jpg"
                                alt="" width="307" height="204"
                                sizes="(max-width: 307px) 100vw, 307px" />
                        </figure>
                        <p>Por ser um ramo do Direito Civil, se relaciona com Direito Sucessório (transferência de patrimônio pela morte), com o Direito das Coisas (posse e propriedade de bens móveis e imóveis), com o Direito das Obrigações (deveres familiares) e Direito Previdênciário (pensão por morte de cônjuge ou companheiro(a)).</p>
                    </div>

                    <p>Nosso escritório atua com uma equipe altamente especializada e preparada, com formação acadêmica e larga experiência. </p>

                    <div className="d-flex justify-content-between gap-4">
                        <figure>
                            <img loading="lazy"
                                src="https://azevedoeloi.adv.br/wp-content/uploads/2020/09/ekaterina-shakharova-L4nwL3195U0-unsplash-1024x685.jpg"
                                alt=""
                                className="rounded-pill"
                                width="283" height="188"
                                sizes="(max-width: 283px) 100vw, 283px" />
                        </figure>
                        <div>
                            <p>
                                <strong>Todo o trabalho é desenvolvido com base na humanização da relação cliente-advogadas, na busca de soluções harmônicas e individualizadas.</strong>⠀
                            </p>
                            <p>São exemplos de ações na esfera do Direito de Família:</p>
                        </div>
                    </div>
                    <ul className="d-flex flex-column gap-2">
                        <li>
                            <strong>• Casamento</strong> – regime de bens, aspectos patrimoniais, pactos antenupciais e anulação de casamento;</li>
                        <li>
                            <strong>• Divórcio</strong> – consensual ou litigioso, partilha patrimonio do casal, Conversão de sepação judicial em divórcio;
                        </li>
                        <li>
                            <strong>• União Estável </strong>– Contrato de convivência, Reconhecimento e Dissolução;
                        </li>
                        <li>
                            <strong>• Adoção</strong>
                        </li>
                        <li>
                            <strong>• Investigação de paternidade</strong>;
                        </li>
                        <li>
                            <strong>• Pensão Alimentícia</strong> – Fixação, Revisionais e execução;
                        </li>
                        <li>
                            <strong>• Biodireito</strong> – Reprodução Medicamente Assistida, Gestação de Substituição (“barriga de aluguel”), direitos do embrião e do nascituro;
                        </li>
                        <li>
                            <strong>• Guarda de filhos </strong>– unilateral ou compartilhada, regulamentação de visitas e convivência familiar;
                        </li>
                        <li>
                            <strong>• Reconhecimento de</strong> <strong>Filiação/Parentesco</strong> – biológico e socioafetivo
                        </li>
                        <li>
                            <strong>• Direito Homoafetivo</strong> – casamento, união estável, adoção, guarda de filhos, divórcio, multiparentalidade, reconhecimento de filiação biológica ou socioafetiva;</li>
                        <li>
                            <strong>• Tomada de Decisão Apoiada</strong>;
                        </li>
                        <li>
                            <strong>• Curatela</strong>.
                        </li>
                    </ul>
                    <p></p>
                    <div className="d-flex justify-content-center">
                        <figure >
                            <img loading="lazy" src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/pradeep-gopal-DZUGIz3IyOM-unsplash-1024x768.jpg"
                                alt="" className="rounded-pill" width="299" height="224"
                                sizes="(max-width: 299px) 100vw, 299px" />
                        </figure>
                    </div>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <SidebarAreas />
            </div>
        </div>
    </main>
}