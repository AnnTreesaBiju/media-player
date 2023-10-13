import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            {/* import style  from react bootstrap */}
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand >
                        {/* link:- to redirection  */}
                        {/* to:- set path */}
                        <Link to={'/'} className="fs-5" style={{ color: "white", textDecoration: "none" }}>
                            <i className="fa-solid fa-cloud-arrow-up fa-shake"></i>
                            {" "}
                            Media Player
                        </Link>

                    </Navbar.Brand>
                </Container>
            </Navbar>
            </div>
    )
}


export default Header