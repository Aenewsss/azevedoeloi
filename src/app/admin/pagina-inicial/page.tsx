"use client"

import HomeAdminButtons from "@/components/Buttons/HomeAdminButtons";
import AboutForm from "@/components/Forms/HomeAdminForms/AboutForm";
import BannersForm from "@/components/Forms/HomeAdminForms/BannersForm";
import BlogForm from "@/components/Forms/HomeAdminForms/BlogForm";
import HighlightsForm from "@/components/Forms/HomeAdminForms/HighlightsForm";
import TeamForm from "@/components/Forms/HomeAdminForms/TeamForm";
import { HomeAdmFormShowEnum } from "@/enums/home-admin-form-show.enum";
import { ReactNode, useEffect, useState } from "react";

export default function HomeAdmin() {

    const [formToShow, setFormToShow] = useState<HomeAdmFormShowEnum>(HomeAdmFormShowEnum.BANNER);
    const [formToRender, setFormToRender] = useState<ReactNode>(null);

    useEffect(() => {
        // renderiza o formulário de acordo com o novo valor de formToShow
        switch (formToShow) {
            case HomeAdmFormShowEnum.ABOUT: return setFormToRender(<AboutForm />)
            case HomeAdmFormShowEnum.BANNER: return setFormToRender(<BannersForm />)
            case HomeAdmFormShowEnum.BLOG: return setFormToRender(<BlogForm />)
            case HomeAdmFormShowEnum.HIGHLIGHTS: return setFormToRender(<HighlightsForm />)
            case HomeAdmFormShowEnum.TEAM: return setFormToRender(<TeamForm/>)
        }
    }, [formToShow]);

    return (
        <section className="container my-5 text-black text-center">
            <h1>Admin | Página inicial</h1>

            <div className="d-flex justify-content-center mt-5">
                <div className="w-100 border rounded position-relative p-5 mt-4">
                    <HomeAdminButtons setFormToShow={setFormToShow} formToShow={formToShow} />
                    {formToRender}
                </div>
            </div>
        </section>
    )
}