import Image from "next/image";

const CarouselNavbar = () => {
    return (
        <div className="position-absolute w-100 top-0 h-100" >
            <div id="carouselExample" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="h-100 carousel-item active ">
                        <Image fill src="https://azevedoeloi.adv.br/wp-content/uploads/2020/05/banner2.jpg" className="d-block h-100 w-100 object-fit-cover " alt="..." />
                    </div>
                    <div className="h-100 carousel-item">
                        <Image fill src="https://azevedoeloi.adv.br/wp-content/uploads/2020/09/daniel-duarte-gXxCQNYBRPw-unsplash-1600x600.jpg" className=" object-fit-cover d-block h-100 w-100" alt="..." />
                    </div>
                    <div className="h-100 carousel-item">
                        <Image fill src="https://azevedoeloi.adv.br/wp-content/uploads/2020/09/daniel-duarte-gXxCQNYBRPw-unsplash-1600x600.jpg" className=" object-fit-cover d-block h-100 w-100" alt="..." />
                    </div>
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