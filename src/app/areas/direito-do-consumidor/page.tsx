import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-md-end">
                <article className="mw-670 fs-18 w-100">
                    <p>O Direito do Consumidor é o ramo do direito que estuda e regulamenta as <strong>relações de consumo</strong>, bem como protege os direitos do consumidor. Por isso, a norma que rege essas relações é a <a rel="noreferrer noopener" href="http://www.planalto.gov.br/ccivil_03/leis/l8078.htm" target="_blank">Lei 8.078, de 11 de setembro de 1990</a>, o nosso Código de Defesa do Consumidor.</p>
                    <p className="mt-5">O CDC define que são consumidores toda pessoa física ou jurídica que adquire ou utiliza serviço prestado como destinatário final. Ou seja, não revende ou transfere o serviço, apenas o utiliza.</p>
                    <h3 className="mt-5">Princípios do Direito do Consumidor</h3>
                    <p className="mt-5">O direito do consumidor é baseado em alguns princípios, quais sejam: princípio da proteção, princípio da precaução, princípio da hipossuficiência, princípio da transparência, princípio da boa-fé objetiva, princípio da <strong>vulnerabilidade</strong>, princípio da informação, princípio da reparação integral dos danos, princípio da equivalência negocial, dentre outros. <a href="#_ftn1">[1]</a></p>
                    <p className="mt-5">Quando o consumidor é uma pessoa jurídica e eventualmente ocorre alguma intercorrência, essa pessoa jurídica deve comprovar sua vulnerabilidade para que a relação seja submetida às regras de consumo.</p>
                    <h3 className="mt-5">Direitos e Deveres nas relações de consumo</h3>
                    <p className="mt-5">É direito do consumidor que as informações de serviços e produtos estejam adequadas, suas características, modo de usar, perigos existentes, preço etc.  Embora alguns estabelecimentos não cumpram as determinações, há previsão para que os fornecedores sejam responsabilizados pela reparação de danos patrimoniais e/ou morais em caso de produtos e serviços com vícios ou defeitos ou pelo não cumprimento do contrato.</p>
                    <p className="mt-5">Apesar de os fornecedores conhecerem as penalidades, ainda vemos muitas práticas abusivas e violação de direitos do consumidor. Como exemplos temos a venda casada, o extravio de bagagem, problemas com telefonia, internet, ofertas não cumpridas, propaganda enganosa, desistência de compra, defeitos e vícios em geral.</p>
                    <p className="mt-5">O Código de Defesa do Consumidor traz os mecanismos adequados para que o consumidor possa garantir seus direitos. Além do site do governo federal <a href="https://www.consumidor.gov.br/pages/principal/?1590347002158" target="_blank" rel="noreferrer noopener">consumidor.gov.br</a>, ainda existem os Procons estaduais, onde o cidadão pode registrar sua reclamação.</p>
                    <hr />
                    <p className="mt-5"><a href="#_ftnref1">[1]</a> Secretaria Nacional do Consumidor. Ministério da Justiça. Escola Nacional de Defesa do Consumidor. 4ª. Edição. Brasília. 2014. Disponível em &lt;<a href="https://www.defesadoconsumidor.gov.br/images/manuais/manual-do-direito-do-consumidor.pdf">https://www.defesadoconsumidor.gov.br/images/manuais/manual-do-direito-do-consumidor.pdf</a>&gt; Acesso em 24 mai 2020.</p>
                    <figure>
                        <img src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/veronika-koroleva-F7hv6nSBM3c-unsplash-1024x684.jpg"
                            alt="As relações de consumo são regidas pelo Código de Defesa do Consumidor."
                            className="img-fluid"
                        />
                    </figure>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center mt-md-0 mt-5">
                <SidebarAreas />
            </div>
        </div>
    </main>
}