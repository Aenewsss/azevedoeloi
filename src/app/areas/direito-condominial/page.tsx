import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return <main className="container text-black py-5">
        <div className="row">
            <div className="col-md-8 d-flex justify-content-end">
                <article className="mw-670 fs-18">
                    <div className="d-flex gap-4 flex-row-reverse">
                        <figure className="alignright size-large is-resized">
                            <img src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/jonathan-borba-2FBfary7vO8-unsplash-1-1024x683.jpg"
                                alt="" width="409" height="272" className="rounded-pill"
                                sizes="(max-width: 409px) 100vw, 409px" />
                        </figure>
                        <div>
                            <p>O Direito Condominial compreende administração, normas e penalidades existentes em um condomínio.</p>
                            <p>Sendo assim, o direito condominial se inicia com a convenção do condomínio e seu regimento interno. </p>
                        </div>
                    </div>
                    <p className="mt-5">As normas devem seguir os preceitos do Direito Civil e da <a href="http://www.planalto.gov.br/ccivil_03/Leis/L4591.htm">Lei 4.591/64</a>, conhecida como a Lei do Condomínio.</p>
                    <h5 className="mt-5"><strong>CONVENÇÃO DO CONDOMÍNIO</strong></h5>
                    <p className="mt-5">As principais regras de convivência e administração do condomínio estão registradas na Convenção do Condomínio. Por isso, ali se determina as normas sobre o uso das áreas comuns, como o pilotis, áreas de lazer, lixeiras e bicicletários.</p>
                    <p className="mt-5">Por meio da convenção, as regras sobre a administração do condomínio e quaisquer outras normas não contempladas pelo Código Civil, estão presentes. </p>
                    <p className="mt-5">Consta na convenção como será a eleição do síndico e o rateio das despesas do condomínio entre os condôminos.</p>
                    <p className="mt-5">Além disso, a convenção também determina as situações passíveis de aplicação de advertências ou multas, prazos e regras para o uso de espaços de lazer, como a piscina e a quadra de esportes.</p>
                    <p className="mt-5">Sendo assim, as normas previstas norteiam o trabalho do síndico e orientam os moradores como devem agir e usar o espaço do condomínio.</p>
                    <h5 className="mt-5"><strong>REGIMENTO INTERNO</strong></h5>
                    <p className="mt-5">No regimento interno estão incluídas as questões de rotina do condomínio, com o objetivo de deixar claras as regras de relacionamento entre os moradores (proprietários ou inquilinos), funcionários, prestadores de serviços, visitantes etc.</p>
                    <p className="mt-5">Portanto, o regimento interno pode ser uma cartilha que orienta os moradores como agir e se relacionar nos espaços compartilhados, tendo como finalidade diminuir os atritos e os desentendimentos entre os conviventes, a fim de garantir o bem-estar de todos. </p>
                    <p className="mt-5">Como o Direito Condominial compreende administração do condomínio, o regimento é feito pelos próprios moradores e deve ser aprovado pela maioria simples em assembleia. </p>
                    <p className="mt-5">O regimento também deve integrar a Convenção do Condomínio.</p>
                    <h5 className="mt-5"><strong>ATUAÇÃO DO ADVOGADO NO CONDOMÍNIO</strong></h5>
                    <p className="mt-5">Um advogado, especiasta em Direito Condominial, além de ter papel fundamental na elaboração da convenção do condomínio, pode auxiliar o administrador do condomínio com a legislação atual, principalmente as que abrangem novas modalidade de hospedagem, como <em>AirBNB </em>e mais recentetemente o <em>coworking</em>.</p>
                    <p className="mt-5">O advogado é o profissional preparado para orientar o síndico e outros membros da direção dos trabalhos.</p>
                    <p className="mt-5">O advogado atua na cobrança judicial e extrajudicial de valores em atraso, realiza acordos e conciliações, elabora os contratos de trabalho dos colaboradores, revisa os contratos dos prestadores de serviços, se faz presente nas assembleias, esclarece dúvidas de assuntos jurídicos, confecciona pareceres, faz notificações, dentre outras necessidades que possam surgir.</p>
                    <p className="mt-5">Além disso, o advogado também trabalha nos processos judiciais de interesse do condomínio ao propor ações e defender o condomínio perante o judiciário.</p>
                    <h5 className="mt-4">Estamos prontos para te ajudar. Entre em contato conosco.</h5>
                </article>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <SidebarAreas />
            </div>
        </div>
    </main>
}