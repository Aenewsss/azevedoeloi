"use client"

import { API_URL } from "@/constants/api-url.constant";
import { ITeam } from "@/interfaces/team.interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeamPage() {

    const [teams, setTeams] = useState<ITeam[]>();

    useEffect(() => {
        async function getTeam() {
            const { teams } = await (await fetch(`${API_URL}/api/team`)).json()
            setTeams(teams)
        }
        getTeam()
    }, []);

    return <main className="container text-black mt-5 pt-4">
        {
            teams?.map((team, index) => (
                index % 2 == 0
                    ? <>
                        <div className="row d-flex justify-content-center" id={`team${index + 1}`}>
                            <div className="col-md-5">
                                <Image className="rounded w-100" src={team.image} width={500} height={500} alt={team.name + 'imagem'} />
                            </div>
                            <div className="col-md-5  mt-md-0 mt-3">
                                <div className="d-flex flex-column">
                                    <h2 className="fw-semibold fs-4">{team.name}</h2>
                                    <div className="d-flex flex-column text-secondary text-uppercase">
                                        <Link href={`mailto:${team.email}`}>{team.email}</Link>
                                        <span>{team.info}</span>
                                    </div>
                                    <div className="d-flex flex-column mt-3 fs-5" dangerouslySetInnerHTML={{ __html: team.text }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                    </>
                    :
                    <>
                        <div className="row justify-content-center d-flex mt-5 flex-row-reverse" id={`team${index + 1}`}>
                            <div className="col-md-5 d-flex justify-content-end">
                                <Image className="rounded w-100" src={team.image} width={500} height={500} alt={team.name + " imagem"} />
                            </div>
                            <div className="col-md-5 d-flex mt-md-0 mt-3">
                                <div className="d-flex flex-column">
                                    <h2 className="fw-semibold fs-4">{team.name}</h2>
                                    <div className="d-flex flex-column text-secondary text-uppercase">
                                        <Link href={`mailto:${team.email}`}>{team.email}</Link>
                                        <span>{team.info}</span>
                                    </div>
                                    <div className="d-flex flex-column mt-3 fs-5" dangerouslySetInnerHTML={{ __html: team.text }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                    </>

            ))
        }
    </main>
}