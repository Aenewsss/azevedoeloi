"use client"

import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import CarouselNavbar from "./CarouselNavbar";
import Link from "next/link";

const Navbar = () => {

    const pathname = usePathname()

    const [NavHeight, setNavHeight] = useState<CSSProperties>(
        pathname == PathEnum.MAIN
            ? { height: '75vh' }
            : { height: '55vh' }
    );

    useEffect(() => {
        typeof window != 'undefined' && window.addEventListener('resize', changeNavWidth)
    }, [])

    useEffect(() => {
        changeNavWidth()
    }, [pathname]);

    function changeNavWidth() {
        pathname == PathEnum.MAIN
            ? setNavHeight({ height: '75vh' })
            : setNavHeight({ height: '55vh' })
    }

    function getPageTitle() {
        switch (pathname) {
            case PathEnum.ABOUT: return "O Escritório"
            case PathEnum.TEAM: return "Sócias"
            case PathEnum.AREAS: return "Áreas de Atuação"
            case PathEnum.AREA_DIREITO_FAMILIA: return "Direito de Família"
            case PathEnum.AREA_DIREITO_SUCESSORIO: return "Direito Sucessório"
            case PathEnum.AREA_DIREITO_IMOBILIARIO: return "Direito Imobiliário"
            case PathEnum.AREA_DIREITO_CONDOMINIAL: return "Direito Condominial"
            case PathEnum.AREA_DIREITO_DO_CONSUMIDOR: return "Direito do Consumidor"
            case PathEnum.AREA_DIREITO_PREVIDENCIARIO: return "Direito Previdenciário"
            case PathEnum.AREA_DIREITO_BANCARIO: return "Direito Bancário – Bancos<br />e financeiras"
            case PathEnum.BLOG: return "Blog"
            case PathEnum.CONTACT: return "Fale Conosco"
            case PathEnum.WORK: return "Trabalhe Conosco"
            case PathEnum.PARTNER: return "Seja um Parceiro"
        }
    }

    if (pathname.includes('admin')) return null

    return (
        <>
            <div style={NavHeight} className="position-relative overflow-hidden d-lg-block d-none">
                <nav className="navbar navbar-expand-lg bg-transparent z-2 container mt-lg-2">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <Image className="w-md-250 w-150" width={200} height={150} src="logo-white.svg" alt="Logo branca Azevedo & Eloi " />
                        </a>
                        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex d-none justify-content-md-end w-100" >
                            <ul className="navbar-nav gap-5">
                                <li className="nav-item ">
                                    <a className="nav-link scale fs-5 text-white" aria-current="page" href={PathEnum.ABOUT}>O Escritório</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scale fs-5 text-white" href={PathEnum.TEAM}>Sócias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scale fs-5 text-white" href={PathEnum.AREAS}>Áreas de Atuação</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scale fs-5 text-white" href={PathEnum.BLOG}>Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scale fs-5 text-white" href={PathEnum.CONTACT}>Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav gap-5">
                        <li className="nav-item">
                            <a className="nav-link scale fs-5" aria-current="page" href={PathEnum.ABOUT}>O Escritório</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scale fs-5" href={PathEnum.TEAM}>Sócias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scale fs-5" href={PathEnum.AREAS}>Áreas de Atuação</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scale fs-5" href={PathEnum.BLOG}>Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scale fs-5" href={PathEnum.CONTACT}>Contato</a>
                        </li>
                    </ul>
                </div>
                <div className="position-absolute z-1 w-100 top-0 pe-none" style={{ background: "linear-gradient(180deg, black , transparent 80%)", height: "200px" }}></div>
                {pathname != '/'
                    ? <>
                        <Image className="position-absolute top-0" fill src="/banner_geral.webp" alt="Banner" />
                        <h1 className="d-md-block d-none display-4 text-white text-center w-100 mt-5 position-absolute z-2">{getPageTitle()}</h1>
                    </>
                    : <CarouselNavbar />}
            </div>
            <div style={{ height: 400 }} className="d-lg-none d-block position-relative">
                <nav className="navbar navbar-expand-lg bg-black  z-2 container mt-lg-2">
                    <div className="w-100">
                        <div className="container d-flex justify-content-between">
                            <a className="navbar-brand" href="/">
                                <Image className="w-md-250 w-150" width={200} height={150} src="logo-white.svg" alt="Logo branca Azevedo & Eloi " />
                            </a>
                            <div className="d-flex align-items-center">
                                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobile" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon "></span>
                                </button>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse pb-4" id="navbarMobile">
                            <ul className="navbar-nav gap-2">
                                <li className="nav-item border-bottom border-secondary ">
                                    <a className="nav-link  fs-5 text-white" aria-current="page" href={PathEnum.ABOUT}>O Escritório</a>
                                </li>
                                <li className="nav-item border-bottom border-secondary">
                                    <a className="nav-link  fs-5 text-white" href={PathEnum.TEAM}>Sócias</a>
                                </li>
                                <li className="nav-item border-bottom border-secondary">
                                    <a className="nav-link  fs-5 text-white" href={PathEnum.AREAS}>Áreas de Atuação</a>
                                </li>
                                <li className="nav-item border-bottom border-secondary">
                                    <a className="nav-link  fs-5 text-white" href={PathEnum.BLOG}>Blog</a>
                                </li>
                                <li className="nav-item border-bottom border-secondary">
                                    <a className="nav-link  fs-5 text-white" href={PathEnum.CONTACT}>Contato</a>
                                </li>
                                <li className="nav-item border-bottom border-secondary">
                                    <a className="nav-link  fs-5 text-white" href={PathEnum.WORK}>Trabalhe Conosco</a>
                                </li>
                                <li className="nav-item border-bottom border-secondary">
                                    <a className="nav-link  fs-5 text-white" href={PathEnum.PARTNER}>Seja um Parceiro</a>
                                </li>
                                <li className="nav-item d-flex gap-5 justify-content-center mt-3">
                                    <Link target="_blank" href="https://www.facebook.com/azevedoeloiadv/">
                                        <Image width={14} height={14} src="/icons/facebook-footer.svg" alt="Logo Facebook" />
                                    </Link>
                                    <Link target="_blank" href="https://www.instagram.com/azevedoeloiadv/">
                                        <Image width={20} height={20} src="/icons/instagram-footer.svg" alt="Logo Instagram" />
                                    </Link>
                                    <Link target="_blank" href="https://www.linkedin.com/in/azevedo-e-eloi-advogados-associados-5140381a6/">
                                        <Image width={20} height={20} src="/icons/linkedin-footer.svg" alt="Logo Linkedin" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {pathname != '/'
                    ? <div className="h-100 position-absolute top-0">
                        <Image className="h-100 object-fit-cover" fill src="/banner_geral.webp" alt="Banner" />
                        <h1 style={{ marginTop: 200 }} className="display-4 text-white text-center w-100 position-absolute top-0">{getPageTitle()}</h1>
                    </div>
                    : <CarouselNavbar />}
            </div>
        </>

    );
}

export default Navbar;