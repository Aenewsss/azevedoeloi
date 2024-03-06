import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
                <article className="mw-670 fs-18">
                    <p className="mt-5">Auxílio-doença, auxílio-acidente, salário-maternidade, aposentadoria rural, aposentadoria por invalidez, aposentadoria por idade… Esses são alguns benefícios previdenciários concedidos pelo INSS, dos quais todo mundo já ouviu falar. Em algum momento da vida, eles poderão ser úteis.</p>
                    <p className="mt-5">O Direito Previdenciário é o ramo do Direito Público que estuda e regulamenta o instituto da seguridade social, estando previsto no art. 194 e seguintes da Constituição Federal e nas normas infraconstitucionais. Com a finalidade de regulamentar a relação entre segurado e ente previdenciário, a legislação define os conceitos e os procedimentos necessários para cada tipo de benefício.</p>
                    <p className="mt-5">Tais direitos surgiram no período da Revolução Industrial quando houve crescimento no número de acidentes de trabalho. Certamente, houve a necessidade de criação de um instituto que garantisse ao cidadão acidentado seu próprio sustento e de sua família enquanto estivesse impossibilitado de exercer sua profissão.</p>
                    <p className="mt-5">Nesse sentido, a Carta Magna prevê que todos os cidadãos poderão usufruir dos benefícios, desde que contribuam para a previdência e atendam aos requisitos legais. Como exemplo há o tempo de contribuição e o atestado de perícia médica.</p>
                    <h4 className="mt-5">Instituto Nacional de Seguridade Social – INSS</h4>
                    <p className="mt-5">É no <a rel="noreferrer noopener" href="https://www.inss.gov.br/" target="_blank">Instituto Nacional de Seguridade Social (INSS) </a>onde se inicia o pedido dos segurados. Ou seja, é lá que os direitos são reconhecidos e o benefício é concedido, podendo inclusive ser requerido pelos dependentes do segurado, como é o caso da pensão por morte.</p>
                    <p className="mt-5">No caso do requerimento de aposentadoria, o segurado deve estar com as informações do <a href="https://azevedoeloi.adv.br/problemas-com-seu-cnis/" target="_blank" rel="noreferrer noopener">CNIS </a>em ordem. Embora muitos não saibam, a vida do segurado contribuinte está detalhada nesse extrato. Por meio dele o INSS avalia se o segurado está apto ou não para usufruir de sua aposentadoria. Igualmente, é pelos valores de contribuição do CNIS que se calcula o valor dos benefícios.</p>
                    <p className="mt-5">Em caso de o <a href="https://www.inss.gov.br/" target="_blank" rel="noreferrer noopener">INSS </a>negar a concessão de qualquer benefício, o segurado deve procurar seus direitos na justiça.</p>
                    <p className="mt-5">@azevedoeloiadv</p>
                    <figure className="mt-5">
                        <img width="1024" height="683" src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/bruno-martins-c9N9RgjOPU-unsplash-1024x683.jpg"
                            alt="Pense no seu melhor benefício, no seu melhor auxílio, na saúde ou na doença, por meio administrativo no INSS ou judicialmente. O acesso à previdência é um direito seu."
                            className="img-fluid"
                        />
                    </figure>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <SidebarAreas />
            </div>
        </div>
    </main>
}