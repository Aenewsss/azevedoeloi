"use client"

import { useState } from "react";
import ListTeamForm from "./ListTeamForm";
import AddTeamButton from "@/components/Buttons/AddTeamButton";
import AddTeamForm from "./AddTeamForm";

export default function TeamAdminForm() {

    const [addingNewTeam, setAddingNewTeam] = useState<boolean>(false);

    return (
        <div className="mt-2">
            {!addingNewTeam && <ListTeamForm />}
            {addingNewTeam && <AddTeamForm setAddingNewTeam={setAddingNewTeam}/>}
            <AddTeamButton addingNewTeam={addingNewTeam} setAddingNewTeam={() => setAddingNewTeam(!addingNewTeam)} />
        </div>
    )

}