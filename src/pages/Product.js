/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { CartContext } from '../context/cart/CartProvider';
import { Shop, StarFill } from 'react-bootstrap-icons'
import Card from '../components/Card'

const Product = () => {

    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    return (
        <div className="container mt-5 mb-5">
            {/* <p>{id}</p> */}
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/400x400" className="img-fluid" alt="Product Image" />
                </div>
                <div className="col-md-6">
                    <h5 className="fw-lighter mt-4 mt-md-0">Brand Name</h5>
                    <h1>Product Name</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <label htmlFor="quantity" className='fw-bold'>Quantity:</label>
                            <input type="number" className="form-control" id="quantity" value="1" onChange={() => { }} />
                        </div>
                        <div className="col-6 col-lg-3">
                            <label htmlFor="size" className='fw-bold'>Size:</label>
                            <select className="form-select" aria-label="Default select example">
                                <option>SM</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <span className="fw-bold fs-5">₹99.99</span>
                        <button type="button" className="btn btn-primary" onClick={() => { addToCart(id, 1, 99, 'shirt', 'sm') }}>Add to Cart</button>
                    </div>

                    <div className='border mt-5 p-3 rounded'>
                        <h5>Sold By</h5>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div className="logo bg-dark-subtle rounded-circle p-3 border border-secondary me-3"><Shop size={25} color='darkcyan' /></div>
                                <div className=""><h5>Shop Name</h5></div>
                            </div>
                            <div>
                                <NavLink to={'/shop'} type="button" className="btn btn-primary">View Shop</NavLink>
                            </div>
                        </div>
                        <div className="container text-center mt-3 mx-4">
                            <div className="row align-items-start">
                                <div className="col">
                                    <span className="badge text-bg-success pb-2">
                                        4.5 <StarFill />
                                    </span>
                                    <h6 className='text-secondary'>Ratings</h6>
                                </div>
                                <div className="col">
                                    <span className='fw-semibold pb-2'>100</span>
                                    <h6 className='text-secondary'>Followers</h6>
                                </div>
                                <div className="col">
                                    <span className='fw-semibold pb-2'>40</span>
                                    <h6 className='text-secondary'>Products</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h4 className='mb-4'>People also viewed</h4>
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
                </div>
            </div>

        </div>
    )
}

export default Product
