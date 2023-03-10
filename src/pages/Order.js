/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Order = () => {
    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="p-5">
                <h4 className="my-4 text-center"><strong>Your Order</strong></h4>

                <div className="row">
                    <div className="col-md-6">
                        <h2>OrderId</h2>
                        <h5 className='mt-4'>Summary</h5>
                        <div className="row">
                            <div className="col-md-12">
                                <div className='d-flex justify-content-between'>
                                    <span className="">Product</span>
                                    <span className="">₹99.99</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between fw-bold fs-5'>
                            <span className="">Total Amount</span>
                            <span className="">₹99.99</span>
                        </div>
                        <button type="button" className="btn btn-primary mt-3">Purchase</button>
                    </div>
                    <div className="col-md-6">
                        <img src="https://via.placeholder.com/400x400" className="img-fluid" alt="Product Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order
