import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card my-5 rounded-4 shadow">
                            <div className="card-body p-md-5">
                                <div className="row">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-danger">LOGIN HERE!!
                                        </p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="email" className="form-control" name='email' value={login.email} onChange={handleChange} />
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="password" className="form-control" name='password' value={login.password} onChange={handleChange} />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>
                                            </div>


                                            <button type="button" className="btn btn-danger col-12">LOGIN</button>
                                        </form>

                                        <p className="text-center text-muted mt-5 mb-0">Don't have an account? <NavLink to={'/signup'} className="fw-bold text-body"><u>Sign Up</u></NavLink></p>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
