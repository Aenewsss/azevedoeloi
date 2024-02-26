"use client"

import { apiUrl } from "@/constants/api-url.constant";
import { ITeamHome } from "@/interfaces/team-home.interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeamHomeSection() {

    const [team, setTeam] = useState<ITeamHome>();

    useEffect(() => {
        async function getAbout() {
            const { team } = await (await fetch(`${apiUrl}/api/home/team`)).json()
            setTeam(team)
        }
        getAbout()
    }, []);


    return (
        <section className="container">
            <h2 className="fs-2 fw-semibold text-uppercase text-center py-5 my-5 ">{team?.title}</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <Link href="/equipe/#team1" className="h-590 rounded overflow-hidden box-shadow-white d-flex flex-column gap-4">
                        <Image className="w-100" width={400} height={400} src="/team1.webp" alt="Alessandra Eloi" />
                        <div className="p-3 text-center pb-5">
                            <h3 className="fs-5 fw-semibold text-uppercase">ALESSANDRA ELOI MARTINS RIBEIRO</h3>
                            <h5 className="text-secondary">OAB/DF - 54.020</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link href="/equipe/#team2" className="h-590 rounded overflow-hidden box-shadow-white d-flex flex-column gap-4">
                        <Image className="w-100" width={400} height={400} src="/team2.webp" alt="Cintya Azevedo" />
                        <div className="p-3 text-center pb-5">
                            <h3 className="fs-5 fw-semibold text-uppercase">CINTYA AZEVEDO GONÇALVES</h3>
                            <h5 className="text-secondary">OAB/DF - 55.833</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link href="/equipe/#team3" className="h-590 rounded overflow-hidden box-shadow-white d-flex flex-column gap-4">
                        <Image className="w-100" width={400} height={400} src="/team3.webp" alt="Azevedo & Eloi Advogados Associados " />
                        <div className="p-3 text-center pb-5">
                            <h3 className="fs-5 fw-semibold text-uppercase">Azevedo & Eloi Advogados Associados </h3>
                            <h5 className="text-secondary">Parceiros com atuação em outras áreas.</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}