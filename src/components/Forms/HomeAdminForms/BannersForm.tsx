"use client"
import AddBannerButton from "@/components/Buttons/AddBanerButton";
import ListBannerForm from "./ListBannerForm";
import { useState } from "react";
import AddBannerForm from "./AddBannerForm";

export default function BannersForm() {

    const [addingNewBanner, setAddingNewBanner] = useState<boolean>(false);

    return (
        <div className="mt-2">
            {!addingNewBanner && <ListBannerForm />}
            {addingNewBanner && <AddBannerForm setAddingNewBanner={setAddingNewBanner}/>}
            <AddBannerButton addingNewBanner={addingNewBanner} setAddingNewBanner={() => setAddingNewBanner(!addingNewBanner)} />
        </div>
    )

}