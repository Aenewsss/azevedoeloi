import { IHighlightsHome } from "@/interfaces/highlights-home.interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HighlightsHomeSection() {
    const [highlights, setHighlights] = useState<IHighlightsHome[]>();

    useEffect(() => {
        async function getHighlights() {
            const { highlights } = await (await fetch(`http://localhost:3000/api/home/highlights`)).json()
            setHighlights(highlights)
        }
        getHighlights()
    }, []);

    return (
        <section className="py-5" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="container d-flex justify-content-center align-items-center gap-4">
                {
                    highlights?.map(highlight =>
                        <Link href={highlight.link} className="d-flex flex-column gap-3">
                            <Image width={100} height={100} src="" alt="" />
                            <span className="fs-5">{highlight.title}</span>
                        </Link>
                    )
                }
            </div>
        </section>
    )
}