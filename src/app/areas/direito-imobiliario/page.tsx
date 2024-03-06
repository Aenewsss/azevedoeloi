import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
                <article className="mw-670 fs-18">
                    <p>O Direito Imobiliário é o ramo do Direito Privado que regulamenta as relações jurídicas decorrentes de bens imóveis. </p>
                    <p>Nosso escritório presta assessoria jurídica especializada, buscando oferecer aos nossos clientes um atendimento personalizado durante todo o desenvolvimento do negócio imobiliário, de modo a prevenir riscos financeiros e judiciais, prezando pela transparência e segurança patrimonial. </p>
                    <div className="mt-5">
                        <p>Conheça os serviços que oferecemos:</p>
                        <ul className="d-flex flex-column gap-3 mt-5" >
                            <li><strong>Compra e Venda de Imóveis:</strong> Análise documental, elaboração de contratos, distratos, termos aditivos;</li><li><strong>Locação: </strong>Elaboração e revisão de contratos de locação residencial, comercial, temporadas, compra e venda, termos aditivos e distrato;</li><li><strong>Doação e Usufruto de Imóveis:</strong> orientação, acompanhamento extrajudicial e análise documental;</li><li><strong>Usucapião judicial e extrajudicial</strong>;</li><li><strong>Cancelamento de hipotecas</strong>;</li><li><strong>Adjudicação compulsória</strong>;</li><li><strong>Ações Possessórias;</strong></li><li><strong>Ações Demarcatórias;</strong></li><li><strong>Ações Renovatórias da Locação;</strong></li><li><strong>Ação Revisional de Alugue</strong>l;</li><li><strong>Ações Indenizatórias</strong>.</li>
                        </ul>
                    </div>
                    <ul className="mt-5">
                        <li><strong>Consultoria Jurídica para Imobiliárias:</strong></li>
                    </ul>
                    <p className="mt-4"><strong>Contratos:</strong> Elaboração e revisão de contratos de locação residencial, comercial, temporadas, compra e venda, termos aditivos e distratos;</p>
                    <p className="mt-4"><strong>Orientação jurídica</strong>: sobre a rotina de procedimentos para atividade imobiliária e relação de consumo;</p>
                    <p className="mt-4"><strong>Atuação jurídica em demandas judiciais:</strong> Cobrança de aluguéis e acessórios da locação; Cobrança de Comissões de Corretagem; Consignação de chaves e pagamentos; Ações de Despejos; rescisão Contratual de locação comercial ou residêncial; Ações Renovatórias de Aluguéis.</p>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-5">
                <SidebarAreas />
            </div>
        </div>
    </main>
}