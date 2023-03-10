import React from 'react'
import { StarFill } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

const Card = ({ image }) => {

    return (
        <div className="shadow-md">
            <div className="card border border-0">
                <img src={image}
                    className="card-img-top object-fit-cover rounded-top" style={{ height: '35vh' }} alt="" />
                <div className="card-body" style={{ backgroundColor: '#eee' }}>
                    <div className="d-flex justify-content-between">
                        <p className="small"><a href="#!" className="text-muted">category</a></p>
                        <div className="ms-auto text-warning">
                            <span className="badge text-bg-success">
                                4.5 <StarFill />
                            </span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="mb-0">HP Notebook</h6>
                        <h6 className="text-dark mb-0">$999</h6>
                    </div>

                    <div className='mb-2 d-flex justify-content-start'>
                        <NavLink className="btn btn-primary" to="/product/1" role="button">
                            Get Details
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
