import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import { NavLink } from 'react-router-dom'
import { services, categories } from '../components/data'

const Home = () => {
    return (
        <>
            <Carousel />

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">

                    <div className="row justify-content-center">
                        {
                            services.map((service, index) => (
                                <div className="col-lg-3" key={index}>
                                    <div className='d-flex align-items-center bg-white ps-3' style={{ height: '100px' }}>
                                        <div>{service.icon}</div>
                                        <div className='px-3'>
                                            <h6 className='mb-0'>{service.title}</h6>
                                            <p className='mb-0'>{service.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <h3 className="text-center my-5"><strong>Shop by Category</strong></h3>

                    <div className="row">
                        {
                            categories.map((category, index) => (
                                <NavLink to={category.link} className="col-6 col-md-4 col-lg-2 col-xl-1 text-center text-decoration-none text-dark" key={index}>
                                    <img src={category.image} alt="" className='object-fit-contain img-fluid' style={{ height: '13vh' }} />
                                    <div>
                                        <p>{category.title}</p>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>

                    <h3 className="my-5"><strong>You may Also Like</strong></h3>

                    <div className="row align-items-start">
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                            <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-center my-5 p-5" style={{ backgroundColor: 'wheat' }}>
                        <div className="col position-relative">
                            <img src="https://preview.colorlib.com/theme/malefashion/img/product-sale.png" alt="" />
                        </div>
                        <div className="col">
                            <p className="text-danger fs-5">DEAL OF THE WEEK</p>
                            <h3>Multi-pocket Chest Bag Black</h3>

                            <div className='d-flex my-3 align-items-baseline'>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>12</span>
                                    <p>Days</p>
                                </div>
                                <span className='fs-3 fw-bold'>:</span>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>12</span>
                                    <p>Hours</p>
                                </div>
                                <span className='fs-3 fw-bold'>:</span>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>30</span>
                                    <p>Minutes</p>
                                </div>
                                <span className='fs-3 fw-bold'>:</span>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>00</span>
                                    <p>Seconds</p>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">SHOP NOW</button>
                        </div>
                    </div>

                    <div className="row align-items-center justify-content-center my-5 p-5 bg-dark text-white">
                        <div className="col">
                            <p className="text-danger fs-5">DEAL OF THE DAY</p>
                            <h3>Multi-pocket Chest Bag Black</h3>

                            <div className='d-flex my-3 align-items-baseline'>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>12</span>
                                    <p>Hours</p>
                                </div>
                                <span className='fs-3 fw-bold'>:</span>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>30</span>
                                    <p>Minutes</p>
                                </div>
                                <span className='fs-3 fw-bold'>:</span>
                                <div className='p-2 text-center'>
                                    <span className='fs-3 fw-bold'>00</span>
                                    <p>Seconds</p>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">SHOP NOW</button>
                        </div>
                        <div className="col position-relative">
                            <img src="https://preview.colorlib.com/theme/malefashion/img/product-sale.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
