import TeamAdminForm from "@/components/Forms/TeamAdminForms/TeamAdminForm";

export default function TeamAdmin() {
    return (
        <section className="container my-5 text-black text-center">
            <h1>Admin | Equipe</h1>

            <div className="d-flex justify-content-center mt-5">
                <div className="w-100 border rounded position-relative p-5 mt-4">
                    <TeamAdminForm />
                </div>
            </div>
        </section>
    )
}