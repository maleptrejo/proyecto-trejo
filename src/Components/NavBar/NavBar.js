import React from 'react';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ()=> {



    return (
        <Nav className="justify-content-between align-items-center font-quicksand" activeKey="/home">
            <div>
            <Nav.Link href="/home" to="/" as={Link}><div className="d-flex flex-row logo-container">
                    <img src="../Images/Chez_Didi_transparent.png" alt="chez-didi-icon"/>
                    <h1>Chez Didi | Masa madre & cia. </h1>
                </div></Nav.Link>
                
            </div>
            <div className="d-flex justify-content-end flex-row">
               

                <Nav.Item>
                  <Nav.Link to="/category/edibles" as={Link}> Edibles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" to="/category/insumos" as={Link}> Insumos</Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Fans friendly!
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex align-items-center">
                  <Nav.Link eventKey="link-3" to="/cart" as={Link}><CartWidget/></Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    )
}

export default NavBar;