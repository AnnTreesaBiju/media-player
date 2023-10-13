import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Footer() {
    return (
        <div style={{ height: "300px", width: "100%" }} className='d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex  justify-content-evenly w-100 '>
                <div style={{ width: "400px" }} className="website d-flex flex-column">
                    <h4> <i className="fa-solid fa-cloud-arrow-up"></i>
                        {" "}
                        Media Player</h4>
                    <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                    <h6>Code licensed AkB docs CC BY 3.0.</h6>
                    <p>Currently v1.0.0</p>
                </div>
                <div className="link d-flex flex-column">
                    <h4> Links</h4>
                    <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Landing Page
                    </Link>
                    <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>Home Page
                    </Link>
                    <Link to={"/watch-history"} style={{ textDecoration: "none", color: "white" }}>Watch History
                    </Link>
                </div>
                <div className="guide  d-flex flex-column">
                    <h4> Guide</h4>
                    <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>React
                    </Link>
                    <Link to={"/homhttps://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>React Bootstrap
                    </Link>
                    <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>Routing
                    </Link>
                    <Link to={"https://react-bootstrap.netlify.app/"} style={{ textDecoration: "none", color: "white" }}>Bootstrap
                    </Link>
                </div>
                <div className="guide d-flex flex-column">
                    <h4>Contact Us</h4>
                    <div className=" d-flex">
                        <Form.Control className='me-3' type="text" placeholder="Enter Your mail" />
                        <Button variant="primary">Submit</Button>
                    </div>
                    <div className="d-flex  mt-3">
                        <Link to={'https://fontawesome.com/icons/twitter?f=brands&s=solid'} className="fs-4 me-5" style={{ color: "white", textDecoration: "none" }}>
                        <i className="fa-brands fa-twitter"></i>
                            {" "}
                        </Link>
                        <Link to={'https://fontawesome.com/icons/twitter?f=brands&s=solid'} className="fs-4 me-5 " style={{ color: "white", textDecoration: "none" }}>
                        <i className="fa-brands fa-github"></i>
                            { " " }
                        </Link>
                        <Link to={'https://fontawesome.com/icons/twitter?f=brands&s=solid'} className="fs-4 me-5" style={{ color: "white", textDecoration: "none" }}>
                        <i className="fa-brands fa-facebook"></i>
                            { " " }
                        </Link>
                    </div>
                </div>
            </div>
            <p>Copyright © 2023 AkB. Built with React.</p>
        </div>
    )
}

export default Footer