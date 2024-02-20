"use client"

import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import CarouselNavbar from "./CarouselNavbar";

const Navbar = () => {

    const pathName = usePathname()

    const [NavHeight, setNavHeight] = useState<CSSProperties>(
        typeof  window != 'undefined' ? window.innerWidth >= 992 ? { height: '75vh' } : { height: '35vh' } : {height: '75vh'}
    );

    useEffect(() => {
        window.addEventListener('resize', changeNavHeight)
    }, [])

    function changeNavHeight() {
        if (pathName == PathEnum.MAIN && window.innerWidth >= 992) {
            setNavHeight({ height: '75vh' })
        } else if (pathName == PathEnum.MAIN) {
            setNavHeight({ height: '35vh' })
        }
    }

    return (
        <div style={NavHeight} className="position-relative overflow-hidden">
            <nav className="navbar navbar-expand-lg bg-transparent z-2 container mt-lg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image className="w-md-200 w-150" fill src="logo-white.svg" alt="Logo branca Azevedo & Eloi " />
                    </a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-block d-none justify-content-md-end" >
                        <ul className="navbar-nav gap-5">
                            <li className="nav-item">
                                <a className="nav-link scale fs-5" aria-current="page" href="#">O Escritório</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scale fs-5" href="#">Sócias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scale fs-5" href="#">Áreas de Atuação</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scale fs-5" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scale fs-5" href="#">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav gap-5">
                    <li className="nav-item">
                        <a className="nav-link scale fs-5" aria-current="page" href="#">O Escritório</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scale fs-5" href="#">Sócias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scale fs-5" href="#">Áreas de Atuação</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scale fs-5" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scale fs-5" href="#">Contato</a>
                    </li>
                </ul>
            </div>
            <div className="position-absolute z-1 w-100 top-0 pe-none" style={{ background: "linear-gradient(180deg, black , transparent 80%)", height: "200px" }}></div>
            <CarouselNavbar />
        </div>

    );
}

export default Navbar;