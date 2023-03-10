import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Twitter, Google, Instagram, Linkedin, Github, HouseFill, EnvelopeFill, TelephoneFill, PrinterFill } from "react-bootstrap-icons";

const socialMedia = [<Facebook />, <Twitter />, <Google />, <Instagram />, <Linkedin />, <Github />];

const Footer = () => {

    return (
        <footer className="text-center text-lg-start bg-dark text-white">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    {
                        socialMedia.map((icon, index) => (
                            <NavLink to={''} className="me-4 link-light" key={index}>
                                {icon}
                            </NavLink>
                        ))
                    }
                </div>
            </section>

            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Angular</NavLink>
                            </p>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">React</NavLink>
                            </p>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Vue</NavLink>
                            </p>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Laravel</NavLink>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Pricing</NavLink>
                            </p>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Settings</NavLink>
                            </p>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Orders</NavLink>
                            </p>
                            <p>
                                <NavLink to="" className="text-reset text-decoration-none">Help</NavLink>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><HouseFill /> New York, NY 10012, US</p>
                            <p><EnvelopeFill /> info@example.com</p>
                            <p><TelephoneFill /> + 01 234 567 88</p>
                            <p><PrinterFill /> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2021 Copyright:
                <NavLink className="text-reset fw-bold text-decoration-none" to="https://mdbootstrap.com/"> MDBootstrap.com</NavLink>
            </div>
        </footer>
    )
}

export default Footer
