"use client"

import { Button } from "@/components/Buttons/Button";
import { API_URL } from "@/constants/api-url.constant";
import { PathEnum } from "@/enums/path.enum";
import { IAboutHome } from "@/interfaces/about-home.interface";
import { useEffect, useState } from "react";

export default function AboutHome() {

    const [about, setAbout] = useState<IAboutHome>();

    useEffect(() => {
        async function getAbout() {
            const { about } = await (await fetch(`${API_URL}/api/home/about`)).json()
            setAbout(about)
        }
        getAbout()
    }, []);

    return (
        <section className="container my-5 py-5">
            <div className="row d-flex justify-content-center ">
                <div className="col-md-6">
                    <div className="d-flex flex-column gap-4">
                        <h2 className="fs-2 fw-semibold text-uppercase">{about?.title}</h2>
                        <p className="fs-5">{about?.text}</p>
                        <div>
                            <Button link={PathEnum.ABOUT} text={about?.button_text!} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}