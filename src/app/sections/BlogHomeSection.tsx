"use client"

import { Button } from "@/components/Buttons/Button";
import { apiUrl } from "@/constants/api-url.constant";
import { PathEnum } from "@/enums/path.enum";
import { IBlogHome } from "@/interfaces/blog-home.interface";
import { useEffect, useState } from "react";

export default function BlogHomeSection() {

    const [blog, setBlog] = useState<IBlogHome>();

    useEffect(() => {
        async function getAbout() {
            const { blog } = await (await fetch(`${apiUrl}/api/home/blog`)).json()
            setBlog(blog)
        }
        getAbout()
    }, []);

    return (
        <section style={{ backgroundColor: "#f2f2f2" }} className="py-5">
            <div className="container my-3 d-flex flex-column justify-content-center">
                <h3 className="text-black text-center">EM BREVE</h3>
                <h2 className="fs-2 fw-semibold text-uppercase text-center py-5 my-5 ">{blog?.title}</h2>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Button link={PathEnum.BLOG} text={blog?.button_text!} />
                </div>
            </div>
        </section>
    )
}