"use client"

import Image from "next/image";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../../actions/authenticate.action";
import { useRouter } from "next/navigation";

export default function Login() {

    const [authenticateState, formAction] = useFormState(authenticate, { error: '', token: '' })

    if(authenticateState.token) useRouter().push('/admin')

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-4 mt-5">
                <form action={formAction} className="d-flex flex-column pb-5 align-items-center px-4  position-relative rounded overflow-hidden">
                    <Image className="mt-5" width={300} height={200} src="logo-white.svg" alt="Logo Azevedo Eloi" />
                    <h1 className="text-white mt-5 fw-bold">LOGIN</h1>

                    <div className="form-floating mb-3 mt-3 w-100">
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder=""
                        />
                        <label className="text-black" htmlFor="email">E-mail</label>
                    </div>

                    <div className="form-floating mb-3 w-100">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder=""
                        />
                        <label className="text-black" htmlFor="password">Senha</label>
                    </div>

                    <div className="w-100 h-100 position-absolute z-n1">
                        <div className="w-100 h-100 position-absolute z-1 opacity-50 bg-black"></div>
                        <Image className="position-absolute z-0 top-0 object-fit-cover " fill alt="Imagem de fundo" src="https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443471.jpg?w=740&t=st=1708544986~exp=1708545586~hmac=a8d1bc44add39dad32b6415100baf34cc18e55e18c3cf54e8c649456a7a80292" />
                    </div>

                    <SubmitButton />
                    {authenticateState?.error && <p className="text-danger bg-dark px-3 my-2">{authenticateState.error}</p>}
                    <Link href={"/esqueci-minha-senha"} className="text-white mt-5 scale" role="button">Esqueci minha senha</Link>
                </form>
            </div>
        </div>

    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return <button disabled={pending} className="btn btn-main text-white w-100 py-2 scale" type="submit">{pending ? 'ENTRANDO' : 'ENTRAR'}</button>
}