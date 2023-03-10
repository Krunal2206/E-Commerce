import React, { useContext, useState } from 'react'
import { Truck, Cart } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/cart/CartProvider';

const Checkout = () => {

    const [checkout, setCheckout] = useState({ name: '', email: '', address: '', mobile: '', zipcode: '', city: '', state: '' });

    const { cart } = useContext(CartContext);

    const handleChange = (e) => {
        setCheckout({ ...checkout, [e.target.name]: e.target.value })
    }

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card rounded-4 shadow" style={{ backgroundColor: '#eb9478' }}>
                            <div className="card-body p-4 p-md-5">
                                <h2 style={{ color: '#493b76' }} className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Checkout</h2>
                                <h5 style={{ color: '#493b76' }}><Truck size={30} className='me-3' />Shipping Details</h5>
                                <hr />

                                <form>

                                    <div className="row my-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" name="name" className="form-control" value={checkout.name} onChange={handleChange} />
                                                <label className="form-label" htmlFor="name">Name</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="email" name="email" className="form-control" value={checkout.email} onChange={handleChange} />
                                                <label className="form-label" htmlFor="email">Email</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <textarea className="form-control" name="address" rows="2" value={checkout.address} onChange={handleChange}></textarea>
                                        <label className="form-label" htmlFor="address">Address</label>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-outline mb-4">
                                                <input type="text" name="mobile" className="form-control" value={checkout.mobile} onChange={handleChange} />
                                                <label className="form-label" htmlFor="mobile">Mobile No.</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline mb-4">
                                                <input type="text" name="zipcode" className="form-control" value={checkout.zipcode} onChange={handleChange} />
                                                <label className="form-label" htmlFor="zipcode">Zip Code</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <div className="form-outline mb-4">
                                                <input type="text" name="city" className="form-control" value={checkout.city} onChange={handleChange} />
                                                <label className="form-label" htmlFor="city">City</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline mb-4">
                                                <input type="text" name="state" className="form-control" value={checkout.state} onChange={handleChange} />
                                                <label className="form-label" htmlFor="state">State</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mb-4 d-flex justify-content-center'>
                                        <NavLink className="btn btn-dark" to="/order" role="button">
                                            Place Order
                                        </NavLink>
                                    </div>

                                </form>

                                <h5 style={{ color: '#493b76' }}><Cart size={30} className='me-3' />Your Cart Items</h5>
                                <hr />

                                <div>
                                    <ul>
                                        {
                                            Object.keys(cart).length === 0 ? <div className='fs-5 fw-semibold'>Your cart is empty.</div> :
                                                Object.keys(cart).map((k) => (
                                                    <li className='fs-5 fw-semibold' key={k}>
                                                        <div className='d-flex justify-content-between'>
                                                            <div className='col-8'>{cart[k].name} ({cart[k].size})</div>
                                                            <div>
                                                                <span className='mx-3'>{cart[k].qty}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
