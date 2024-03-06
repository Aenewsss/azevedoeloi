import SidebarAreas from "@/components/SidebarAreas";
import { PathEnum } from "@/enums/path.enum";
import Image from "next/image";
import Link from "next/link";

export default function AreasPage() {
    return    <main className="container text-black py-5">
    <div className="row">
        <div className="col-md-8">

        </div>
        <div className="col-md-4">
                <SidebarAreas />
        </div>
    </div>
</main>
}