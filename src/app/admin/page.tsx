import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function Admin() {
    return (
        <section className="container my-3">
            <h1 className="text-black text-center mb-3">ADMIN</h1>
            <p className="text-center text-black">*Aqui será possível gerenciar o seu site. Clique em qualquer um dos cards para navegar na seção desejada.</p>

            <div className="row d-flex justify-content-center text-black">
                <div className="col-md-4 mb-md-3 mb-0">
                    <Link href={PathEnum.ADMIN_HOME} className="scale h-420 rounded d-flex flex-column gap-3 overflow-hidden border ">
                        <Image className="object-fit-cover w-100 mh-200" quality={100} src="/admin/pagina_inicial.png" width={300} height={200} alt="Pagina Inicial" />
                        <div className="p-2">
                            <h2 >Página inicial</h2>
                            <p>Esta seção permite editar e visualizar o conteúdo da página inicial do site. Inclui elementos como banners, texto de boas-vindas e destaques.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-md-3 mb-0">
                    <Link href={PathEnum.ADMIN_TEAM} className="scale h-420 rounded d-flex flex-column gap-3 overflow-hidden border ">
                        <Image className="object-fit-cover w-100 mh-200" quality={100} src="/admin/time.webp" width={300} height={200} alt="" />
                        <div className="p-2">
                            <h2>Nosso Time</h2>
                            <p>Nesta seção, você pode gerenciar informações sobre os membros da equipe, como fotos, nomes e funções. É uma maneira de apresentar sua equipe aos visitantes do site.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-md-3 mb-0">
                    <Link href={PathEnum.ADMIN_CONTACT} className="scale h-420 rounded d-flex flex-column gap-3 overflow-hidden border ">
                        <Image className="object-fit-cover w-100 mh-200" quality={100} src="https://img.freepik.com/free-photo/young-woman-typing-smart-phone-indoors-generated-by-ai_188544-39270.jpg?t=st=1708652008~exp=1708655608~hmac=791c243e06d1664d88ea52e854416ab32878ed1643c137bb96da921b667ac6c8&w=1060" width={300} height={200} alt="" />
                        <div className="p-2">
                            <h2>Contatos</h2>
                            <p>Aqui, você pode gerenciar as informações de contato da empresa, como endereço, números de telefone, e-mails e links para redes sociais. É uma seção importante para os visitantes encontrarem maneiras de se conectar com sua empresa.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-md-3 mb-0">
                    <Link href={PathEnum.ADMIN_BLOG} className="scale h-420 rounded d-flex flex-column gap-3 overflow-hidden border ">
                        <Image className="object-fit-cover w-100 mh-200" quality={100} src="https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg?t=st=1708652033~exp=1708655633~hmac=ed2a066b2ae2d0eecd0c09ab4553a25560b31cce82578bd906448bdfc34ef73f&w=996" width={300} height={200} alt="" />
                        <div className="p-2">
                            <h2>Blog</h2>
                            <p>Esta seção permite criar, editar e gerenciar postagens no blog do site. Você pode adicionar novos artigos, editar os existentes e organizá-los por categoria ou data.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-md-3 mb-0">
                    <Link href={PathEnum.ADMIN_PARTNER} className="scale h-420 rounded d-flex flex-column gap-3 overflow-hidden border ">
                        <Image className="object-fit-cover w-100 mh-200" quality={100} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1708652073~exp=1708655673~hmac=83b8a13c120752aae0d946ce14e08394e0d830a829952dac8f472fa8ebb7a824&w=996" width={300} height={200} alt="" />
                        <div className="p-2">
                            <h2>Seja um Parceiro</h2>
                            <p>Aqui, você pode fornecer informações e detalhes sobre como se tornar um parceiro ou patrocinador do seu negócio. Pode incluir formulários de contato ou informações sobre os benefícios de se tornar um parceiro.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-md-3 mb-0">
                    <Link href={PathEnum.ADMIN_WORK} className="scale h-420 rounded d-flex flex-column gap-3 overflow-hidden border ">
                        <Image className="object-fit-cover w-100 mh-200" quality={100} src="https://img.freepik.com/free-photo/young-female-executive-explaines-new-strategy-blonde-employee-glasses-smiling-indoor-portrait-multicultural-collective-working-project-office-using-laptop_197531-3707.jpg?t=st=1708652098~exp=1708655698~hmac=51f7e4567e915ceaf033aeb211198c6eb1b43b9b081ee3af1c728420c4e1522c&w=996" width={300} height={200} alt="" />
                        <div className="p-2">
                            <h2>Trabalhe conosco</h2>
                            <p>Nesta seção, os visitantes podem encontrar informações sobre oportunidades de emprego na sua empresa. Você pode listar vagas disponíveis, requisitos de emprego e instruções sobre como se candidatar.</p>
                        </div>
                    </Link>
                </div>
            </div>

        </section>
    )
}