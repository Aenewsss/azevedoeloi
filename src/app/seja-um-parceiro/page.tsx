import Link from "next/link"

export default function Partner() {
    return <main className="text-black container py-4 mt-5">
        <section className="row d-flex justify-content-center">
            <div className="col-md-6">
                <p className="fs-5">Quer se tornar um parceiro? Preencha o formulário e envie sua proposta. Temos parcerias fixas e flexíveis. Somando esforços, atingimos objetivos mais rápidos.</p>
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
                    <div className="mb-3 d-flex gap-4">
                        <div className="w-50">
                            <label htmlFor="uf" className="form-label text-black">UF</label>
                            <input
                                type="text"
                                className="bg-gray form-control"
                                name="uf"
                                id="uf"
                            />
                        </div>
                        <div className="w-50">
                            <label htmlFor="city" className="form-label text-black">Cidade</label>
                            <input
                                type="text"
                                className="bg-gray form-control"
                                name="city"
                                id="city"
                            />
                        </div>
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