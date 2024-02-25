import Link from "next/link"

export default function WorkWithUs() {
    return <main className="container mt-5 py-4 text-black">
        <section className="row d-flex justify-content-center">
            <div className="col-md-6">
                <p className="fs-5">Tem interesse em se juntar a nossa equipe? Envie seu currículo para nós e conte um pouco sobre você.</p>
                <form action="" className="mt-5">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-black">Nome</label>
                        <input
                            type="text"
                            className="bg-gray form-control"
                            name="nome"
                            id="name"
                        />
                    </div>
                    <div className="mb-3 d-flex gap-4">
                        <div className="w-50">
                            <label htmlFor="mail" className="form-label text-black">E-mail</label>
                            <input
                                type="text"
                                className="bg-gray form-control"
                                name="mail"
                                id="mail"
                            />
                        </div>
                        <div className="w-50">
                            <label htmlFor="phone" className="form-label text-black">Telefone</label>
                            <input
                                type="text"
                                className="bg-gray form-control"
                                name="phone"
                                id="phone"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="curriculum" className="form-label text-black">Anexar Currículo</label>
                        <input
                            type="file"
                            className="bg-gray form-control d-none"
                            name="curriculum"
                            id="curriculum"
                        />
                        <label htmlFor="curriculum" className="form-control">Escolher Arquivo</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-black">Mensagem</label>
                        <textarea
                            className="bg-gray form-control"
                            name="message"
                            id="message"
                        ></textarea>
                    </div>
                    <p>Ao preencher o formulário você concorda com os termos de nossa
                        <Link className="text-decoration-underline" href="/politica-de-privacidade" target="_blank">&nbsp;política de privacidade</Link>.
                    </p>
                    <SubmitButton />
                </form>
            </div>
        </section>
    </main>
}

function SubmitButton() {
    return <button className="btn btn-main text-white">ENVIAR MENSAGEM</button>
}