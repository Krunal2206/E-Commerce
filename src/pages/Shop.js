import React from 'react'
import { StarFill, Shop as ShopIcon, Check2Circle } from 'react-bootstrap-icons'
import Card from '../components/Card'
import { services } from '../components/data'

const Shop = () => {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-3">
                <div className='border p-3 rounded bg-white'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <div className="logo bg-dark-subtle rounded-circle p-3 border border-secondary me-3"><ShopIcon size={25} color='darkcyan' /></div>
                            <div><h3>Shop Name</h3></div>
                        </div>
                        <div className='text-success fs-5'>
                            <Check2Circle /> Verified
                        </div>
                    </div>
                    <div className="mt-3 d-flex align-items-center px-5 text-center">
                        <div className="px-3">
                            <span className="badge text-bg-success pb-2">
                                4.0 <StarFill />
                            </span>
                            <h6 className='text-secondary'>Ratings</h6>
                        </div>
                        <div className="px-4">
                            <span className='fw-semibold pb-2'>100</span>
                            <h6 className='text-secondary'>Followers</h6>
                        </div>
                        <div className="px-4">
                            <span className='fw-semibold pb-2'>40</span>
                            <h6 className='text-secondary'>Products</h6>
                        </div>
                    </div>
                    <div className='mt-4 px-5'>
                        <h4>About</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde debitis iusto blanditiis doloremque quis cum quod distinctio ea at adipisci, impedit perferendis reprehenderit animi possimus aperiam repellat recusandae harum eaque dicta obcaecati molestiae excepturi, in ducimus? Laboriosam delectus corrupti totam pariatur? Quas, illo ipsam ea quisquam adipisci, quae, perferendis ipsum natus quod pariatur tenetur neque dolorem architecto ullam laudantium repellat aut magni itaque nemo eius eveniet et asperiores. Omnis quas quis repellat reiciendis. Accusantium ipsum tempore aspernatur assumenda dignissimos quibusdam perferendis, ut saepe rerum sit nemo doloribus quas! Debitis sint itaque incidunt possimus quae modi sed fugiat quibusdam, quasi ducimus?</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <h4 className="mb-3">Featured Collections</h4>
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

                <div className='mt-5'>
                    <h4 className='mb-4'>Our All Products</h4>
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
                    {/* <div className="row">
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                    <div className='m-2'>
                        <Card image={'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/s/8/m-t410-bllafb-eyebogler-original-imagf6qcnavh29vv-bb.jpeg?q=70'} />
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    )
}

export default Shop
