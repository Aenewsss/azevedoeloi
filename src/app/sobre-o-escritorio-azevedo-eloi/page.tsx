import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return <main className="container text-black mt-5 pt-4">
        <div className="row d-flex justify-content-center">
            <div className="col-md-7">
                <article className="fs-5 d-flex flex-column gap-4">
                    <p>A Azevedo &amp; Eloi Advogados Associados atua de forma personalizada, com dedicação exclusiva para cada demanda. Assim, é possível ofertar soluções jurídicas adequadas e criativas, com foco nos interesses e objetivos de cada cliente.</p>
                    <p>Com estrutura sólida nos dedicamos a várias áreas do Direito, prestando assessoria consultiva e contenciosa para empresas e pessoas físicas. Nossa finalidade é orientar os clientes de acordo com as suas necessidades. </p>
                    <div className="d-flex justify-content-between">
                        <p className="pe-4">Temos como objetivo principal proporcionar aos clientes e parceiros credibilidade e satisfação por meio da atuação ética. Nossa base é disciplinada nas normas previstas no
                            <Link className="text-decoration-underline" href="http://www.planalto.gov.br/ccivil_03/leis/l8906.htm" target="_blank" rel="noreferrer noopener">&nbsp;Estatuto da OAB</Link>.
                        </p>
                        <Image className="rounded-pill" width={350} height={150} src="/sobre_escritorio.webp" alt="Nossas sócias" />
                    </div>
                    <p>Acompanhando as mudanças legislativas e os julgados da magistratura, nosso escritório se mantém em constante aprendizado. Desenvolvemos habilidades e estamos em constante especialização. Dessa forma, conseguimos nos adaptar à necessidade dos clientes, sempre buscando prestar um serviço proeminente.</p>
                    <p>Atuamos em Brasília e entorno, Goiás e Minas Gerais.</p>
                    <h3><strong>Missão</strong></h3>
                    <p>Nossa missão é superar as expectativas dos clientes com a oferta de serviços jurídicos personalizados. Aliando eficiência, segurança, transparência e ética na resolução de questões jurídicas sensíveis, atingimos nossa meta.</p>
                    <h3><strong>Visão</strong></h3>
                    <p>Prestar serviços de grande relevância para a sociedade, contribuindo para a administração da justiça, garantindo os direitos dos cidadãos. Ser um prestador de serviço de referência nacional, pela qualidade técnica e inovação, bem como pela satisfação profissional de sua equipe.</p>
                    <h3><strong>Valores do Escritório Azevedo &amp; Eloi</strong></h3>
                    <p>Nosso escritório Azevedo &amp; Eloi Advogados Associados atua baseado no Código de Ética e Disciplina da Advocacia, além de atender ao Princípio da Moralidade e dos Bons Costumes, base do Direito.</p>
                </article>
            </div>
        </div>
    </main>
}