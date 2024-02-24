"use client"

import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import CarouselNavbar from "./CarouselNavbar";

const Navbar = () => {

    const pathname = usePathname()

    const [NavHeight, setNavHeight] = useState<CSSProperties>(
        typeof window != 'undefined' ? window.innerWidth >= 992 ? { height: '75vh' } : { height: '35vh' } : { height: '75vh' }
    );

    useEffect(() => {
        window.addEventListener('resize', changeNavHeight)
    }, [])

    function changeNavHeight() {
        if (pathname == PathEnum.MAIN && window.innerWidth >= 992) {
            setNavHeight({ height: '75vh' })
        } else if (pathname == PathEnum.MAIN) {
            setNavHeight({ height: '35vh' })
        }
    }

    if (pathname.includes('admin')) return null

    return (
        <div style={NavHeight} className="position-relative overflow-hidden">
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
                    <h1 className="display-4 text-white text-center w-100 mt-5 position-absolute z-2">Sócias</h1>
                </>
                : <CarouselNavbar />}
        </div>

    );
}

export default Navbar;