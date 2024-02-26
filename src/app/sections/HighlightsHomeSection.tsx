"use client"

import { apiUrl } from "@/constants/api-url.constant";
import { IHighlightsHome } from "@/interfaces/highlights-home.interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HighlightsHomeSection() {
    const [highlights, setHighlights] = useState<IHighlightsHome[]>();

    useEffect(() => {
        async function getHighlights() {
            const { highlights } = await (await fetch(`${apiUrl}/api/home/highlights`)).json()
            setHighlights(highlights)
        }
        getHighlights()
    }, []);

    return (
        <section className="py-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="container d-flex justify-content-around align-items-center flex-md-nowrap flex-wrap gap-md-0 gap-4">
                {
                    highlights?.map(highlight =>
                        <Link href={highlight.link} className="d-flex flex-column gap-3 align-items-center ">
                            <Image width={60} height={60} src={highlight.icon} alt="" />
                            <span className="fs-5 text-center">{highlight.title}</span>
                        </Link>
                    )
                }
            </div>
        </section>
    )
}