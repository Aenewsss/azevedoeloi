"use client"

import { PathEnum } from "@/enums/path.enum";
import { IContact } from "@/interfaces/contact.interface";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {

    const [contact, setContact] = useState<IContact>();

    useEffect(() => {
        async function getContact() {
            const { contact } = await (await fetch(`http://localhost:3000/api/contact`)).json()
            setContact(contact)
        }
        getContact()
    }, []);

    function insertHtml() {
        return contact?.phone_mail_text
    }

    return <main className="container mt-5 pt-4 text-black">

        <div className="row">
            <div className="col-md-8 d-flex justify-content-center">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-black">Nome</label>
                        <input
                            type="text"
                            className="bg-gray form-control"
                            name="name"
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
            <div className="col-md-4">
                <div className="d-flex flex-column gap-3">
                    <h3 className="fw-semibold fs-5">Informações de contato</h3>
                    <p>{contact?.contact_info_text}</p>
                </div>
                <hr className="py-3" />
                <div className="d-flex flex-column gap-3">
                    <h3 className="fw-semibold fs-5">Telefone e E-mail</h3>
                    <div dangerouslySetInnerHTML={{ __html: insertHtml()! }}></div>
                </div>
                <Link href={PathEnum.WORK} className="text-main">{contact?.work_with_us_text} →</Link>
            </div>
        </div>
    </main>
}

function SubmitButton() {
    return <button className="btn btn-main text-white">ENVIAR MENSAGEM</button>
}