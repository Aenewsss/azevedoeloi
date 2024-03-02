"use client"

import { API_URL } from "@/constants/api-url.constant";
import { IBanner } from "@/interfaces/banner.interface";
import Image from "next/image";
import { useEffect, useState } from "react";
const CarouselNavbar = () => {

    const [banners, setBanners] = useState<IBanner[]>();

    useEffect(() => {
        async function getBanners() {
            const { banners } = await (await fetch(`${API_URL}/api/home/banner`)).json()
            setBanners(banners)
        }
        getBanners()
    }, []);

    function renderImageByScreenWidth(banner: IBanner): string {
        const screenWidth = window.innerWidth
        return screenWidth >= 992 ? banner.large_image : banner.small_image
    }

    return (
        <div className="position-absolute w-100 top-0 h-100" >
            <div id="carouselExample" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    {banners?.map((banner, index) => (
                        index == 0 ?
                            <div className="h-100 carousel-item active ">
                                <Image fill src={renderImageByScreenWidth(banner)} className="h-100 w-100 object-fit-cover " alt={`Imagem ${renderImageByScreenWidth}`} />
                            </div>
                            :
                            <div className="h-100 carousel-item">
                                <Image fill src={renderImageByScreenWidth(banner)} className=" object-fit-cover h-100 w-100" alt={`Imagem ${renderImageByScreenWidth}`} />
                            </div>

                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselNavbar;