import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Cart } from "react-bootstrap-icons";
import { DashCircleFill, PlusCircleFill, PersonCircle } from 'react-bootstrap-icons'
import { CartContext } from '../context/cart/CartProvider';

const Navbar = () => {

    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);

    const ref = useRef(null)

    const handleClick = () => {
        ref.current.click()
    }

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Men
                                </NavLink>
                                <ul className="dropdown-menu" style={{ width: 'max-content' }}>
                                    <div className="d-flex p-3 text-center">
                                        <div className='m-3'>
                                            <h6 className='text-primary'>Top Wear</h6>
                                            <li><NavLink className="dropdown-item" to="/products/shirts">Shirts</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/tshirts">T-Shirts</NavLink></li>
                                        </div>
                                        <div className='m-3'>
                                            <h6 className='text-primary'>Bottom Wear</h6>
                                            <li><NavLink className="dropdown-item" to="/products/men_jeans">Jeans</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/trackpants">Track Pants</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/trousers">Trousers</NavLink></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Women Western
                                </NavLink>
                                <ul className="dropdown-menu" style={{ width: 'max-content' }}>
                                    <div className="d-flex p-3 text-center">
                                        <div className='m-3'>
                                            <h6 className='text-primary'>Top Wear</h6>
                                            <li><NavLink className="dropdown-item" to="/products/tops">Tops</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/dresses">Dresses</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/sweaters">Sweaters</NavLink></li>
                                        </div>
                                        <div className='m-3'>
                                            <h6 className='text-primary'>Bottom Wear</h6>
                                            <li><NavLink className="dropdown-item" to="/products/women_jeans">Jeans</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/shorts">Shorts</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/palazzos">Palazzos</NavLink></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Footware
                                </NavLink>
                                <ul className="dropdown-menu" style={{ width: 'max-content' }}>
                                    <div className="d-flex p-3 text-center">
                                        <div className='m-3'>
                                            <h6 className='text-primary'>Men Footware</h6>
                                            <li><NavLink className="dropdown-item" to="/products/sports_shoes">Sports Shoes</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/casual_shoes">Casual Shoes</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/formal_shoes">Formal Shoes</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/sandals">Sandals</NavLink></li>
                                        </div>
                                        <div className='m-3'>
                                            <h6 className='text-primary'>Women Footware</h6>
                                            <li><NavLink className="dropdown-item" to="/products/flats">Flats</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/bellies">Bellies</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/products/juttis">Juttis</NavLink></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/products/jewellery'}>
                                    Jewellery
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/products/electronics'}>
                                    Electronics
                                </NavLink>
                            </li>
                        </ul>

                        <div>
                            <NavLink to={'/login'} className='text-decoration-none text-reset me-2'>
                                <PersonCircle size={25} />
                            </NavLink>
                            <button type="button" className="btn btn-primary position-relative m-2" onClick={handleClick}>
                                <Cart size={25} />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {Object.keys(cart).length}
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            <button className="btn btn-primary d-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" ref={ref}>Enable both scrolling & backdrop</button>

            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-danger" id="offcanvasWithBothOptionsLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ol>
                        {
                            Object.keys(cart).length === 0 ? <div className='fs-5 fw-semibold'>Your cart is empty.</div> :
                                Object.keys(cart).map((k) => (
                                    <li className='fs-5 fw-semibold' key={k}>
                                        <div className='d-flex justify-content-between'>
                                            <div className='col-8'>{cart[k].name} ({cart[k].size})</div>
                                            <div>
                                                <DashCircleFill className='text-danger' onClick={() => { removeFromCart(k, 1) }} style={{ cursor: 'pointer' }} />
                                                <span className='mx-3'>{cart[k].qty}</span>
                                                <PlusCircleFill className='text-danger' onClick={() => { addToCart(k, 1, 99, 'shirt', 'sm') }} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </li>
                                ))
                        }
                    </ol>

                    <div className='d-flex justify-content-around'>
                        <NavLink className="btn btn-primary" to="/checkout" role="button">
                            Checkout
                        </NavLink>
                        <button type="button" className="btn btn-outline-danger" onClick={() => { clearCart() }}>Clear Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
