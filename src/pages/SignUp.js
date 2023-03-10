import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

    const [register, setRegister] = useState({ name: '', email: '', password: '', cpassword: '' });

    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="d-flex align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card my-5 rounded-4 shadow">
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5 text-danger">Create an account</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="name" className="form-control form-control-lg" name='name' value={register.name} onChange={handleChange} />
                                            <label className="form-label" htmlFor="name">Your Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" className="form-control form-control-lg" name='email' value={register.email} onChange={handleChange} />
                                            <label className="form-label" htmlFor="email">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" name='password' value={register.password} onChange={handleChange} />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="cpassword" className="form-control form-control-lg" name='cpassword' value={register.cpassword} onChange={handleChange} />
                                            <label className="form-label" htmlFor="cpassword">Confirm your password</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                className="btn btn-danger btn-block btn-lg">Sign Up</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <NavLink to={'/login'} className="fw-bold text-body"><u>Login here</u></NavLink></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
