
"use client"
import AddHighlightButton from "@/components/Buttons/AddHighlightButton";
import { useState } from "react";
import AddHighlightForm from "./AddHighlightForm";
import ListHighlightForm from "./ListHighlightForm";

export default function HighlightsForm() {
    const [addingNewHighlight, setAddingNewHighlight] = useState<boolean>(false);

    return (
        <div className="mt-2">
            {!addingNewHighlight && <ListHighlightForm />}
            {addingNewHighlight && <AddHighlightForm setAddingNewHighlight={() => setAddingNewHighlight(!addingNewHighlight)} />}
            <AddHighlightButton addingNewHighlight={addingNewHighlight} setAddingNewHighlight={() => setAddingNewHighlight(!addingNewHighlight)} />
        </div>
    )

}