import HomeAdminButtons from "@/components/Buttons/HomeAdminButtons";

export default function HomeAdmin() {
    return (
        <section className="container my-5 text-black text-center">
            <h1>Admin | Página inicial</h1>

            <div className="d-flex justify-content-center mt-5">
                <div className="w-100 border rounded position-relative p-5 mt-4">
                    <HomeAdminButtons />
                    
                </div>
            </div>
        </section>
    )
}