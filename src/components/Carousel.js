import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="https://my-online-shop.netlify.app/static/55b77fa5074f53776dafb8eadc2d9de4/d2e87/slider01.webp" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://my-online-shop.netlify.app/static/e90bbf209ddd3d84e6f35019babdbd72/36ebb/slider03.webp" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://my-online-shop.netlify.app/static/47d206b4dd585e1b37339f78e60f0636/b85eb/slider02.webp" className="d-block w-100" alt="" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
