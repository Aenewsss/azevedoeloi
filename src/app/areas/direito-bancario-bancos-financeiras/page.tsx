import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
                <article className="mw-670 fs-18">
                    <figure className="wp-block-image size-large">
                        <a href="https://unsplash.com/@f7photo?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                            target="_blank" rel="noopener noreferrer">
                            <img width="1024" height="737"
                                src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/michael-longmire-lhltMGdohc8-unsplash-1024x737.jpg"
                                alt="Moedas representam investimento e instituições financeiras e bancos."
                                className="img-fluid"
                            />
                        </a>
                        <figcaption className="mt-5">
                            <a
                                href="https://unsplash.com/@f7photo?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">
                                Michael Longmire
                            </a>
                        </figcaption>
                    </figure>
                    <p className="mt-5">O Direito Bancário é o conjunto de regras que regem o funcionamento das instituições financeiras, ou bancos, e todos os participantes que compõem o sistema financeiro.</p>
                    <p className="mt-5">É um ramo do direito empresarial, submetido não somente às regras do direito privado (como o Direito Civil e o Direito do Consumidor), mas também de direito público (Direito Administrativo e Direito Econômico).</p>
                    <p className="mt-5">Foi na Revolução Industrial e consolidação do capitalismo que surgiram as grandes instituições financeiras. Em <a href="https://www.bb.com.br/pbb/pagina-inicial/sobre-nos/nossa-historia#/">1808 foi instituído o Banco do Brasil</a>, primeira instituição financeira do país. Depois vieram vários outras e hoje já tivemos centenas delas.</p>
                    <h4 className="mt-5"><strong>Como as instituições financeiras ganham dinheiro?</strong></h4>
                    <p className="mt-5">As instituições financeiras, em sua grande maioria os bancos, oferecem dezenas de produtos e serviços aos clientes<a href="#_ftn1">[1]</a>. Esses clientes nem sempre sabem ou pouco sabem o que significam as cláusulas contratuais ou se os valores cobrados com taxas e juros são abusivos.</p>
                    <p className="mt-5">A maior parcela dos ganhos das instituições financeiras (bancos) se dá por meio de operações de crédito, mais conhecidas como <strong>empréstimos</strong>. Pessoas físicas e empresas buscam tal recurso para se reorganizarem financeiramente ou para realizarem algum investimento. Dessa forma, o banco calcula os custos de cada operação de crédito, incluindo no montante a quantia referente ao risco da inadimplência.</p>
                    <p className="mt-5">Além dessas operações, os bancos também ganham receita com a cobrança de tarifas pelos serviços prestados, sendo os mais conhecidos a manutenção de conta e o pacote de serviços, onde estão inclusos saques, extratos, transferências etc.</p>
                    <hr />
                    <p className="mt-5"><a href="#_ftnref1">[1]</a> ABRÃO, Nelson. Direito bancário. 17. ed. – São Paulo: Saraiva Educação, 2018. P. 34.</p>
                    <h4 className="mt-5"><strong>Fundos de investimento no Direito Bancário</strong></h4>
                    <p className="mt-5">Nunca se falou tanto no mercado de ações e fundos de investimento como nos últimos anos. Muitas pessoas se arriscam a fazer investimentos no mercado de ações com o objetivo de arguir lucro e alcançar, por muitas vezes, a sonhada liberdade financeira.</p>
                    <p className="mt-5">As instituições financeiras podem administrar esses fundos de investimento. Dessa forma, os bancos podem cobrar um percentual sobre o valor aplicado pelo serviço prestado.</p>
                    <p className="mt-5">É assim que muitas dessas instituições fazem receita.</p>
                    <h4 className="mt-5">Atenção!</h4>
                    <p className="mt-5">Devido a abusos cometidos pelas instituições financeiras, é necessário ler o contrato com atenção para não haver nenhum imprevisto. Lembre-se que o direito bancário compõe regras para instituições financeiras e bancos.</p>
                    <p className="mt-5">Por isso, a contratação de um advogado especializado é essencial.</p>
                    <p></p>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-5">
                <SidebarAreas />
            </div>
        </div>
    </main>
}